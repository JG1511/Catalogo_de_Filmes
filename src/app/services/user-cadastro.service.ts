import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserCadastroService {

  private users: User[] = [];


  public getUsers(): User[] {
    return this.users
  }

  addUsers(user: User): void {
    this.users.push(user);
  }

  constructor() { }
}
