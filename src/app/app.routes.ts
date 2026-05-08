import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { CalculatorPage } from './pages/calculator-page/calculator-page';
import { TodoPage } from './pages/todo-page/todo-page';
import { ReportsPage } from './pages/reports-page/reports-page';
import { AddPage } from './pages/add-page/add-page';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomePage
    },
    {
        path: 'calculator',
        component: CalculatorPage
    },
    {
        path: 'todo',
        component: TodoPage
    },
    {
        path: 'reports',
        component: ReportsPage
    },
    {
        path: 'add',
        component: AddPage
    },
    {
        path: 'update/:id',
        component: AddPage
    },
];
