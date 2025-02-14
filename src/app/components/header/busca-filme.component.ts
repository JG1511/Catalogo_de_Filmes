import { Component, EventEmitter, Output, ViewChild, AfterViewInit } from '@angular/core';
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
  styleUrls: ['./busca-filme.component.css']
})
export class BuscaFilmeComponent implements AfterViewInit {
  busca: string = '';
  
  // Estados para exibição dos componentes
  mostrarFilmesEmCartaz: boolean = false; 
  mostrarFilmesEmAlta: boolean = false; 
  mostrarProximosFilmes: boolean = false;
  
  @Output() filmeBuscado = new EventEmitter<string>();
  @ViewChild(TendenciaComponent) tendenciaComponet!: TendenciaComponent;
  @ViewChild(MaioresNotasComponent) maioresnotasComponent!: MaioresNotasComponent;
  @ViewChild(NextMoviesComponent) nextmoviesComponent!: NextMoviesComponent;
  @ViewChild(FormsCadastroComponent) nome! : FormsCadastroComponent;

  user: User;

  constructor(private userCadastroService: UserCadastroService, private localStorage: LocalStorageService) {
    this.user = this.localStorage.getLocalStorage("user");
  }

  
  ngAfterViewInit(): void {
    console.log("Componentes filhos inicializados.");
  }

  removerLocalStorage(): void {
    this.localStorage.removeLocalStorage("user");
  }

  buscarFilmes(): void {
    if (this.busca.trim() === '') {
      alert("Por favor, insira o nome do filme");
      return;
    }
    this.mostrarFilmesEmAlta = false;
    this.mostrarFilmesEmCartaz = false;
    this.mostrarProximosFilmes = false;
    this.filmeBuscado.emit(this.busca);
  }

  carregarFilmesEmAlta(): void {
    this.mostrarFilmesEmAlta = true;
    this.mostrarFilmesEmCartaz = false;
    this.mostrarProximosFilmes = false;
    this.filmeBuscado.emit('');
    
 
    setTimeout(() => {
      if (this.tendenciaComponet) {
        this.tendenciaComponet.carregarFilmesEmAlta();
      }
    });
  }

  carregarFilmesEmCartaz(): void {
    this.mostrarFilmesEmCartaz = true;
    this.mostrarFilmesEmAlta = false;
    this.mostrarProximosFilmes = false;
    this.filmeBuscado.emit('');
    
    setTimeout(() => {
      if (this.maioresnotasComponent) {
        this.maioresnotasComponent.carregarFilmesEmCartaz();
      }
    });
  }

  carregarProximosFilmes(): void {
    this.mostrarProximosFilmes = true;
    this.mostrarFilmesEmCartaz = false;
    this.mostrarFilmesEmAlta = false;
    this.filmeBuscado.emit('');
    
    setTimeout(() => {
      if (this.nextmoviesComponent) {
        this.nextmoviesComponent.carregarProximosFilmes();
      }
    });
  }
}
