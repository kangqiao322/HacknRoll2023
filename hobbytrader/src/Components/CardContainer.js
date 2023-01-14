import React from 'react';
import Card from './Card';
import './CardContainer.css';

const CardContainer = () => {

  return (
    <div>
      <Card 
        image="logo192.png" 
        title="Item 69" 
        text="wow" 
        btn="Trade"
      />
    </div>
  )
}

export default CardContainer;
