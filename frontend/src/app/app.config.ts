import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';
import {provideKeycloak} from 'keycloak-angular';

import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideKeycloak({
      config: {
        url: 'http://localhost:8080',
        realm: 'pragaas',
        clientId: 'frontend'
      },
      initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: false
      }
    }),
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes)
  ]
};
