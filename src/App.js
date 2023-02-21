import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import  Heading  from './Heading.js';
import  {SubHeading, InputQuery, SubmitButton}  from './Heading.js';
 

 

class App extends Component {
  render()
  {
      return(
        <>
        <Heading/>
          <SubHeading />
          <InputQuery />
          <SubmitButton />
        </>
        
      )
      
      
  }
   
}

// export default function App() {
//   return (
//     <Gallery />
//   );
// }
export default App;
