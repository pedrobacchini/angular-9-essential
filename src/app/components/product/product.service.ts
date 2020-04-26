import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";

import { MatSnackBar } from "@angular/material/snack-bar";

import { Product } from "./product.model";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    productsUrl = environment.apiUrl + "/products";

    constructor(private snackBar: MatSnackBar,
                private httpClient: HttpClient) {
    }

    save(product: Product): Observable<Product> {
        return this.httpClient.post<Product>(this.productsUrl, product);
    }

    showMessage(msg: string): void {
        this.snackBar.open(msg, 'X', {
            duration: 1000,
            horizontalPosition: "right",
            verticalPosition: "top"
        });
    }
}
