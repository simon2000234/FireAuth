import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

exports.makeUserWhenAuthCreate = functions.auth.user().onCreate((user, context) => {
    return admin.firestore().doc('users/' + user.uid).set({
      uid: user.uid,
      email: user.email,
      name: user.displayName,
      bio: 'New User Bio',
      role: 'Noob'
    })
});

exports.deleteAuthUserWhenUserDelete = functions.firestore.document('users/{id}')
  .onDelete((snapshot, context) => {
    return admin.auth().deleteUser(context.params.id)
  });
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
