import React from 'react';
import Card from './card.js';
import './cardList.css';

function CardList(props) {
  const cards = [];
  const {repos} = props;
  repos.map((repo, i)=>{
    return cards.push(<Card key={i} repo={repo} />)
  })

  return (
    <div className="cardsWrapper">
      {cards}
    </div>
    );
}

export default CardList;