import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from '././app/app.routes';
import { provideRouter } from '@angular/router';


bootstrapApplication(AppComponent,
  {
    providers: [
      // importProvidersFrom(HttpClient) // Import HttpClientModule here
      provideHttpClient(), provideAnimationsAsync(), provideRouter(routes),
    ]
  }
)
  .catch((err) => console.error(err));


