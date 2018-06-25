import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { NgxPaginationModule } from 'ngx-pagination';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { HighlightDirective } from './directives/highlight.directive';
import { BlueBackgroundDirective } from './directives/blue-background.directive';
import { ItenaryComponent } from './components/itenary/itenary.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    HighlightDirective,
    BlueBackgroundDirective,
    ItenaryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPaginationModule,
    MatGridListModule,
    MatTabsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
