
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddSong from './components/AddSong';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/addsong" element={<AddSong/>}/>
        
      </Routes>
    </div>
  </Router>
  );
}

export default App;
