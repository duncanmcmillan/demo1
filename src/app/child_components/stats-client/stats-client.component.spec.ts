/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { StatsClientComponent } from './stats-client.component';

describe('Component: StatsClient', () => {
  it('should create an instance', () => {
    let component = new StatsClientComponent();
    expect(component).toBeTruthy();
  });
});
