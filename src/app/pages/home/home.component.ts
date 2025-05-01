import { CommonModule } from '@angular/common';
import { Component, importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RecepeService } from '../../core/Services/recepe.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent {
  recipes: any[] = []; // ✅ à ajouter

  constructor(private recipeService: RecepeService) {}

  ngOnInit() {
    this.recipeService.getAllRecipes().subscribe(data => {
      this.recipes = data;
    });
  }
}

