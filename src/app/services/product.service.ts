import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {User} from './user.model';
import {map} from 'rxjs/operators';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private fireAuth: AngularFireAuth,
              private fireStore: AngularFirestore) { }


  getAllProducts(): Observable<Product[]> {
    const productsFromDB = this.fireStore.collection<Product>('products');
    const products: Array<Product> = [];
    return productsFromDB.snapshotChanges().pipe(
      map( returned => {
        returned.forEach(singleReturned => {
          const productFromDB = singleReturned.payload.doc.data();
          const porduct2add: Product = {
            description: productFromDB.description,
            id: productFromDB.id,
            name: productFromDB.name,
            price: productFromDB.price
          };
          products.push(porduct2add);
        })
        return products;
      })
    );
  }
}
