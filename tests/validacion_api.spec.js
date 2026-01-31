import { test, expect } from '@playwright/test';

test.describe('Ciclo de vida de una Reserva - Backend', () => {

    let token;
    let bookingId;

    test('Login API devuelve token', async ({ request }) => {
        const response = await request.post(
            'https://restful-booker.herokuapp.com/auth',
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    username: 'admin',
                    password: 'password123'
                }
            }
        );

        expect(response.status()).toBe(200);

        const body = await response.json();
        const token = body.token;

        expect(token).toBeDefined();

        console.log('TOKEN =>', token);
    });

    test('crear reserva', async ({ request }) => {
        const crearReserva = await request.post(
            'https://restful-booker.herokuapp.com/booking',

            {
                headers: {
                    'Content-Type': 'application/json'
                },

                data: {

                    "firstname": "Jim",
                    "lastname": "Brown",
                    "totalprice": 111,
                    "depositpaid": true,
                    "bookingdates": {
                        "checkin": "2018-01-01",
                        "checkout": "2019-01-01"
                    },

                }



            }
        )

        expect(crearReserva.status()).toBe(200);
        const createBody = await crearReserva.json();
        bookingId = createBody.bookingid;

        expect(bookingId).toBeDefined();

        console.log('RESERVA CREADA - ID:', bookingId);

        expect(bookingId).toBeDefined();

    })

});