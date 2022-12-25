import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MovieImages, MoviesDto, MovieVideosDto } from "../models/movie";
import { switchMap, of } from "rxjs";
import { Movie } from "src/app/models/movie";

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

	getMovieVideos(id: string) {
		let url = this.resolveMovieVideosUrl(id);
		return this.http.get<MovieVideosDto>(url).pipe(switchMap((res) => of(res.results)));
	}

	getMovieImages(id: string) {
		let url = this.resolveMovieImagesUrl(id);
		return this.http.get<MovieImages>(url);
	}

	getMovie(id: string) {
		let url = this.resolveMovieUrl(id);
		return this.http.get<Movie>(url);
	}

	resolveMovieUrl(id: string) {
		return this.baseUrl + "movie/" + id + "?api_key=" + this.apiKey;
	}

	resolveMovieImagesUrl(id: string) {
		return this.baseUrl + "movie/" + id + "/images?api_key=" + this.apiKey;
	}

	resolveMovieVideosUrl(id: string) {
		return this.baseUrl + "movie/" + id + "/videos?api_key=" + this.apiKey;
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
