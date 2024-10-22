import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/navbar.js';
import Home from './components/home.js';
import AgencyIndex from './components/index.js';
import Mission from './components/mission.js';
import Contact from './components/contact.js';

const App = () => {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home className ="h-full w-full"/>} />
        <Route path="/index" element={<AgencyIndex/>} />
        <Route path="/mission" element={<Mission/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
};

export default App;