import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { forkJoin, tap, map, mergeMap, defaultIfEmpty } from "rxjs";
import { IPlanet } from "../models/planet"; 
import { ErrorService } from "./error.service";
import { IPlanetResponse } from "../models/planetList";
import { IResident } from "../models/resident";


@Injectable({
    providedIn: 'root'
})

export class planetListService {
    constructor(
        private http: HttpClient,
        private errorService: ErrorService
        ) {
    }
    response?: IPlanetResponse
    

    getAll(url: string = 'https://swapi.dev/api/planets') {
        return this.http.get<IPlanetResponse>(url).pipe(
            tap(response => this.response = response)
        )
    }

    getPlanetWithResidents(url: string) {
        return this.http.get<IPlanet>(url).pipe(
            mergeMap((planet) => {
                const getResidentArray = planet.residents.map((url) => {
                    return this.http.get<IResident>(url)
                });
                return forkJoin(getResidentArray).pipe(
                    defaultIfEmpty([]),
                    map((residents) => ({
                        ...planet,
                        residents
                    }))
                );
            })
        )
    }
}