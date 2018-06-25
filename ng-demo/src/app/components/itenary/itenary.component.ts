import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itenary',
  templateUrl: './itenary.component.html',
  styleUrls: ['./itenary.component.css']
})
export class ItenaryComponent implements OnInit {

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  constructor() { }

  ngOnInit() {
  }

}
