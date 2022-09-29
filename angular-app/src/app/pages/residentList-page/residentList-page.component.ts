import { Component } from "@angular/core";
import { residentListService } from "src/app/services/residentList.service";
import { Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

export class IResidentCustom {
  constructor(
    public name: string,
    public mass: string,
    public height: string) {}
}

@Component({
    selector: "app-residentListPage",
    templateUrl: "./residentList-page.component.html",
})

export class ResidentListComponent {
    loading = false
   
    
    heightArr: string[] = ['>170', '<170']
    name: string = "";
    mass: string = "";
    height: string = "";

    newResidents: IResidentCustom[] = []

    constructor(
        public residentListService: residentListService
    ) {}

    residentAvatarNew = 'https://www.pngall.com/wp-content/uploads/5/Cloak-PNG-HD-Image.png'
    addResident(){
      this.newResidents.push(new IResidentCustom(this.name, this.mass, this.height));
    }

    deleteResident(index:number) {
      this.newResidents.splice(index, 1)
    }
    
    ngOnInit(): void {
        this.loading = true
        this.residentListService.getResidents().subscribe(() => {
            this.loading = false
        })
    }
    onNext(): void {
        if (this.residentListService.response?.next){
          this.loading = true;
          this.residentListService.getResidents(this.residentListService.response?.next).subscribe(() => {
            this.loading = false
          })
        }
      }
    
      onPrev(): void {
        if (this.residentListService.response?.previous){
          this.loading = true;
          this.residentListService.getResidents(this.residentListService.response?.previous).subscribe(() => {
            this.loading = false
          })
        }
      }
}