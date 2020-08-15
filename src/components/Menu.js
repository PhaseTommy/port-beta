import React from 'react'
import { motion, AnimatePresence } from "framer-motion"


const Menu = ({isVisible}) => {
    return (
    <AnimatePresence>
       
        <motion.div key="modal" animate={{y: 20 }} exit={{y:0}}  className='dropdown'>
        <motion.div  className='services' whileHover={{x: 5}} style={{marginTop: '10px', cursor: 'pointer'}}>
            <h1 className='servicesStyle' style={{fontSize: '16px', color: 'white'}}>Services</h1>
            <h2 style={{fontSize: '14px', color: 'white', opacity: 0.6, fontWeight: 400}}>A little bit about us</h2>
        </motion.div>
        <motion.div className='about' whileHover={{x: 5}} style={{marginTop: '30px'}}>
            <h1 className='aboutTitle' style={{fontSize: '16px', color: 'white'}}>About</h1>
            <h2 style={{fontSize: '14px', color: 'white', opacity: 0.6, fontWeight: 400}}>Clients we've worked with</h2>
        </motion.div>
        <motion.div className='clients' whileHover={{x: 5}} style={{marginTop: '30px'}}>
            <h1 className='clientsTitle' style={{fontSize: '16px', color: 'white'}}>Clients</h1>
            <h2 style={{fontSize: '14px', color: 'white', opacity: 0.6, fontWeight: 400}}>Services we offer</h2>
        </motion.div>
        <motion.div className='contact' whileHover={{x: 5}} style={{marginTop: '30px'}}>
            <h1 className='contactTitle' style={{fontSize: '16px', color: 'white'}}>Contact</h1>
            <h2 style={{fontSize: '14px', color: 'white', opacity: 0.6, fontWeight: 400}}>Contact us here</h2>
        </motion.div>
        <button style={{marginTop:'32px'}} className='projectButtonSmall'>Start a project!</button>

    


        </motion.div>
        
    </AnimatePresence>
    )
}

export default Menu