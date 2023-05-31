import { useState } from 'react';
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
    <div className="App">
      <Landing themeMap={themeMap} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
