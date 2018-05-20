

//require("babel-register")
const expect = require('expect');
const request = require('supertest');

const app = require('./../../build/app');

describe('POST /api/v1/users/requests', () => {
    it('should create a new request', (done) => {
       
        request(app)
            .post('/api/v1/users/requests')
            .send({
               title: "fix washer",
               description: "found clog inside of it",
               requestType: "urgent"    
            })
            .expect(200)
            .end(done);
    })
});
