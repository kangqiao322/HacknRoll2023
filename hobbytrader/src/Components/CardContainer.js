import React from 'react';
import Card from './Card';

const CardContainer = () => {
  return (
    <div>
      <Card 
        image="logo192.png" 
        title="Card Title" 
        text="Card Description" 
        btn="Go somewhere"
      />
    </div>
  )
}

export default CardContainer;
