import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Movie, MovieVideo } from "src/app/models/movie";
import { MoviesService } from "src/app/services/movies.service";
import { IMAGES_SIZES } from "src/app/constants/images-sizes";

@Component({
	selector: "app-movie",
	templateUrl: "./movie.component.html",
	styleUrls: ["./movie.component.scss"]
})
export class MovieComponent implements OnInit {
	movie: Movie | null = null;
	movieVideos: MovieVideo[] = [];
	imageSizes = IMAGES_SIZES;

	constructor(private route: ActivatedRoute, private movieService: MoviesService) {}

	ngOnInit(): void {
		this.route.params.subscribe(({ id }) => {
			this.getMovie(id);
			this.getMovieVideos(id);
		});
	}

	getMovie(id: string) {
		this.movieService.getMovie(id).subscribe((movieData) => {
			this.movie = movieData;
		});
	}

	getMovieVideos(id: string) {
		this.movieService.getMovieVideos(id).subscribe((movieVideosData) => {
			this.movieVideos = movieVideosData;
		});
	}
}
