import { Component, OnInit } from '@angular/core';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';

@Component({
  moduleId: module.id,
  selector: 'app-ctrl-button',
  templateUrl: 'ctrl-button.component.html',
  directives: [MD_BUTTON_DIRECTIVES],
  styleUrls: ['ctrl-button.component.css']
})
export class CtrlButtonComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    console.log('CtrlButton Initialised');
  }

}
