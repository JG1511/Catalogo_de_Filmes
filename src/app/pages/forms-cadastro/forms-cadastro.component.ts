import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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
  })
}
