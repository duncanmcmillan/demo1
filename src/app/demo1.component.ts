import { Component } from '@angular/core';
import {MdUniqueSelectionDispatcher} from '@angular2-material/core';
import { CtrlButtonComponent } from './child_components/ctrl-button';
import { StatsClientComponent } from './child_components/stats-client';

@Component({
  moduleId: module.id,
  selector: 'demo1-app',
  templateUrl: 'demo1.component.html',
  styleUrls: ['demo1.component.css'],
  providers: [MdUniqueSelectionDispatcher],
  directives: [CtrlButtonComponent, StatsClientComponent]
})
export class Demo1AppComponent {
  title = 'demo1 works!';

  test_var : Number = 3;
}
