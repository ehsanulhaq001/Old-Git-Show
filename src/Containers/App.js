import React, { Component } from 'react';
import './App.css';
import logo from './github.jpg';
import themeSwitch from './themeswitch.png';
import CardList from '../Components/cardList.js';
import Scroll from './scroll.js';
import "./SEGA.woff";

let excludeTheseRepos = ["Bounce", "ehsanulhaq001", "start-here-guidelines"];
let preThemes = [
  {
    "--solid": "#ffda79",
    "--faint": "#33d9b2",
    "--highlight": "#ff793f"
    },
    {
    "--solid": "#222f3e",
    "--lessDark": "#334b67",
    "--highlight": "#1ac298"
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
