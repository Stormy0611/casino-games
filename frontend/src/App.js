import logo from './logo.svg';
import './App.css';

import Menu from './components/Menu';
import Topbar from './components/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Menu />
    </div>
  );
}

export default App;
