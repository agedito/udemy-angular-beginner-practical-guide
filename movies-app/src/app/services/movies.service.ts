import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: "root"
})
export class MoviesService {
	baseUrl: string = "https://api.themoviedb.org/3/";
	apiKey: string = "f252dc248f48848d62f9e9194b0b87f9";

	constructor(private http: HttpClient) {}

	getMoviesEndpoint(endpoint: string) {
		let url = this.resolveEndpointUrl(endpoint);
		return this.http.get(url);
	}

	resolveEndpointUrl(endpoint: string) {
		return this.baseUrl + "movie/" + endpoint + "?api_key=" + this.apiKey;
	}
}
