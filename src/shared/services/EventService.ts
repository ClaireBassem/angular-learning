import { Observable, Subject } from "rxjs";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn:'root'
})
export class EventService {
private subject = new Subject();
emit (eventName: string, payload: any) {
    debugger
    this.subject.next({eventName, payload});

}

listen (eventName: string , callback: (event :any) =>void){
    debugger
    this.subject.asObservable().subscribe((nextObj:any)=>{
        if(eventName===nextObj.eventName){
            callback(nextObj.payload);
        }
    })

}
}

// export default new EventService();