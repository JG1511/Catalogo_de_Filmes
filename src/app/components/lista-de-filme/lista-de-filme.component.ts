import { Component, Input} from '@angular/core';
import { TendenciaComponent } from "../../pages/tendencia/tendencia.component";


@Component({
  selector: 'app-lista-de-filme',
  standalone: true,
  imports: [TendenciaComponent],
  templateUrl: './lista-de-filme.component.html',
  styleUrls: ['./lista-de-filme.component.css']
})

export class ListaDeFilmeComponent  {

  @Input() filmes: any[] = []; // array para armazenar os filmes encontrados


}
