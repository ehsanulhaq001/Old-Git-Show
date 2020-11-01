import React, { Component } from 'react';
import './App.css';
import logo from './github.jpg';
import CardList from '../Components/cardList.js';
import Scroll from './scroll.js';
import "./SEGA.woff";

let excludeTheseRepos = ["Bounce", "ehsanulhaq001", "start-here-guidelines"];
class App extends Component{

  constructor () {
    super();
    this.state = {
      repos: []
    }
  }

  componentDidMount(){
    fetch("https://api.github.com/users/ehsanulhaq001/repos")
    .then(resp => resp.json())
    .then(repos => {
      excludeTheseRepos.forEach((xRepo) => {
        while(repos.find((repos) => repos.name===xRepo)){
          let k = repos.findIndex((repos) => repos.name === xRepo);
          repos.splice(k, 1);
        }
      });
      return repos;
    })
    .then(repos => {
      this.setState ({
        repos: repos
      })
    })
  }

  render(){
    return (
      <div className="bigWrapper">
        <header>
        <h1>{"Ehsan Ul Haq Khawja".toUpperCase()}</h1>
          <a href="https://github.com/ehsanulhaq001" target="_blank" rel="noopener noreferrer"><img src={logo} alt=""/></a>
        </header>
        <div className="main">
          <Scroll>
            <CardList repos={this.state.repos} />
          </Scroll>
        </div>
        <div className="extra"></div>
      </div>
    );
  }
}

export default App;
