import React, { useState } from 'react'
import Screen1 from './components/Screen1/Screen1';
import Screen2 from './components/Screen2/Screen2';

import './global.scss'
function App() {
  return (
    <div className="App">
        <Screen1/>
        <hr />
        <Screen2/>
    </div>
  );
}

export default App;
