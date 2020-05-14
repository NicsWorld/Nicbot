import React from 'react';
import logo from './logo.svg';
import './App.css';
import Controls from './Controls';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="controls">
        <Controls />
        </div>
      </header>
    </div>
  );
}

export default App;
