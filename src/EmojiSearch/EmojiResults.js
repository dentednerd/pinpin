import React from 'react';
import styled from '@emotion/styled';
import Emoji from './Emoji';

class EmojiResults extends React.Component {
  render () {
    const StyledResults = styled.div`
      height: calc(50vh - 10rem);
      width: calc(100% - 2rem);
      overflow-y: auto;
      overflow-x: hidden;
      margin: 0.5rem 0;
      line-height: 2rem;
      font-size: 2rem;
      letter-spacing: 8px;
      background-color: rgba(255,255,255,0.2);
      border-radius: 0.25rem;
      padding: 1rem;
      color: #828dac;
    `;

    return (
      <StyledResults>
        {this.props.emojis.map(function (emoji) {
          return <Emoji symbol={emoji.symbol} />
        })}
      </StyledResults>
    );
  }
}

export default EmojiResults;