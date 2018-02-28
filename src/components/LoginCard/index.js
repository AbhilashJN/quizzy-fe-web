import React from 'react';
import PropTypes from 'prop-types';
import LoginField from '../LoginField';
import './loginCard.css';

class LoginCard extends React.Component {
  render() {
    return (
      <div className="login-card">
        <div className="left-column">
          <span>Welcome</span> <span>to</span><span className="quizzy"> Quizzy!</span>
        </div>
        <div className="right-column">
          <p className="card-title">Login</p>
          <LoginField doLogin={this.props.doLogin} />
        </div>

      </div>);
  }
}
LoginCard.defaultProps = {
};
LoginCard.propTypes = {
};
export default LoginCard;
