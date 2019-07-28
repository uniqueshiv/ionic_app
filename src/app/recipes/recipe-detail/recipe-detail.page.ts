import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Router } from '@angular/router';
import Recipe from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  
  loadedRecipe:Recipe;
  constructor(
    private recipeService:RecipesService,
    private activatedRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('recipeId')){
        return ;
      }
      const recepeId  = paramMap.get('recipeId');
      this.loadedRecipe = this.recipeService.getRecipe(recepeId);
    });
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.loadedRecipe.id);
    this.router.navigate(['/recipes']);
  }

}
