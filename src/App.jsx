//Import logic functions
import { randomlyAssignMines } from './util/randomlyAssignMines';
import { getNeighbors } from './util/getNeighbors';

//Import styles
import './App.css';

//Import components
import React from 'react';
import { Board }  from './Сomponents/Board/Board';
import { Title } from './Сomponents/Title/Title';


class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      boardSize: 10,
      mineCount: 0,
      cells: {},
      gameOver: false
    }
  }

  buildBoard (isOpened = false, isFlagged = false, isMined = false, neighborMineCount = 0) {
    let newCells = {};
    for (let row = 0; row < this.state.boardSize; row++) {            
        for (let column = 0; column < this.state.boardSize; column++) {
          newCells[`${row}${column}`] = {
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

    newCells = randomlyAssignMines(newCells, this.state.boardSize, this.state.mineCount);    
    this.state.cells = newCells;    
  }

  loss() {
    this.setState({
      gameOver: true
    })
  }

  onClick (event, id) {
    if (!this.state.gameOver) {
      let cell = this.state.cells[id];
      const clickedCell = event.target.id;

      if (!cell.opened) { //Check if cell is opened

        if (cell.flagged) { //Check if cell is flagged

          if (cell.mined) { //Check if cell is mined
            this.loss();
            clickedCell.style.color = 'red';
          } else {
            cell.opened = true;

            if(cell.neighborMineCount > 0) {
              // let color = getNumberColor(cell.neighborMineCount); //CHECK!!!
              // clickedCell.style.color = color;
            } else {
              clickedCell.style.backgroundImage = 'radial-gradient(#e6e6e6, #c9c7c7)';
              
              //Open all adjacent cells if they are neither flagged nor opened
              let neighbors = getNeighbors(this.state.cells, id);
              neighbors.map( item => {

                let neighbor = item;

                if (typeof neighbor !== 'undefined' && !this.state.cells[neighbor.id].flagged && !this.state.cells[neighbor.id].opened ) {
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
    return (
      <div className="App">
        <Title />
        <Board boardSize={this.state.boardSize} cells={this.state.cells} />
      </div>      
    );
  }  
}

export default App;
