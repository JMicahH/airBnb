import { Component } from '@angular/core';
import { NgDateRangePickerOptions } from 'ng-daterangepicker';

import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cityString: string;
  stateString: string;

  results: any;

  options: NgDateRangePickerOptions;
  userSearch: any;
  landingImages = [
    "url('../assets/landingBackground1.jpg')",
    "url('../assets/landingBackground2.jpg')",
    "url('../assets/landingBackground3.jpg')",
    "url('../assets/landingBackground4.jpg')",
    "url('../assets/landingBackground5.jpg')",
    "url('../assets/landingBackground6.jpg')",
    "url('../assets/landingBackground7.jpg')",
    "url('../assets/landingBackground8.jpg')",    
  ]

  landingBackground: string;
  landingPage = true;
  currentUrl: any;
  loggedInUser = false;

  constructor(
    private _apiService: ApiService,
    private _route: Router,
    private _activeRoute: ActivatedRoute
    
  ) { } 

  ngOnInit() {
    this.options = {
      theme: 'default',
      range: 'tm',
      dayNames: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      presetNames: ['This Month', 'Last Month', 'This Week', 'Last Week', 'This Year', 'Last Year', 'Start', 'End'],
      dateFormat: 'yMd',
      outputFormat: 'MM/DD/YYYY',
      startOfWeek: 1
    };

    this._route.events.subscribe((event) => {
      this.currentUrl = event;
      this._apiService.getUser().then(data => {
        if (data.loggedInUser){
          this.loggedInUser = true;        
          console.log('Get Session User', data)
        }
        else{
          console.log('No Logged In Session User')
          this.loggedInUser = false;
        }
      })
  
    })


    this.landingBackground = this.landingImages[Math.floor(Math.random()*9)]
    console.log(this.landingBackground)

  }

  logout(){
    this._apiService.logout()
    .then(data => {
      if (data.error){
        console.log('Logout error')
      }
      else{
        this.loggedInUser = false;
        this._route.navigateByUrl('/');
      }
    })
  }

  search(){
    this._route.navigateByUrl('search/' + this.cityString + '/' + this.stateString)
  }
}
