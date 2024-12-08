import { Component } from '@angular/core';
import { AnimeService } from './anime.service'; // Importe o serviço de animes

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.css']
})
export class AnimesComponent {
  animes: any[] = [];
  mostrarAnimes: boolean = false;

  constructor(private animeService: AnimeService) { }

  // Carregar os animes em alta
  carregarAnimesEmAlta(): void {
    this.animeService.getAnimesEmAlta().subscribe(data => {
      this.animes = data.results;
      this.mostrarAnimes = true;  // Exibe os animes após o carregamento
    });
  }
}
