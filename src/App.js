import React from 'react';
import axios from 'axios';
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
      isKanbanActive: false,
      location: localStorage.getItem('pinpinLocation'),
      weather: null
    };
    this.openEmoji = this.openEmoji.bind(this);
    this.openDictionary = this.openDictionary.bind(this);
    this.openCalculator = this.openCalculator.bind(this);
    this.openKanban = this.openKanban.bind(this);
    this.resetName = this.resetName.bind(this);
    this.resetLocation = this.resetLocation.bind(this);
  }

  componentDidMount() {
    const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + this.state.location + '&appid=9ce56d82d3380200bba32017c0ba1d6b';
    axios.get(weatherUrl)
      .then(res => {
        this.setState({ weather: res.data });
      }
    )
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
  resetName = () => {
    localStorage.removeItem('pinpinName');
    localStorage.setItem('pinpinName', prompt('What can pinpin call you?', 'Your name'));
  }

  resetLocation = () => {
    localStorage.removeItem('pinpinLocation');
    localStorage.setItem('pinpinLocation', prompt('Where are you? (City name, 2-letter country code)', 'e.g. London,UK'));
  }

  render() {
    if (localStorage.getItem('pinpinName') === null) {
      localStorage.setItem('pinpinName', prompt('What can pinpin call you?', 'Your name'));
    }

    if (localStorage.getItem('pinpinLocation') === null) {
      localStorage.setItem('pinpinLocation', prompt('Where are you? (City name, 2-letter country code)', 'e.g. London,UK'));
    }

    const name = localStorage.getItem('pinpinName');
    const condition = this.state.weather !== null && this.state.weather.weather[0].main;

    return (
      <main className="App">
        <section className="grid">
          <section className="left">
            <Greeter name={name} location={this.state.location} condition={condition} />
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
          <Chooser handleClick={this.openKanban} appName="todo" />
          <button onClick={this.resetName}>reset name</button>
          <button onClick={this.resetLocation}>reset location</button>
          <span>pinpin</span>
        </footer>
        
      </main>
    );
  }
};

export default App;
