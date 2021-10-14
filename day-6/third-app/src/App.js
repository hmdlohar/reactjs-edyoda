import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import ShowHideDiv from './ShowHideDiv'
// import Counter from './Counter'
// import StudentList from './StudentList';
// import LightBulb from './LightBulb'
// import ApiText from './ApiText';
// import LargeComponent from './large-component/LargeComponent';
import GoodLargeComponent from './large-component/GoodLargeComponent';


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
      {/* <ApiText /> */}
      {/* <LargeComponent /> */}
      <GoodLargeComponent />
    </div>
  );
}

export default App;
