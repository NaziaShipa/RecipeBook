import { Component, OnDestroy, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  //providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private igChangeSub: Subscription;

  constructor(
    private shoppinglistService: ShoppingListService,
    private loggingService: LoggingService
  ) {}

  ngOnInit() {
    this.ingredients = this.shoppinglistService.getIngredients();
    this.igChangeSub = this.shoppinglistService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
    this.loggingService.printLog('Hello from ShoppingList');
  }
  onEditItem(index: number) {
    this.shoppinglistService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.igChangeSub.unsubscribe();
  }
}
