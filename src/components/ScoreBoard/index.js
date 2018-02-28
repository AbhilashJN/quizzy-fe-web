import React from 'react';
import PropTypes from 'prop-types';
import ScoreRow from '../ScoreRow';
import './scoreBoard.css';

class ScoreBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: [],
    };
  }
  componentDidMount() {
    fetch('/getTopFive').then(response => response.json()).then((respJSON) => {
      this.setState({ scores: respJSON });
    });
  }

  render() {
    console.log(this.state.scores);
    const scoreRowsArray = [];
    if (this.state.scores.length > 0) {
      this.state.scores.forEach((scorePair, index) => {
        scoreRowsArray.push(<ScoreRow username={scorePair.username} rank={index + 1} key={scorePair.username} score={scorePair.latestScore} />);
      });
    }
    return (
      <div className="score-page">
        <div className="quiz-header">
          <span> Quizzy</span>
          <span> Hello {this.props.username}</span>
        </div>
        <p className="your-score-text">Your score</p>
        <p className="your-score-score"><span className="current-score">{this.props.score}</span>/{this.props.maxScore}</p>
        <div className="score-main-row">
          <div className="leader-board">
            <p>Leaderboard</p>
            {scoreRowsArray}
          </div>
        </div>
        <button className="play-again-btn" type="button" onClick={() => { this.props.resetGame(); }}>Play Again</button>
      </div>
    );
  }
}
ScoreBoard.defaultProps = {
};
ScoreBoard.propTypes = {
};
export default ScoreBoard;
