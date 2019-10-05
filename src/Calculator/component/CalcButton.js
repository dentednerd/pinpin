import React from "react";
import styled from '@emotion/styled';

export default class CalcButton extends React.Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  render() {
    const StyledCalcButton = styled.button`
      height: 3rem;
      width: calc(25% - 0.25rem);
      background-color: white;
      color: #828dac;
      font-size: 1.25rem;
      font-family: 'Pangolin', cursive;
      border: none;
      border-radius: 0.25rem;
      margin-bottom: 0.25rem;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
    `;

    return (
      <StyledCalcButton onClick={this.handleClick} {...this.props}>{this.props.name}</StyledCalcButton>
    );
  }
}

