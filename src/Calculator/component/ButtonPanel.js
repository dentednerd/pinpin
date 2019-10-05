import React from "react";
import styled from '@emotion/styled';
import CalcButton from "./CalcButton";

class ButtonPanel extends React.Component {
  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };

  render() {
    const StyledPanel = styled.div`
      background-color: transparent;
      display: flex;
      flex-flow: column nowrap;
      width: 100%;
      margin: 0 auto;
    
      .row {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
      }

      .pink {
        background-color: #ffafbd;
      }

      .wide {
        width: calc(50% - 0.25rem);
      }
    `;
    return (
      <StyledPanel>
        <div className="row">
          <CalcButton name="AC" clickHandler={this.handleClick} className="pink" />
          <CalcButton name="+/-" clickHandler={this.handleClick} className="pink" />
          <CalcButton name="%" clickHandler={this.handleClick} className="pink" />
          <CalcButton name="÷" clickHandler={this.handleClick} className="pink" />
        </div>
        <div className="row">
          <CalcButton name="7" clickHandler={this.handleClick} />
          <CalcButton name="8" clickHandler={this.handleClick} />
          <CalcButton name="9" clickHandler={this.handleClick} />
          <CalcButton name="x" clickHandler={this.handleClick} className="pink" />
        </div>
        <div className="row">
          <CalcButton name="4" clickHandler={this.handleClick} />
          <CalcButton name="5" clickHandler={this.handleClick} />
          <CalcButton name="6" clickHandler={this.handleClick} />
          <CalcButton name="-" clickHandler={this.handleClick} className="pink" />
        </div>
        <div className="row">
          <CalcButton name="1" clickHandler={this.handleClick} />
          <CalcButton name="2" clickHandler={this.handleClick} />
          <CalcButton name="3" clickHandler={this.handleClick} />
          <CalcButton name="+" clickHandler={this.handleClick} className="pink" />
        </div>
        <div className="row">
          <CalcButton name="0" clickHandler={this.handleClick} className="wide" />
          <CalcButton name="." clickHandler={this.handleClick} />
          <CalcButton name="=" clickHandler={this.handleClick} className="pink" />
        </div>
      </StyledPanel>
    );
  }
}

export default ButtonPanel;
