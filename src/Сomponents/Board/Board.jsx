//import styles
import styles from './Board.module.css';

import React from 'react';
import { Cell } from '../Cell/Cell';

export const Board = props => {
    let boardSize = `boardSize${props.boardSize}`
    return (
        <div className={`${styles.board} ${styles[boardSize]}`}>
            {
                Object.keys(props.cells).map(cell => <Cell id={props.cells[cell].id} key={props.cells[cell].id} handleClick={props.handleClick} />)
            }                
        </div>
    );
}