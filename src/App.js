import React from 'react';
import { Board }  from '../src/Сomponents/Board/Board';
import { randomlyAssignMines } from './util/randomlyAssignMines';
import './App.css';
import { getNeighbors } from './util/getNeighbors';

class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      boardSize: 10,
      mineCount: 0,
      board: {},
      gameOver: false
    }
  }

  buildBoard (isOpened = false, isFlagged = false, isMined = false, neighborMineCount = 0) {
    let newBoard = {};
    for (let row = 0; row < this.state.boardSize; row++) {            
        for (let column = 0; column < this.state.boardSize; column++) {
          newBoard[`${row}${column}`] = {
              id: `${row}${column}`,
              row,
              column,
              isOpened,
              isFlagged,
              isMined,
              neighborMineCount
            };                
        }
    }

    newBoard = randomlyAssignMines(newBoard, this.state.boardSize, this.state.mineCount);    
    this.state.board = newBoard;    
  }

  onClick (event, id) {
    if (!this.state.gameOver) {
      let cell = this.state.board[id];
      const clickedCell = event.target.id;
      if (!cell.opened) { //Check if cell is opened
        if (cell.flagged) { //Check if cell is flagged
          if (cell.mined) { //Check if cell is mined
            // loss(); //CHECK!!!
            clickedCell.style.color = 'red';
          } else {
            cell.opened = true;

            if(cell.neighborMineCount > 0) {
              // let color = getNumberColor(cell.neighborMineCount); //CHECK!!!
              // clickedCell.style.color = color;
            } else {
              clickedCell.style.backgroundImage = 'radial-gradient(#e6e6e6, #c9c7c7)';
              
              //Open all adjacent cells if they are neither flagged nor opened
              let neighbors = getNeighbors(this.state.board, id);
              neighbors.map( item => {

                let neighbor = item;

                if (typeof neighbor !== 'undefined' && !this.state.board[neighbor.id].flagged && !this.state.board[neighbor.id].opened ) {
                  this.onClick(neighbor);
                }
              })
            }
          }
        }

      }
    }
  }

  render() {
    this.buildBoard();
    console.log(this.state.board);
    return (
      <div className="App">
        <Board boardSize={this.state.boardSize}  />
      </div>
    );
  }  
}

export default App;
