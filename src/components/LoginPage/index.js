import React from 'react';
import PropTypes from 'prop-types';
import LoginHeader from '../LoginHeader';
import LoginCard from '../LoginCard';
import './loginPage.css';

class LoginPage extends React.Component {
  render() {
    return (
      <div className="login-page">
        <div className="login-header-row">
          <LoginHeader />
        </div>
        <div className="login-main-row">
          <LoginCard doLogin={this.props.doLogin} />
        </div>
      </div>
    );
  }
}
LoginPage.defaultProps = {
};
LoginPage.propTypes = {
};
export default LoginPage;
