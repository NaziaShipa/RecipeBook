import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";


@Injectable()
export class RecipeService {
  
    private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel',
         'A super-tasty Schnitzel - just awesome', 
         'https://insanelygoodrecipes.com/wp-content/uploads/2022/03/Homemade-Pork-Schnitzel-with-Cauliflower-and-Lemons.jpg',
         [
          new Ingredient('Meat',1),
          new Ingredient('French Fries',20)
         ]),
        new Recipe('Big Fat Burger', 
        'What else you need to say?', 
        'https://www.seriouseats.com/thmb/gamvOuvdRdBgr_Ss7DYAy4-aQ9M=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20210607-JUICYBROILEDBURGERS-JANJIGIAN-seriouseats-4-7883fb226a0c49e98aa0df4c31ca7ee1.jpg',
        [
          new Ingredient('Buns',2),
          new Ingredient('Meat',1)
        ])
      ]; 

      constructor(private shoppinglistService: ShoppingListService) {}

      getRecipes() {
        return this.recipes.slice();
      }

      getRecipe(index: number) {
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppinglistService.addIngredients(ingredients);
      }
}