import React from 'react';
import { getCode } from 'country-list';
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
    navigator.geolocation.getCurrentPosition(success, error);
    function success(position) {
        console.log('LAT:', position.coords.latitude)
        console.log('LNG:', position.coords.longitude)
        console.log('POSITION:', position);

        var reverseGeo = 'https://eu1.locationiq.com/v1/reverse.php?key=a08df7cb731b67&lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&format=json';

        const xhr = new XMLHttpRequest();
        xhr.addEventListener('load', () => {
          console.log(xhr.responseText);
        })
        xhr.open('GET', reverseGeo);
        xhr.send();

        const location = JSON.stringify(reverseGeo);
        console.log(location);

        // var GEOCODING = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + '%2C' + position.coords.longitude + '&language=en';

        // const location = JSON.stringify(GEOCODING)
        // console.log(location)
    }

    function error(err) {
        console.log(err)
    }


    // OpenWeather API key = 9ce56d82d3380200bba32017c0ba1d6b

    // url looks like https://api.openweathermap.org/data/2.5/weather?q=Manchester,UK&appid=9ce56d82d3380200bba32017c0ba1d6b

    console.log(getCode(England));
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
          <Chooser handleClick={this.openKanban} appName="todo" />
          <span>pinpin</span>
        </footer>
        
      </main>
    );
  }
};

export default App;
