import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Card, Button, Message } from 'semantic-ui-react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Header from './Header';
import { firstButtonText, secButtonText } from '../../helpers/helper';
import { getAllRequests } from '../../actions/getAllRequests';
import admin from '../../actions/adminActions';


export class AdminPage extends Component {

  state = {
    loading: true,
  }
  componentDidMount() {
    const { requests } = this.props;
    requests();
  }

  performAction = (event, reqId) => {
    const { adminAction, requests } = this.props;
    const { value } = event.target;
    adminAction(reqId, value);
    requests()
      .then((data) => {
        this.setState({ loading: false });
      });
  };

  render() {
    const { allrequests, adminResponse } = this.props;
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
            <div className="admin-container container">
              <h3 id="user-reqs">List Of Requests</h3>
              <hr />
              {adminResponse.message.length > 0 && <Message success>{`${adminResponse.message}`}</Message>}
              <Grid>
                <Grid.Row>
                  {allrequests && requests ? requests.map(request => (
                    <Grid.Column width={6}>
                      <div key={request.id} id="profile-card">
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
                            <div className="admin-button">
                              <Button.Group>
                                <Button color="button-green" value={firstButtonText(request)} onClick={((event) => { this.performAction(event, request.id); })} disabled={request.status === 'resolved'}>{firstButtonText(request)}</Button>
                                <Button.Or />
                                <Button color="button-red" value={secButtonText(request)} onClick={((event) => { this.performAction(event, request.id); })} disabled={request.status === 'resolved'}>{secButtonText(request)}</Button>
                              </Button.Group>
                            </div>
                          </Card.Content>
                        </Card>
                      </div>
                    </Grid.Column>
                  )) : null}
                </Grid.Row>
              </Grid>
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
  allrequests: PropTypes.func.isRequired,
  adminAction: PropTypes.func.isRequired,
  adminResponse: PropTypes.shape({
  }).isRequired,
};

const mapStateToProps = ({ getReqReducer, adminReducer }) => (
  {
    allrequests: getReqReducer,
    adminResponse: adminReducer,
  }
);

const mapActionToProps = {
  requests: getAllRequests,
  adminAction: admin,
};

export default connect(mapStateToProps, mapActionToProps)(AdminPage);
