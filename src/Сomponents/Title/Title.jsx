import React from 'react';

// Import styles
import './Title.css';

//import images
import bomb from './img/bomb.png'

export const Title = () => {
    return (
        <div className='title'>
            
            <h1>
                <img src={bomb} className='titleBomb left' />
                Mine<span>sweep</span>er
                <img src={bomb} className='titleBomb right' />
            </h1>            
        </div>
    )
}