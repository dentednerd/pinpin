import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textEditorVisible: false
    };

    this.makeTextEditorVisible = this.makeTextEditorVisible.bind(this);
    this.updateCard = this.updateCard.bind(this);
    this.handleEnterKeyPress = this.handleEnterKeyPress.bind(this);
  }

  makeTextEditorVisible() {
    this.setState({
      textEditorVisible: !this.state.textEditorVisible
    });
  }

  updateCard(event) {
    event.preventDefault();
    const newText = event.target[0].value;
    this.props.editCard(newText, this.props.id, this.props.card.id);
  }

  handleEnterKeyPress (e) {
      if (e && e.key === 'Enter') {
        this.props.editCard(document.forms[0].childNodes[0].value, this.props.id, this.props.card.id);
      }
  }

  render() {
    return (
      // eslint-disable-next-line
      <a href='#'>
        <div>
          {
            this.state.textEditorVisible
              ? (
                <form onSubmit={this.updateCard}>
                  <section className='modal-card-body'>
                    <textarea onKeyPress={this.handleEnterKeyPress} className="editCard">
                      {this.props.card.text}
                    </textarea>
                  </section>
                  <footer className='modal-card-foot'>
                    <button className='button is-success'>Save</button>
                    <button onClick={this.makeTextEditorVisible} className="modal-close is-large"></button>
                  </footer>
                </form>
              )
            : (
              <div className='card'>
                {this.props.card.text}
                <button onClick={this.makeTextEditorVisible} className='edit-card-button'>
                  Edit
                </button>
              </div>
            )
          }
        </div>
      </a>
    );
  }
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  card: PropTypes.object.isRequired,
  editCard: PropTypes.func.isRequired
};

export default Card;