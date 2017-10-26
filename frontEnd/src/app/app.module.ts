import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Important Modules
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Import Service
import { ApiService } from './api.service';

// Generating from ng new Example-Project --routing
import { AppRoutingModule } from './app-routing.module';

// All Components you can paste in routing
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginAndRegComponent } from './login-and-reg/login-and-reg.component';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { YourTripsComponent } from './your-trips/your-trips.component';
import { YourListingsComponent } from './your-listings/your-listings.component';
import { CurrentListingComponent } from './current-listing/current-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginAndRegComponent,
    ListingPageComponent,
    AddListingComponent,
    DashboardComponent,
    YourTripsComponent,
    YourListingsComponent,
    CurrentListingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
