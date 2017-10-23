import { Component } from '@angular/core';

// Import Services!!
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Variables
  example: any;

  // Chnage example service stuff here
  constructor(private _apiService: ApiService){ }

  // Change Example Function
  exampleFunction(){
    // Change _exampleService
    // Change exampleServiceFunction()
    // this.example is the param for the function
    this._apiService.exampleServiceFunction(this.example)
    .then(data => {
      // Do something with this data
    })
    .catch(error => {
      // Do something with the error
    });
  } 
  // End of onSubmit()

}
