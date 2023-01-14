import React, { useState } from 'react';
import './frontpage.css';

  function FrontPage() {
        const [hobby, setHobby] = useState('');
        const handleSearch = (event, props) => {
          event.preventDefault();
          props.onSearch(hobby);
        }

    return (
        <div className='background'>
            <div className='header'>
                <form onSubmit={handleSearch}>
                <input 
                    type="text" 
                    placeholder="Find your hobbies..." 
                    value={hobby}
                    onChange={event => setHobby(event.target.value)}
                />
                <button type="submit">Search</button>
                </form>
            <img className = 'img' src = "https://assets.bonappetit.com/photos/62f5674caf9bae430097be0f/3:2/w_2793,h_1862,c_limit/0810-no-fail-roast-chicken-v2.jpg"></img>
            </div>
        </div>
    )
  }

  export default FrontPage;