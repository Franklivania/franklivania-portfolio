import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';

import Landing from './Pages/Landing/Landing';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
