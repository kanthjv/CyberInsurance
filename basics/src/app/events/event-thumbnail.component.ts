import { Component,Input } from "@angular/core";
import { IEvent } from "./shared/index";

@Component({
    selector : 'event-thumbnail',
    template : `
    <div>
    <!-- <h1>Upcoming Angular Events</h1>
    <hr/> -->
    <div [routerLink] = "['/events',event.id]" class ="well hoverwell thumbnail">
    <h2>{{event?.name}}</h2>
    <div>Date  :  {{event?.date}} </div>
    <div>price :  ₹  {{event?.price}}</div>
    <div [ngClass] = "getStarterTimeClass()" [ngSwitch] = "event.time"> 
        <span *ngSwitchCase = "'8:00 am'">&nbsp;(Early Start)</span>
        <span *ngSwitchCase = "'10:00 am'">&nbsp;(Late Start)</span>
        <span *ngSwitchDefault>&nbsp;(Normal Start) </span>
        Time  :  {{event?.time}}
    </div>
    <div *ngIf = "event?.location"> 
        <span> Location : {{event?.location?.address}}</span>
        <span class="pad-left">{{event?.location?.city}},{{event?.location?.country}}</span>
    </div>
    <div [hidden] = "!event?.onlineUrl">
        Online URL : {{event?.onlineUrl}}
    </div>
    </div>
</div>`,
    styles:[`
    .green {color : green !important;}
    .bold {font-weight: bold;}
    .red  {color : red !important}
    .blue{ color: blue !important}
    .thumbnail { min-height : 210px;}
    .pad-left { margin-left : 15px;}
    .well div { color : #bbb;}
    `
    ]
})

export class EventThumbnailComponent{
    @Input() event!: IEvent;

     getStarterTimeClass(){
         if(this.event && this.event.time === '8:00 am')
         return ['green','bold']
         if(this.event && this.event.time === '10:00 am')
         return ['red','bold']
       return{}
    }
}