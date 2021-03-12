import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { Recipe } from 'src/app/model/recipe';

@Component({
  selector: 'app-recipe-summary',
  templateUrl: './recipe-summary.component.html',
  styleUrls: ['./recipe-summary.component.css']
})
export class RecipeSummaryComponent implements OnInit {

  @Input()
  recipe !: Recipe;

  @Output()
  zoomIn: EventEmitter<Recipe> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  fireZoomInEvent(){
    this.zoomIn.emit(this.recipe);
  }

}
