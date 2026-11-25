import { Routes } from '@angular/router';
import { Home } from '../components/pages/home/home';
import { Exo1 } from '../components/pages/exo-1/exo-1';
import { Exo21 } from '../components/pages/exo-2-1/exo-2-1';
import { Exo22 } from '../components/pages/exo-2-2/exo-2-2';
import { Exo3 } from '../components/pages/exo-3/exo-3';
import { Exo41 } from '../components/pages/exo-4-1/exo-4-1';
import { Exo42 } from '../components/pages/exo-4-2/exo-4-2';
import { Exo43 } from '../components/pages/exo-4-3/exo-4-3';
import { Exo5 } from '../components/pages/exo-5/exo-5';
import { Exo6 } from '../components/pages/exo-6/exo-6';

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
            { path: 'exo-4-1', component: Exo41 },
            { path: 'exo-4-2', component: Exo42 },
            { path: 'exo-4-3', component: Exo43 },
            { path: 'exo-5', component: Exo5 },
            { path: 'exo-6', component: Exo6 },
        ],
    },
];
