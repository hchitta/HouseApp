import { Component, Input } from '@angular/core';
import { Housinglocation } from '../housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {

  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

 @Input() housingLocation! : Housinglocation; //non null assertion operator - !

}
