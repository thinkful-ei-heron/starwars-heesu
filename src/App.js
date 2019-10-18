import React, {Component} from 'react';
import './App.css';
import Starwars from './Starwars/Starwars';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      people: [],
      loading: false,
      error: null,
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => {
      if(!res.ok) {
        throw new Error(res.statusText)
      }
      return res.json()
    })
    .then()
    .catch(error => this.setState ({error}))
  }

  render() {
    return (
      <div className="App">
        <h1>Starwars App</h1>
        <Starwars />
      </div>
    )
  };
}

export default App;
