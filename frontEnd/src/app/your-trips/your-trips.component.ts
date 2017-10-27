import { Component, OnInit } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-your-trips',
  templateUrl: './your-trips.component.html',
  styleUrls: ['./your-trips.component.css']
})
export class YourTripsComponent implements OnInit {
  reservations: any;

  constructor(
    private _apiService: ApiService,
    private _route: Router,
    private _titlecasePipe:TitleCasePipe,
  ) { } 

  ngOnInit() {
    this.getYourReservation();
  }

  getYourReservation(){
    this._apiService.getYourReservations()
    .then(data => {
      if (data.reservations){
        this.reservations = data.reservations;
        for (var i=0; i<this.reservations.length; i++){
          this.reservations[i]._listing.city = this._titlecasePipe.transform(this.reservations[i]._listing.city);
        }
      }
      else{
        console.log("Error in getting reservations");
      }
    })
  }

  delete(reservationId){
    this._apiService.deleteReservation(reservationId)
    .then(data => {
      if (data.good){
        this._route.navigateByUrl('/dashboard')
      }
      else{
        console.log("Error in getting reservations");
      }
    })
  }
}
