import React from 'react';
import PropTypes from 'prop-types';
import './Starwars.css';
import ValidationError from '../ValidationError/ValidationError';

class Starwars extends React.Component {
    constructor(props) {
        super(props); 
        this.state ={
            searchName: {
                value: '',
                touched: false,
            }
        }
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const {searchName} = this.state;
        this.props.handleSearchSubmit(searchName.value);
        
        event.target.searchName.value='';
        this.setState({
            touched: false,
        }) 
    };

    updateNameSearch = (name) => {
        this.setState({ 
            searchName: 
            {value: name, 
            touched: true}
        })
    };

    validateName() { 
        const name = this.state.searchName.value.trim(); 
        if (name.length === 0) { 
          return 'Name is required'
        }
    };

    render() {
        const searchNameError = this.validateName();
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>         
                <label htmlFor='searchName'> Search Name: </label>
                <input id='searchName' type='text'
                    onChange={(e) => this.updateNameSearch(e.target.value)} />
                    {this.state.searchName.touched && (<ValidationError message={searchNameError} />)}
                <button type='submit' disabled={this.validateName()}> Submit </button>
            </form>
        )
    };
};

export default Starwars;

Starwars.propTypes = {
    //define prop type
    handleSubmit: PropTypes.func
};
