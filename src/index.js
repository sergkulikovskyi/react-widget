import React                 from 'react';
import { render }            from 'react-dom';
import { Provider }          from 'react-redux';
import { ConnectedRouter }   from 'react-router-redux/';

import store, { history }    from './store';

import App                   from './App';

import registerServiceWorker from './registerServiceWorker';

import './index.css';


const target = document.getElementById('root');

const app = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

render(app, target);
registerServiceWorker();
