import './App.css';
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Merchandise from './Pages/Merchandise';

function App()
{
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" exact element={<Menu/>} />
        <Route path="/merchandise" exact element={<Merchandise/>} />
      </Routes>
    </>
  );
}

export default App;
