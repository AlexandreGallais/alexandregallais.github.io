import { Route } from '@angular/router';
import { FeatureHomeComponent } from './feature-home.component';

export const featureHomeRoutes: Route = {
    component: FeatureHomeComponent,
    data: { title: 'Alexandre Gallais' },
    children: [],
};
