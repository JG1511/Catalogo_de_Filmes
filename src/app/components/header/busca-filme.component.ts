import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';




import { User } from '../../models/user';
import { MaioresNotasComponent } from '../../pages/cinema/maiores-notas.component';
import { FormsCadastroComponent } from '../../pages/forms-cadastro/forms-cadastro.component';
import { NextMoviesComponent } from '../../pages/next-movies/next-movies.component';
import { TendenciaComponent } from '../../pages/tendencia/tendencia.component';
import { LocalStorageService } from '../../services/local-storage.service';
import { UserCadastroService } from '../../services/user-cadastro.service';

@Component({
  selector: 'app-busca-filme',
  standalone: true,
  imports: [FormsModule, MaioresNotasComponent, NextMoviesComponent, TendenciaComponent],
  templateUrl: './busca-filme.component.html',
  styleUrls: ['./busca-filme.component.css']  // Corrigido de 'styleUrl' para 'styleUrls'
})

export class BuscaFilmeComponent   {

  busca: string = '';
  mostrarFilmesEmCartaz: boolean = false;
  mostrarFilmesEmAlta: boolean = false;
  mostrarProximosFilmes: boolean = false;
  
  @Output() filmeBuscado = new EventEmitter<string>();

  @ViewChild(TendenciaComponent) tendenciaComponet!: TendenciaComponent;
  @ViewChild(MaioresNotasComponent) maioresnotasComponent!: MaioresNotasComponent;
  @ViewChild(NextMoviesComponent) nextmoviesComponent!: NextMoviesComponent;
 
  @ViewChild(FormsCadastroComponent) nome! : FormsCadastroComponent;

  user: User;

  constructor(private userCadastroService : UserCadastroService, private localStorage: LocalStorageService){ 

    // this.users = this.userCadastroService.getUsers();
    this.user = this.localStorage.getLocalStorage("user");
  }

  removerLocalStorage() : void{
    this.localStorage.removeLocalStorage("user")
  }


  buscarFilmes(): void {
    if (this.busca.trim() === '') {
      alert("Por favor, insira o nome do filme");
      return;
    }
    this.filmeBuscado.emit(this.busca);
  }

  carregarFilmesEmAlta(): void {
    this.mostrarFilmesEmAlta = true;
    this.mostrarFilmesEmCartaz = false;
    this.mostrarProximosFilmes = false
    if (this.tendenciaComponet) {
      this.tendenciaComponet.carregarFilmesEmAlta();
    }
  }

  carregarFilmesEmCartaz(): void {
    this.mostrarFilmesEmCartaz = true;
    this.mostrarFilmesEmAlta = false;
    this.mostrarProximosFilmes = false
    if (this.maioresnotasComponent) {

      this.maioresnotasComponent.carregarFilmesEmCartaz(); //this.cinemaComponent.carregarFilmesEmCartaz()

    }
  }

  carregarProximosFilmes(): void {
    this.mostrarProximosFilmes = true
    this.mostrarFilmesEmCartaz = false;
    this.mostrarFilmesEmAlta = false;
    if (this.nextmoviesComponent) {
      this.nextmoviesComponent.carregarProximosFilmes();
    }
  }

}
