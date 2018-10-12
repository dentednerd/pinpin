import React from 'react';
import Emoji from './Emoji';

class EmojiResults extends React.Component {
  render () {
    return (
      <div className="emoji-results">
          {this.props.emojis.map(function (emoji) {
              return <Emoji symbol={emoji.symbol} />
          })}
      </div>
    );
  }
}

export default EmojiResults;