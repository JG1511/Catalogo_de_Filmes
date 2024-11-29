import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-busca-filme',
  standalone: true,
  imports: [FormsModule],
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

 
}
