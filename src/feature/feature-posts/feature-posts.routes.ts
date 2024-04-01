import { Route } from '@angular/router';
import { FeaturePostsComponent } from './feature-posts.component';

export const featurePostsRoutes: Route = {
    component: FeaturePostsComponent,
    data: { title: 'Posts' },
    children: [],
};
