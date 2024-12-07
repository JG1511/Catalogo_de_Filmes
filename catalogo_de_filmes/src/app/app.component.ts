import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BuscaFilmeComponent } from "./busca-filme/busca-filme.component";
import { ListaDeFilmeComponent } from "./lista-de-filme/lista-de-filme.component";
import { FilmesService } from './filme.service';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, BuscaFilmeComponent, ListaDeFilmeComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private filmeService : FilmesService){
  }
  filmes: any[] = [];
  filmes_imagem : any[] = [];

  buscarFilmes (busca : string) : void {
    this.filmeService.buscarFilme(busca).subscribe({ // o subscribe é usado para escutar o observable 
      next: (res) => { // é chamado quando observable emite um valor e o res representa um resultado emitido pela api
          this.filmes = res.results; // a lista de filmes rescebe o filme que ele é chamado
      },
      error: (error) => { // quando acontece algum problema com o HTTP
          console.error('Erro ao buscar filmes:', error);
      },
      complete: () => {
          console.log('Requisição completa!'); // É chamado com é completado 
      },
  });
    
  }

  buscarImagem(){
    this.filmeService
  }

}
