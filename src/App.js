import React from 'react';
import { Helmet } from 'react-helmet';

import EmojiSearch from './EmojiSearch';
import DictionarySearch from './DictionarySearch';

const App = () => {
  return (
    <main className="App">

      <Helmet>
        <title>
          pinpin
        </title>
        <meta name="description" content="pinpin" />
      </Helmet>

      <div className="emoji">
        <EmojiSearch />
      </div>

      <div className="dictionary">
        <DictionarySearch />
      </div>
      
    </main>
  );
};

export default App;
