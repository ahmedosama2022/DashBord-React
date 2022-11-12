import React from 'react'
import {BsSpeedometer} from 'react-icons/bs'
import {MdDeliveryDining} from 'react-icons/md'
import {MdOutlineExplore} from 'react-icons/md'
import {BsTrophy} from 'react-icons/bs'
import {AiOutlinePieChart} from 'react-icons/ai'
import {BiTrendingUp} from 'react-icons/bi'
import {MdOutlinePermContactCalendar} from 'react-icons/md'
import {AiOutlineIdcard} from 'react-icons/ai'
import './Sidber.css'
const Sideber = () => {
  return (
    <div className='Sideber grid'>
      <div className='logoDiv flex'>
          <img src='https://www.conaxesstrade.com/wp-content/uploads/2019/02/Planti-logo_385x306.jpg'style={{width:"200px", height:"90px"}} />
          
      </div>
      <section className='sec2'>
      <div className='menuDiv'>
        <h3 className="divTitle">
         QUICK MENU
        </h3>
        <ul className='menuLists grid'>
          <li className='ListItem'>
            <a href='#'  className='menuLink flex'>
              <BsSpeedometer className='icon'/>
              <span className='smallText'>
                Dach bord
              </span>
            </a>
          </li>
          <li className='ListItem'>
            <a href='#'  className='menuLink flex'>
              <MdDeliveryDining className='icon'/>
              <span className='smallText'>
                
                My Order
              </span>
            </a>
          </li>
          <li className='ListItem'>
            <a href='#'  className='menuLink flex'>
              <MdOutlineExplore className='icon'/>
              <span className='smallText'>
                Explore
              </span>
            </a>
          </li>
          <li className='ListItem'>
            <a href='#'  className='menuLink flex'>
              <BsTrophy className='icon'/>
              <span className='smallText'>
                Products
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div className='SettingDiv'>
        <h3 className="divTitle">
         SETTINGS
        </h3>
        <ul className='menuLists grid'>
          <li className='ListItem'>
            <a href='#'  className='menuLink flex'>
              <AiOutlinePieChart className='icon'/>
              <span className='smallText'>
                Charts
              </span>
            </a>
          </li>
          <li className='ListItem'>
            <a href='#'  className='menuLink flex'>
              <BiTrendingUp className='icon'/>
              <span className='smallText'>
                Trends
              </span>
            </a>
          </li>
          <li className='ListItem'>
            <a href='#'  className='menuLink flex'>
              <MdOutlinePermContactCalendar className='icon'/>
              <span className='smallText'>
               Contact
              </span>
            </a>
          </li>
          <li className='ListItem'>
            <a href='#'  className='menuLink flex'>
              <AiOutlineIdcard className='icon'/>
              <span className='smallText'>
                Billing
              </span>
            </a>
          </li>
        </ul>
       
      </div>
      
      </section>
     
      <div className='sec13 '>
        <h3 className=''>Help Center</h3>
        <p>Having trouble in Planti
          <br/>
          Please Contact Us from for
          <br/>
          more questions.
        </p>
        <button className='btn'>Go to help center</button>
      </div>
      
    </div>
  )
}

export default Sideber