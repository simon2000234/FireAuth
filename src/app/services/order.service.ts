import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Product} from './product';
import {Order} from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private fireAuth: AngularFireAuth,
              private fireStore: AngularFirestore) { }


  buyProduct(product2Buy: Product, amount: number) {
    const orderId: string = this.fireStore.createId();
    const order: Order = {
      count: amount,
      id: orderId,
      product: product2Buy
    }

    this.fireStore.doc('orders/' + orderId).set(order);
  }
}
