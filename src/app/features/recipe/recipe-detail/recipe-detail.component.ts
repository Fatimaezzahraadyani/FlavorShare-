import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecepeService } from '../../../core/Services/recepe.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  imports: [CommonModule],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit{

  recipe : any;

  ingredientIndices : number [] = [];

  constructor(
    private route : ActivatedRoute,
    private  recepeService : RecepeService){}




    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.recepeService.getRecipeById(id).subscribe(data => {
          this.recipe = data;
          this.ingredientIndices = this.getIngredientIndices(data);
        });
      }
    }
    
    getIngredientIndices(recipe: any): number[] {
      const indices = [];
      for (let i = 1; i <= 20; i++) {
        if (recipe[`strIngredient${i}`]) {
          indices.push(i);
        }
      }
      return indices;
    }
    
  
  }    
    


