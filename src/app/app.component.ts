import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilmesService } from './filme.service';
import { FooterComponent } from './footer/footer.component';
import { BuscaFilmeComponent } from "./header/busca-filme.component";
import { ListaDeFilmeComponent } from "./lista-de-filme/lista-de-filme.component";


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
