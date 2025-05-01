import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RecipeDetailComponent } from './features/recipe/recipe-detail/recipe-detail.component';

export const routes: Routes = [
    { path : '' ,component: HomeComponent},
    { path : 'recipe/detail/:id', component: RecipeDetailComponent},

];
