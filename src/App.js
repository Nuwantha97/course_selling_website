import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Home from './components/student/Home';
import Course from './components/student/Course';
import MyLearning from './components/student/MyLearning';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./components/student/Cart";
import ProfileSetting from "./components/student/profileSetting";


const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/course" element={<Course/>}/>
        <Route path="/mylearning" element={<MyLearning/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/profilesetting" element={<ProfileSetting/>}/>
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
