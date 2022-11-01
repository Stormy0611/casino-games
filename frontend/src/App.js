import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

// Pages
import HomePage from './pages/HomePage';
// Components
import Topbar from './components/Topbar';
import Gamelist from './components/Gamelist';
import Navbar from './components/Navbar';
//logo
import logo from './assets/topbar/logo.svg'
import background from './assets/main/background.svg'

function App() {
  return (
    <Router>
      <Topbar />
      <Gamelist />
      <Navbar />
      <div className="logo"><img src={ logo } alt="logo"></img></div>
      <main>
        <Routes>
          <Route exact path='/' component={HomePage} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
