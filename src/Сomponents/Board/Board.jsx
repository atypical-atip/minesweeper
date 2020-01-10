//import styles
import './Board.css';

import React from 'react';
import { Cell } from '../Cell/Cell';

export const Board = props => {
    return (
        <div className={`board boardSize${props.boardSize}`}>
            {
                Object.keys(props.cells).map(cell => <Cell id={props.cells[cell].id} key={props.cells[cell].id} />)
            }                
        </div>
    );
}