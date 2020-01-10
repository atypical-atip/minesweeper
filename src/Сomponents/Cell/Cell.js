import React from 'react';

export class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.id = this.props.row + "" + this.props.column;
        this.row = this.props.row;
        this.column = this.props.column;
        this.isOpened = this.props.isOpened;
        this.isFlagged = this.props.isFlagged;
        this.isMined = this.props.isMined;
        this.neighborMineCount = this.props.neighborMineCount;
    }

    render() {
        return console.log('this is cell!');
    }
}