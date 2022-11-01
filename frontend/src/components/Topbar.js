import './Topbar.css'
import wifi from '../assets/topbar/Wifi.svg'
import players from '../assets/topbar/players.svg'
import games from '../assets/topbar/games.svg'
import won from '../assets/topbar/won.svg'
import cashback from '../assets/topbar/cashback.svg'
import fairness from '../assets/topbar/fairness.svg'
import referral from '../assets/topbar/referral.svg'
import help from '../assets/topbar/help.svg'
import facebook from '../assets/topbar/facebook.svg'
import instagram from '../assets/topbar/instagram.svg'
import twitter from '../assets/topbar/twitter.svg'
import telegram from '../assets/topbar/telegram.svg'
import sound from '../assets/topbar/sound.svg'
import lang_us from '../assets/topbar/flag_us.svg'
import lang_br from '../assets/topbar/flag_br.svg'
import lang_cn from '../assets/topbar/flag_cn.svg'
import lang_pt from '../assets/topbar/flag_pt.svg'
import lang_ru from '../assets/topbar/flag_ru.svg'
import lang_mt from '../assets/topbar/flag_mt.svg'
import downarrow from '../assets/topbar/downarrow.svg'

import { useState } from 'react'
import $ from 'jquery'

const Topbar = () => {
  const [lang, setLang] = useState(lang_us);

  $("li").on("click", function () {
    switch (this.id) {
      case "lang_us":
        setLang(lang_us);
        break;
      case "lang_br":
        setLang(lang_br);
        break;
      case "lang_cn":
        setLang(lang_cn);
        break;
      case "lang_pt":
        setLang(lang_pt);
        break;
      case "lang_ru":
        setLang(lang_ru);
        break;
      case "lang_mt":
        setLang(lang_mt);
        break;
      default:
        setLang(lang_us)
    }
  });

  return (
      <div className='topbar'>
          <div className='leftbar'>
            <div className='wifi'><img src={wifi} alt="wifi" /><span>423 online</span></div>
            <div className='players'><img src={players} alt="players" /><span>5.2K players</span></div>
            <div className='games'><img src={games} alt="games" /><span>1.5K games</span></div>
            <div className='won'><img src={won} alt="won" /><span>1.2K won today</span></div>
          </div>
          <div className='rightbar'>
            <div className='cashback'><img src={cashback} alt="cashback" /><span>Cashback</span></div>
            <div className='fairness'><img src={fairness} alt="fairness" /><span>Fairness</span></div>
            <div className='referral'><img src={referral} alt="referral" /><span>Referral</span></div>
            <div className='help'><img src={help} alt="help" /><span>Help</span></div>
            <div className='social-icon'><img src={facebook} alt="facebook" /></div>
            <div className='social-icon'><img src={instagram} alt="instagram" /></div>
            <div className='social-icon'><img src={twitter} alt="twitter" /></div>
            <div className='social-icon'><img src={telegram} alt="telegram" /></div>
        <div className="dropdown">
          <div className='current-lang'><img src={lang} alt="language"/><img src={downarrow} alt="downarrow" /></div>
          <div className="dropdown-content">
            <ul>
              <li id="lang_us"><img src={lang_us} alt="us" /></li>
              <li id="lang_bt"><img src={lang_br} alt="br" /></li>
              <li id="lang_cn"><img src={lang_cn} alt="cn" /></li>
              <li id="lang_pt"><img src={lang_pt} alt="pt" /></li>
              <li id="lang_ru"><img src={lang_ru} alt="ru" /></li>
              <li id="lang_mt"><img src={lang_mt} alt="mt" /></li>
            </ul>
          </div>
        </div>
        <div className='social-icon'><img src={sound} alt="sound" /></div>
        </div>
      </div>
  )
}

export default Topbar;