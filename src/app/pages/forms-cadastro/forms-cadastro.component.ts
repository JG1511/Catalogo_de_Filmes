import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms-cadastro',
  imports: [ReactiveFormsModule],
  templateUrl: './forms-cadastro.component.html',
  styleUrl: './forms-cadastro.component.css'
})
export class FormsCadastroComponent {
  userForm = new FormGroup({
    name: new FormControl(''),
    email : new FormControl(''),
  });

  constructor(private router: Router){};

  openHome(){
    this.router.navigate(['/home']);
  };
}
