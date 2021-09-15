import { NgModule, } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalDetailsComponent } from './details/personal-details/personal-details.component';
import { QuoteFillingProgressComponent } from './details/quote-filling-progress/quote-filling-progress.component';
import { ChoosePlanComponent } from './details/choose-plan/choose-plan.component';
import { ReviewQuoteComponent } from './details/review-quote/review-quote.component';
import { ConfirmComponent } from './details/confirm/confirm.component';

import { RouterModule } from '@angular/router';
import { CsAppComponent } from './cs.app.component';

import { CreateQuoteComponent } from './create-quote/create-quote.component'
import { PlanDetailsService } from './shared/plan-details.service';
import {HttpClientModule } from '@angular/common/http'
import { QuotesService } from './shared/quotes.service';
import { GetQuoteComponent } from './get-quote/get-quote.component';

@NgModule({
  declarations: [
    CsAppComponent,
    AppComponent,
    PersonalDetailsComponent,
    QuoteFillingProgressComponent,
    ChoosePlanComponent,
    ReviewQuoteComponent,
    ConfirmComponent,
    CreateQuoteComponent,
    GetQuoteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PlanDetailsService,
    QuotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
