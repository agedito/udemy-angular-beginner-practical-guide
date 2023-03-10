import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shader/header/header.component";
import { FooterComponent } from "./shader/footer/footer.component";
import { HomeComponent } from "./pages/home/home.component";
import { MoviesComponent } from "./pages/movies/movies.component";
import { HttpClientModule } from "@angular/common/http";
import { SliderComponent } from "./components/slider/slider.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ItemsBannerComponent } from "./components/items-banner/items-banner.component";
import { ItemComponent } from "./components/item/item.component";
import { PaginatorModule } from "primeng/paginator";
import { TabViewModule } from "primeng/tabview";
import { ImageModule } from "primeng/image";
import { CarouselModule } from "primeng/carousel";
import { InputTextModule } from "primeng/inputtext";
import { MovieComponent } from "./pages/movie/movie.component";
import { VideoEmbedComponent } from "./components/video-embed/video-embed.component";
import { GenresComponent } from "./pages/genres/genres.component";

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		HomeComponent,
		MoviesComponent,
		SliderComponent,
		ItemsBannerComponent,
		ItemComponent,
		MovieComponent,
		VideoEmbedComponent,
		GenresComponent
	],
	imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, HttpClientModule, PaginatorModule, TabViewModule, ImageModule, CarouselModule, InputTextModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
