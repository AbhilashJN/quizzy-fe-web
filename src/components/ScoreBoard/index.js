import React from 'react';
import PropTypes from 'prop-types';

class ScoreBoard extends React.Component {
  render() {
    return (<div >
      {`${this.props.username}'s score: ${this.props.score}`}
    </div>
    );
  }
}
ScoreBoard.defaultProps = {
};
ScoreBoard.propTypes = {
};
export default ScoreBoard;
