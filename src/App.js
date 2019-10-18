import React from 'react';
import './App.css';
import Starwars from './Starwars/Starwars';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      searchName: {
        results: [],
        error: null,
      }
    }
  }

  handleSearchSubmit = (name) => {
    fetch(`https://swapi.co/api/people?search=${name}`)
    .then(res => {
      if(!res.ok) {
        throw new Error(res.statusText)
      }
      return res.json()
    })
    .then(data => {
      this.setState({
        results: data.results.map(result => {
          console.log(result);
          return {name: result.name}
        })
      })
    })
    .catch(err => {
      this.setState ({
        error: err.message
      })
    })
  };

  //nameApi

  render() {
    return (
      <main className="App">
        <div>Starwars App</div>
        <Starwars handleSearchSubmit={this.handleSearchSubmit} />
      </main>
    )
  };
};

export default App;
