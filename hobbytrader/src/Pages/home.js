<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    // Use useState to manage the state of the component
    const [featuredProducts, setFeaturedProducts] = useState([]);
  
    // Use useEffect to fetch data from an API
    useEffect(() => {
        axios.get('https://my-api.com/featured-products')
            .then(res => setFeaturedProducts(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <header>
                <h1>Welcome to My E-commerce Site</h1>
            </header>
            <main>
                <h2>Featured Products</h2>
                <ul>
                    {featuredProducts.map(product => (
                        <li key={product.id}>
                            <h3>{product.name}</h3>
                            <img src={product.image} alt={product.name} />
                            <p>{product.price}</p>
                        </li>
                    ))}
                </ul>
            </main>
            <footer>
                <p>Copyright © My E-commerce Site</p>
            </footer>
        </div>
    );
=======
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
>>>>>>> bacab73b856e4a8cab494415a323a41b44e1ea5e
}

export default Home;