import React from 'react';
import PropTypes from 'prop-types';

class LoginField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="login" onChange={(e) => { this.setState({ username: e.target.value }); }} />
        <button type="button" onClick={() => { this.props.doLogin(this.state.username); }}>Login</button>
      </div>);
  }
}
LoginField.defaultProps = {
};
LoginField.propTypes = {
};
export default LoginField;
