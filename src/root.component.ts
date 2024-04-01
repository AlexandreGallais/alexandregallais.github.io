import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutHeaderComponent } from './layout/layout-header/layout-header.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, LayoutHeaderComponent],
    templateUrl: './root.html',
    styleUrl: './root.style.scss',
})
export class RootComponent {}
