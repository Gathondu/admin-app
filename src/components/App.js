import React, { Component } from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";





class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="container">
                <Header />
                <Route exact path="/" render={() => <HomePage title="Administration"/>}/>
                <Route path="/about" render={() => <AboutPage title="About"/>}/>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
