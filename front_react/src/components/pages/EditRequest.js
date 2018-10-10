import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import SendRequest from '../form/CreateForm';
import editRequest from '../../actions/editRequest';
import PropTypes from 'prop-types';


export class EditRequest extends React.Component{
	submit = (data, requestType, history) => {
    editRequest(data.title, data.description, requestType, history.location.pathname.substring(6), history);
    return data;
	}
  render() {
    const { history, request } = this.props;
    return (
      <div>
        <Header id="login-header" className="header-primary profile" pathOne="/" pathTwo="/create" pathThree="/logout" navOne="Home" navTwo="Report Issue" navThree="log Out" />
        <main className="container">
        <h2 id="new-request">Edit Your Request</h2>
          <div className="form-container new-request">
            <SendRequest userRequest={request} submit={this.submit} history={history}/>
          </div>
        </main>
      </div>
    );
  }
}

EditRequest.propTypes = {
  login: PropTypes.func.isRequired,
  login: PropTypes.object.isRequired
}
 

export const mapStateToProps = ({ getReqReducer }) => {
  const { request } = getReqReducer;
  return {request};

};

const mapActionToProps = {
};
export default connect(mapStateToProps, mapActionToProps)(EditRequest);

