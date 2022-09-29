import { Component, Input, SimpleChanges } from '@angular/core'
import { IResident } from 'src/app/models/resident'
import { residentListService } from 'src/app/services/residentList.service';
import { ActivatedRoute } from '@angular/router';
import { ResidentAvatar } from 'src/app/const/residentAvatar'


@Component({
    selector: 'app-residentPage',
    templateUrl: './resident-page.component.html',
})

export class ResidentPageComponent {
    @Input() resident?: IResident;
    loading = false

    constructor(
        public residentListService: residentListService,
        private route: ActivatedRoute
    ) {}
    

    get avatarUrl() {
        return this.resident?.name ? 
            ResidentAvatar[this.resident?.name] : "" 
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            this.loading = true
            this.residentListService.getResidentCard(params.url).subscribe((resident) => {
                this.resident = resident
                this.loading = false
            })
        })
    }
}