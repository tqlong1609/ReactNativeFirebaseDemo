import React from 'react';
//redux
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../store/reducers';
import App from '../../App';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
const providerApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default providerApp;
