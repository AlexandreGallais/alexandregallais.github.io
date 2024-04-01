import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class RouteService {
    constructor(private router: Router) {}

    getFeatureRoutes = () =>
        this.router.config.find((x) => x.path === '')?.children ?? [];
}
