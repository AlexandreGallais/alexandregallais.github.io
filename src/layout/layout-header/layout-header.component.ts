import { Component } from '@angular/core';
import { RouteService } from '../../shared/service/route.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-layout-header',
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './layout-header.component.html',
    styleUrl: './layout-header.component.scss',
})
export class LayoutHeaderComponent {
    constructor(public routeService: RouteService) {
        console.log(routeService.getFeatureRoutes());
    }
}
