import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from "./views/product/product.component";
import { HomeComponent } from "./views/home/home.component";


const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: "home", component: HomeComponent},
    {path: "products", component: ProductComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
