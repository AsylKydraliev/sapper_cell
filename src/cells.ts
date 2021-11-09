export class Cell {
  constructor(public cell: string, public symbol: string) {}
}

export class CellBoard {
  cellsArray: Cell[] = [];
  randomSymbol = Math.floor(Math.random() * 36);

  constructor() {
    for(let i = 0; i <= 35; i++){
      if(i === this.randomSymbol){
        this.cellsArray.push(new Cell('', 'X'));
      } else {
        this.cellsArray.push(new Cell('', ''));
      }
    }
  }
}

