import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Button } from 'semantic-ui-react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Header from './Header';
import { getAllRequests } from '../../actions/getAllRequests';
import { approve} from '../../actions/adminActions';


class AdminPage extends Component {
  state = {
    disabled: false
  }
  componentDidMount() {
    const { requests } = this.props;
    requests()
      .then(request => {
        console.log('reqssss', request)
      })
    console.log('>>>', this.props.allrequests.allRequests)
  }

  handleClick(requestId, action) {
   // if(action === 'approve')
  }

  render() {
    const { allrequests } = this.props;
    const requests = allrequests.allRequests;
    return (
      <div>
        <Header headerName="Admin" className="header-primary" pathname="/admin" pathTwo="/" pathThree="/logout" navTwo="Home" navThree="logout" />
        <main>
          <section>
            <div>
              <h3 id="dashboard">Dashboard</h3>
            </div>
          </section>
          <section className="container">
            <div className=" container">
              <h3 id="user-reqs">List Of Requests</h3>
              <hr />
              {allrequests && requests ? requests.map(request => (
                <div id="profile-card">
                  <Card>
                    <Card.Content>
                      <Card.Header>{request.title}</Card.Header>
                      <Card.Description>{request.description}</Card.Description>
                      <Card.Meta>
                        <span className="left floated">{request.status}</span>
                        <span className="right floated">{moment(request.created_at).fromNow()}</span>
                      </Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                    <div className='admin-button'>
                    <Button.Group>
                        <Button disabled={request.status === 'resolved'}>{request.status === 'pending' ? 'Approve' : request.status === 'approved' || request.status === 'disapproved' ? 'Reset' : 'Approve'}</Button>
                        <Button.Or />
                        <Button disabled={request.status === 'resolved'}>{request.status === 'pending' ? 'Disapprove' : request.status === 'approved' || request.status === 'disapproved' ? 'Resolve' : 'Disapprove'}</Button>
                      </Button.Group>
                    </div>
                    </Card.Content>
                  </Card>
                </div>       
              )) : null}
              

            </div>

          </section>
          
        </main>
      </div>
    );
  }
}

AdminPage.propTypes = {
  requests: PropTypes.shape({

  }).isRequired,
  allRequests: PropTypes.func.isRequired,
};

const mapStateToProps = ({ getReqReducer }) => (
  {
    allrequests: getReqReducer,
  }
);

const mapActionToProps = {
  requests: getAllRequests,
};

export default connect(mapStateToProps, mapActionToProps)(AdminPage);
