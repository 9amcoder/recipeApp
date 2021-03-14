import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule } from '@angular/router'
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeSummaryComponent } from './components/recipe-summary/recipe-summary.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeSummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'recipes',
        component: RecipeListComponent
      },
      {
        path:'',
        redirectTo: '/recipes',
        pathMatch: 'full'
      }
     
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
