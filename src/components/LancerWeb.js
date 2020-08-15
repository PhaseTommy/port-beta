import React from 'react'
import lancerMobile from '../images/lancer-mobile.png'
import lancerWeb from '../images/lancer-web.png'

const LancerMobile = () => {
    return (

            <div className='workWrapper'>
                <div className='lancer-web-wrapper'>
                    <div className='lancer-web-info'>
                        <h4 className='lancer-web-title'>Lancer Web</h4>
                        <p className='lancer-web-subtitle'>A UX rundown and insight into some of my thought processes when designing mobile apps.</p>

                    </div>

                        <img className='lancer-web-img' src={lancerWeb}/>

                    
                </div>
            </div>

    )
}

export default LancerMobile
