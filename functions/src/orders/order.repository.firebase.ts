import * as admin from 'firebase-admin';
import {Order} from '../models/order';
import {Product} from '../models/product';
import {OrderRepository} from './order.repository';

export class OrderRepositoryFirebase implements OrderRepository {

  async updateOrder(order: Order): Promise<any> {
    return admin.firestore().doc('orders/' + order.id).set(order);
  }

  async findOrder(product: Product): Promise<Order> {
    let order: Order = {
      product: {
        stockId: "fail"
      },
      id: 'fail',
      count: 666
    };
    const query = await admin.firestore().collection('orders')
      .where("product", "==", product);

    await query.get().then(snap => {
      snap.forEach(doc => {
        order = doc.data() as Order
      })
    });

    return Promise.resolve(order);
  }
}
