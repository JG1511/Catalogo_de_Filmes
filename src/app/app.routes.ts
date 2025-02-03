import { Routes } from '@angular/router';
import { FormsCadastroComponent } from './pages/forms-cadastro/forms-cadastro.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
       path : 'login',
       title: 'Forms de login',
       component: FormsCadastroComponent 
    },
    {
        path: 'home',
        title: 'Página Principal',
        component: HomeComponent
    },

    {path: '', redirectTo: '/login', pathMatch:'full'}
    
];
