

//require("babel-register")
const expect = require('expect');
const request = require('supertest');

const app = require('./../../build/app');

let requests ={
    title: "fix washer",
     description: "found clog inside of it",
     requestType: "urgent" }


describe('POST /api/v1/users/requests', () => {
    it('should create a new request', (done) => {
       
        request(app)
            .post('/api/v1/users/requests')
            .send(requests)
            .expect(200)
            .end(done);
    })
});



describe('GET /api/v1/users/requests', () => {
    it('should get the list of requests made by users', (done) => {
       
        request(app)
            .get('/api/v1/users/requests')
            .expect(200)
            .expect((res) => {
                expect(res.body.length).toBe(1);
               
            }).end(done);

})
});

describe('GET /api/v1/users/requests/:id', () => {
    it('should get a request made by a user', (done) => {
       
        request(app)
            .get('/api/v1/users/requests/1')
            .expect(200)
            .expect((res) => {
               expect(res.body.title).toBe(requests.title);
               
            }).end(done);

})
});