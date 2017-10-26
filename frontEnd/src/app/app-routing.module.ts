import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CurrentListingComponent } from './current-listing/current-listing.component';
import { LoginAndRegComponent } from './login-and-reg/login-and-reg.component';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { YourTripsComponent } from './your-trips/your-trips.component';
import { YourListingsComponent } from './your-listings/your-listings.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: LoginAndRegComponent },
  {path: 'dashboard', component: DashboardComponent, children: [
    {path: 'inbox', component: AddListingComponent },
    {path: 'trips', component: YourTripsComponent },
    {path: 'listings', component: YourListingsComponent, children: [
      {path: ':id', component: CurrentListingComponent },
    ]},
  ]},
  {path: 'addListing', component: AddListingComponent },
  {path: 'listingPage', component: ListingPageComponent },
  {path: 'logout', component: LoginAndRegComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }