import { Component } from '@angular/core';
import { Recipe } from 'src/app/model/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  title_text_color = 'red';

  recipe_in_progress: Recipe;
  
  recipes: Recipe[];
  
  use_dark_background: boolean | undefined;
  /**
   *
   */
  constructor() {

    
    this.recipe_in_progress = Recipe.createBlank();

    this.recipes = [
      
      Recipe.recipeFromJSON({
        'id':1,
        'title':'abc',
        'description': 's',
        'feeds_this_many': 4,
        'preparation_time':60,
        'ingredients': [
          {'ingredient': 'plain flour'},
          {'ingredient':'butter'}
        ],
        'instructions':[
          {'instruction': 'pour the water'},
          {'instruction': 'set temprature 40 degree'},
        ]

      }),
      Recipe.recipeFromJSON({
        'id':2,
        'title':'adas2',
        'description': 's',
        'feeds_this_many': 4,
        'preparation_time':60,
        'ingredients': [
          {'ingredient': 'plain flour'},
          {'ingredient':'butter'}
        ],
        'instructions':[
          {'instruction': 'pour the water'},
          {'instruction': 'set temprature 40 degree'},
        ]

      })
    ]
  }

  addRecipeCliked():void {
    console.log(JSON.stringify(this.recipe_in_progress, null, 2));
    this.recipes.unshift(this.recipe_in_progress);
    this.recipe_in_progress = Recipe.createBlank();
  }
 
  recipeZoomedIn(recipe:Recipe):void{
    console.log("The user cilicked ");
    console.log(JSON.stringify(recipe, null, 2))
  }

  toggleDarkBackground():void{
    this.use_dark_background = !this.use_dark_background;
  }

  toggleTitleColor():void{
    if(this.title_text_color === 'red'){
      this.title_text_color = 'black'
    }else{
      this.title_text_color = 'black';
    }
  }
}
