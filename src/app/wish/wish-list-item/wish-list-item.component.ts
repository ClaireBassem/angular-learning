import { Component ,Input, Output, EventEmitter} from '@angular/core';
import { wishItem } from '../../shared/models/wishItem';
import { CommonModule } from '@angular/common'; // Import CommonModule
import {EventService} from '../../shared/services/EventService'

@Component({
  selector: 'app-wish-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {
  @Input() wish! : wishItem
  // @Input() fullfilled! : boolean
  // @Output() fullfilledChange = new EventEmitter<boolean>();
  toggleFulfilled() {
    // this.fullfilled= !this.fullfilled;
    // this.fullfilledChange.emit(this.fullfilled);
    this.wish.isComplete = !this.wish.isComplete;
    // item.isComplete=!item.isComplete;
    // console.log(item);
  }
  removeWish(){
    this.events.emit('removeWish',this.wish);
  }
  constructor(private events: EventService){}
}
