import React from 'react';
import { Form,  Message, Dropdown, Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { options } from '../../helpers/helper';

class CreateReq extends React.Component {
    state = {
      loading: false,
			data:{
				title: '',
        description: '',
      },
      requestType: '',
			errors:{}
    };
    
		onChange = (event, dropdown) => {
      const { data } = this.state;
		this.setState({ 
      errors: {},
      data: {
        ...data,
        [event.target.name]: event.target.value,
      },
    })
    if(dropdown) {
      this.setState({
        requestType: dropdown.value
      })
    }
  }

		validate = (data, requestType) => {
			const errors = {};
      if (data.title.trim().length <= 4) errors.title = 'Add a valid title';
      if (data.description.trim().length <= 10 ) errors.description = 'Description should not be less than 8 characters';
      if (requestType.trim().length === 0 ) errors.requestType = 'Please select a request type'; 
			return errors;
		}

		onSubmit = () => {
      const { submit, history } = this.props;
      const { data, requestType } = this.state;
			const errors = this.validate(data, requestType);
			this.setState({
				errors,
			})
			if(Object.keys(errors).length === 0 ){
			submit(data, requestType, history);
			}
		}

    render() {
      const {data, errors} = this.state;
			return (
        <div>
          <main>
            <Form onSubmit={this.onSubmit}>
              <Form.Field error={!!errors.title}>
                  <label htmlFor="title">Title</label>
                  <input
                  required
                  type="text" 
                  id="title" 
                  name="title" 
                  placeholder="Enter your request title"
                  value={data.title}
                  onChange={this.onChange}
                  />
                  {errors.title && (
                  <Label color="red" pointing>
                  {errors.title}
                  </Label>)}
              </Form.Field>
              <Form.Field error={!!errors.requestType}>
                <label htmlFor="requestType">Request Type</label>
                <Dropdown 
                  placeholder='select request type'
                  fluid
                  search 
                  selection
                  options={options}
                  onChange={this.onChange} />
                   {errors.requestType && (
                  <Label color="red" pointing>
                  {errors.requestType}
                  </Label>)}
              </Form.Field>
              <Form.Field error={!!errors.description}> 
                  <label htmlFor="decription">Description</label>
                  <textarea
                  required
                  rows={4}
                  cols={50}
                  type="text" 
                  id="description" 
                  name="description" 
                  placeholder="Descibe your request"
                  onChange={this.onChange}>
                  </textarea>
                  {errors.description && (
                  <Label color="red" pointing>
                  {errors.description}
                  </Label>)}
              </Form.Field>
					<input type="submit"  value="Submit"/>
          <Link to="/profile"><input value="Cancel" id="cancel"/></Link>
        </Form>
      </main>
		</div>
			)
    }  
}
CreateReq.propTypes = {
	submit: PropTypes.func.isRequired
};

export default CreateReq;