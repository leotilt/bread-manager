import { Component, OnInit } from '@angular/core';
import Product from '../../model/product.model';
import { ProductService } from '../../service/products.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})


export class ProductReadComponent implements OnInit {
   
   products?: Observable<Product[]> ;
   title = 'Produtos'
  displayedColumns= ['title', 'price', 'validate', 'quantity', 'banch', 'action'];
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
  deleteProduct(key: string){
    let conf = confirm('Tem certeza que deseja deletar?');

    if(conf){
      this.productService.delete(key);
    }
  }

 
}






 
  


  


