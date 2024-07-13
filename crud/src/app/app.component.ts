import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService] 
})
export class AppComponent {
  movies = [
    { id: 1, title: 'peli1', desc: 'Description for peli1', year: 2021 },
    { id: 2, title: 'peli2', desc: 'Description for peli2', year: 2022 }
  ];

  constructor(private api: ApiService) {
    this.getMovies();
  }

  getMovies = () => {
	this.api.getAllMovies().subscribe(
		data => {
			console.log(data);
			this.movies = data;  // Asegúrate de asignar los datos a movies
		},
		error => {
			console.log(error);
		}
	);
  }
}