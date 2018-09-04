import React from 'react';
import Header from './Header';
import UserForm from '../form/LoginForm';


export default class LoginPage extends React.Component{
	submit = data => {
		console.log(data);
	}
  render() {
    return (
      <div>
        <Header id="login-header" />
        <main className="container">
          <div className="form-container">
            <UserForm submit={this.submit} />
          </div>

        </main>
      </div>
    );
  }
}


