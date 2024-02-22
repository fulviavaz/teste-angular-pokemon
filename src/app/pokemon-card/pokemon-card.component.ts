import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {
  @Input()
  pokemon: string;

  @Input()
  numero: number;

  pegarImagemPokemon() {
    const numeroFormatado = this.leadingZero(this.numero);

    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroFormatado}.png`;
  }

  leadingZero(str: string | number, size = 3): string {
    let s = String(str);

    while (s.length < (size || 2)) {
      s = '0' + s;
    }

    return s;
  }
}
