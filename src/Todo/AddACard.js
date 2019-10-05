import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

export default class AddACard extends React.Component {
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
    const AddButtons = styled.div`
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
    `;

    const noRightMargin = css`
      margin-right: 0;
    `;

    return (
      <div className='FormBox'>
        {
          this.state.showForm
          ? <form className="ListForm" onSubmit={this.handleSubmit} >
              <Input className='AddACardForm' onKeyPress={this.handleEnterKeyPress} style={{ fontSize: '1rem' }}/>
              <AddButtons>
                <Button type="submit" text='add task' />
                <Button onClick={this.toggleForm} text='cancel' className={noRightMargin} />
              </AddButtons>
            </form>
          : <Button href="#" onClick={this.toggleForm} text='add task' />
        }
      </div>
    );
  }
}
