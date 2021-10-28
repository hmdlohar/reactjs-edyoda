import Body from "./components/body/Body";
import Header from "./components/header/Header";
import './App.css'
import React from "react";
import { connect } from 'react-redux'


class App extends React.Component {
  state = {
    selectedPlaces: []
  }

  onSelect = (objPlace) => {
    this.setState({ selectedPlaces: [...this.state.selectedPlaces, objPlace] })
  }

  render() {
    // console.log(this.props)
    return (
      <div>
        <Header selectedPlaces={this.state.selectedPlaces} />
        <Body onSelect={this.onSelect} selectedPlaces={this.state.selectedPlaces} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state
  };
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "INCREMENT" })
//   }
// }

export default App;
