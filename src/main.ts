import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withHashLocation } from '@angular/router';
import { RootComponent } from './root.component';
import { routes } from './root.routes';

bootstrapApplication(RootComponent, {
    providers: [provideRouter(routes, withHashLocation())],
}).catch((err) => console.error(err));
