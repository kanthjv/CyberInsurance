import { Component } from "@angular/core";
import { EventService } from "../shared/event.service";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "..";
//import { ISession } from "..";
@Component({
    templateUrl : './event-details.component.html',
    styles : [`
    .conatainer { padding-left: 20px; padding-right : 20px;}
    .event-image: {height: 100px;}
    `]
})
export class EventDetailsComponent{
    event!: IEvent
    //sessions! : ISession
    constructor(private eventService:EventService, private route : ActivatedRoute){
            
    }
    ngOnInit(){
       this.event = this.eventService.getEvent(this.route.snapshot.params['id'])
       

       
    }
}