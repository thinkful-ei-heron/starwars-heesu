import React from 'react';
import ReactDOM from 'react-dom';
import ResultList from './ResultList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ResultList />, div);
  ReactDOM.unmountComponentAtNode(div);
});