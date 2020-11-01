import React from 'react';
import './card.css';
function Card(props) {
  const {repo} = props;
  const url = "https://" + repo.owner.login + ".github.io/" + repo.name;
  const imageUrl = "https://raw.githubusercontent.com/" + repo.owner.login + "/" + repo.name + "/master/preview.png";
  return(
    <div className="wrapper">
      <h2>{repo.name}</h2>
        <a href={url} target="_blank" rel="noopener noreferrer" className="preview" style={{
          backgroundImage: "url(" + imageUrl + ")"
        }}>
      </a>
      {/* <h3>{repo.owner.login}</h3> */}
    </div>
    
  )
}

export default Card;