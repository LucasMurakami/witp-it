import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./home/home').then(m => m.Home) },
    { path: 'witp-game', loadComponent: () => import('./witp-game/witp-game').then(m => m.WitpGame) }
];
