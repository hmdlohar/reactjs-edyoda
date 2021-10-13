import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShowHideDiv from './ShowHideDiv'
import Counter from './Counter'
import StudentList from './StudentList';
import LightBulb from './LightBulb'
import ApiText from './ApiText';


// class App extends React.Component {

//   render() {
//     return (
//       <div>

//         <ShowHideDiv />
//       </div>
//     );
//   }
// }

function App() {
  return (
    <div>
      {/* <ShowHideDiv />
      <Counter />
      <hr />
      <StudentList /> */}
      {/* <LightBulb /> */}
      <ApiText />
    </div>
  );
}

export default App;
