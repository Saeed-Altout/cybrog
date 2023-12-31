import React from 'react'
import './Hero.css'
import { ButtonsPrimary } from '../../components/index'
const Hero = () => {
    return (
        <div className='hero-main'>
            <div className='hero-text'>
                <h6 className='hero-subtitle'>Welcome To Cyborg</h6>
                <h4 className='hero-title'><em>Broswe</em> Our Popular Games Here</h4>
                <ButtonsPrimary title="Broswe Now" />
            </div>
        </div>
    )
}

export default Hero