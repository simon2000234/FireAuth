import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import {DependencyFactory} from './dependency-factory';

const factory = new DependencyFactory();

admin.initializeApp();

exports.makeUserWhenAuthCreate = functions.auth.user().onCreate((user, context) => {
    return factory.getUserController().createUser1stLogin(user);
});

exports.deleteAuthUserWhenUserDelete = functions.firestore.document('users/{id}')
  .onDelete((snapshot, context) => {
    return factory.getUserController().deleteUserAuth(snapshot, context);
  });

exports.createNewStockWhenNewProduct = functions.firestore.document('products{id}')
  .onWrite((change, context) => {
    return factory.getProductController().createNewStock(change, context)
  })
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
