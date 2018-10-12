import React from 'react';
import SearchBar from '../SearchBar';
import DictionaryResults from './DictionaryResults';
import filterDict from './utils/filterDict';

class DictionarySearch extends React.Component {
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

        <h1>Dictionary</h1>

        <SearchBar
            searchTerm={this.state.searchTerm} 
            updateSearchTerm={this.updateSearchTerm} 
        />

        {this.state.searchTerm !== "" && (
          <DictionaryResults 
            word={filterDict(this.state.searchTerm)}
          />
        )}
        
      </div>
    );
  }
}

export default DictionarySearch;
