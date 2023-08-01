import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://ca-times.brightspotcdn.com/dims4/default/4199d8a/2147483647/strip/true/crop/6720x4200+0+140/resize/1200x750!/format/webp/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ffa%2F0b%2Fefa966084d3699b902d0d927f8c6%2F1315298-fo-recipe-california-tian-16.jpg'),
    new Recipe('Spagetthi', 'Lorem ipsum dolor sit amet ', 'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/spaghetti_bolognese_0.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
