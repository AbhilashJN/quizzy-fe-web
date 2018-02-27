import React from 'react';
import PropTypes from 'prop-types';
import LoginField from '../LoginField';

class LoginCard extends React.Component {
  render() {
    return (
      <div>
        <LoginField doLogin={this.props.doLogin} />
      </div>);
  }
}
LoginCard.defaultProps = {
};
LoginCard.propTypes = {
};
export default LoginCard;
