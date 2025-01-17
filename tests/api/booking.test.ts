import {test, expect, request } from '@playwright/test';
import {TestData} from '../../utils/testData';

let token: string;
let bookingId: number;

test.describe("CRUD Regression test", () => {
    test.beforeAll(async ({request}) =>{
        const authResponse = await request.post('/auth',{
            data: {
                username:'admin', 
                password: 'password123',
            },
        });
        
        expect(authResponse.ok()).toBeTruthy();
        const authData = await authResponse.json();
        token = authData.token;
        expect(token).toBeTruthy();
    });

    test('Create Booking (POST)', async ({ request }) =>{
        const requestResponse = await request.post('/booking', {
            data: {
                firstname: TestData.getRandomFirstname(),
                lastname: TestData.getRandomSurname(),
                totalprice: TestData.getRandomNumbers(2),
                depositpaid: TestData.getRandomBoolean(),
                bookingdates: {
                  checkin: '2025-01-15',
                  checkout: '2025-01-20',
                },
                additionalneeds: 'Breakfast',
            },
        })
    })
});