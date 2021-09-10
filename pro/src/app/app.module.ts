import { NgModule, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalDetailsComponent } from './details/personal-details/personal-details.component';
import { QuoteFillingProgressComponent } from './details/quote-filling-progress/quote-filling-progress.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsComponent,
    QuoteFillingProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [QuoteFillingProgressComponent]
})
export class AppModule { }
