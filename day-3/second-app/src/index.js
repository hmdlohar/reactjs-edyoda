import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { createStore, } from 'redux';

const initialValue = []

// return a state
const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': return [...state, action.payload]
    case 'REMOVE_FROM_CART': return state.filter(item => item.id !== action.payload)
    default: return state
  }
}

const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
