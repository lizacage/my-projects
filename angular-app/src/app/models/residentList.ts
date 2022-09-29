import { IResident } from "./resident";

export interface IResidentResponse {
    "count": number,
	"next": string | null,
	"previous": string | null,
	"results": IResident[]
}