import React from 'react';
import PropTypes from 'prop-types';
import OptionsComponent from '../OptionsComponent';
import './questionComponent.css';

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
      optsElements.push(<OptionsComponent key={element + this.props.questionId} option={element} isSelected={this.props.selectedOption === element} selectButton={this.selectButton} />);
    });
    return (
      <div className="question-container">
        <div className="question-number">{`Question ${this.props.quesNo}`}</div>
        <div className="question">{this.props.question}</div>
        <div className="opts-container"> {optsElements}</div>
      </div>);
  }
}
QuestionComponent.defaultProps = {
};
QuestionComponent.propTypes = {
};
export default QuestionComponent;
