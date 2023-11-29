// App.js
import './App.css';
import EventCreationPage from './Components/EventCreationPage/EventCreationPage';
import EventDescription from './Components/EventDecription/EventDescription';
import EventList from './Components/EventList/EventList';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="card-container">
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />} />
            <Route path="/event-creation" element={<EventCreationPage />} />
            <Route path="/event-description" element={<EventDescription />} />
            <Route path="/event-list" element={<EventList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="home-container">
    <div className="card">
      <EventCreationPage />
    </div>
    <div className="card">
      <EventDescription />
    </div>
  </div>
);

export default App;
