import React from 'react';
import ReactDOM from 'react-dom';
import { Head } from './pages';

ReactDOM.hydrate(
  <Head />,
  document.getElementById('root')
);