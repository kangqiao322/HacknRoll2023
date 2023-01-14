import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div style={{ width: '18rem' }}>
      <img src={props.image} className="card-img-top" alt="card image" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a href="login" className="btn btn-primary">Trade</a>
      </div>
    </div>
  );
}

export default Card;
