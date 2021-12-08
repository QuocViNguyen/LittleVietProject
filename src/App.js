import './App.css';
import { NavBar } from './Components/NavBar';
import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Menu from './Pages/Menu';

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
      setValue(newValue);
  };

  return (
    <>
    {NavBar(value, handleChange)}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/menu" exact element={<Menu/>} />
        </Routes>
    </>
  );
}

export default App;
