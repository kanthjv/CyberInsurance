import { NgModule, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalDetailsComponent } from './details/personal-details/personal-details.component';
import { QuoteFillingProgressComponent } from './details/quote-filling-progress/quote-filling-progress.component';
import { ChoosePlanComponent } from './details/choose-plan/choose-plan.component';
import { ReviewQuoteComponent } from './details/review-quote/review-quote.component';
import { ConfirmComponent } from './details/confirm/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsComponent,
    QuoteFillingProgressComponent,
    ChoosePlanComponent,
    ReviewQuoteComponent,
    ConfirmComponent
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
