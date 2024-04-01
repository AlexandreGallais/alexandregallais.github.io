import { Routes } from '@angular/router';
import { featureHomeRoutes } from './feature/feature-home/feature-home.routes';
import { featurePostsRoutes } from './feature/feature-posts/feature-posts.routes';
import { featureAboutRoutes } from './feature/feature-about/feature-about.routes';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                ...featureHomeRoutes,
            },
            {
                path: 'posts',
                ...featurePostsRoutes,
            },
            {
                path: 'about',
                ...featureAboutRoutes,
            },
        ],
    },
    {
        path: '**',
        redirectTo: '',
    },
];
