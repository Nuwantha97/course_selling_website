import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Home from './components/student/Home';
import Course from './components/student/Course';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/course" element={<Course/>}/>
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
