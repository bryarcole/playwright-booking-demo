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

    const first = TestData.getRandomFirstname();
    const last = TestData.getRandomSurname();
    const price = TestData.getRandomNumbers(3);
    const bool = TestData.getRandomBoolean();
    

    test('Create Booking (POST)', async ({ request }) => {
        const requestResponse = await request.post('/booking', {
            data: {
                firstname: first,
                lastname: last,
                totalprice: price,
                depositpaid: bool,
                bookingdates: {
                  checkin: '2025-01-15',
                  checkout: '2025-01-20',
                },
                additionalneeds: 'Breakfast',
            },
        });

        expect(requestResponse.ok()).toBeTruthy();
        const bookingData = await requestResponse.json();
        bookingId = bookingData.bookingid;

        expect(bookingData.booking).toMatchObject({
            firstname: first,
            lastname: last,
            totalprice: price,
            depositpaid: bool,
            additionalneeds: 'Breakfast'
        });
    });

    test('GET Booking', async ({ request })=> {
        const requestResponse = await request.get('/booking/${bookingId}')
        expect(requestResponse.ok()).toBeTruthy();

        const bookingDetails = await requestResponse.json();
        expect(bookingDetails).toMatchObject({
            firstname: first,
            lastname: last,
            totalprice: price,
            depositpaid: bool,
            additionalneeds: 'Breakfast',
            bookingdates: {
                checkin: '2025-01-15',
                checkout: '2025-01-20',
            },
        });
    });
});