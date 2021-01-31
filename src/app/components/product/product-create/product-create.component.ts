import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Product from '../../model/product.model';
import { ProductService } from '../../service/products.service';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
   product: Product = new Product();
   submitted = false 

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }
  
  createProduct(): void {this.productService.create(this.product).then(() => {
    console.log('Produto Criado!');
    this.submitted = true
    this.router.navigate(['/products'])
    this.productService.showMessage('Produto Criado!')
  }) 
  }
  cancel(): void {
    this.router.navigate(['/products'])
  }



}