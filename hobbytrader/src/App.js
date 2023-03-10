import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import LoginPage from './Pages/login';
import Home from './Pages/home';
import UserPage from './Pages/user';
import RegisterPage from './Pages/register';
import FrontPage from './Pages/FrontPage';



const App = () => {
  return (
    <Router>
    <Routes>
        <Route path='/' element={<FrontPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/userprofile' element={<UserPage />} />
    </Routes>
    </Router>
  );
}

export default App;
