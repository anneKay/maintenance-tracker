import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Header';
import { getUserRequests } from '../../actions/getAllRequests';
import { displayReq } from '../../helpers/helper';


export class Profile extends Component {
  componentDidMount() {
    const { getReq } = this.props;
    getReq();
  }


  render() {
    const { user, requests } = this.props;
    return (
      <div>
        <Header headerName={user.user.name} className="header-primary profile" pathname="/profile" pathTwo="/" pathThree="/logout" navTwo="Home" navThree="logout" />
        <main>
          <section className="container">
            <div className="request req-layout">
              {requests.requests.length > 0 ? <h2 id="req-header"> Request List  </h2> : <h2 id="req-header"> No Requests Yet  </h2>}
              <Link to="/create">
                <input className="pull-right-sm" type="button" value="Add Request" id="create" />
              </Link>
            </div>
            <div className="request-div">
              <div id="requests">
                <div className="req-container">
                  <ul id="get-req">
                    {requests.requests.length > 10 }
                    {requests.requests.map(request => (
                      displayReq(request)
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </section>
        </main>
      </div>
    );
  }
}

Profile.propTypes = {
  user: PropTypes.func.isRequired,
  requests: PropTypes.shape({

  }).isRequired,
  getReq: PropTypes.func.isRequired,
};

export const mapStateToProps = ({ signupReducer, getReqReducer }) => (
  {
    user: signupReducer,
    requests: getReqReducer,
  }
);

const mapActionToProps = {
  getReq: getUserRequests,
};

export default connect(mapStateToProps, mapActionToProps)(Profile);
