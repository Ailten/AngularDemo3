import { Routes } from '@angular/router';
import { Home } from '../components/pages/home/home';
import { Exo1 } from '../components/pages/exo-1/exo-1';
import { Exo21 } from '../components/pages/exo-2-1/exo-2-1';
import { Exo22 } from '../components/pages/exo-2-2/exo-2-2';
import { Exo3 } from '../components/pages/exo-3/exo-3';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    {
        path: 'exercices',
        children: [
            { path: 'exo-1', component: Exo1 },
            { path: 'exo-2-1', component: Exo21 },
            { path: 'exo-2-2', component: Exo22 },
            { path: 'exo-3', component: Exo3 },
        ],
    },
];
