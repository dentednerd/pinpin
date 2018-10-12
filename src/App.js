import React from 'react';
import { Helmet } from 'react-helmet';

import EmojiSearch from './EmojiSearch';

const App = () => {
  return (
    <main className="App">

      <Helmet>
        <title>
          pinpin
        </title>
        <meta name="description" content="pinpin" />
      </Helmet>

      <header className="header">
        <h1>
          pinpin
        </h1>
      </header>
      
      <div className="emoji">
        <EmojiSearch />
      </div>
    </main>
  );
};

export default App;
