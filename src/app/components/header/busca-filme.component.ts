import { AfterViewInit, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { TendenciaComponent } from '../../pages/tendencia/tendencia.component';
import { MaioresNotasComponent } from '../../pages/cinema/maiores-notas.component';
import { NextMoviesComponent } from '../../pages/next-movies/next-movies.component';

@Component({
  selector: 'app-busca-filme',
  standalone: true,
  imports: [FormsModule, MaioresNotasComponent, NextMoviesComponent, TendenciaComponent],
  templateUrl: './busca-filme.component.html',
  styleUrls: ['./busca-filme.component.css']  // Corrigido de 'styleUrl' para 'styleUrls'
})

export class BuscaFilmeComponent  {

  busca: string = '';
  mostrarFilmesEmCartaz: boolean = false;
  mostrarAnimesEmAlta: boolean = false;
  mostrarProximosFilmes: boolean = false;
  
  @Output() filmeBuscado = new EventEmitter<string>();

  @ViewChild(TendenciaComponent) tendenciaComponet!: TendenciaComponent;
  @ViewChild(MaioresNotasComponent) maioresnotasComponent!: MaioresNotasComponent;
  @ViewChild(NextMoviesComponent) nextmoviesComponent!: NextMoviesComponent;


  
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
    if (this.tendenciaComponet) {
      this.tendenciaComponet.carregarFilmesEmAlta();
    }
  }

  carregarFilmesEmCartaz(): void {
    this.mostrarFilmesEmCartaz = true;
    this.mostrarAnimesEmAlta = false;
    this.mostrarProximosFilmes = false
    if (this.maioresnotasComponent) {

      this.maioresnotasComponent.carregarFilmesEmCartaz(); //this.cinemaComponent.carregarFilmesEmCartaz()

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
