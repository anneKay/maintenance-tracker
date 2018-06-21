//import libraries

import expect from 'expect';
import request from 'supertest';
import app from './../app';
import {generateToken} from './../helpers/auth';
const user = {
  id: 1
} 
const token = generateToken(user);

describe ('POST auth/signup', () => {
  it('should create a user', (done) => {
    const name = 'userName'
    const email = 'myemail6@example.com';
    const password = '1234567';

    request(app)
      .post('/api/v2/auth/signup')
      .send({name, email, password})
      .expect(401)
      .end(done)
  })

  it('should return validation error if request invalid', (done) => {
    request(app)
      .post('/api/v2/auth/signup')
      .send({
        email: 'thre',
        password: 12334566677
      })
      .expect(400)
      .end(done);
  });
});

it('should not create user if email in use', (done) => {
  request(app)
    .post('/api/v2/auth/signup')
    .send({
      email: 'nwanna@admin.com',
      password: 'yourpass'
    })
    .expect(400)
    .end(done);
});

describe ('POST auth/login', () => {
  it('should successfully login user and return auth token', (done) => {
    const email = 'nwanna@admin.com';
    const password = 'yourpass';
    

    request(app)
      .post('/api/v2/auth/login')
      .send({email, password})
      .expect(200)
      .expect((res) => {
        expect(res.headers['authentication']).toExist();
        expect(res.body.id).toExist();
       
      })
      .end(done)
  })

  it('should reject invalid login', (done) => {
   
    request(app)
      .post('/api/v2/auth/login')
      .send({
        email: 'nwannan@admin.com', 
        password: 'password'
      })
      .expect(401)
      .expect((res) => {
        expect(res.headers['authentication']).toNotExist();
       
      })
      .end(done);
  });
});

describe('POST /api/v2/users/requests', () => {
 
  it('should create a new request if authenticated', (done) => {
    request(app)
    .post('/api/v2/users/requests')
    .set('authentication', token)
    .send({
      title: 'fix vase',
      description: "found clog inside of it",
      requestType: 'normal',
     
    })
    .expect(200)
    .end(done);
  });

  it('should return 401 if not authenticated', (done) => {

  });
});




