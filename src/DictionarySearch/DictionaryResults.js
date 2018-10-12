import React from 'react';

class DictionaryResults extends React.Component {
  render () {
    return (
      <div className="dictionary-results">
          {this.props.word}
      </div>
    );
  }
}

export default DictionaryResults;