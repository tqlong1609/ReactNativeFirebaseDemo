import React from 'react';
//redux
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from '../store/reducers';
import App from '../../App';
const store = createStore(reducer);
const providerApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default providerApp;
