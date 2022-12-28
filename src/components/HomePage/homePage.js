import './homepage.css';
import {PhoneIcon, CalendarIcon, Arrowdown, CheckIcon, NoIcon} from '../../components/icons';
import xrmaLogo from '../../Images/logo.png';
import kidsMartialArts from '../../Images/childrenMartialArtsImage.jpg';
import adultsMartialArts from '../../Images/adultsMartialArtsImage.jpg';
import FreeTrial from '../../components/freeTrial/FreeTrial';
import Testimonials from '../../components/Testimonials/testimonials';
import Footer from '../../components/Footer/footer';
import Menu from '../Menu/Menu';
import { useState } from 'react';
import React from 'react';

const Homepage = () => {
  const [hamburger, setHamburger] = useState('burgerBar unclicked');
  const [theMenu, setTheMenu] = useState('menu hidden')
  const [isMenuClicked, setIsMenuClicked] = useState(false)
  const [theXrmaLogo, setTheXrmaLogo] = useState('xrmaLogo unclicked')


  const updateMenu = () => {
    console.log('hello');
    if(!isMenuClicked) {
      setHamburger('burgerBar clicked');
      setTheMenu('menu visible');
      setTheXrmaLogo('xrmaLogo clicked')
    } else {
      setHamburger('burgerBar unclicked');
      setTheMenu('menu hidden');
      setTheXrmaLogo('xrmaLogo unclicked');
    }
    setIsMenuClicked(!isMenuClicked);
  }
  

  return (
    <div className="homepage">
      <nav className='navigation'>
        {/* the 'book a lesson' tab in the upper right hand side of the page */}
        <div className='bookContainer'>
          <div>
            <CalendarIcon />
          </div>
          <div>
            <h3 className='click-here'>Click Here</h3>
          </div>
          <div>
            <h3 className='book'>Book A Lesson</h3>
          </div>
        </div>
        {/* the 'call us' tab in the upper right hand side of the page */}
        <div className='phoneContainer'>
          <div>
            <PhoneIcon />
          </div>
          <div>
            <h3 className="call-us">Call Us</h3>
          </div>
          <div>
            <h3 className="number">(123)456-7890</h3>
          </div>
        </div>
      </nav>
      {/* the hamburger menu container */}
      <div className='menuContainer'>
        <div className={theXrmaLogo}>
          <img  src={xrmaLogo} alt='logo'/>
        </div>
        <div 
          className='hamburger'
          onClick={updateMenu}
        >
          <span className={hamburger}></span>
          <span className={hamburger}></span>
          <span className={hamburger}></span>
        </div>
        <div className={theMenu}>
          <Menu className={isMenuClicked} />
        </div>
      </div>

      <div className='heroContainer'>
        <div className='heroText'>
          <h1>XTREME REVOLUTION</h1>
          <h3>Helping Students To Transform Into Their Full Potential Since 2006</h3>
        </div>
      </div>

      <div className='trialOfferContainer'>
        <div>
          <h2 className='trialOfferh2'>ARE YOU READY FOR GROWTH?</h2>
        </div>
        <div>
          <h3 className='trialOfferh3'>We understand that shopping for a martial arts school can be overwhelming. We offer <span className='threeLessons'>3 free lessons</span> for you to experience our amazing programs. Click below to claim this offer and begin the first step towards your transformation.</h3>
        </div>
        <div>
          <p>This offer is valid for <em>new students only.</em></p>
          <h2>START HERE<span><Arrowdown className='arrowIcon'/></span></h2>
          <button className='introButton'>GET 3 FREE INTRODUCTORY LESSONS</button>
        </div>

      <section className='bulletPointContainer'>
          <div className='firstBulletPoint bulletPoints'>
            <h3><span><CheckIcon /></span>Each lesson is 30-minutes!</h3>
          </div>
          <div className='bulletPointsGroup'>
            <h3><span><CheckIcon /></span>Choose your schedule.</h3>
          </div>
          <div className='bulletPointsGroup'>
            <h3><span><NoIcon /></span>No commitment!</h3>
          </div>
          <div className='bulletPointsGroup'>
            <h3><span><NoIcon /></span>No payment required!</h3>
          </div>
      </section>

      <div className="programsHeading">
        <h2>OUR PROGRAMS</h2>
        <div className='kidsImageContainer'>
          <img class='kidsMartialArtsImage' src={kidsMartialArts} alt='children doing martial arts'/>
        </div>
        <h3>Children</h3>
        <div className='adultsImageContainer'>
          <img class='adultsMartialArtsImage' src={adultsMartialArts} alt='children doing martial arts'/>
        </div>
        <h3>Adults</h3>
      </div>
      
      <div className='missionStatementContainer'>
      <div>
          <img className='xrmaLogo2' src={xrmaLogo} alt='logo'/>
        </div>
        <div>
          <h2>OUR MISSION IS TO CREATE A LASTING LEGACY OF CONFIDENT AND EMPATHETIC LEADERS</h2>
        </div>
        <div>
          <h4 className='missionH4'>AT XTREME REVOLUTION, OUR TEAM IS DEVOTED TO INSPIRE STUDENTS TO BRING OUT THEIR POTENTIAL. WE LEAD BY EXAMPLE, INCORPORATE CORE-VALUES INTO EACH OF OUR LESSONS, AND USE POSITIVE REINFORCEMENT.</h4>
        </div>
        <div>
          <p className='missionP'>As a result, together we can help make a positive impact in the world for lasting years.</p>
        </div>
      </div>
      <div>
        <FreeTrial />
      </div>
      <div>
        <Testimonials />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  </div>
  );
}

export default Homepage;