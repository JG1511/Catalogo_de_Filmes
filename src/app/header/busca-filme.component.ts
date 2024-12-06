import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaioresNotasComponent } from '../cinema/maiores-notas.component';
import { AnimesComponent } from "../tendencias/animes.component";



@Component({
  selector: 'app-busca-filme',
  standalone: true,
  imports: [FormsModule, AnimesComponent, MaioresNotasComponent],
  templateUrl: './busca-filme.component.html',
  styleUrl: './busca-filme.component.css'
})
export class BuscaFilmeComponent {
  busca : string = ''

  @Output() filmeBuscado = new EventEmitter<string>(); // emite o texto da basca para o componente pai(appcomponent)

  buscarFilmes(): void { // Event Binding
    if(this.busca.trim() === ''){ // verifica se a está em branco, se estiver ele emite um alerta 
      alert("Por favor, insira o nome do filme");
      return;
    }
    this.filmeBuscado.emit(this.busca); // emite o termo da busca para o componente pai(onde a listagem de filme será exibida)
  }

  @ViewChild(AnimesComponent) animesComponent!: AnimesComponent; // Referência para o AnimesComponent

  // Método para chamar a função do componente Animes
  carregarAnimesEmAlta(): void {
    // Chamando o método do AnimesComponent diretamente
    if (this.animesComponent) {
      this.animesComponent.carregarAnimesEmAlta();  // Chama o método para carregar animes
    }
  }

  @ViewChild(MaioresNotasComponent) maioresnotasComponent!: MaioresNotasComponent;

    carregarFilmesEmCartaz(): void {
  if (this.maioresnotasComponent) {
    this.maioresnotasComponent.carregarFilmesEmCartaz();  // Chama o método para carregar os filmes
  }
}

  
 
 
}
