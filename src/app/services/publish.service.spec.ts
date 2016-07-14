/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { PublishService } from './publish.service';

describe('Publish Service', () => {
  beforeEachProviders(() => [PublishService]);

  it('should ...',
      inject([PublishService], (service: PublishService) => {
    expect(service).toBeTruthy();
  }));
});
