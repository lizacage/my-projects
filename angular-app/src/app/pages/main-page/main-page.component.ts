import { Component, ViewChild } from '@angular/core'
import { PlanetComponent } from 'src/app/components/planet/planet.component';
import { planetListService } from 'src/app/services/planetList.service'

@Component({
  selector: 'app-main',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent {
  planetCounter?: PlanetComponent;
  @ViewChild (PlanetComponent)
  set viewChildComp(directive: PlanetComponent) {
    this.planetCounter = directive;
  }
  
  loading = false

  constructor(
    public planetListService: planetListService
  ) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.planetListService.getAll().subscribe(() => {
      this.loading = false
    });
  }

  onNext(): void {
    if (this.planetListService.response?.next){
      this.loading = true;
      this.planetListService.getAll(this.planetListService.response?.next).subscribe(() => {
        this.loading = false
      })
    }
  }

  onPrev(): void {
    if (this.planetListService.response?.previous){
      this.loading = true;
      this.planetListService.getAll(this.planetListService.response?.previous).subscribe(() => {
        this.loading = false
      })
    }
  }
}


