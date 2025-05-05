import { Component, OnInit } from '@angular/core';
import { RecepeService } from '../../../core/Services/recepe.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  imports: [],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{

  recipes : any[] = [];

  searchName : string = '';

  
  constructor(private recepeService : RecepeService) {}

  ngOnInit(): void {
    this.recepeService.getAllRecipes().subscribe(data=>{
      this.recipes = data;
    });
  }

  getRating(id : string):number{
    const stored = localStorage.getItem(`rating_${id}`);
    return stored ? +stored : 0;
  }


  
}
