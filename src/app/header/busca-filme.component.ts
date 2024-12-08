import { AfterViewInit, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaioresNotasComponent } from '../cinema/maiores-notas.component';

import { NextMoviesComponent } from "../next-movies/next-movies.component";
import { AnimesComponent } from "../tendencias/animes.component";

@Component({
  selector: 'app-busca-filme',
  standalone: true,
  imports: [FormsModule, AnimesComponent, MaioresNotasComponent, ],
  templateUrl: './busca-filme.component.html',
  styleUrls: ['./busca-filme.component.css']  // Corrigido de 'styleUrl' para 'styleUrls'
})
export class BuscaFilmeComponent implements AfterViewInit {
  busca: string = '';
  mostrarFilmesEmCartaz: boolean = false;
  mostrarAnimesEmAlta: boolean = false;
  mostrarProximosFilmes: boolean = false;
  
  @Output() filmeBuscado = new EventEmitter<string>();

  @ViewChild(AnimesComponent) animesComponent!: AnimesComponent;
  @ViewChild(MaioresNotasComponent) maioresnotasComponent!: MaioresNotasComponent;
  @ViewChild(NextMoviesComponent) nextmoviesComponent!: NextMoviesComponent;

  ngAfterViewInit(): void {
    // Aqui garantimos que os componentes filhos foram inicializados corretamente
    console.log(this.animesComponent);
    console.log(this.maioresnotasComponent);
  }

  buscarFilmes(): void {
    if (this.busca.trim() === '') {
      alert("Por favor, insira o nome do filme");
      return;
    }
    this.filmeBuscado.emit(this.busca);
  }

  carregarAnimesEmAlta(): void {
    this.mostrarAnimesEmAlta = true;
    this.mostrarFilmesEmCartaz = false;
    this.mostrarProximosFilmes = false
    if (this.animesComponent) {
      this.animesComponent.carregarAnimesEmAlta();
    }
  }

  carregarFilmesEmCartaz(): void {
    this.mostrarFilmesEmCartaz = true;
    this.mostrarAnimesEmAlta = false;
    this.mostrarProximosFilmes = false
    if (this.maioresnotasComponent) {
      this.maioresnotasComponent.carregarFilmesEmCartaz();
    }
  }

  carregarProximosFilmes(): void {
    this.mostrarProximosFilmes = true
    this.mostrarFilmesEmCartaz = false;
    this.mostrarAnimesEmAlta = false;
    if (this.nextmoviesComponent) {
      this.nextmoviesComponent.carregarProximosFilmes();
    }
  }
}
