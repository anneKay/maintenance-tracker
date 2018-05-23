//import libraries
const expect = require('expect');
const request = require('supertest');

const app = require('./../app');
let requestId = 1;
let requests ={
    title: "fix washer",
     description: "found clog inside of it",
     requestType: "urgent" }
   

// test case for a post request
describe('POST /api/v1/users/requests', () => {
    it('should create a new request', (done) => {
       
        request(app)
            .post('/api/v1/users/requests')
            .send(requests)
            .expect(200)
            .end(done);
    })
    
});


//test case for Get request
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

//test case for a Get request by ID for a single request
describe('GET /api/v1/users/requests/:id', () => {
    it('should get a request made by a user', (done) => {
       
        request(app)
            .get(`/api/v1/users/requests/${requestId}`)
            .expect(200)
            .expect((res) => {
               expect(res.body.title).toBe(requests.title);
               
            }).end(done);
            
})
});

//test case for a Put request for modifying a single request
describe('PUT /api/v1/users/requests/:id', () => {
    
    it('should modify a request made by a user', (done) => {
       
        request(app)
            .put(`/api/v1/users/requests/${requestId}`)
            .send({
                title: "fix washers",
                description: "found clog inside of it",
                requestType: "urgent" 
             })
            .expect(200)
           .end(done);
           

})
});

//test case for a Delete request
describe('DELETE /api/v1/users/requests/:id', () => {
    
    it('should remove a request made by a user', (done) => {
       
        request(app)
            .delete(`/api/v1/users/requests/${requestId}`)
            .expect(200)
            .expect((res) => {
               expect(res.body.id).toBe(1);      
            }).end(done);
           

})
});

