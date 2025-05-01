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

  constructor(
    private route : ActivatedRoute,
    private  recepeService : RecepeService){}


    ngOnInit() {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.recepeService.getRecipeById(id).subscribe(data => {
          this.recipe = data.meals[0]; // retourne { meals: [...] }  objet
        });
      }
    }
}
