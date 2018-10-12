import React from 'react';
import { Helmet } from 'react-helmet';

import EmojiSearch from './EmojiSearch';
import DictionarySearch from './DictionarySearch';
import Calculator from './Calculator';
import Kanban from './Kanban';

import Chooser from './Chooser';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: null,
    };
  }

  handleClick = buttonName => {
    this.setState({ visible: buttonName });
  };

  // convert to stateful
  // add buttons
  // buttons trigger tiny apps

  render() {
    return (
      <main className="App">
  
        <Helmet>
          <title>
            pinpin
          </title>
          <meta name="description" content="pinpin" />
        </Helmet>


        <section className="top">

          <h1>pinpin</h1>

          <Chooser handleClick={this.handleClick} appName="emoji" />
          <Chooser handleClick={this.handleClick} appName="dictionary" />
          <Chooser handleClick={this.handleClick} appName="calculator" />
          <Chooser handleClick={this.handleClick} appName="kanban" />

        </section>

        <section className="bottom">
  
          {this.state.visible === "emoji" && (
            <div className="emoji">
              <EmojiSearch />
            </div>
          )}
    
          {this.state.visible === "dictionary" && (
            <div className="dictionary">
              <DictionarySearch />
            </div>
          )}
    
          {this.state.visible === "calculator" && (
            <div className="calculator">
              <Calculator />
            </div>
          )}

          {this.state.visible === "kanban" && (
            <div className="kanban">
              <Kanban />
            </div>
          )}

        </section>
        
      </main>
    );
  }
};

export default App;
