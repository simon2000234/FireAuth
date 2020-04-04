import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import {DependencyFactory} from './dependency-factory';
import {Product} from './models/product';
import {Order} from './models/order';


const factory = new DependencyFactory();

admin.initializeApp();

exports.makeUserWhenAuthCreate = functions.auth.user().onCreate((user, context) => {
    return factory.getUserController().createUser1stLogin(user);
});

exports.deleteAuthUserWhenUserDelete = functions.firestore.document('users/{id}')
  .onDelete((snapshot, context) => {
    return factory.getUserController().deleteUserAuth(snapshot, context);
  });

exports.createNewStockWhenNewProduct = functions.firestore.document('products/{id}')
  .onCreate((snapshot, context) => {
    const stockId: string = admin.firestore().collection("stock").doc().id;
    return factory.getProductController().createNewStock(snapshot, context, stockId);
  });

exports.countDownStockWhenNewOrder = functions.firestore.document('orders/{id}')
  .onCreate((snapshot) => {
    const order: Order = snapshot.data() as Order;
    const product: Product = order.product as Product;
    return factory.getStockController().countDownStock(product, order.count);
  });

exports.updateStockWhenProductUpdate = functions.firestore.document('products/{id}')
  .onUpdate((change) => {
    return factory.getStockController().updateStockProduct(change.after.data() as Product);
  });

exports.updateOrderWhenProductUpdate = functions.firestore.document('products/{id}')
  .onUpdate((change) => {
    return factory.getOrderController().updateOrderProduct(change.after.data() as Product);
  })
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
