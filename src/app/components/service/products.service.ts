import { Injectable } from '@angular/core';
import Product from '../model/product.model'
import { AngularFireDatabase, AngularFireList, snapshotChanges } from '@angular/fire/database';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService{
  [x: string]: any;

  private dbPath = '/products';

  productsRef: AngularFireList<Product>;
  

  constructor(private db: AngularFireDatabase, private snackBar: MatSnackBar) {
    this.productsRef = db.list(this.dbPath);
  }
    
  SelectedProduct: Product = new Product() 
   getProduct(){
     return this.db.list('product').snapshotChanges().pipe(
       map(changes =>{
         return changes.map(c => ({key: c.payload.key, ...c.payload.val() as {}}))
       })
     )
   }

   
  getAll(): AngularFireList<Product> {
    return this.productsRef;
  }

  create(product: Product): any {
    return this.productsRef.push(product);
  }

 update(key: string, value: any): Promise<void> {
  return this.productsRef.update(key, value);
 }

delete(key: string): Promise<void> {
  return this.productsRef.remove(key);
 }


  // message 
  showMessage(msg: string,): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      
    });
  }
}