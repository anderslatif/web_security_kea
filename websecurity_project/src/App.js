import React, { Component } from 'react';
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import store from "./store/configureStore";
// import logo from './logo.svg';
// import './App.css';

// const state = store.getState();

// console.log(state);
// console.log(store.getState());

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
