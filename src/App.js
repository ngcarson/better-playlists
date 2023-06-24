import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { render } from '@testing-library/react';

let defaultTextColor = '#fff'
let defaultStyle = {
  color: defaultTextColor
};

class Aggregate extends Component {
  render() {
    return (
      <div style={{...defaultStyle, width: "40%", display: 'inline-block'}}>
        <h2 style={{color: defaultTextColor}}>Number Text</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={{color: defaultTextColor}}>
        <img></img>
        <input type="text"></input>
        Filter
      </div>
    )
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{...defaultStyle, display: 'inline-block', width: "25%"}}>
        <img />
        <h3>Playlist Name</h3>
        <ul><li>Song 1</li><li>Song 2</li><li>Song 3</li><li>Song 4</li></ul>
      </div>
    )
  }
}

function App() {
  let name = 'Carson'
  let green = '#FF1212'
  let headerStyle = { color: green, 'font-size': '50px' }
  return (
    <div className="App">
      <h1>Title</h1>
      <Aggregate/>
      <Aggregate/>
      <Filter/>
      <Playlist/>
      <Playlist/>
      <Playlist/>
      <Playlist/>
    </div>
  );
}

export default App;
