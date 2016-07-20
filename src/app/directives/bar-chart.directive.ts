import { Directive, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Directive({
  selector: '[bar-chart]'
})
export class BarChart implements OnInit {

  constructor() {}

  ngOnInit() {
    console.log(d3);
  }
}
