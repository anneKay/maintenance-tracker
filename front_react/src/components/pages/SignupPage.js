import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignupForm from '../form/SignupForm';
import signup from '../../actions/signup';
import Header from '../pages/Header';

class Signup extends Component {
  state = {
    user: [],
  }
  submit = data => {
    this.props.signup(data.name, data.email, data.password);
    return data;
  }
  static getDerivedStateFromProps(props) {
    console.log('>>>>>>>>>>>props', props);
    
  }
  componentDidMount() {
    //console.log('>>>>>>>>>this.submit.name', this.submit.name)
    //this.props.signup(this.submit.name, this.submit.email, this.submit.password);
  }

  render() {
    //console.log('>>>>>>>>>>>this.props', this.props.signup().payload);
  //   const userArray = this.props.signup().payload;
  //   if(userArray) {
  //    const itemsArray = userArray.map(user => (
  //     <div>
  //       <h3>{user}</h3>
     
  //      </div>
  //   ))
  // }
    return (
      <div>
        <Header id="login-header"/>
        <div className="container">
        <div className="form-container">
          <SignupForm submit={this.submit}/> 
        </div> 
        </div>
      {/* <p>{itemsArray}</p>  */}
      </div>
    )
  }
}

Signup.PropTypes = {
  login: PropTypes.func.isRequired,
  login: PropTypes.object.isRequired
}
 

const mapStateToProps = ({ signupReducer }) => {
  const { user } = signupReducer;
  return user;
};

const mapActionToProps = {
  signup,
};
export default connect(mapStateToProps, mapActionToProps)(Signup);

