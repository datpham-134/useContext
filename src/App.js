import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import { UserContext } from './UserContext';
import { useState } from 'react';
import { useMemo } from 'react';

function App() {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>

        <UserContext.Provider value={value}>
          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
