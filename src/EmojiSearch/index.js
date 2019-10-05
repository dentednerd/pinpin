import React, { Fragment } from 'react';
import SearchBar from '../atoms/SearchBar';
import EmojiResults from './EmojiResults';
import filterEmoji from './utils/filterEmoji';

export default class EmojiSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        searchTerm: ""
    };
    this.updateSearchTerm = this.updateSearchTerm.bind(this);
  }

  updateSearchTerm (newTerm) {
    this.setState({
      searchTerm: newTerm
    })
  }

  render () {
    return (
      <Fragment>
        <SearchBar
          searchTerm={this.state.searchTerm} 
          updateSearchTerm={this.updateSearchTerm} 
          placeholder="Search for emoji"
        />
        {this.state.searchTerm !== "" && (
          <EmojiResults 
            emojis={filterEmoji(this.state.searchTerm)}
          />
        )}
      </Fragment>
    );
  }
}
