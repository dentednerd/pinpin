import React from "react";
import styled from '@emotion/styled';
import Display from "./component/Display";
import ButtonPanel from "./component/ButtonPanel";
import calculate from "./logic/calculate";

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    const StyledCalculator = styled.div`
      width: 100%;
      margin: 0 auto;
    `;
    return (
      <StyledCalculator>
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </StyledCalculator>
    );
  }
}
