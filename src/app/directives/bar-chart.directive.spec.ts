/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { BarChart } from './bar-chart.directive';

describe('BarChart Directive', () => {
  it('should create an instance', () => {
    let directive = new BarChart();
    expect(directive).toBeTruthy();
  });
});
