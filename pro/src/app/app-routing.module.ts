import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateQuoteComponent } from './create-quote/create-quote.component';
import { ChoosePlanComponent } from './details/choose-plan/choose-plan.component';
import { QuoteFillingProgressComponent } from './details/quote-filling-progress/quote-filling-progress.component';


const routes: Routes = [
  
  {path : 'details', component :  QuoteFillingProgressComponent},
  {path :'quote', component : CreateQuoteComponent},
  {path : '',redirectTo : '/quote', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
