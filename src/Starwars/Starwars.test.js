import React from 'react';
import ReactDOM from 'react-dom';
import Starwars from './Starwars';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Starwars />, div);
  ReactDOM.unmountComponentAtNode(div);
});