import './HomePage.css';

import Topbar from '../components/Topbar'
import Gamelist from '../components/Gamelist';

const HomePage = () => {
  return (
    <div className='homepage'>
      <Topbar />
      <Gamelist />
    </div>
  )
}

export default HomePage;