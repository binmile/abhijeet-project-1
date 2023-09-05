import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarComponent from './pages/HomePage/components/ComponentNavbar/ComponentNavbar';
import LayoutComponents from './pages/HomePage/components/ComponentsLayout/ComponentLayout';






const App = () => {
  return (
    <div className='p-[20px] md:p-[85px]'>
      <NavbarComponent/>
      <LayoutComponents/>
    </div>
  )
}

export default App
