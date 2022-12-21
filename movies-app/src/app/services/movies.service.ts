import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: "root"
})
export class MoviesService {
	constructor(private http: HttpClient) {}

	getMovies() {
		let url = this.getMoviesUrl();
		return this.http.get(url);
	}

	getMoviesUrl() {
		return "https://api.themoviedb.org/3/movie/upcoming?api_key=f252dc248f48848d62f9e9194b0b87f9";
	}
}
