import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from '../header/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
    </Router>
  );
}

export default App;
