// global.js
// Source: https://github.com/maximakymenko/react-day-night-toggle-app/blob/master/src/global.js#L23-L41

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    h1 ${({ theme }) => theme.primaryText};
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.primaryText};
    input: ${({ theme }) => theme.secondary};
    transition: all 0.25s linear;
  }
  
  .navItems{
    color: ${({ theme }) => theme.primaryText};
    background: ${({ theme }) => theme.body};    
    transition: all 0.25s linear;


  }

  .active{
      background: ${({ theme }) => theme.fourth};
    border-color: ${({ theme }) => theme.toggleBorder};

    transition: all 0.25s linear;

  }

  .toggleTheme{
    background: ${({ theme }) => theme.secondary};
    transition: all 0.25s linear;
  }

  .heroInfo{
    color: ${({ theme }) => theme.secondaryText};     
    transition: all 0.25s linear;

  }

  .navItemsMobile>li{
    color: ${({ theme }) => theme.primaryText};

  }

  .navItemsMobile{
    background: ${({ theme }) => theme.fourth};
    border-color: ${({ theme }) => theme.toggleBorder};
    color: ${({ theme }) => theme.shadow};
    transition: all 0.25s linear;

  }

  .navItemsMobileLight{
    background: ${({ theme }) => theme.fourth};
    border-color: ${({ theme }) => theme.toggleBorder};
    transition: all 0.25s linear;
  }

  .active-mobile{

    background: ${({ theme }) => theme.body}; 
    color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.toggleBorder};
    transition: all 0.25s linear;
  }

  .navWrapper{
    background: ${({ theme }) => theme.body};    
    transition: all 0.25s linear;

  }

  .headroom--scrolled{
    border-bottom-color: ${({ theme }) => theme.toggleBorder};
    transition: all 0.25s linear;
        
  }

  .logo {
    color: ${({ theme }) => theme.primaryText};
    transition: all 0.25s linear;
      
  }

  .workBG{
    background: ${({ theme }) => theme.tertiary};
    margin-top: 240px;
    transition: all 0.25s linear;
  
    width: 100%;
      
  }

  .headroom{
    background: ${({ theme }) => theme.body};
    transition: all 0.25s linear;

  }


    .dropdown{
    background: ${({ theme }) => theme.secondary};

    }

  .about-info{
    color: ${({ theme }) => theme.secondaryText};
    
  }

  .quality-info{
    color: ${({ theme }) => theme.secondaryText};
    
  }

  .skills-wrapper{
    background: ${({ theme }) => theme.tertiary};

  }

  .footer-info{
    color: ${({ theme }) => theme.secondaryText};

  }

  .navItemsStyle{
    color: ${({ theme }) => theme.primaryText};
    
  }

  .active-mobile{
    background: ${({ theme }) => theme.body};

  }
`