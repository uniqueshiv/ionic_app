import { Injectable } from '@angular/core';
import Recipe from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipes:Recipe[] = [
    {
      id:'r1',
      title:'Schintzel',
      imageUrl:'https://images.media-allrecipes.com/images/56589.png',
      ingredients:['French Fries','Pork Meat','Salad']
    },
    {
      id:'r2',
      title:'Schintzel',
      imageUrl:'https://images.media-allrecipes.com/images/56589.png',
      ingredients:['schintzel','Pork Meat','Salad']
    },

  ];


  constructor() { 
    //console.log(this.recipes)
  }


  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId:string){
    return {
      ...this.recipes.find(recipe => {
      return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId:string){
    //console.log("recipe id in service = ",recipeId)
    this.recipes = this.recipes.filter(recipe =>{
      return recipe.id !== recipeId;
      //console.log(recipe.id !== recipeId);
    });
  }

}
