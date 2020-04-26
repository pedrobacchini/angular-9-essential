import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service";
import { Router } from "@angular/router";
import { Product } from "../product.model";

@Component({
    selector: 'app-product-create',
    templateUrl: './product-create.component.html',
    styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

    product: Product = {
        name: '',
        price: null
    }

    constructor(private productService: ProductService,
                private router: Router) {
    }

    ngOnInit(): void {
    }

    save() {
        this.productService.save(this.product).subscribe(() => {
            this.productService.showMessage("Produto Criado");
            this.router.navigate(['/products'])
        }, exception => this.productService.showMessage(exception.message))
    }

    cancel() {
        this.router.navigate(['/products'])
    }
}
