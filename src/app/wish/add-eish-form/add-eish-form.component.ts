import { Component, Output,EventEmitter } from '@angular/core';
import { wishItem } from '../../shared/models/wishItem';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-eish-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-eish-form.component.html',
  styleUrl: './add-eish-form.component.css'
})
export class AddEishFormComponent {
  newWishText='';
@Output() addWish = new EventEmitter<wishItem>();
  addNewWish(){
    //add wishItem to items
    //clear the form
    this.addWish.emit(new wishItem(this.newWishText));
    this.newWishText='';
  }
}
