
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {BrowserRouter as Router,
   Route, 
   Routes
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state={
    progress:0
  }

  setProgress =(progress) =>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
        <Navbar />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        onLoaderFinished={() => this.setProgress(0)}
      />
        <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} key="general" country="in" category="general" />}></Route>
          <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" country="in" category="business" />}></Route>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" country="in" category="entertainment" />}></Route>
          <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" country="in" category="general" />}></Route>
          <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" country="in" category="health" />}></Route>
          <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" country="in" category="science" />}></Route>
          <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" country="in" category="sports" />}></Route>
          <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" country="in" category="technology" />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}