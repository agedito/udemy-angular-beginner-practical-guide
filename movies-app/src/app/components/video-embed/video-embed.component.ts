import { Component, OnInit, Input } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
	selector: "video-embed",
	templateUrl: "./video-embed.component.html",
	styleUrls: ["./video-embed.component.scss"]
})
export class VideoEmbedComponent implements OnInit {
	@Input() site: string = "Youtube";
	@Input() key: string | null = null;

	constructor(private sanitizier: DomSanitizer) {}
	ngOnInit(): void {}

	getSafeUrl(url: string) {
		return this.sanitizier.bypassSecurityTrustResourceUrl(url);
	}
}
