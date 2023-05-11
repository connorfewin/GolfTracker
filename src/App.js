
import './App.css';
import NewCourse from './components/NewCourse';
import Scorecard from './components/NewScorecard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Scorecard />} />
        <Route path="/new-course" element={<NewCourse />} />
      </Routes>
    </Router>
  );
}



export default App;
