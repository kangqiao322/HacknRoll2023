import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} className="card-img-top" alt="card image" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a href={props.link} className="btn">{props.btn}</a>
      </div>
    </div>
  );
}

export default Card;
