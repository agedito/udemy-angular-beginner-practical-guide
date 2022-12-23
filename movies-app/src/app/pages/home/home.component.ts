import { Component, OnInit } from "@angular/core";
import { MoviesService } from "src/app/services/movies.service";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
	popularMovies: any = [];

	constructor(private moviesService: MoviesService) {}
	ngOnInit() {
		this.moviesService.getMoviesEndpoint("upcoming").subscribe((response: any) => {
			this.popularMovies = response.results;
		});
	}
}
