import React from 'react';
import './App.css'
import MyBody from './components/MyBody';
import MyHeader from './components/MyHeader';
// inbuilt components in react
// div, span, img, header. .. Most of all html 
// tags are built-in component for react

// We can create our custom component. 
// We can return any component in return statement. 

// Hello world.  == Children

// Function Component. 
function App() {
  return (
    <div>
      <MyHeader />
      <MyBody />
    </div>
  );
}

export default App;




