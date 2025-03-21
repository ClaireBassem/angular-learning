import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-productslist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productslist.component.html',
  styleUrl: './productslist.component.css'
})
export class ProductslistComponent implements OnInit {
  products: any[]=[];
constructor(private store: ProductsService){

}

ngOnInit(): void {
    this.store.getAllProducts().subscribe(products =>{
      this.products=products;
    })
}
}
