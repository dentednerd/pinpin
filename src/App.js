import React from 'react';
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
      isEmojiActive: false,
      isDictionaryActive: false,
      isCalculatorActive: false,
      isKanbanActive: false
    };
    this.openEmoji = this.openEmoji.bind(this);
    this.openDictionary = this.openDictionary.bind(this);
    this.openCalculator = this.openCalculator.bind(this);
    this.openKanban = this.openKanban.bind(this)
  }

  openEmoji = () => {
    this.setState({ 
      emojiActive: true,
      dictionaryActive: false,
      calculatorActive: false,
      kanbanActive: false
    })
  }

  openDictionary = () => {
    this.setState({
      emojiActive: false,
      dictionaryActive: true,
      calculatorActive: false,
      kanbanActive: false
    })
  }

  openCalculator = () => {
    this.setState({
      emojiActive: false,
      dictionaryActive: false,
      calculatorActive: true,
      kanbanActive: false})
  }

  openKanban = () => {
    this.setState({
      emojiActive: false,
      dictionaryActive: false,
      calculatorActive: false,
      kanbanActive: true
    })
  }

  render() {
    return (
      <main className="App">
        <section className="grid">
          <section className="left">
            <Greeter />
          </section>

          <section className="right">
            {this.state.emojiActive && (
              <div className="emoji">
                <EmojiSearch />
              </div>
            )}
            {this.state.dictionaryActive && (
              <div className="dictionary">
                <DictionarySearch />
              </div>
            )}
            {this.state.calculatorActive && (
              <div className="calculator">
                <Calculator />
              </div>
            )}
            {this.state.kanbanActive && (
              <div className="kanban">
                <Kanban />
              </div>
            )}
          </section>

        </section>

        <footer>
          <Chooser handleClick={this.openEmoji} appName="emoji" />
          <Chooser handleClick={this.openDictionary} appName="dictionary" />
          <Chooser handleClick={this.openCalculator} appName="calculator" />
          <Chooser handleClick={this.openKanban} appName="kanban" />
          <span>pinpin</span>
        </footer>
        
      </main>
    );
  }
};

export default App;
