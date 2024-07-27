import { Component, inject } from '@angular/core';
import { HousingService } from '../housing.service';
import { ActivatedRoute } from '@angular/router';
import { Housinglocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  housingService = inject(HousingService);
  housingLocationId = -1;
  activatedRoute  = inject(ActivatedRoute);
  housingLocation : Housinglocation | undefined;
  housingLocationList: Housinglocation[] = [];

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(),
  });

  constructor() {
    this.activatedRoute.params.subscribe((res:any) => {
      this.housingLocationId = res.id;
    });
    
     this.housingService.getHousingLocationById(this.housingLocationId).then(
      (housingLocationList: Housinglocation[]) => {
        this.housingLocation = housingLocationList.find((house) => house.id == this.housingLocationId);
      }
    );
  }

  submitApplication() {
    //nullish coalescing operator ?? '' - default to empty string if value is null
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }

}
