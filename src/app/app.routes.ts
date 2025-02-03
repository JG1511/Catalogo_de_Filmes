import { Routes } from '@angular/router';
import { FormsCadastroComponent } from './pages/forms-cadastro/forms-cadastro.component';

export const routes: Routes = [
    {
       path : 'login',
       title: 'Forms de login',
       component: FormsCadastroComponent 
    },
    {path: '', redirectTo: '/login', pathMatch:'full'}
    
];
