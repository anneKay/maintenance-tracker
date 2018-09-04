import React from 'react';
import { Form } from 'semantic-ui-react';
import validator from 'validator';
import InlineError from '../messages/InlineError';
import propTypes from 'prop-types';

class SignupForm extends React.Component {
    state = {
      loading: false,
			data:{
        name: '',
				email: '',
        password: '',
        confirmPassword: '',
			},
			errors:{}
		};
		
		onChange = (event) => 
		this.setState({ 
			data: { 
        name:this.state.data.name,
        email:this.state.data.email, 
        password:this.state.data.password, 
        confirmPassword:this.state.data.confirmPassword, 
        [event.target.name] : event.target.value }
		})

		validate = (data) => {
      const errors = {};
      if (!data.name || data.name.length <= 2) errors.name = 'invalid name';
			if (!data.password) errors.password = 'password cannot be blank';
			if (!validator.isEmail(data.email)) errors.email = 'invalid email';
			console.log('>>>>>', data.password)
			if (data.password !== data.confirmPassword) errors.confirmPassword = 'your passwords do not match';
			console.log('>>>>>>>>>>', data.confirmPassword)
			return errors;
		}

		onSubmit = () => {
			const errors = this.validate(this.state.data);
			this.setState({
				errors,
			})
			if(Object.keys(errors).length === 0 ){
				this.props.submit(this.state.data);
			}
		}

 
    render () {
			const {data, errors} = this.state;
			return (
      <div>
      <main>
        <Form onSubmit={this.onSubmit}>
        <Form.Field error={!!errors.email}>
							<label htmlFor="name">Name</label>
							<input
							 type="text" 
							 id="name" 
							 name="name" 
							 placeholder="Full name"
							 value={data.name}
							 onChange={this.onChange}
							 />
							{errors.name && <InlineError text={errors.name} />}
					</Form.Field>
					<Form.Field error={!!errors.email}>
							<label htmlFor="email">Email</label>
							<input
							 type="text" 
							 id="email" 
							 name="email" 
							 placeholder="email@email.com"
							 value={data.email}
							 onChange={this.onChange}
							 />
							{errors.email && <InlineError text={errors.email} />}
					</Form.Field>
					<Form.Field error={!!errors.email}> 
							<label htmlFor="password">password</label>
							<input
							 type="password" 
							 id="password" 
							 name="password" 
							 placeholder="Make it secure"
							 value={data.password}
							 onChange={this.onChange}
							 />
							{errors.password && <InlineError text={errors.password} />}
					</Form.Field>
          <Form.Field error={!!errors.email}> 
							<label htmlFor="confirmPassword">confirm password</label>
							<input
							 type="password" 
							 id="confirmPassword" 
							 name="confirmPassword" 
							 placeholder="Enter password again"
							 value={data.confirmPassword}
							 onChange={this.onChange}
							 />
							{errors.confirmPassword && <InlineError text={errors.confirmPassword} />}
					</Form.Field>
					<input type="submit"  value="Login"/>
        </Form>
      </main>
		</div>
			)
    }
    
}
SignupForm.propTypes = {
	submit: propTypes.func.isRequired
};

 export default SignupForm;