import React from 'react';
import PropTypes from 'prop-types';

class AddACard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showForm: false
    };
    this.toggleForm = this.toggleForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEnterKeyPress = this.handleEnterKeyPress.bind(this);
  }

  toggleForm () {
    this.setState({
      showForm: !this.state.showForm
    });
  }
  handleSubmit (event) {
    event.preventDefault();
    const newCard = event.target.children[0].value;
    this.props.updateCards(newCard, this.props.id);
  }
  handleEnterKeyPress (e) {
    if (e && e.key === 'Enter') {
      this.props.updateCards(document.forms[0].childNodes[0].value, this.props.id);
    }
  }

  render () {
    return (
      <div className='FormBox'>
        {
          this.state.showForm
          ? <form className="ListForm" onSubmit={this.handleSubmit} >
            <textarea className='AddACardForm' onKeyPress={this.handleEnterKeyPress}/>
            <button className='button is-success' type="submit">Add</button>
            <button onClick={this.toggleForm} className='delete is-large' />
          </form>
          : <button href="#" className="AddLink" onClick={this.toggleForm}>
            <div className="AddACard">
                Add a card...
            </div>
          </button>
        }
      </div>
    );
  }
}

AddACard.propTypes = {
  id: PropTypes.string.isRequired,
  updateCards: PropTypes.func.isRequired
};

export default AddACard;