import React, { useState, useEffect } from 'react'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../global.js';
import { lightTheme, darkTheme } from '../theme.js'
import storage from 'local-storage-fallback'
import dark from '../images/dark.svg'
import light from '../images/light.svg'
import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import Hamburger from 'hamburger-react'
import Menu from '../components/Menu'
import Headroom from 'react-headroom'
import { useScrollPosition, useScrollXPosition, useScrollYPosition } from 'react-use-scroll-position';

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


function addShadowLight() {
    if(scrollY > 10){
        setShadowLight('shadow-light')
    }
    else{
        setShadowLight('')
    }
}

function addShadowDark() {
    if(scrollY > 10){
        setShadowDark('shadow')
    }
    else{
        setShadowDark('')
    }
}


useEffect(() => {
  
    
})

const [shadoLight, setShadowLight] = useState('')
const [shadowDark, setShadowDark] = useState('')
const [activeHome, setActiveHome] = useState('')
const [activeWork, setActiveWork] = useState('')
const [activeAbout, setActiveAbout] = useState('')

function addActive() { 
    if (scrollY<400){
        setActiveHome('active')
        setActiveWork('')
    } 

    if(scrollY>400){
        setActiveWork('active')
        setActiveHome('')
        
    } 

    if (scrollY>1600) {
        setActiveAbout('active')
        setActiveWork('')
    } 

    if(scrollY<1600) {
        setActiveAbout('')
    }


    

}

const [activeHomeMobile, setActiveHomeMobile] = useState('')
const [activeWorkMobile, setActiveWorkMobile] = useState('')
const [activeAboutMobile, setActiveAboutMobile] = useState('')

function addActiveMobile() { 
    if (scrollY<400){
        setActiveHomeMobile('active')
        setActiveWorkMobile('')
    } 

    if(scrollY>400){
        setActiveWorkMobile('active')
        setActiveHomeMobile('')
        
    } 

    if (scrollY>2400) {
        setActiveAboutMobile('active')
        setActiveWorkMobile('')
    } 

    if(scrollY<2400) {
        setActiveAboutMobile('')
    }

    

}

function addActiveTablet(){

    if (scrollY<400){
        setActiveHomeMobile('active')
        setActiveWorkMobile('')
    } 

    if(scrollY>400){
        setActiveWorkMobile('active')
        setActiveHomeMobile('')
        
    } 

    if (scrollY>2000) {
        setActiveAboutMobile('active')
        setActiveWorkMobile('')
    } 

    if(scrollY<200) {
        setActiveAboutMobile('')
    }
}


useEffect(() => {
  addActive()
    if(isTabletOrMobile){
        addActiveMobile()
    } else if(isTablet){
        addActiveTablet()
    }
    
    else {
        addActive()
    }
})

const [isOpen, setOpen] = useState(false)



    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles/>

            <Headroom className='nav' >
                <motion.ul animate={{y:0, opacity: 1}} initial={{y:-70, opacity: 0}} className='navWrapper'>
                    <div>
                        <span className='logo'>Tommy Smith</span>
                    </div>
                   { isDesktop && <div className='navItems'>
                        <li className={activeHome}>Home</li>
                        <li className={activeWork}>Work</li>
                        <li className={activeAbout}>About</li>

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
                        <li className={activeHomeMobile}>Home</li>
                        <li className={activeWorkMobile}>Work</li>
                        <li className={activeAboutMobile}>About</li>
                        </div>
                    </ul> }

                {isOpen && <Menu/>}


            
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