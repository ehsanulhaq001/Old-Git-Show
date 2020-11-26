import React, { Component } from "react";
import "./App.css";
import bg from "../Images/bg.jpg";
import themeSwitch from "../Images/themeswitch.png";
import CardList from "../Components/cardList.js";
import Scroll from "./scroll.js";
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
    "background-image": "url(" + bg + ")",
  },
];
let i = 1;
class App extends Component {
  constructor() {
    super();
    this.state = {
      repos: [],
      theme: {},
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/ehsanulhaq001/repos")
      .then((resp) => resp.json())
      .then((repos) => {
        excludeTheseRepos.forEach((xRepo) => {
          while (repos.find((repos) => repos.name === xRepo)) {
            let k = repos.findIndex((repos) => repos.name === xRepo);
            repos.splice(k, 1);
          }
        });
        return repos;
      })
      .then((repos) => {
        this.setState({
          repos: repos,
          theme: preThemes[1],
        });
      });
  }

  changeTheme = () => {
    if (i) {
      this.setState({
        theme: preThemes[0],
      });
      i = 0;
    } else {
      this.setState({
        theme: preThemes[1],
      });
      i = 1;
    }
  };

  render() {
    const theme = this.state.theme;
    return (
      <div className="bigWrapper" style={theme}>
        <header>
          <h1>{"Ehsan Ul Haq Khawja".toUpperCase()}</h1>
          <div style={{ display: "flex" }}>
            <a
              href="https://github.com/ehsanulhaq001"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 16 16">
                <path
                  fill-rule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
            </a>
            <div onClick={this.changeTheme}>
              <img src={themeSwitch} alt=""></img>
            </div>
          </div>
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
