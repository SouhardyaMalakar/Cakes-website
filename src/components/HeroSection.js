import { Button } from './Button'
import'../App.css'
import React from 'react'
import './HeroSection.css';
function HeroSection() {
    return (
        <div className='hero-container'>
            <img src="/images/maincake.jpg" />
            <h1>CAKES AND SNACKS</h1>
            <p>Have a tasty meal ジ</p>
            <div className="hero-btns">
                <Button className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    Photos <i className='far fa-play-circle'></i>
                </Button>
                <br></br> 
                
            </div>
    
        </div>
    )
}

export default HeroSection
