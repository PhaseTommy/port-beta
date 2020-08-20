import React from 'react'

const Hero = () => {
    return (
        <div id='home' className='heroWrapper'>
            <div>
                <p className='heroSub'>UI/UX DESIGN & FRONTEND SOLUTIONS</p>
            </div>
            <h1 className='heroTitle'>I build beautiful <br/><span className='gradient-text'> interfaces</span></h1>
            <p className='heroInfo'>UI/UX Engineer with a background<br/> in development. Currently based in <br/>  Sheffield/London, United Kingdom.</p>
            <button className='heroBtn'>Start a project!</button>
        </div>
    )
}

export default Hero
