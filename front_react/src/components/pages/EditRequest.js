import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import SendRequest from '../form/CreateForm';
import editRequest from '../../actions/editRequest';
import PropTypes from 'prop-types';


class EditRequest extends React.Component{
	submit = (data, requestType, history) => {
    //editRequest(data.title, data.description, requestType, history.location.pathname.substring(9));
    return data;
	}
  render() {
    const { history, request } = this.props;
    console.log('>>>>>>request', request);
    console.log('>>>>>>history', history);
    return (
      <div>
        <Header id="login-header" className="header-primary profile" pathOne="/" pathTwo="/create" pathThree="/logout" navOne="Home" navTwo="Report Issue" navThree="log Out" />
        <main className="container">
        <h2 id="new-request">Edit Your Request</h2>
          <div className="form-container new-request">
            <SendRequest request={request} submit={this.submit} history={history}/>
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
 

const mapStateToProps = ({ getReqReducer }) => {
  const { request } = getReqReducer;
  console.log('>>>>>>>request', request)
  return {request};

};
// const mapStateToProps = (state) => {
//   console.log('>>>>>state', state)
// };
const mapActionToProps = {
  //createReqAction,
};
export default connect(mapStateToProps, mapActionToProps)(EditRequest);

