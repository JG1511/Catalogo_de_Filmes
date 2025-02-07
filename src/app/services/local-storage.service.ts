import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  setLocalStorage(token: string, user: any): boolean {
    if (this.storage) {
      this.storage.setItem("token", token); 
      this.storage.setItem("user", JSON.stringify(user)); //JSON.stringfy serve para guardar um objeto
      return true;
    }
    return false;
  }

  getLocalStorage(token:string) : any{
    if(this.storage){
     const item = this.storage.getItem(token);
     return item ? JSON.parse(item) : null; // faz a leitura do objeto
    }
    return null;
  }

  removeLocalStorage(token : string) : void{
    this.storage.removeItem(token);
  }
  clearLocalStorage() :void{
    this.storage.clear();
  }
}
