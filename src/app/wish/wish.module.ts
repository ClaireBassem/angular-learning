import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishComponent } from './wish.component';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddEishFormComponent } from "./add-eish-form/add-eish-form.component";
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule, FormsModule, WishListComponent, AddEishFormComponent, WishComponent
  ],
  exports:[
    WishListComponent, AddEishFormComponent , WishComponent
  ]
})
export class WishModule { }
