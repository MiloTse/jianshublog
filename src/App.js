import React from 'react';
import Header from "./common/header/Header";
import store from "./store";
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/home/Home';
import Detail from './pages/detail/DetailLoadable.jsx';
import Login from './pages/login/Login';
import Write from './pages/write/Write';

//store passing data to Header
function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/write' element={<Write />} />
                <Route path='/detail/:id' element={<Detail />} />
            </Routes>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
