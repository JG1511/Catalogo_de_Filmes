import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-forms-cadastro',
  imports: [ReactiveFormsModule],
  templateUrl: './forms-cadastro.component.html',
  styleUrl: './forms-cadastro.component.css'
})
export class FormsCadastroComponent {
  userForm: FormGroup;


  constructor(private router: Router) {
    this.userForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
    });
  };

  openHome(): void {
    this.router.navigate(['/home']);
  };

  onSubmit(): void {
    const user = new User({
      name: this.userForm.value.name,
      email: this.userForm.value.email,
    });
  }
}
