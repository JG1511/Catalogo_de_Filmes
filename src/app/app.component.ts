import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilmesService } from './services/filme.service';
import { FooterComponent } from './components/footer/footer.component';
import { BuscaFilmeComponent } from "./components/header/busca-filme.component";
import { ListaDeFilmeComponent } from "./components/lista-de-filme/lista-de-filme.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ FormsModule, BuscaFilmeComponent, ListaDeFilmeComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private filmeService : FilmesService){
  }
  filmes: any[] = [];

  buscarFilmes (busca : string) : void {
    this.filmeService.buscarFilme(busca).subscribe({ 
      next: (res) => { 
          this.filmes = res.results; 
      },
      error: (error) => { 
          console.error('Erro ao buscar filmes:', error);
      },
      complete: () => {
          console.log('Requisição completa!'); 

      },
  });
    
  }



}
