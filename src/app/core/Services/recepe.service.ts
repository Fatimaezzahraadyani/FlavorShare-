import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecepeService {

  private url ='https://www.themealdb.com/api/json/v1/1';


  constructor( private Http : HttpClient) { }

  getAllRecipes(): Observable<any[]> {
    return this.Http.get<any>(`${this.url}/filter.php?i=chicken_breast`)
      .pipe(map(response => response.meals));
  }

  getRecipeById(id: string): Observable<any> {
    return this.Http.get<any>(`${this.url}/lookup.php?i=${id}`)
      .pipe(map(response => response.meals[0])); // détail est dans un tableau de 1 élément
  }

}
