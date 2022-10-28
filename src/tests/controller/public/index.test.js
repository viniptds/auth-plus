const request = require('supertest');
const app = require('../../../app');

describe('POST /register', () => {

    it('Basic register', async() => {
        const data = {
            email: "john.doe@gmail.com",
            password: "123456"
        };

        const response = await request(app).post('/register').send(data);

        expect(response.statusCode).toEqual(201);

    })
 
})