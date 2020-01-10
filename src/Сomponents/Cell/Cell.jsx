import React from 'react';

//import styles
import './Cell.css';

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
            className={`cell ${this.props.isOpened ? `opened` : `closed`}`}
            id={this.props.id}
            onClick={this.handleClick}></div>
        )
    }
}