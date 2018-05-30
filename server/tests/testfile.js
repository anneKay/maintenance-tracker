//import libraries

import expect from 'expect';
import request from 'supertest';
import app from './../app'

describe ('POST auth/signup', () => {
  it('should create a user', (done) => {
    const email = 'nill@example.com';
    const password = '123456';

    request(app)
      .post('/api/v2/users/auth/signup')
      .send({email, password})
      .expect(200)
      .expect((res) => {
        expect(res.headers['x-auth']).toExist();
        expect(res.body._id).toExist();
        expect(res.body.email).toBe(email);
      })
      .end((err) => {
        if (err) {
          return done();
        }
      })
  })

  it('should return validation error if request invalid', (done) => {
    request(app)
      .post('/api/v2/users/auth/signup')
      .send({
        email: 'thre',
        password: 12334566677
      })
      .expect(404)
      .end(done);
  });
});

it('should not create user if email in use', (done) => {
  request(app)
    .post('/api/v2/users/auth/signup')
    .send({
      email: 'email@e',
      password: 12334566677
    })
    .expect(404)
    .end(done);
});

