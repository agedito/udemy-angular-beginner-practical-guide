import { Component, OnInit } from "@angular/core";
import { Movie } from "src/app/models/movie";
import { MoviesService } from "src/app/services/movies.service";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
	popularMovies: Movie[] = [];
	upcomingMovies: Movie[] = [];
	topRatedMovies: Movie[] = [];

	constructor(private moviesService: MoviesService) {}
	ngOnInit() {
		this.moviesService.getMoviesEndpoint("popular").subscribe((response: any) => {
			this.popularMovies = response.results;
		});
		this.moviesService.getMoviesEndpoint("upcoming").subscribe((response: any) => {
			this.upcomingMovies = response.results;
		});
		this.moviesService.getMoviesEndpoint("top_rated").subscribe((response: any) => {
			this.topRatedMovies = response.results;
		});
	}
}
