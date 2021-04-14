import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Header from './Header';
import { getSingleRequest } from '../../actions/getAllRequests';
import deleteReq from '../../actions/deleteRequest';


class Request extends Component {
  componentDidMount() {
    const { userReq, history } = this.props;
    const requestId = (history.location.pathname.substring(9));
    userReq(requestId);
  }

  deleteAction() {
    const { history } = this.props;
    deleteReq(history.location.pathname.substring(9), history);
  }

  confirmDelete() {
    const confirmBox = window.confirm('Do you really want to delete this request?')
    if (confirmBox === true) {
      this.deleteAction();
    }
  }

  render() {
    const { request, history } = this.props;
    return (
      <div>
        <Header className="header-primary profile" pathOne="/" navThree="Report Issue" pathTwo="/logout" pathThree="/" navOne="Home" navTwo="logout" />
        <div className="details">
          <h2 id="req-title"> Request Details </h2>
        </div>
        <Card id="request-card">
          <Card.Content>
            <Card.Header>{request.request.length > 0 && request.request[0].title}</Card.Header>
            <Card.Description>
              <h4>{request.request.length > 0 && request.request[0].description}</h4>
            </Card.Description>
            <Card.Meta>
              {request.request.length > 0 && request.request[0].status}
              <span className="pull-right">
                {moment(request.request.length > 0 && request.request[0].created_at).fromNow()}
              </span>
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <div>
              <Link to={`/edit/${history.location.pathname.substring(9)}`}>
                <Button basic color="green" animated="fade">
                  <Button.Content>Edit</Button.Content>
                </Button>
              </Link>
            </div>
            <div>
              <Button onClick={() => { this.confirmDelete(); }} basic color="red">
            Delete
              </Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

Request.propTypes = {
  request: PropTypes.shape({
  }).isRequired,
  userReq: PropTypes.func.isRequired,
  history: PropTypes.shape({
  }).isRequired,
};

const mapStateToProps = ({ getReqReducer }) => (
  {
    request: getReqReducer,
  }

);

const mapActionToProps = {
  userReq: getSingleRequest,
};
export default connect(mapStateToProps, mapActionToProps)(Request);
