import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  
  url  = 'http://localhost:3000/locations';

  

  constructor() { }

  async getAllHousingLocations(): Promise<Housinglocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(id: number): Promise<Housinglocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? {};
  }


  submitApplication(firstName: string, lastName: string, emiail: string) {
    console.log(
      `Home application received::
      First Name: ${firstName},
      Last Name: ${lastName},
      Email: ${emiail}
      `
    );
  }
}
