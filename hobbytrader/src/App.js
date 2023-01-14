import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import LoginPage from './Pages/login';
import Home from './Pages/home';
import RegisterPage from './Pages/regsiter';
import UserPage from './Pages/user';


const App = () => {
  return (
    <Router>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/userprofile' element={<UserPage />} />
    </Routes>
    </Router>
  );
}

export default App;
