import { animate, trigger, state, style, transition } from "@angular/animations";
import { Component, Input, OnInit } from "@angular/core";
import { IMAGES_SIZES } from "src/app/constants/images-sizes";
import { Movie } from "src/app/models/movie";

@Component({
	selector: "slider",
	templateUrl: "./slider.component.html",
	styleUrls: ["./slider.component.scss"],
	animations: [trigger("slideFade", [state("void", style({ opacity: 0 })), transition("void => *", [animate("1s")]), transition("* => void", [animate("500ms")])])]
})
export class SliderComponent implements OnInit {
	@Input() items: Movie[] = [];
	@Input() isBanner: boolean = false;

	currentSlideIndex: number = 0;
	readonly imagesSize = IMAGES_SIZES;

	constructor() {}

	ngOnInit(): void {
		if (!this.isBanner) {
			setInterval(() => {
				this.currentSlideIndex = ++this.currentSlideIndex % this.items.length;
			}, 5000);
		}
	}
}
