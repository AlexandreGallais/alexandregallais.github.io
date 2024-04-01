import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { RootComponent } from './root.component';
import { routes } from './root.routes';

bootstrapApplication(RootComponent, {
    providers: [provideRouter(routes)],
}).catch((err) => console.error(err));
