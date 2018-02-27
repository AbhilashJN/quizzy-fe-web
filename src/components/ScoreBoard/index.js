import React from 'react';
import PropTypes from 'prop-types';
import ScoreRow from '../ScoreRow';

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
      <div >
        {`${this.props.username}'s score: ${this.props.score}`}
        {scoreRowsArray}
        <button type="button" onClick={() => { this.props.resetGame(); }}>Play Again</button>
      </div>
    );
  }
}
ScoreBoard.defaultProps = {
};
ScoreBoard.propTypes = {
};
export default ScoreBoard;
