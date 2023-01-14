
import React from 'react';
import CardContainer from '../Components/CardContainer';
import './home.css'

function Home() {
  return (
    <div className="home-page">
    <h1>Welcome to Hobby Trader!</h1>
      <div className="card-container-wrapper">
        <CardContainer />
        <CardContainer />
        <CardContainer />
      </div>
    </div>
  );
}

export default Home;