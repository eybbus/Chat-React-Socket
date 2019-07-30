import React from 'react';
import './App.css';
import Messenger from './components/messenger/messenger';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Messenger />
      </div>
    );
  }
}

export default App;
