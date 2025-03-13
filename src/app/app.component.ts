import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { WishModule } from './wish/wish.module';
import { FormsModule } from '@angular/forms';
import { ContactModule } from './contact/contact.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, WishModule, FormsModule, ContactModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
 constructor(){

 }
 ngOnInit(): void {
     
 }

}
