import React from 'react';
import PropTypes from 'prop-types';
import QuestionComponent from '../QuestionComponent';

class QuizPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      allQues: [],
      choices: this.props.choices,
      corrects: {},
    };
  }
  componentDidMount() {
    fetch('/readquestions').then(response => response.json())
      .then((respJSON) => {
        const respKeys = Object.keys(respJSON);
        if (respKeys.length === 0) {
          fetch('/questions').then(response => response.text())
            .then((respText) => {
              if (respText === 'saved to db') {
                fetch('/readquestions').then(response => response.json())
                  .then((respJSON) => {
                    const correctAns = {};
                    respJSON.forEach((ques) => {
                      correctAns[ques.questionId] = ques.answer;
                    });
                    this.setState({ allQues: respJSON, loaded: true, corrects: correctAns });
                  });
              }
            });
        } else {
          const correctAns = {};
          respJSON.forEach((ques) => {
            correctAns[ques.questionId] = ques.answer;
          });
          this.setState({ allQues: respJSON, loaded: true, corrects: correctAns });
        }
      });
  }


saveToDb = (quesID, selectedOptionValue) => {
  this.props.updateChoice(quesID, selectedOptionValue);
  const config = {
    method: 'post',
    body: JSON.stringify({
      username: this.props.username,
      questionId: quesID,
      choice: selectedOptionValue,
    }),
  };
  fetch('/saveChoice', config).then(response => response.text()).then((response) => {
    console.log(response);
  });
}


calculateScore=() => {
  let score = 0;
  this.state.choices.forEach((choiceObj) => {
    // console.log(this.state.corrects);
    // console.log(this.state.corrects[choiceObj.questionId], choiceObj.choice);
    if (this.state.corrects[choiceObj.questionId] === choiceObj.choice) {
      score += 1;
    }
  });
  this.props.saveScore(score);
}


render() {
  console.log(this.props);
  const quesArray = [];
  const correctAns = {};
  if (this.state.loaded === true) {
    this.state.allQues.forEach((question) => {
      let selectedChoice = '';
      for (let i = 0; i < this.props.choices.length; i += 1) {
        if (this.props.choices[i].questionId === question.questionId) {
          selectedChoice = this.props.choices[i].choice;
          break;
        }
      }
      quesArray.push(<QuestionComponent
        key={question.questionId}
        questionId={question.questionId}
        question={question.question}
        answer={question.answer}
        options={question.opts}
        selectedOption={selectedChoice}
        saveToDb={this.saveToDb}
      />);

      correctAns[question.questionId] = question.answer;
    });
  }
  console.log(this.state.allQues);
  console.log(quesArray);
  return (
    <div>
      <div>QuizPage</div>
      <div>{quesArray}</div>
      <button type="button" disabled={Object.keys(this.state.corrects).length !== (this.state.choices.length)} onClick={() => { this.calculateScore(); }}>Calculate Score</button>
    </div>
  );
}
}
QuizPage.defaultProps = {
};
QuizPage.propTypes = {
};
export default QuizPage;
