import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
     <Greet name = "clark" heroName="superman">
      <p> he is a famous superhero</p>
     </Greet>

     <Greet name = "Bruce" heroName="batman">
      <button>superhero</button>
     </Greet>
     <Greet name = "Diana" heroName="wonder woman"/>
     <Welcome name = "clark" heroName="superman"/>
     <Welcome name = "Bruce" heroName="batman"/>
     <Welcome name = "Diana" heroName="wonder woman" />
    </div>
  );
} 

export default App;
