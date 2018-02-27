import React from 'react';
import PropTypes from 'prop-types';

class ScoreRow extends React.Component {
  render() {
    return (
      <div>
        {this.props.rank}
        {this.props.username}
        {this.props.score}
      </div>
    );
  }
}
ScoreRow.defaultProps = {
};
ScoreRow.propTypes = {
};
export default ScoreRow;
