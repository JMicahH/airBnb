import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginAndRegComponent } from './login-and-reg/login-and-reg.component';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { AddListingComponent } from './add-listing/add-listing.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: LoginAndRegComponent },
  {path: 'listing', pathMatch: 'full', component: AddListingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }