import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import 'hammerjs';
import { MoviesModule } from './modules/movies/movies.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharacterComponent } from './components/character/character.component';
import { PageNotFoundComponent } from './components/page-not-found.component';

const MAT_MODULES  = [
  MatButtonModule,
  MatToolbarModule
  // and so on...
];


@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    CharacterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    MoviesModule,
    AppRoutingModule,
    MAT_MODULES,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  exports: [MAT_MODULES],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
