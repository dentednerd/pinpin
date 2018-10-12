import React from 'react';

class SearchBar extends React.Component {
    constructor (props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    render () {
        return (
            <input 
                type='text' 
                onChange={this.handleChange} 
                value={this.props.searchTerm}
            />
        );
    }
    handleChange (event) {
        const newTerm = event.target.value
        this.props.updateSearchTerm(newTerm);
    }
}

export default SearchBar;