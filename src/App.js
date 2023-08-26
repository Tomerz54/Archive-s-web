import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

import About from './components/About';
import Home from './components/Home';
import Info from './components/Info';
import {Auth} from './components/auth';
import WeatherExp from './components/WeatherExp';
import NotFound from './components/NotFound';

import Achive_ments from './components/Achive_ments';

import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import AchivementsDetails from './components/AchivementDetails';





function App() {
  return (
    <Router>
      <div className="App">
        <div className='nav_bg'>
          <NavBar/>
          <div className="content">
            <Routes>
              
              <Route path="/archive" element={<Home/>}></Route>
              <Route path="/sign-up" element={<Auth/>}></Route>
              <Route path="/about" element={<About/>}></Route>
              <Route path="/info" element={<Info/>}></Route>
              <Route path="/weather" element={<WeatherExp/>}></Route>
              <Route path="/Achive_ments" element={<Achive_ments/>}> </Route>
              
            </Routes>
          </div>
          <div className="achievement_list">
            
            <div className='content'>
              <Routes>
                <Route path="/" element={<Achive_ments />} />
                <Route path="/Achive_ments/:acheivementId" element={<AchivementsDetails />} />
                
              </Routes>
            
              
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
