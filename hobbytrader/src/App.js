import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import LoginPage from './Pages/login';
import RegisterPage from './Pages/register';
import FrontPage from './Pages/FrontPage';


const App = () => {
  return (
    <Router>
    <Routes>
        <Route path='/' element={<FrontPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage/>} />
    </Routes>
    </Router>
  );
}

export default App;
