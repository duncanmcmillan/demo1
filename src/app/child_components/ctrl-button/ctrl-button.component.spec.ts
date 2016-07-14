/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { CtrlButtonComponent } from './ctrl-button.component';

describe('Component: CtrlButton', () => {
  it('should create an instance', () => {
    let component = new CtrlButtonComponent();
    expect(component).toBeTruthy();
  });
});
