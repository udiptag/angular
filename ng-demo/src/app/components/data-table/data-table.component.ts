import { Component, OnInit, Input } from '@angular/core';
import { HttpClientModule, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { LocResult } from '../../models/locResult';

@Component({
  selector: 'app-gps-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})

export class DataTableComponent implements OnInit {

  @Input() dtLabel: string;         // Label of Data Table
  @Input() dtDataSource: string;    // REST URL to get data
  @Input() dtHeaderData: any;       // JSON for Table fields and header labels to be displayed
  @Input() dtBackground: string;    // Background color of Table
  @Input() font: string;            // Font to be used for label

  headerLabel: string[];
  headerType: string[];
  locResults: LocResult[];
  results: any[];
  selectedRow: number;
  p = 1;

  constructor(private http: HttpClient) {
    if (this.dtBackground === undefined) {
      this.dtBackground = 'transparent';
    }
    if (this.font === undefined) {
      this.font = 'Calibri';
    }
    this.selectedRow = -1;
   }

  ngOnInit() {
    console.log('dtHeaderData: ' + this.dtHeaderData);
    this.http.get(this.dtHeaderData).subscribe(
      data => {
        this.headerType = Object.keys(data);
        // this.headerLabel = Object.values(data);  // Doesn't work for IE
        this.headerLabel =  Object.keys(data).map(itm => data[itm]);
        console.log('Type: ', this.headerType);
        console.log('Labels: ', this.headerLabel);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );

    console.log('dtDataSource: ' + this.dtDataSource);
    this.locResults = [];
    this.http.get(this.dtDataSource).subscribe(
      data => {
        this.results = data as any[];
        for (let i = 0; i < this.results.length; i++) {
          this.locResults[i] = new LocResult(this.results[i], this.headerType);
          console.log(i + 1, '> ', this.results[i]);
        }
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

  setClickedRow(index: number): void {
    this.selectedRow = index;
    console.log('Selected row: ', this.selectedRow);
  }
}
