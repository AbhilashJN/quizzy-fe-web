import React from 'react';
import PropTypes from 'prop-types';
import OptionsComponent from '../OptionsComponent';

class QuestionComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selectedOption,
    };
  }

  selectButton=(optionValue) => {
    // console.log(optionValue);
    // this.setState({ selected: optionValue });
    this.props.saveToDb(this.props.questionId, optionValue);
  }

  render() {
    // console.log(':::::', this.props);
    const optsElements = [];
    this.props.options.forEach((element) => {
      optsElements.push(<OptionsComponent option={element} isSelected={this.props.selectedOption === element} selectButton={this.selectButton} />);
    });
    return (
      <div>
        {this.props.questionID}
        {this.props.question}<br />
        {this.props.answer}<br />
        {optsElements}
      </div>);
  }
}
QuestionComponent.defaultProps = {
};
QuestionComponent.propTypes = {
};
export default QuestionComponent;
