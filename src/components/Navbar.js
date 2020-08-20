import React, { useState, useEffect } from 'react'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../global.js';
import { lightTheme, darkTheme } from '../theme.js'
import storage from 'local-storage-fallback'
import dark from '../images/dark.svg'
import light from '../images/light.svg'
import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'

import Menu from '../components/Menu'
import Headroom from 'react-headroom'
import { useScrollPosition, useScrollXPosition, useScrollYPosition } from 'react-use-scroll-position';
import { Link, animateScroll as scroll } from "react-scroll";


const Navbar = () => {

   
  const [themeSwitch, setThemeSwitch] = useState('Dark')

  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const [theme, setTheme] = useState(getInitialTheme);
  const toggleTheme = () => {
      // if the theme is not light, then set it to dark
      if (theme === 'light') {
          setTheme('dark');
          setThemeSwitch('Dark')
          // otherwise, it should be light
      } else {
          setTheme('light');
          setThemeSwitch('Light')
      }
  }

  function getInitialTheme() {
      const savedTheme = storage.getItem('theme')
      return savedTheme ? JSON.parse(savedTheme) : { theme: 'light' }
  }

  useEffect(() => {
      storage.setItem('theme', JSON.stringify(theme), [theme])
  })

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })
  const isDesktop = useMediaQuery({ query: '(min-width: 1025px)' })
  const isTablet = useMediaQuery({ query: '(max-width: 824px)' })

  

  const scrollX = useScrollXPosition();
  const scrollY = useScrollYPosition();


// function addShadowLight() {
//     if(scrollY > 10){
//         setShadowLight('shadow-light')
//     }
//     else{
//         setShadowLight('')
//     }
// }

// function addShadowDark() {
//     if(scrollY > 10){
//         setShadowDark('shadow')
//     }
//     else{
//         setShadowDark('')
//     }
// }


// useEffect(() => {
  
    
// })

const [shadoLight, setShadowLight] = useState('navItemsStyle')
const [shadowDark, setShadowDark] = useState('')
const [activeSkills, setActiveSkills] = useState('navItemsStyle')
const [activeWork, setActiveWork] = useState('navItemsStyle')
const [activeAbout, setActiveAbout] = useState('navItemsStyle')

function addActive() {
    if (scrollY < 400){
        setActiveWork('navItemsStyle')
    }

    if(scrollY>400){
        setActiveWork('active navItemsStyle')

    } 


    if (scrollY>1200) {
        setActiveAbout('active navItemsStyle')
        setActiveWork('navItemsStyle')
    } 

    if(scrollY<1200) {
        setActiveAbout('navItemsStyle')
    }

    if (scrollY > 2000){
        setActiveSkills('active navItemsStyle')
        setActiveAbout('navItemsStyle')
    }
    
    if (scrollY < 2000){
        setActiveSkills('navItemsStyle')
    }


    

}

const [activeSkillsMobile, setActiveSkillsMobile] = useState('')
const [activeWorkMobile, setActiveWorkMobile] = useState('')
const [activeAboutMobile, setActiveAboutMobile] = useState('')

function addActiveMobile() { 

    if (scrollY < 400){
        setActiveWorkMobile('navItemsStyle')
    }

    if(scrollY>400){
        setActiveWorkMobile('active-mobile navItemsStyle')

    } 


    if (scrollY>1600) {
        setActiveAboutMobile('active-mobile navItemsStyle')
        setActiveWorkMobile('navItemsStyle')
    } 

    if(scrollY<1600) {
        setActiveAboutMobile('navItemsStyle')
    }

    if (scrollY > 2800){
        setActiveSkillsMobile('active-mobile navItemsStyle')
        setActiveAboutMobile('navItemsStyle')
    }
    
    if (scrollY < 2800){
        setActiveSkillsMobile('navItemsStyle')
    }
    

}



useEffect(() => {
  addActive()
    if(isTabletOrMobile){
        addActiveMobile()
    }
    
    else {
        addActive()
    }
})





    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles/>

            <Headroom className='nav' >
                <motion.ul animate={{y:0, opacity: 1}} initial={{y:-70, opacity: 0}} className='navWrapper'>
                    <li>
                        <span className='logo'>Tommy Smith</span>
                    </li>
                   { isDesktop && <div className='navItems'>

                        <Link className={activeWork} to="work" smooth={true} offset={-200} duration={500} >Work</Link>

                        <Link className={activeAbout}  to='about'   smooth={true} duration={500}  >About</Link>
                        <Link className={activeSkills}  spy={true} duration={500}   to='skills'>Skills</Link>


                    </div> }
                    <div className='navButtons'>
                        <motion.div whileTap={{scale: 0.9}} className='toggleTheme' onClick={toggleTheme}>
                        {theme==='dark' ? <motion.img animate={{y:0}} initial={{y:20}} className='darkIcon' src={dark} /> : <motion.img animate={{y: 0}} initial={{y:20}} src={light}/> }
                        </motion.div>
                        
                         <button className='projectButtonSmall'>Start a project!</button>
                    </div>
                </motion.ul>

                
            </Headroom> 

            { isTabletOrMobile && <ul className='navItemsLower'>
                    <div className='navItemsMobile'>
                        <Link className={activeWorkMobile}  smooth={true} duration={500}   to='work'>Work</Link>
                        <Link className={activeAboutMobile}  smooth={true} duration={500} offset={150} to='about'>About</Link>
                        <Link className={activeSkillsMobile}  smooth={true} duration={500}   to='skills'>Skills</Link>


                        </div>
                    </ul> }




            
        </ThemeProvider>
    )
}

export default Navbar



// {isTabletOrMobile && <div className='navItemsLower'> <div className={theme==='light' ? 'navItemsMobileLight' : 'navItemsMobile'}>
//                         <h4 className={activeHomeMobile}>Home</h4>
//                         <h4 className={activeWorkMobile}>Work</h4>
//                         <h4>About</h4>
//                     </div>
//                     </div>}