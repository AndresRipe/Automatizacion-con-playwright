import { test, expect } from '@playwright/test';

test('Login API devuelve token', async ({ request }) => {

    const response = await request.post('https://api.test.a2censo.com/login', {

        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Accept': 'application/json, text/plain, */*',
            'apikey': 'pb4eYjePavmcpKFa',
            'Origin': 'https://test.a2censo.com'
        },
        data: {
            email: 'bestqa@yopmail.com',
            password: 'Clave1234*'
        }
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.token).toBeDefined();
    /*expect(body.user.email).toBe('usuario@test.com');*/

});
