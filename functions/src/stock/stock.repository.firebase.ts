import {StockRepository} from './stock.repository';
import {Stock} from '../models/stock';
import * as admin from 'firebase-admin';
import {Product} from '../models/product';

export class StockRepositoryFirebase implements StockRepository{

  async countDownStock(stock: Stock): Promise<any> {
    return admin.firestore().doc('stock/' + stock.id).set(stock);
  }

  async findStock(product: Product): Promise<Stock> {
    let stock: Stock = {
      stock: -1,
      product: {
        stockId: "fail"
      },
      id: 'fail'
    };
    const query = await admin.firestore().collection('stock')
      .where("product", "==", product);

    await query.get().then(snap => {
      snap.forEach(doc => {
        stock = doc.data() as Stock
      })
    })

    return Promise.resolve(stock)
    //den vente ikke hverken coden uppe eller coden nede

    /*await admin.firestore().collection('stock').where("product", "==", product)
      .get().then(array => {
        array.forEach(dock => {
          stock = dock.data() as Stock;
          return stock;
        })
      });
    return Promise.resolve(stock);*/
  }
}
