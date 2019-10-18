import React from 'react';
import './ResultList.css';
//import PropTypes from 'prop-types';

class ResultList extends React.Component {
    render() {
        console.log(this.props.results);
        if(this.props.results === undefined) {
            return (
                <p className='noResult'> No Result Found </p>
            )
        } else {
            return (
                <ul>
                    {this.props.results.map((person, i) => {
                        return <li key={i}>{person.name} </li>
                    })}
                </ul>
            )
        }
    }
};

export default ResultList;

// ResultList.propTypes = {
//     //define prop type
//     handleSubmit: PropTypes.func
// };