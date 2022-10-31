import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

// Pages
import HomePage from './pages/HomePage';
// import Topbar from './components/Topbar';
// import Menu from './components/Menu';

function App() {
  return (
    <Router>
        {/* <Topbar /> */}
        {/* <Menu /> */}
        <HomePage />
      <main>
        <Routes>
          <Route exact path='/' component={HomePage} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
