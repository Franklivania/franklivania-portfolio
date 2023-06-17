import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Landing from './Pages/Landing/Landing';

function App() {
  const [themeMap, setThemeMap] = useState({});

  const toggleTheme = (componentId) => {
    setThemeMap((prevThemeMap) => ({
      ...prevThemeMap,
      [componentId]: !prevThemeMap[componentId],
    }));
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Landing themeMap={themeMap} toggleTheme={toggleTheme} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
