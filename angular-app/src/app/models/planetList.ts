import { IPlanet } from "./planet";

export interface IPlanetResponse {
    "count": number,
	"next": string | null,
	"previous": string | null,
	"results": IPlanet[]
}