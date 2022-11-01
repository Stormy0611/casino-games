import './Gamelist.css'

import crash from '../assets/menu/crash.svg'
import dice from '../assets/menu/dice.svg'
import mines from '../assets/menu/mines.svg'
import keno from '../assets/menu/keno.svg'
import limbo from '../assets/menu/limbo.svg'
import plinko from '../assets/menu/plinko.svg'
import roulette from '../assets/menu/roulette.svg'
import wheel from '../assets/menu/wheel.svg'
import coinflip from '../assets/menu/coinflip.svg'
import stairs from '../assets/menu/stairs.svg'
import tower from '../assets/menu/tower.svg'

const Gamelist = () => {
  return (
    <div className='gamelist'>
      <div className='img-div'><img src={crash} alt="crash"></img></div>
      <div className='img-div'><img src={dice} alt="dice"></img></div>
      <div className='img-div'><img src={mines} alt="mines"></img></div>
      <div className='img-div'><img src={keno} alt="keno"></img></div>
      <div className='img-div'><img src={limbo} alt="limbo"></img></div>
      <div className='img-div'><img src={plinko} alt="plinko"></img></div>
      <div className='img-div'><img src={roulette} alt="roulette"></img></div>
      <div className='img-div'><img src={wheel} alt="wheel"></img></div>
      <div className='img-div'><img src={coinflip} alt="coinflip"></img></div>
      <div className='img-div'><img src={stairs} alt="stairs"></img></div>
      <div className='img-div'><img src={tower} alt="tower"></img></div>
    </div>
  )
}

export default Gamelist;