import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Product from 'src/app/components/model/product.model';
import { ProductService } from 'src/app/components/service/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   
  products?: Observable<Product[]> ;
  title = 'Produtos'
 displayedColumns= ['title', 'price', 'banch'];
 dataSource: any;
 
  

 constructor(private productService: ProductService, private router: Router) {
   {
     this.dataSource = this.productService.getAll().snapshotChanges()
       .pipe(map(items => {
         return items.map(item => {
           return Object.assign({ key: item.payload.key }, item.payload.val())
         });
       }));
   }
  }

 ngOnInit(): void {
 
 }


 resetForm(formulario?: NgForm) {
   if (formulario != null) {
     formulario.reset();
   }
   this.productService.selectedProduct = new Product();
 }

 onSubmit(product: NgForm) {

   this.productService.updateProduct(product.value);

   this.resetForm(product)
}


}
