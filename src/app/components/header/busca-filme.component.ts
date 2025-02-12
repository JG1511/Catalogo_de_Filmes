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

export class BuscaFilmeComponent {
  busca: string = '';
  
  // Mudando para strings para representar os estados
  mostrarFilmesEmCartaz: string = ''; 
  mostrarFilmesEmAlta: string = ''; 
  mostrarProximosFilmes: string = '';
  
  @Output() filmeBuscado = new EventEmitter<string>();
  @ViewChild(TendenciaComponent) tendenciaComponet!: TendenciaComponent;
  @ViewChild(MaioresNotasComponent) maioresnotasComponent!: MaioresNotasComponent;
  @ViewChild(NextMoviesComponent) nextmoviesComponent!: NextMoviesComponent;
  @ViewChild(FormsCadastroComponent) nome! : FormsCadastroComponent;

  user: User;

  constructor(private userCadastroService : UserCadastroService, private localStorage: LocalStorageService) {
    this.user = this.localStorage.getLocalStorage("user");
  }

  removerLocalStorage() : void {
    this.localStorage.removeLocalStorage("user")
  }

  buscarFilmes(): void {
    if (this.busca.trim() === '') {
      alert("Por favor, insira o nome do filme");
      return;
    }
    this.mostrarFilmesEmAlta = '';
    this.mostrarFilmesEmCartaz = '';
    this.mostrarProximosFilmes = '';
    this.filmeBuscado.emit(this.busca);
  }

  carregarFilmesEmAlta(): void {
    this.mostrarFilmesEmAlta = 'emAlta'; 
    this.mostrarFilmesEmCartaz = '';
    this.mostrarProximosFilmes = '';
    this.filmeBuscado.emit('') ;
    if (this.tendenciaComponet) {
      this.tendenciaComponet.carregarFilmesEmAlta();
    }
  }

  carregarFilmesEmCartaz(): void {
    this.mostrarFilmesEmCartaz = 'emCartaz'; 
    this.mostrarFilmesEmAlta = '';
    this.mostrarProximosFilmes = '';
    this.filmeBuscado.emit('') ;
    if (this.maioresnotasComponent) {
      this.maioresnotasComponent.carregarFilmesEmCartaz();
    }
  }

  carregarProximosFilmes(): void {
    this.mostrarProximosFilmes = 'proximos'; 
    this.mostrarFilmesEmCartaz = '';
    this.mostrarFilmesEmAlta = '';
    this.filmeBuscado.emit('') ;
    if (this.nextmoviesComponent) {
      this.nextmoviesComponent.carregarProximosFilmes();
    
    }
  }
}
