import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './components/Login'
import Dashboard from './components/Dashboard'
import SignUp from './components/SignupTemp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<SignUp />} />
        <Route path='/signup'  element={<SignUp />} />
        <Route path='/login'  element={<Login />} />
        <Route path='/dashboard'  element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
