import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
    this.userForm = new FormGroup({ // captura dos dados utilizando o rectiveFoms, e pedindo uma validação dos campos
      name: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
    });
  };

  onSubmit(): void { //metódo para cadastro do usuário, sendo que só vai funcionar se for preenchida todos os campos
    if(this.userForm.valid){
      const user = new User({
        name: this.userForm.value.name,
        email: this.userForm.value.email,
      });
      this.router.navigate(['/home']);
    }
  }
}
