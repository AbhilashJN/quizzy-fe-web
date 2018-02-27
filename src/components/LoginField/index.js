import React from 'react';
import PropTypes from 'prop-types';
import './loginField.css';

class LoginField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }
  render() {
    return (
      <div className="login-field">
        <p className="label-login">Username</p>
        <input className="login-input" type="text" onChange={(e) => { this.setState({ username: e.target.value }); }} />
        <button className="login-btn" type="button" onClick={() => { if (this.state.username.length < 2) { alert('Enter proper user name'); return; } this.props.doLogin(this.state.username); }}>Login</button>
      </div>);
  }
}
LoginField.defaultProps = {
};
LoginField.propTypes = {
};
export default LoginField;
