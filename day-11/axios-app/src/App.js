import './App.css';
import axios from 'axios'

function App() {
  return (
    <div>
      <h3>Axios Example</h3>
      <h5>GET Request</h5>
      <button onClick={doGet}>Do GET</button>
      <h5>POST Request</h5>
      <button onClick={doPOST}>Do POST</button>
      <h5>PUT Request</h5>
      <button onClick={doPUT}>Do PUT</button>
    </div>
  );
}

function doPUT() {
  axios({
    method: 'PUT',
    url: "https://reqres.in/api/users/4",
    data: {
      "name": "morpheus",
      "job": "zion resident"
  }
  })
    .then((response) => {
      // console.log(response, "Response")
      console.log(response.data, "This is data")
    })
    .catch((err) => {
      console.log(err, 'error ')
    })
}

function doPOST() {
  axios({
    method: 'POST',
    url: "http://localhost:1337/students",
    data: {
      name:"Hamid 3",
      subject:'4150'
    }
  })
    .then((response) => {
      // console.log(response, "Response")
      console.log(response.data, "This is data")
    })
    .catch((err) => {
      console.log(err, 'error ')
    })
}

// How to write GET Method/ GET API
function doGet() {
  axios({
    method: 'GET',
    url: "http://dummy.restapiexample.com/api/v1/employees",
  })
    .then((response) => {
      // console.log(response, "Response")
      console.log(response.data, "This is data")
    })
    .catch((err) => {
      console.log(err.response.data, 'error ')
    })
}

export default App;
