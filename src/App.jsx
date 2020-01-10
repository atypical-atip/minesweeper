//Import logic functions
import { randomlyAssignMines } from './util/randomlyAssignMines';
import { getNeighbors } from './util/getNeighbors';
import { calcNeighborMineCount } from './util/calcNeighborMineCount';
import { getNumberColor } from './util/getNumberColor';

//Import styles
import './App.css';

//Import components
import React from 'react';
import { Board }  from './Сomponents/Board/Board';
import { Title } from './Сomponents/Title/Title';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.buildBoard = this.buildBoard.bind(this);
    
    this.state = {
      boardSize: 10,
      mineCount: 10,
      cells: {},
      gameOver: false
    }
  }

  buildBoard () {
    let newCells = {};
    for (let row = 0; row < this.state.boardSize; row++) {            
        for (let column = 0; column < this.state.boardSize; column++) {
          newCells[`${row}${column}`] = {
              id: `${row}${column}`,
              row,
              column,
              isOpened: false,
              isFlagged: false,
              isMined: false,
              neighborMineCount: 0
            };                
        }
    }
    
    newCells = randomlyAssignMines(newCells, this.state.boardSize, this.state.mineCount);
    newCells = calcNeighborMineCount(newCells, this.state.boardSize);

    this.setState({
      cells: newCells,
      gameOver: false
    })
  }

  loss() {
    this.setState({
      gameOver: true
    })
  }

  handleClick (id) {
    
    if (!this.state.gameOver) {
      let cell = this.state.cells[id];
      const clickedCell = document.getElementById(id);      
      
      if (!cell.isOpened) { //Check if cell is opened
        
        if (!cell.isFlagged) { //Check if cell is flagged
          
          if (cell.isMined) { //Check if cell is mined
            // this.loss();
            clickedCell.style.backgroundColor = 'red';
            console.log('Game Over!');
          } else {
            cell.isOpened = true;

            if(cell.neighborMineCount > 0) {              
              let color = getNumberColor(cell.neighborMineCount);
              clickedCell.style.color = color;
            }
            else {              
              clickedCell.style.backgroundColor = '#686468';
              
              //Open all adjacent cells if they are neither flagged nor opened
              let neighbors = getNeighbors(this.state.cells, cell.id);
              
              neighbors.map( item => {                
                if (typeof item !== 'undefined' && !this.state.cells[item.id].isFlagged && !this.state.cells[item.id].isOpened ) {
                  this.handleClick(item.id);
                }
              })
            }
          }
        }
      }
    }
  }

  render() {        
    return (
      <div className="App">
        <Title />
        <button onClick={this.buildBoard}>New Game</button>
        <Board boardSize={this.state.boardSize} cells={this.state.cells} handleClick={this.handleClick} />
      </div>      
    );
  }  
}

export default App;
