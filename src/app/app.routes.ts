import { Routes } from '@angular/router';
import { WishComponent } from './wish/wish.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';
import { ProductslistComponent } from './products/productslist/productslist.component';
import { ProductdetailsComponent } from './products/productdetails/productdetails.component';
export const routes: Routes = [
    // {path:'', component: AppComponent},
    { path: '', redirectTo: 'contact', pathMatch: 'full' },
    {path:'wish', component: WishComponent},
    {path:'contact', component: ContactComponent},
    {path: 'products', component: ProductslistComponent},
    {path: 'products/:id', component: ProductdetailsComponent},
    {path: '**', component: NotFoundComponent}
];
