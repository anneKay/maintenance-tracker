import React from 'react';
import PropTypes from 'prop-types';
import { logoutUser } from '../../helpers/helper';

const LogoutUser = ({ history }) => (
  <div>
    {/* {logoutUser(history)} */}
    {console.log('here')}
    <div> this is a test</div>
  </div>
);

LogoutUser.propTypes = {
  history: PropTypes.shape({
  }).isRequired,
};


export default LogoutUser;
