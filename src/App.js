import React from 'react';
import { Helmet } from 'react-helmet';

import Greeter from './Greeter';
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

  render() {
    return (
      <main className="App">
  
        <Helmet>
          <title>
            pinpin
          </title>
          <meta name="description" content="pinpin" />
        </Helmet>

        <section className="grid">

        <section className="left">
          <Greeter />
        </section>

        <section className="right">
  
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

        </section>

        <footer>
          <Chooser handleClick={this.handleClick} appName="emoji" />
          <Chooser handleClick={this.handleClick} appName="dictionary" />
          <Chooser handleClick={this.handleClick} appName="calculator" />
          <Chooser handleClick={this.handleClick} appName="kanban" />
          <span>pinpin</span>
        </footer>
        
      </main>
    );
  }
};

export default App;
