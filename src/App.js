import React from 'react';
import axios from 'axios';
import Greeter from './Greeter';
import EmojiSearch from './EmojiSearch';
import Beats from './Beats';
import Calculator from './Calculator';
import Todo from './Todo';
import Settings from './Settings';
import Chooser from './atoms/Chooser';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmojiActive: false,
      isBeatsActive: false,
      isCalculatorActive: false,
      isTodoActive: false,
      isSettingsActive: false,
      name: localStorage.getItem('pinpinName') || localStorage.setItem('pinpinName', prompt('What can pinpin call you?', 'Your name')),
      location: localStorage.getItem('pinpinLocation') || localStorage.setItem('pinpinLocation', prompt('Where are you? (City name, 2-letter country code)', 'e.g. London,UK')),
      weather: null
    };
    this.openEmoji = this.openEmoji.bind(this);
    this.openBeats = this.openBeats.bind(this);
    this.openCalculator = this.openCalculator.bind(this);
    this.openTodo = this.openTodo.bind(this);
    this.openSettings = this.openSettings.bind(this);
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
      isEmojiActive: true,
      isBeatsActive: false,
      isCalculatorActive: false,
      isTodoActive: false,
      isSettingsActive: false,
    })
  }

  openBeats = () => {
    this.setState({
      isEmojiActive: false,
      isBeatsActive: true,
      isCalculatorActive: false,
      isTodoActive: false,
      isSettingsActive: false,
    })
  }

  openCalculator = () => {
    this.setState({
      isEmojiActive: false,
      isBeatsActive: false,
      isCalculatorActive: true,
      isTodoActive: false,
      isSettingsActive: false,
    })
  }

  openTodo = () => {
    this.setState({
      isEmojiActive: false,
      isBeatsActive: false,
      isCalculatorActive: false,
      isTodoActive: true,
      isSettingsActive: false,
    })
  }

  openSettings = () => {
    this.setState({
      isEmojiActive: false,
      isBeatsActive: false,
      isCalculatorActive: false,
      isTodoActive: false,
      isSettingsActive: true,
    })
  }

  render() {
    const condition = this.state.weather !== null && this.state.weather.weather[0].main;

    return (
      <main className="App">
        <section className="grid">
          <section className="left">
            <Greeter name={this.state.name} location={this.state.location} condition={condition} />
          </section>

          <section className="right">
            <div className="wrapper">
              {this.state.isEmojiActive && <EmojiSearch />}
              {this.state.isBeatsActive && <Beats />}
              {this.state.isCalculatorActive && <Calculator />}
              {this.state.isTodoActive && <Todo />}
              {this.state.isSettingsActive && <Settings />}
            </div>
          </section>

        </section>

        <footer>
          <Chooser handleClick={this.openEmoji} appName="emoji" />
          <Chooser handleClick={this.openBeats} appName="calm beats" />
          <Chooser handleClick={this.openCalculator} appName="calculator" />
          <Chooser handleClick={this.openTodo} appName="todo" />
          <Chooser handleClick={this.openSettings} appName="settings" />
          <span>pinpin</span>
        </footer>
        
      </main>
    );
  }
};

export default App;
