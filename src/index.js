import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { config } from './config';
import { resetContext } from 'kea';

config();

resetContext({
  plugins: [
    // additional kea plugins
  ],
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
