import React, { Component } from 'react'
import BlogList from './BlogList'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import BlogDetail from './BlogDetail';
import NavBar from './NavBar';
import StudentList from './student/StudentList';
import StudentAdd from './student/StudentAdd';
import StudentEdit from './student/StudentEdit';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Redirect to="/home" exact path="/"></Redirect>
            {/* <Route exact path="/">
              <Redirect to="/home"></Redirect>
            </Route> */}
            <Route exact path="/home">
              <BlogList />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/blog/:blogid">
              <BlogDetail />
            </Route>
            <Route exact path="/student">
              <StudentList />
            </Route>
            <Route exact path="/student/add">
              <StudentAdd />
            </Route>
            <Route exact path="/student/edit/:id">
              <StudentEdit />
            </Route>
            <Route path="*">
              <div>404 Not Found</div>
            </Route>
          </Switch>

        </BrowserRouter>
      </div>
    )
  }
}
