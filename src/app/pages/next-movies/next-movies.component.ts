import { Component } from '@angular/core';
import { ProximosService } from '../../services/proximos.service';

@Component({
  selector: 'app-next-movies',
  imports : [],
  templateUrl: './next-movies.component.html',
  styleUrls: ['./next-movies.component.css']  // Corrigido de 'styleUrl' para 'styleUrls'
})
export class NextMoviesComponent {
  proximosFilmes: any[] = [];
  mostrarProximosFilmes: boolean = false;

  constructor(private proximosService: ProximosService) { }

 
  carregarProximosFilmes(): void {
    this.proximosService.getProximosFilmes().subscribe({
      next: (res) => {
        this.proximosFilmes = res.results;
      },
      error: (error) => {
        console.error('Erro em mostar os lançamentos:', error)
      },
      complete: () => {
        console.log('Requisição completa');
        this.mostrarProximosFilmes = true;
      },
    });
  }
}
