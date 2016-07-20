import { Component, OnInit } from '@angular/core';
import { BarChart } from '../../directives/bar-chart.directive';

@Component({
  moduleId: module.id,
  selector: 'app-stats-client',
  templateUrl: 'stats-client.component.html',
  styleUrls: ['stats-client.component.css'],
  directives: [BarChart]
})
export class StatsClientComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
