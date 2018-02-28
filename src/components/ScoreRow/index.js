import React from 'react';
import PropTypes from 'prop-types';
import './scoreRow.css';

class ScoreRow extends React.Component {
  render() {
    return (
      <div className="score-row">
        <div >
          <span className="score-row-rank">{`${this.props.rank}. `}</span>
          {this.props.username}
        </div>
        <div>
          {this.props.score}
        </div>
      </div>
    );
  }
}
ScoreRow.defaultProps = {
};
ScoreRow.propTypes = {
};
export default ScoreRow;
