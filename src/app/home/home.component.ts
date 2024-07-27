import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  housingLocationList: Housinglocation[] = [];

  filteredLocationList: Housinglocation[] = [];

  housingService = inject(HousingService);

  constructor() {
    this.housingService.getAllHousingLocations().then(
      (housingLocationList: Housinglocation[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = this.housingLocationList;
      }
    );
    
  }

  filterResults(text : string) {
    if(!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
  

}
