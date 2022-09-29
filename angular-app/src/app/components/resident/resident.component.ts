import { Component, Input, SimpleChanges } from '@angular/core'
import { IResident } from 'src/app/models/resident'
import { ActivatedRoute } from '@angular/router'
import { residentListService } from 'src/app/services/residentList.service'
import { ResidentAvatar } from 'src/app/const/residentAvatar'



@Component({
    selector: 'app-resident',
    templateUrl: './resident.component.html',
})

export class ResidentComponent {
    @Input() resident?: IResident;
    

    constructor(
        public residentListService: residentListService,
        private route: ActivatedRoute
    ) {}

    get avatarUrl() {
        return this.resident?.name ? 
            ResidentAvatar[this.resident?.name] : "" 
    }
}