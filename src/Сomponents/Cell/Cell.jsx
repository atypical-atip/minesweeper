import React from 'react';

//import styles
import styles from './Cell.module.css';

export class Cell extends React.Component {
    constructor(props) {
        super (props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {        
        this.props.handleClick(this.props.id);          
    }

    render() {
        return (
            <div
            className={`${styles.cell} ${this.props.isOpened ? `${styles.opened}` : `${styles.closed}`}`}
            id={this.props.id}
            onClick={this.handleClick}></div>
        )
    }
}