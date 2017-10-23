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

@NgModule({
  declarations: [
    AppComponent,
    LoginAndRegComponent,
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
