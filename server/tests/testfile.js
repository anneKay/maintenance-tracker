//import libraries

import expect from 'expect';
import request from 'supertest';
import app from './../app';
import {generateToken} from './../helpers/auth';

const user = {
  id: 2
 
} 
const req = {
  status: 'pending',
  id: 2
}
const admin = {
  id: 3
}
const userToken = generateToken(user);
let adminToken;

describe ('POST auth/signup', () => {
  it('should create a user', (done) => {
    const name = 'userName'
    const email = 'myemail6@example.com';
    const password = '1234567';

    request(app)
      .post('/api/v2/auth/signup')
      .send({name, email, password})
      .expect(201)
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
        admin.id = res.body.user.id; 
        
        adminToken = generateToken(admin) 
      
       expect(res.body.user.id).toExist();
       
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
    .set('authentication', userToken)
    .send({
      title: 'fix vase',
      description: "found clog inside of it",
      requestType: 'normal',
     
    })
    .expect(201)
    .expect((res) => {
      expect(res.body.request).toExist();
      req.id = res.body.request.id;
      console.log(req.status);

    })
    .end(done);
  });

  it('should return 401 if not authenticated', (done) => {
    request(app)
      .post('/api/v2/users/requests')
      .send({
      title: 'fix vase',
      description: "found clog inside of it",
      requestType: 'normal'
    })
      .expect(401)
      .expect((res) => {
        
      })
      .end(done);


  });
});

describe('GET /api/v2/users/requests', () => {
 
  it('should get a request created by a user if authenticated', (done) => {
    request(app)
    .get('/api/v2/users/requests')
    .set('authentication',  userToken)
    .expect(200)
    .expect((res) => {
      
      expect(res.body.requests).toExist();
    })
    .end(done);
  });

  it('should return 401 if not authenticated', (done) => {
    request(app)
      .get('/api/v2/users/requests')
      .expect(401)
      .expect((res) => {
      })
      .end(done);
  });
});

describe('GET /api/v2/users/requests/:requestId', () => {
 
  it('should get a single request created by a user if authenticated', (done) => {
    request(app)
    .get(`/api/v2/users/requests/${req.id}`)
    .set('authentication',  userToken)
    .expect(200)
    .expect((res) => {
     
      expect(res.body.request.length).toBe(1);
    })
    .end(done);
  });

  it('should return 401 if not authenticated', (done) => {
    request(app)
      .get(`/api/v2/users/requests/${req.id}`)
     
      .expect(401)
      .expect((res) => {
      })
      .end(done);
  });
});

describe('PUT /api/v2/users/requests/:requestId', () => {
 
  it('should modify a request created by a user if authenticated', (done) => {
    request(app)
    .put(`/api/v2/users/requests/${req.id}`)
    .set('authentication',  userToken)
    .send({
      title: 'fix generator',
      description: "generator broke down",
      requestType: 'normal'
    })
   
    .expect(200)
    .expect((res) => {
      expect(res.body.request.title).toBe('fix generator');
    })
    .end(done);
  });

  it('should return 401 if not authenticated', (done) => {
    request(app)
      .put(`/api/v2/users/requests/${req.id}`)
      .expect(401)
      .expect((res) => {
      })
      .end(done);
  });
});

describe('GET /api/v2/requests', () => {
 
  it('should get all requests created by all users if authenticated', (done) => {
    request(app)
    .get('/api/v2/requests')
    .set('authentication', adminToken)
    .expect(200)
    .expect((res) => {
     
      expect(res.body.allRequests).toExist();
    })
    .end(done);
  });

  it('should return 401 if not authenticated', (done) => {
    request(app)
      .get('/api/v2/requests')
      .expect(401)
      .expect((res) => {
      })
      .end(done);
  });
});



describe('PUT /api/v2/requests/:requestId', () => {
 
  it('should approve a request created by a user if user is an admin', (done) => {
    request(app)
    .put(`/api/v2/requests/${req.id}/approve`)
    .set('authentication', adminToken)
    .expect(200)
    .end(done);
  });

  it('should not dissaprove an approved request', (done) => {
    request(app)
      .put(`/api/v2/requests/${req.id}/disapprove`)
      .set('authentication', adminToken)
      .expect(409)
      .expect((res) => {
      })
      .end(done);
  });

  it(`should resolve an approved request`, (done) => {
    request(app) 
      .put(`/api/v2/requests/${req.id}/resolve`)
      .set('authentication', adminToken)
      .expect(200)
      .end(done);

  })
  it(`should reset a resolved or approved request`, (done) => {
    request(app) 
      .put(`/api/v2/requests/${req.id}/reset`)
      .set('authentication', adminToken)
      .expect(200)
      .end(done);

  })

  it('should return 403 if not authenticated as an admin', (done) => {
    request(app)
      .put(`/api/v2/requests/${req.id}/approve`)
      .set('authentication', userToken)
      .expect(403)
      .expect((res) => {
      })
      .end(done);
  });


   it('should dissaprove an pending request', (done) => {
    request(app)
      .put(`/api/v2/requests/${req.id}/disapprove`)
      .set('authentication', adminToken)
      .expect(200)
      .expect((res) => {
      })
      .end(done);
  });
 
});

describe('DELETE /api/v2/users/requests/:requestId', () => {
 
  it('should delete a request created by a user if authenticated', (done) => {
    request(app)
    .delete(`/api/v2/users/requests/${req.id}`)
    .set('authentication', userToken)
    
    .expect(204)
    .expect((res) => {
      expect(res.body.request).toNotExist();
    })
    .end(done);
  });

  it('should return 401 if not authenticated', (done) => {
    request(app)
      .delete(`/api/v2/users/requests/${req.id}`)
      .expect(401)
      .expect((res) => {
      })
      .end(done);
  });
});
