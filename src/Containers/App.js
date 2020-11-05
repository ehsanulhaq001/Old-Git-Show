import React, { Component } from 'react';
import './App.css';
import logo from '../Images/github.png';
import bg from '../Images/bg.jpg';
import themeSwitch from '../Images/themeswitch.png';
import CardList from '../Components/cardList.js';
import Scroll from './scroll.js';
import "./SEGA.woff";

let excludeTheseRepos = ["Bounce", "ehsanulhaq001", "start-here-guidelines"];
let preThemes = [
  {
    "--solid": "#b2fbe6",
    "--highlight": "#8cffb9",
    "--faint": "#c0f5e7ff",
    "--text": "#0a1c50",
    "--invert": "0%",
    // "background-image": "url(" + bg +")"
    },
    {
    "--solid": "#222f3e",
    "--highlight": "#1ac298",
    "--faint": "#334b67a0",
    "--text": "#8cffb9",
    "--invert": "48%",
    "background-image": "url(" + bg +")"
  }
]
let i = 1;
class App extends Component{

  constructor () {
    super();
    this.state = {
      repos: [],
      theme: {}
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
        repos: repos,
        theme: preThemes[1]
      });
    });
  }

  changeTheme = () => {
    if(i){
      this.setState({
        theme: preThemes[0]
      });
      i = 0;
    }
    else {
      this.setState({
        theme: preThemes[1]
      });
      i = 1;
    }
  }

  render(){
    const theme = this.state.theme;
    return (
      <div className="bigWrapper"
      style={theme}
      >
        <header>
          <h1>{"Ehsan Ul Haq Khawja".toUpperCase()}</h1>
          <div style={{"display": "flex"}}>
            <a href="https://github.com/ehsanulhaq001" target="_blank" rel="noopener noreferrer"><img src={logo} alt=""/></a>
            <div onClick={this.changeTheme}><img src={themeSwitch} alt=""></img></div>
          </div>
        </header>
        <div className="main">
          <Scroll>
            <CardList repos={this.state.repos} />
          </Scroll>
        </div>
        <div className="extra">
        </div>
      </div>
    );
  }
}

export default App;
