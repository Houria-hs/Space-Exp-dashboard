import './index.css';
import './App.css';
import Navbar from './components/pages/Navbar';
import SpaceNewsPanel from './components/pages/News';
import { Routes, Route } from "react-router-dom"; 
import SpaceWeather from './components/pages/weather';
import Footer from './components/pages/Footer';
import WeightCalculator from './components/pages/calculator';
import HomePage from './components/pages/Home';

function App() {
  return (
  <div className="min-h-screen text-white">
      <Navbar />  
      <Routes>
        <Route
          path="/"
          element={<HomePage/>}
        />
        <Route path="/News" element={<SpaceNewsPanel />} />
        <Route path="/SpaceWeather" element={<SpaceWeather />} />
        <Route path="/WeightCalculator" element={<WeightCalculator />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;