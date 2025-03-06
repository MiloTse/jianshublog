import React from 'react';
import Header from "./common/header";
import store from "./store";
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/home/home';
import Detail from './pages/detail/detail';

//store passing data to Header
function App() {
  return (
      <Provider store={store}>
        <div>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/detail' element={<Detail />} />
                </Routes>
            </BrowserRouter>
        </div>
      </Provider>
  );
}

export default App;
