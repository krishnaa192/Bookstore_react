// Install React Router: npm install react-router-dom

// App.js - Set up routes
import Signup from './component/Signup';
import Dashboard from './component/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/signup" component={Signup} />
        <Route path="" component={Dashboard} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
