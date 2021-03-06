import { Component } from '@angular/core';
import { Recipe } from 'src/app/model/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes: Recipe[];

  /**
   *
   */
  constructor() {
    this.recipes = [
      new Recipe('Banana bread', 
      'This is banana bread', 1,2,
      [], [], ''),
      new Recipe('Farm bread', 
      'This is Farm bread', 3,4,
      [], [], ''),
      new Recipe('Beef', 
      'This is Beef', 5,6,
      [], [], ''),
      new Recipe('Kabab ', 
      'This is Kabab', 7,8,
      [], [], '')
    ]
  }
 
}
