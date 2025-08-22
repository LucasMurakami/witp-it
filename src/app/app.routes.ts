import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
    { path: 'witp-game', loadComponent: () => import('./pages/witp-game/witp-game').then(m => m.WitpGame) }
];
