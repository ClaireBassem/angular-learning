import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { WishModule } from './wish/wish.module';
import { FormsModule } from '@angular/forms';
import { ContactModule } from './contact/contact.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
     CommonModule, 
     WishModule, 
     FormsModule,
     ContactModule , 
     MatSidenavModule, 
     MatToolbarModule,
     MatIconModule,
     FlexLayoutModule,
     MatGridListModule,
     MatPaginatorModule,
     RouterModule
     ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
 constructor(){

 }
 ngOnInit(): void {
     
 }
//  titles=[
//   {text:'Wish', cols: 1, rows: 2},
//   {text:'Contact', cols: 3, rows: 2}]

}
