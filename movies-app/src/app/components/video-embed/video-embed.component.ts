import { Component, OnInit, Input } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
	selector: "video-embed",
	templateUrl: "./video-embed.component.html",
	styleUrls: ["./video-embed.component.scss"]
})
export class VideoEmbedComponent implements OnInit {
	@Input() site: string = "Youtube";
	@Input() key: string | null = null;

	videoUrl: SafeResourceUrl = "";

	constructor(private sanitizier: DomSanitizer) {}
	ngOnInit(): void {
		let url: string = "";
		switch (this.site) {
			case "YouTube":
				url = "https://www.youtube.com/embed/" + this.key;
				break;
		}
		this.videoUrl = this.getSafeUrl(url);
	}

	getSafeUrl(url: string) {
		return this.sanitizier.bypassSecurityTrustResourceUrl(url);
	}
}
