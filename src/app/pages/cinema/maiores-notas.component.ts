import { Component } from '@angular/core';
import { CinemaService } from './cinema.service';

@Component({
  selector: 'app-maiores-notas',
  templateUrl: './maiores-notas.component.html',
  styleUrls: ['./maiores-notas.component.css']  // Corrigido de 'styleUrl' para 'styleUrls'
})
export class MaioresNotasComponent {
  filmes: any[] = [];
  mostrarFilmes: boolean = false;

  constructor(private cinemaService: CinemaService) { }

  // Carregar os filmes em cartaz
  carregarFilmesEmCartaz(): void {
    this.cinemaService.getFilmesEmCartaz().subscribe(data => {
      this.filmes = data.results;
      this.mostrarFilmes = true;  // Exibe os filmes após o carregamento
    });
  }
}

//MAIORES-NOTAS === CINEMA 

