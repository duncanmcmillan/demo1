import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'demo1-app',
  templateUrl: 'demo1.component.html',
  styleUrls: ['demo1.component.css']
})
export class Demo1AppComponent {
  title = 'demo1 works!';

  test_var : Number = 3;
}
