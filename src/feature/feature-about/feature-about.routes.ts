import { Route } from '@angular/router';
import { FeatureAboutComponent } from './feature-about.component';

export const featureAboutRoutes: Route = {
    component: FeatureAboutComponent,
    data: { title: 'About' },
    children: [],
};
