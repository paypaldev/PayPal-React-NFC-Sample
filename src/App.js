import logo from './logo.png';
import './App.css';
import Scan from './containers/Scan';
import Write from './containers/Write';
import { useState } from 'react';

function App() {
  const [isScan, setScan] = useState(false);
  const [isWrite, setWrite] = useState(false);

  const onHandleScan =()=>{
    setScan(!isScan);
    setWrite(false)
  }

  const onHandleWrite =()=>{
    setScan(false);
    setWrite(!isWrite)
  }

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>NFC Tool</h1>
      <div className="App-container">
        <button onClick={onHandleScan} className="App-button">Scan</button>
        <button onClick={onHandleWrite} className="App-button">Write</button>
      </div>
      {isScan && <Scan/>}
      {isWrite && <Write/>}
 
    </div>
  );
}

export default App;
