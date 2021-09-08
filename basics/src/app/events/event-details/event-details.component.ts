import { Component } from "@angular/core";
import { EventService } from "../shared/event.service";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "..";

@Component({
    templateUrl : './event-details.component.html',
    styles : [`
    .conatainer { padding-left: 20px; padding-right : 20px;}
    .event-image: {height: 100px;}
    `]
})
export class EventDetailsComponent{
    event!: IEvent
    constructor(private eventService:EventService, private route : ActivatedRoute){
            
    }
    ngOnInit(){
       this.event = this.eventService.getEvent(this.route.snapshot.params['id'])
       console.log(this.event)
    }
}