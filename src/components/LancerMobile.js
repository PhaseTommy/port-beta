import React from 'react'
import lancerMobile from '../images/lancer-mobile.png'
import lancerWeb from '../images/lancer-web.png'
import { motion } from 'framer-motion'

const LancerMobile = () => {
    return (
<>
            <div className='workWrapper'>
                <motion.div whileHover={{scale: 1.025}} className='lancer-mobile-wrapper'>
                    
                    <div className='lancer-mobile-info'>
                        <h4 className='lancer-mobile-title'>Lancer Mobile</h4>
                        <p className='lancer-subtitle'>A UX rundown and insight into some of my thought processes when designing the 'Lancer' mobile app. Click me to find out more!</p>

                    </div>

                    <img className='lancer-mobile-img' src={lancerMobile}/>

                </motion.div>
                <motion.div whileHover={{scale: 1.025}} className='lancer-web-wrapper'>
                <div className='lancer-web-info'>
                    <h4 className='lancer-web-title'>Lancer Web</h4>
                    <p className='lancer-web-subtitle'>A UX rundown and insight into some of my thought processes when designing mobile apps.</p>

                </div>

                <img className='lancer-web-img' src={lancerWeb}/>


            </motion.div>


            
            </div>

            
</>

    )
}

export default LancerMobile
