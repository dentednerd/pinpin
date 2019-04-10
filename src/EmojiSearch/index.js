import React from 'react';
import SearchBar from '../SearchBar';
import EmojiResults from './EmojiResults';
import filterEmoji from './utils/filterEmoji';

class EmojiSearch extends React.Component {
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
      <div>
        
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
        
      </div>
    );
  }
}

export default EmojiSearch;
