import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-forms-login',
  imports: [ReactiveFormsModule],
  templateUrl: './forms-login.component.html',
  styleUrl: './forms-login.component.css'
})
export class FormsLoginComponent {
  userForm: FormGroup;

  constructor(private router: Router, private localStorage: LocalStorageService) {
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }
  onSubmit(): void {
    if (!this.userForm.valid) {
      return console.error('Eu sou o batman');
    }
    const storageUser = this.localStorage.getLocalStorage("user");

    if (!storageUser) {
      console.warn('Nenhum usuário encontrado. Redirecionando para o Cadastro');
      alert('Nenhum usuário encontrado. Redirecionando para o Cadastro');
      this.router.navigate(['/user-cadastro']);
      return;
    }
    if (this.userForm.value.name === storageUser.name && this.userForm.value.email === storageUser.email) {
      console.log('Usuário autenticado! Redirecionando para página principal');
      this.router.navigate(['/home']);
    } else {
    alert("Dados incorretos")
    }
  }

  cadastro() : void {
    this.router.navigate(['/user-cadastro']);
  }
}
