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
    this.props.addCard(newCard, this.props.id);
    this.toggleForm();
  }
  handleEnterKeyPress (e) {
    if (e && e.key === 'Enter') {
      this.props.addCard(document.forms[0].childNodes[0].value, this.props.id);
    }
  }

  render () {
    return (
      <div className='FormBox'>
        {
          this.state.showForm
          ? <form className="ListForm" onSubmit={this.handleSubmit} >
              <textarea className='AddACardForm' onKeyPress={this.handleEnterKeyPress}/>
              <button className='edit-card-button' type="submit">Add</button>
              <button onClick={this.toggleForm} className='edit-card-button'>Close</button>
            </form>
          : <button href="#" className="edit-card-button" onClick={this.toggleForm}>
              Add a task...
            </button>
        }
      </div>
    );
  }
}

AddACard.propTypes = {
  addCard: PropTypes.func.isRequired
};

export default AddACard;