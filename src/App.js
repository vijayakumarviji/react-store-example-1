import React from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './counter/counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: action.payload.count
      }
    case 'DECREMENT':
      return {
        count: action.payload.count
      }
    default:
      return {
        count: 0
      }
  }

}

const store = createStore(reducer);


function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
