import React, { Component } from 'react';
import './App.css';
import logo from './github.jpg';
import CardList from '../Components/cardList.js';
import Scroll from './scroll.js';

let excludeTheseRepos = ["ehsanulhaq001", "start-here-guidelines"];
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
          <img src={logo} alt=""/>
          <h1>{"Ehsan Ul Haq Khawja".toUpperCase()}</h1>
        </header>
        <div className="main">
          <Scroll>
            <CardList repos={this.state.repos} />
          </Scroll>
        </div>
      </div>
    );
  }
}

export default App;
