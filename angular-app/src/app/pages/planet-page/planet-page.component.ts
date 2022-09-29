import { Component, Input} from '@angular/core'
import { planetListService } from 'src/app/services/planetList.service'
import { ActivatedRoute } from '@angular/router'
import { IPlanetWithResident } from 'src/app/models/planet'

@Component({
    selector: 'app-planetPage',
    templateUrl: './planet-page.component.html',
})

export class PlanetPageComponent {
    planet?: IPlanetWithResident
    term: 'male' | 'female' | 'n/a' | 'none' = 'none'
    @Input() PlanetComponent?: any
    loading = false
    
    
    constructor(
        public planetListService: planetListService,
        private route: ActivatedRoute
    ) {}
    
    imgID = Math.floor(Math.random() * 5) + 1;
    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            this.loading = true
            this.planetListService.getPlanetWithResidents(params.url).subscribe((planet) => {
                this.planet = planet
                this.loading = false
            })
        })
    }
}