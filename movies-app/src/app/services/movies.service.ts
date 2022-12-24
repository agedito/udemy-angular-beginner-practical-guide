import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MoviesDto } from "../models/movie";
import { switchMap, of } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class MoviesService {
	baseUrl: string = "https://api.themoviedb.org/3/";
	apiKey: string = "f252dc248f48848d62f9e9194b0b87f9";

	constructor(private http: HttpClient) {}

	getMovies(endpoint: string, count: number = 12) {
		let url = this.resolveEndpointUrl(endpoint);
		return this.http.get<MoviesDto>(url).pipe(switchMap((res) => of(res.results.slice(0, count))));
	}

	searchMovies(page: number) {
		let url = this.baseUrl + "movie/popular?page=" + page + "&api_key=" + this.apiKey;
		return this.http.get<MoviesDto>(url).pipe(switchMap((res) => of(res.results)));
	}

	getTvs(endpoint: string, count: number = 12) {
		let url = this.resolveEndpointUrl(endpoint);
		return this.http.get<MoviesDto>(url).pipe(switchMap((res) => of(res.results.slice(0, count))));
	}

	resolveEndpointUrl(endpoint: string) {
		return this.baseUrl + "movie/" + endpoint + "?api_key=" + this.apiKey;
	}
}
