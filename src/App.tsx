import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarComponent from './Component/components/navbar/NavbarComponent';
import LayoutComponents from './Component/LayoutComponents/LayoutComponents';





const App = () => {
  return (
    <div>
      <NavbarComponent/>
      <LayoutComponents/>
    </div>
  )
}

export default App
