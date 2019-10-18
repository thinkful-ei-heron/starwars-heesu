import React from 'react';
import './App.css';
import Starwars from './Starwars/Starwars';
import ResultList from './ResultList/ResultList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      searchName: {
        results: null,
        error: null,
        search: false,
      }
    }
  }

  handleSearchSubmit = (name) => {
    const API_URL = (`https://swapi.co/api/people?search=${name}`)
    fetch(API_URL)
    .then(res => {
      if(!res.ok) {
        throw new Error(res.statusText)
      }
      return res.json()
    })
    .then(data => {
      console.log(data);
      if(data.count === 0) {
        this.setState({
          results: null,
          search: true,
        })
      } else {
        this.setState({
          search: true,
          results: data.results.map(result => {
            return result;
          })
        })
      }
    })
    .catch(err => {
      this.setState ({
        error: err.message
      })
    })
  };

  render() {
    console.log(this.state.results)
    return (
      <main className="App">
        <h1>StarWars Character App</h1>
        <Starwars handleSearchSubmit={this.handleSearchSubmit} />      
        <ResultList results={this.state.results}/>
      </main>
    )
  };
};

export default App;
