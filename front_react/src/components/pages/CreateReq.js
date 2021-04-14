import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import SendRequest from '../form/CreateForm';
import createReqAction from '../../actions/postRequest';


export class CreateReq extends React.Component {
  submit = (data, requestType, history) => {
    const { createReqAction } = this.props;
    createReqAction(data.title, data.description, requestType, history);
    return data;
  }

  render() {
    const { history } = this.props;
    return (
      <div>
        <Header id="login-header" className="header-primary profile" pathOne="/" pathTwo="/create" pathThree="/logout" navOne="Home" navTwo="Report Issue" navThree="logout" />
        <main className="container">
          <h2 id="new-request">Place New Request</h2>
          <div className="form-container new-request">
            <SendRequest submit={this.submit} history={history} />
          </div>
        </main>
      </div>
    );
  }
}

CreateReq.propTypes = {
  createReqAction: PropTypes.func.isRequired,
  history: PropTypes.shape({
  }).isRequired,
};


export const mapStateToProps = ({ createReqReducer }) => {
  const { request } = createReqReducer;
  return request;
};

const mapActionToProps = {
  createReqAction,
};
export default connect(mapStateToProps, mapActionToProps)(CreateReq);
