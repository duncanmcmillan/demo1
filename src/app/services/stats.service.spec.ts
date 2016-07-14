/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { StatsService } from './stats.service';

describe('Stats Service', () => {
  beforeEachProviders(() => [StatsService]);

  it('should ...',
      inject([StatsService], (service: StatsService) => {
    expect(service).toBeTruthy();
  }));
});
