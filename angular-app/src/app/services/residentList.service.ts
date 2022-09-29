import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap} from "rxjs";
import { IResidentResponse } from "../models/residentList";
import { IResident } from "../models/resident";

@Injectable({
    providedIn: 'root'
})

export class residentListService {
    constructor(
        private http: HttpClient,
    ){}
    response?: IResidentResponse

    getResidents(url: string = 'https://swapi.dev/api/people') {
        return this.http.get<IResidentResponse>(url).pipe(
            tap(response => this.response = response)
        )
    }

    getResidentCard(url: string) {
        return this.http.get<IResident>(url)
    }
}