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
import { LoginAndRegComponent } from './login-and-reg/login-and-reg.component';
import { BrowseComponent } from './browse/browse.component';
import { MyListingsComponent } from './my-listings/my-listings.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginAndRegComponent,
    BrowseComponent,
    MyListingsComponent
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
