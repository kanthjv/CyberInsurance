import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { Error404Component } from './errors/404.component';
import { appRoutes } from './routes';
import{
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver
} from './events/index'

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  providers : [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    {
      provide : 'canDeactivateCreateEvent',
      useValue : checkDirtyState
    }
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)

  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { 
}

export function checkDirtyState(component: CreateEventComponent) {
  if(component.isDirty)
    return window.confirm ('Do you waant to cancel eithout saving ??')
  return true
}

