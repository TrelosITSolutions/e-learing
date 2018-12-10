import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
<<<<<<< HEAD
=======
import 'hammerjs';
>>>>>>> e05683a3eeb88b54b4feaab8f620d854e9cedf53

if (environment.production) {
  enableProdMode();
}

<<<<<<< HEAD
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
=======
platformBrowserDynamic().bootstrapModule(AppModule);
>>>>>>> e05683a3eeb88b54b4feaab8f620d854e9cedf53
