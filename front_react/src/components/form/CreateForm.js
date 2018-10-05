import React, { Component } from 'react';
import {
  Form, Message, Dropdown, Label 
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import sendRequest from './CreateReqHOC';
import FormField from './InputFormField';
import { options } from '../../helpers/helper';

export const CreateForm = ({
  onChange, onSubmit, state, request, userRequest,
}) => {
  const {
    loading,
    data: {
      title,
    },
    errors,
  } = state;

  return (
    <div>
      {request && console.log('>>>>>>>requesssinedit', request)}
      <main>
        <Form onSubmit={onSubmit}>
          {FormField('text', 'title', onChange, title, 'Enter your request title', 'Title:', errors.title)}
          <Form.Field error={!!errors.requestType}>
            <label htmlFor="requestType">Request Type</label>
            <Dropdown
              placeholder="select request type"
              fluid
              search
              selection
              options={options}
              onChange={onChange}
            />
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
              placeholder="Describe your request"
              onChange={onChange}
            >
              {userRequest && userRequest[0] ? userRequest[0].description : null}
            </textarea>
            {errors.description && (
              <Label color="red" pointing>
                {errors.description}
              </Label>)}
          </Form.Field>
          <input type="submit" value="Submit" />
          <Link to="/profile"><input value="Cancel" id="cancel" /></Link>
        </Form>
      </main>
    </div>
  );
};

CreateForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  state: PropTypes.shape({

  }).isRequired,

};

export default sendRequest(CreateForm);
