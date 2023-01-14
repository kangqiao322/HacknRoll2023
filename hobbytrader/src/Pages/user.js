import React, { useState } from 'react';
import './user.css';

function UserProfilePage() {
  const [user, setUser] = useState({
    name: "John Doe",
    contacts: "jonnydoe@gmail.com 98384733.",
    avatar: "https://via.placeholder.com/150"
  });

  const [listings, setListings] = useState([
    { id: 2, title: "Apartment for sale", location: "Chicago", price: 300000 },
    { id: 2, title: "Apartment for sale", location: "Chicago", price: 300000 },
    { id: 3, title: "Office space for lease", location: "San Francisco", price: 5000 },
    { id: 3, title: "Office space for lease", location: "San Francisco", price: 5000 },
    { id: 3, title: "Office space for lease", location: "San Francisco", price: 5000 },
    { id: 3, title: "Office space for lease", location: "San Francisco", price: 5000 },
    { id: 3, title: "Office space for lease", location: "San Francisco", price: 5000 }
  ]);

  const handleNameChange = (e) => {
    setUser({ ...user, name: e.target.value });
  }

  const handlecontactsChange = (e) => {
    setUser({ ...user, contacts: e.target.value });
  }

  

  return (
    <div className="user-profile">
      <img src={user.avatar} alt="User Avatar" className="user-avatar" />
      <div className="user-info">
        <h1>{user.name}</h1>
        <p>{user.contacts}</p>
        <input type="text" value={user.name} onChange={handleNameChange} className="user-input" placeholder="Name" />
        <textarea value={user.contacts} onChange={handlecontactsChange} className="user-textarea" placeholder="contacts"></textarea>
        <div className="listings-page">
            <h1>Listings</h1>
            <div className="listings-container">
            {listings.map((listing) => (
                <div key={listing.id} className="listing-card">
                <h2>{listing.title}</h2>
                <p>Location: {listing.location}</p>
                <p>Price: ${listing.price}</p>
            </div>
            ))}
        </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfilePage;