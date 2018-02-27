import React from 'react';
import PropTypes from 'prop-types';
import LoginHeader from '../LoginHeader';
import LoginCard from '../LoginCard';

class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <div>
          <LoginHeader />
        </div>
        <div>
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
