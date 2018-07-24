import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import validator from 'validator';
import InlineError from '../messages/InlineError';
import propTypes from 'prop-types';

class UserForm extends React.Component {
    state = {
      loading: false,
			data:{
				email: '',
				password: ''
			},
			errors:{}
		};
		
		onChange = (event) => 
		this.setState({ 
			data: { email:this.state.data.email, password:this.state.data.password, [event.target.name] : event.target.value }
		})

		validate = (data) => {
			const errors = {};
			if (!data.password) errors.password = 'password cannot be blank';
			if (!validator.isEmail(data.email)) errors.email = 'invalid email';
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
					
            <Button primary> Login </Button>
          </Form>


      </main>

		</div>
			)
    }
    
}
UserForm.propTypes = {
	submit: propTypes.func.isRequired
};

 export default UserForm;