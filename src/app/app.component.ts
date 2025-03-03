import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { wishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddEishFormComponent } from "./add-eish-form/add-eish-form.component";
import {EventService} from './../shared/services/EventService'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, WishListComponent, AddEishFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items :wishItem[] = [
    new wishItem('travel to south africs'),
    new wishItem('travel to italy', false),
    new wishItem('travel to montenegro', true)
  ]
  ListFilter:String='0';
constructor(events: EventService){
  events.listen('removeWish', (wish:any)=>{
    //remove wish
let item=this.items.indexOf(wish);
this.items.splice(item,1);
    console.log(wish);
  })
}
  get visibleItems(): wishItem[]{
    let value=this.ListFilter;
    if(value=='0'){
      return this.items;
    }else if(value=='1'){
      return this.items.filter(item=>!item.isComplete)  ;
    }else if(value=='2'){
      return this.items.filter(item=>item.isComplete);
    }
    else return this.items;
  }  


  // filterChanged(value:any){
  //   console.log(value);
  //   if(value=='0'){
  //     this.visibleItems=this.items
  //   }else if(value=='1'){
  //     this.visibleItems=this.items.filter(item=>!item.isComplete)  
  //   }else if(value=='2'){
  //     this.visibleItems=this.items.filter(item=>item.isComplete)
  //   }
  // }

}
