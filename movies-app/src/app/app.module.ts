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
import { ItemsBannerComponent } from './components/items-banner/items-banner.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';

@NgModule({
	declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, MoviesComponent, SliderComponent, ItemsBannerComponent, MovieItemComponent],
	imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, HttpClientModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
