//import styles
import './Board.css';

import React from 'react';
import { Cell } from '../Cell/Cell';

export class Board extends React.Component {

    render() {        
        return (
            <div className={`board boardSize${this.props.boardSize}`}>
                {/* <Cell /> */}
            </div>
        );
    }
}