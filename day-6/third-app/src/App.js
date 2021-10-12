import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShowHideDiv from './ShowHideDiv'
import Counter from './Counter'
import StudentList from './StudentList';


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
      <ShowHideDiv />
      <Counter />
      <hr />
      <StudentList />
    </div>
  );
}

export default App;
