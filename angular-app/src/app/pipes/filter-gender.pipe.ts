import { Pipe, PipeTransform } from '@angular/core';
import { IResident } from '../models/resident';

@Pipe({
  name: 'filterGender'
})
export class FilterGenderPipe implements PipeTransform {

  transform(residents: IResident[], gender: 'male' | 'female' | 'n/a' | 'none'): IResident[] {
    if (gender === 'none') return residents
    
    return residents.filter(p => p.gender.toLowerCase() === gender)
  }

}