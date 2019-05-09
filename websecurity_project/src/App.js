import React, { Component } from 'react';
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { fetchAllPosts } from "./actions/postActions";
// import store from "./store/configureStore";
require('dotenv').config();
const store = configureStore();
// store.dispatch(fetchAllPosts());
// import logo from './logo.svg';
// import './App.css';

// const state = store.getState();

// console.log(state);
// console.log(store.getState());
// console.log(store.getState())
// const unsubscribe = store.subscribe(() => {store.getState()})
const Jsx = () => (
  <Provider store={store}>
    <AppRouter></AppRouter>
  </Provider>
);

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <AppRouter></AppRouter> */}
      <Jsx></Jsx>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
