import { Component } from '@angular/core';
import { TendenciaService } from '../../services/tendencia.service';

@Component({
  selector: 'app-tendencia',
  imports: [],
  templateUrl: './tendencia.component.html',
  styleUrl: './tendencia.component.css'
})
export class TendenciaComponent {
  tendicias : any[] = [];
  mostrarTendencia: boolean = false;

  constructor(private tendenciaService : TendenciaService){ }

  carregarFilmesEmAlta() : void {
    this.tendenciaService.getTendenciaEmAlta().subscribe(data =>{
      this.tendicias = data.results;
      this.mostrarTendencia = true;
    })
  }
}
