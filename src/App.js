import React from 'react';
import './App.css';
import Starwars from './Starwars/Starwars';
import ResultList from './ResultList/ResultList';
import Spinning from './Spinning';
import ErrorBoundary from './ErrorBundary';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      searchName: {
        results: null,
        error: null,
        search: false,
        loading: false,
      }
    }
  }

  handleSearchSubmit = (name) => {
    this.setState({
      lodaing: true
    })

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
        {this.state.error && <h2> Error has occurred: {this.state.error}</h2>}

        <ErrorBoundary>
          <Starwars handleSearchSubmit={this.handleSearchSubmit} />  
        </ErrorBoundary>

          {this.state.loading && <Spinning />}
        
        <ErrorBoundary>
          <ResultList results={this.state.results}/>
        </ErrorBoundary>     
        
      </main>
    )
  };
};

export default App;
