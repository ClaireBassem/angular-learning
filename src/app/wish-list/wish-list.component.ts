import { Component, Input } from '@angular/core';
import { wishItem } from '../../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { WishListItemComponent } from "../wish-list-item/wish-list-item.component"; // Import CommonModule

@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [CommonModule, WishListItemComponent],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {
  @Input() wishes :wishItem[]=[];
 
}
