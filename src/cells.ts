export class Cell {
  constructor(public cell: boolean, public symbol: boolean) {
  }
}

export class CellBoard {
  cellsArray: Cell[] = [];
  randomSymbol = Math.floor(Math.random() * 36 +1);

  constructor() {
    for(let i = 0; i <= 35; i++){
      console.log(this.randomSymbol);
      if(i===this.randomSymbol){
        this.cellsArray.push(new Cell(false, true));
      } else {
        this.cellsArray.push(new Cell(false, false));
      }
    }
  }
}

