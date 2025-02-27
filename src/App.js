import React, { Component} from 'react';
import Header from "./common/header";
import store from "./store";
import { Provider } from 'react-redux';


//store passing data to Header
function App() {
  return (
      <Provider store={store}>

        <Header />
      </Provider>

  );
}

export default App;
