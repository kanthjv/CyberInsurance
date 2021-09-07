import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-daetails.component';
import { CreateEventComponent } from './events/create-event.component';
import { EventRouteActivator } from './events/event-route-activator.service';
import { Error404Component } from './errors/404.component';
import { appRoutes } from './routes';
import { EventListResolver } from './events/events-list-resolver.service';
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

