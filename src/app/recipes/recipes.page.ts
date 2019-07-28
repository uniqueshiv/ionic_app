import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipesService } from './recipes.service';
import Recipe from './recipe.model';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit,OnDestroy {
  recipes: Recipe[];

  constructor(private recipeService:RecipesService) { }

  ngOnInit() {
    console.log("recipes page recipes lists:");
    //console.log(this.recipes)
  }
  ionViewWillEnter(){
    this.recipes = this.recipeService.getAllRecipes();
    console.log("ioniviewWill enter");
  }
  
  ionViewDidEnter(){
    console.log("ionviewdidenter");
  }
  
  ionViewWillLeave(){
    console.log("ionviewwill leave");
  }
  ionViewDidLeave(){
    console.log("ionviewdid leave");
  }

  ngOnDestroy(){
    console.log('ngdestroy');
  }

}
