import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import SendRequest from '../form/CreateForm';
import createReqAction from '../../actions/postRequest';


export class CreateReq extends React.Component {
  submit = (data, requestType, history) => {
    const { createReq } = this.props;
    createReq(data.title, data.description, requestType, history);
    return data;
  }

  render() {
    const { history } = this.props;
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
  createReq: PropTypes.func.isRequired,
  history: PropTypes.shape({
  }).isRequired,
};


export const mapStateToProps = ({ createReqReducer }) => {
  const { request } = createReqReducer;
  return request;
};

const mapActionToProps = {
  createReq: createReqAction,
};
export default connect(mapStateToProps, mapActionToProps)(CreateReq);
