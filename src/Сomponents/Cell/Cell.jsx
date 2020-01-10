import React from 'react';

//import styles
import './Cell.css';

export const Cell = props => {
    return (
        <div className='cell closed' id={props.id}></div>
    )
}