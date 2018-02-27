import React from 'react';
import PropTypes from 'prop-types';

class OptionsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (<div><input type="radio" value={this.props.option} checked={this.props.isSelected} onChange={(e) => { this.props.selectButton(e.target.value); }} />
      {this.props.option}
    </div>);
  }
}
OptionsComponent.defaultProps = {
};
OptionsComponent.propTypes = {
};
export default OptionsComponent;
