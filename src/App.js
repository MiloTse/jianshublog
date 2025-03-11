import React from 'react';
import Header from "./common/header";
import store from "./store";
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';

//store passing data to Header
function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/detail' element={<Detail />} />
            </Routes>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
