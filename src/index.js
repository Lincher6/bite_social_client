import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { ErrorBoundary } from 'features/common';

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
);

serviceWorker.unregister();
