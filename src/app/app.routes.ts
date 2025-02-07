import { Routes } from '@angular/router';
import { FormsCadastroComponent } from './pages/forms-cadastro/forms-cadastro.component';
import { HomeComponent } from './components/home/home.component';
import { FormsLoginComponent } from './pages/forms-login/forms-login.component';

export const routes: Routes = [
    {
       path : 'user-cadastro',
       title: 'Forms de login',
       component: FormsCadastroComponent 
    },
    {
        path: 'home',
        title: 'Página Principal',
        component: HomeComponent
    },
    {
        path:'user-login',
        title:'Página de Login',
        component : FormsLoginComponent
    },

    {path: '', redirectTo: '/user-login', pathMatch:'full'}
    
];
