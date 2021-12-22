import Home from "./pages/Home";
import Ring from './pages/Ring';
import Disclaimer from "./pages/Disclaimer";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Admin from "./pages/Admin";



function App() {
  return (
    <Router>
      <div>
        <div>
          <Link to="/"></Link>
        </div>
        <div>
          <Link to="/app"></Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/app" element={<Ring />}>
        </Route>
        <Route path="/admin" element={<Admin />}>
        </Route>
        <Route path="/disclaimer" element={<Disclaimer />}>
        </Route>
      </Routes>
    </Router>
  );
}



export default App;