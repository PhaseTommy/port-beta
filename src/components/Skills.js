import React from 'react'
import qualityIcon from '../images/quality-icon.svg'
import communicationIcon from '../images/communication-icon.svg'
import reliabilityIcon from '../images/reliability-icon.svg'



const Skills = () => {
    return (
        <div className='skills-wrapper'>
            <h1 className='quality-section-title'>what I offer.</h1>

                <div className='skills-grid'>
                    <div className='quality-wrapper'>
                        <img src={qualityIcon}></img>
                        <h4 className='quality-title'>Quality</h4>
                        <p className='quality-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className='communication-wrapper'>
                        <img src={communicationIcon}></img>
                        <h4 className='quality-title'>Communication</h4>
                        <p className='quality-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className='reliability-wrapper'>
                        <img src={reliabilityIcon}></img>
                        <h4 className='quality-title'>Reliability</h4>
                        <p className='quality-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
        </div>
    )
}

export default Skills
