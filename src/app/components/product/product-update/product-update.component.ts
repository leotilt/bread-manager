import { ProductService } from "src/app/components/service/products.service";
import { Component, OnInit } from '@angular/core';
import Product from '../../model/product.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productList!: Product[]
  product?: Observable<any>
 
  constructor(private productService: ProductService, private router: Router) { 
    } 

  ngOnInit() {
    this.product = this.productService.getProduct()
}

cancel(): void {
  this.router.navigate(["/products"]);
}

}

/*this.productService.getproduct()*/