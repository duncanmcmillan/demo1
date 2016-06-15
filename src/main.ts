import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Demo1AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Demo1AppComponent);

