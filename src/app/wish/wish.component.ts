import { Component } from '@angular/core';
import { wishItem } from '../shared/models/wishItem';
import {EventService} from '../shared/services/EventService'
import { WishService } from '../wish/wish.service';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddEishFormComponent } from "./add-eish-form/add-eish-form.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wish',
  standalone: true,
  imports: [ WishListComponent, AddEishFormComponent, FormsModule],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css'
})
export class WishComponent {
  items! :wishItem[] 
  // = [
  //   new wishItem('travel to south africs'),
  //   new wishItem('travel to italy', false),
  //   new wishItem('travel to montenegro', true)
  // ]
  ListFilter:String='0';
constructor(events: EventService, private wishService:WishService){
  events.listen('removeWish', (wish:any)=>{
    //remove wish
let item=this.items.indexOf(wish);
this.items.splice(item,1);
    console.log(wish);
  })
}

ngOnInit(): void {
    this.wishService.getWishes().subscribe(
      (data:any)=>{
      this.items=data;
    },
    (error: any)=>{
      alert(error.message);
    },
  )
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
