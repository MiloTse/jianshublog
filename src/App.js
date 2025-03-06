import React, { Component} from 'react';
import Header from "./common/header";
import store from "./store";
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Routes} from "react-router-dom";

//store passing data to Header
function App() {
  return (
      <Provider store={store}>
        <div>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path='/' exact render={()=><div>home</div>}></Route>
                    <Route path='/detail' exact render={()=><div>detail</div>}></Route>
                </Routes>

            </BrowserRouter>

        </div>

      </Provider>

  );
}

export default App;
