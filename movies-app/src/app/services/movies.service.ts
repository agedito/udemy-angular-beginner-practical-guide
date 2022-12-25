import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MovieCredits, MovieImages, MoviesDto, MovieVideosDto } from "../models/movie";
import { switchMap, of } from "rxjs";
import { Movie } from "src/app/models/movie";
import { GenresDto } from "../models/genre";

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

	getMoviesByGenre(genreId: string, page: number) {
		let url = this.resolveMovieByGenreUrl(genreId, page);
		return this.http.get<MoviesDto>(url).pipe(switchMap((res) => of(res.results)));
	}

	getMovieVideos(id: string) {
		let url = this.resolveMovieVideosUrl(id);
		return this.http.get<MovieVideosDto>(url).pipe(switchMap((res) => of(res.results)));
	}

	getMoviesGenres() {
		let url = this.resolveGenresUrl();
		return this.http.get<GenresDto>(url).pipe(switchMap((res) => of(res.genres)));
	}

	getMovieImages(id: string) {
		let url = this.resolveMovieImagesUrl(id);
		return this.http.get<MovieImages>(url);
	}

	getMovieCredits(id: string) {
		let url = this.resolveMovieCreditsUrl(id);
		return this.http.get<MovieCredits>(url);
	}

	getMovie(id: string) {
		let url = this.resolveMovieUrl(id);
		return this.http.get<Movie>(url);
	}

	resolveMovieByGenreUrl(genre: string, pageNumber: number) {
		return this.baseUrl + "discover/movie?with_genres=" + genre + "&page=" + pageNumber + "&api_key=" + this.apiKey;
	}

	resolveGenresUrl() {
		return this.baseUrl + "genre/movie/list?api_key=" + this.apiKey;
	}

	resolveMovieUrl(id: string) {
		return this.baseUrl + "movie/" + id + "?api_key=" + this.apiKey;
	}

	resolveMovieImagesUrl(id: string) {
		return this.baseUrl + "movie/" + id + "/images?api_key=" + this.apiKey;
	}
	resolveMovieCreditsUrl(id: string) {
		return this.baseUrl + "movie/" + id + "/credits?api_key=" + this.apiKey;
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
