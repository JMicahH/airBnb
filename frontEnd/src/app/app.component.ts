import { Component } from '@angular/core';
import { NgDateRangePickerOptions } from 'ng-daterangepicker';

import { ApiService } from './api.service';
import { Router } from '@angular/router';

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
  
  constructor(
    private _apiService: ApiService,
    private _route: Router,
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
  }

  logout(){
    this._apiService.logout()
    .then(data => {
      if (data.error){
        console.log('Logout error')
      }
      else{
        this._route.navigateByUrl('/');
      }
    })
  }

  search(){
    this._route.navigateByUrl('search/' + this.cityString + '/' + this.stateString)
  }
}
