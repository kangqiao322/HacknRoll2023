import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { authentication } from '../firebase/firebase';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = event => {
      event.preventDefault();
    signInWithEmailAndPassword(authentication, email, password)
      .then(() => {
        // handle successful login
        navigate('/');
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Log in</button>
      {error && <p>{error}</p>}
      </form>
      <Link to="/register">
        <button>Create an account</button>
      </Link>
    </div>
  );
}

export default LoginPage;
