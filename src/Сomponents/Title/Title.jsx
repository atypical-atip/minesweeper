import React from 'react';

// Import styles
import styles from './Title.module.css';

//import images
import bomb from './img/bomb.png'

export const Title = () => {
    return (
        <div className={`${styles.title}`}>
            
            <h1>
                <img src={bomb} className={`${styles.titleBomb} ${styles.left}`} alt='minesweeper' />
                Mine<span>sweep</span>er
                <img src={bomb} className={`${styles.titleBomb} ${styles.right}`} alt='minesweeper' />
            </h1>            
        </div>
    )
}