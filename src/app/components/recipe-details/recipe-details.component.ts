import { Component, OnInit } from '@angular/core';
import { ParamMap } from '@angular/router';
import { ActivatedRoute } from '@angular/router'
import { Recipe } from 'src/app/model/recipe';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe!: Recipe;
  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      this.recipe = this.findRecipeById(parseInt(params.get('recipe_id',10)));
    })
  }
  findRecipeById(recipe_id: number):Recipe{
    
  }
}
