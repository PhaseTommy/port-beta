import React, { useState, useEffect } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './global.js';
import { lightTheme, darkTheme } from './theme.js'
import storage from 'local-storage-fallback'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { motion } from 'framer-motion'
import Work from './components/Work'
import About from './components/About'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {

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



  return (
    <motion.div className="App">
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
          <motion.div  animate={{y:0}} initial={{y:-70}}  >

            <Navbar/>
            <Hero/>
            <Work/>
            <About/>
            <Skills/>




          </motion.div>

      </ThemeProvider>
    </motion.div>
  );
}

export default App;
