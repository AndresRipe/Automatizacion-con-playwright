import { test, expect } from '@playwright/test';

test.describe('Ciclo de vida de una Reserva - Backend', () => {

    let token;
    let bookingId;

    test.beforeAll(async ({ request }) => {

        // LOGIN
        const login = await request.post(
            'https://restful-booker.herokuapp.com/auth',
            {
                headers: { 'Content-Type': 'application/json' },
                data: {
                    username: 'admin',
                    password: 'password123'
                }
            }
        );

        token = (await login.json()).token;

        console.log('TOKEN =>', token);

        // CREATE BOOKING
        const crearReserva = await request.post(
            'https://restful-booker.herokuapp.com/booking',
            {
                headers: { 'Content-Type': 'application/json' },
                data: {
                    firstname: 'Jim',
                    lastname: 'Brown',
                    totalprice: 111,
                    depositpaid: true,
                    bookingdates: {
                        checkin: '2018-01-01',
                        checkout: '2019-01-01'
                    }
                }
            }
        );

        const createBody = await crearReserva.json();
        bookingId = createBody.bookingid;

        console.log('RESERVA CREADA - ID:', bookingId);
    });

    test('actualizar reserva', async ({ request }) => {

        console.log('USANDO BOOKING ID:', bookingId);

        const actualizarReserva = await request.put(
            `https://restful-booker.herokuapp.com/booking/${bookingId}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Cookie': `token=${token}`
                },
                data: {
                    firstname: 'Carlos',
                    lastname: 'QA',
                    totalprice: 111,
                    depositpaid: true,
                    bookingdates: {
                        checkin: '2018-01-01',
                        checkout: '2019-01-01'
                    }
                }
            }
        );

        expect(actualizarReserva.status()).toBe(200);

        const body = await actualizarReserva.json();

        expect(body.firstname).toBe('Carlos');
        expect(body.lastname).toBe('QA');

        console.log('RESERVA ACTUALIZADA:', body);
    });

});
