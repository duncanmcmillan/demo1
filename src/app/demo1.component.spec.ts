import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Demo1AppComponent } from '../app/demo1.component';

beforeEachProviders(() => [Demo1AppComponent]);

describe('App: Demo1', () => {
  it('should create the app',
      inject([Demo1AppComponent], (app: Demo1AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'demo1 works!\'',
      inject([Demo1AppComponent], (app: Demo1AppComponent) => {
    expect(app.title).toEqual('demo1 works!');
  }));
});
