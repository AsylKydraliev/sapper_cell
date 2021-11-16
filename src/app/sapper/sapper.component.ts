import {Component} from '@angular/core';
import {CellBoard} from "../../cells";

@Component({
  selector: 'app-sapper',
  templateUrl: './sapper.component.html',
  styleUrls: ['./sapper.component.css']
})
export class SapperComponent{
  cells = new CellBoard().cellsArray;
  countClick = 0;
  gameResult = '';

  onClickCell(symbol: string) {
    this.countClick++;
     if(symbol) {
       this.gameResult = 'You found a hidden item!';
     }
  }

  reset(){
    this.countClick = 0;
    this.cells = new CellBoard().cellsArray;
    this.gameResult = '';
  }
}


