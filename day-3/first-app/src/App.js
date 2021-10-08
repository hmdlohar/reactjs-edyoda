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

// F12 to see definition of code. 

// Function Component. 
function App() {

  const fName = "Hamid"
  const lastName = "Lohar"

  return (
    <div>
      <MyHeader
        firstName="Ankit"
        lastName={lastName}
        gender={"Male"}
        imgURL={"https://lh3.googleusercontent.com/ogw/ADea4I4vJe5tdO_tOUnF59qfbzIbOdvuwEosk5FdpRjPcg=s32-c-mo"}
      />
      <MyBody
        firstName={fName}
        lastName={lastName}
        gender={"Male"}
        imgURL={"https://lh3.googleusercontent.com/ogw/ADea4I4vJe5tdO_tOUnF59qfbzIbOdvuwEosk5FdpRjPcg=s32-c-mo"} />
    </div>
  );
}

export default App;




