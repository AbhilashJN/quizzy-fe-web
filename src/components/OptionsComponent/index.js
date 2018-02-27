import React from 'react';
import PropTypes from 'prop-types';
import './optionsComponent.css';

class OptionsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="opt-row"><input className="radio-btn" type="radio" value={this.props.option} checked={this.props.isSelected} onChange={(e) => { this.props.selectButton(e.target.value); }} />
        <p className="option">{this.props.option}</p>
      </div>);
  }
}
OptionsComponent.defaultProps = {
};
OptionsComponent.propTypes = {
};
export default OptionsComponent;
