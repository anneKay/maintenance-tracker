import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
//import CreateRequest from '../form/CreateReqForm';
import SendRequest from '../form/CreateForm';
import createReqAction from '../../actions/postRequest';
import PropTypes from 'prop-types';


class CreateReq extends React.Component{
	submit = (data, requestType, history) => {
    this.props.createReqAction(data.title, data.description, requestType, history);
    return data;
	}
  render() {
    const { history } = this.props;
    console.log(history)
    return (
      <div>
        <Header id="login-header" className="header-primary profile" pathOne="/" pathTwo="/create" pathThree="/logout" navOne="Home" navTwo="Report Issue" navThree="log Out" />
        <main className="container">
        <h2 id="new-request">Place New Request</h2>
          <div className="form-container new-request">
            <SendRequest submit={this.submit} history={history}/>
          </div>
        </main>
      </div>
    );
  }
}

CreateReq.propTypes = {
  login: PropTypes.func.isRequired,
  login: PropTypes.object.isRequired
}
 

const mapStateToProps = ({ createReqReducer }) => {
  const { request } = createReqReducer;
  return request;
};

const mapActionToProps = {
  createReqAction,
};
export default connect(mapStateToProps, mapActionToProps)(CreateReq);

