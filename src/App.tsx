import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarComponent from './Components/components/navbar/NavbarComponent';
import LayoutComponents from './Components/LayoutComponents/LayoutComponents';




const App = () => {
  return (
    <div>
      <NavbarComponent/>
      <LayoutComponents/>
    </div>
  )
}

export default App
