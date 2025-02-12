import { Component } from '@angular/core';
import { BuscaFilmeComponent } from '../header/busca-filme.component';
import { ListaDeFilmeComponent } from '../lista-de-filme/lista-de-filme.component';
import { FooterComponent } from '../footer/footer.component';
import { FilmesService } from '../../services/filme.service';


@Component({
  selector: 'app-home',
  imports: [BuscaFilmeComponent,ListaDeFilmeComponent,FooterComponent, ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private filmeService : FilmesService){ }
   
 
  filmes : any[] = [];

  buscarFilmes (busca: string) : void {
    this.filmeService.buscarFilme(busca).subscribe({
      next:(res) => {
        this.filmes = res.results;
      },
      error: (error) => {
        console.error('Erro ao buscar filmes:', error);
      },
      complete: ()=> {
        console.log('Requisição completa');
      }
    });
  }
}
