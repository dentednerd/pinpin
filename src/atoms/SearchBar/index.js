import React from 'react';
import Input from '../Input'

export default class SearchBar extends React.Component {
  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    const newTerm = event.target.value
    this.props.updateSearchTerm(newTerm);
  }

  render () {
    return (
      <Input 
        type='text' 
        onChange={this.handleChange} 
        value={this.props.searchTerm}
        placeholder={this.props.placeholder}
      />
    );
  }
}
