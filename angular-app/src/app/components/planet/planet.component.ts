import { Component, Input } from '@angular/core'
import { planetListService } from 'src/app/services/planetList.service'
import { IPlanet } from 'src/app/models/planet'


@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
})


export class PlanetComponent {
  @Input() PlanetExample?: IPlanet;
  details = false;
  imageId = Math.floor(Math.random() * 10)

  constructor(
    public planetListService: planetListService
  ) {
  }

imgID = Math.floor(Math.random() * 5) + 1;
}