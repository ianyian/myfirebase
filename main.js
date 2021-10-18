var admin = require("firebase-admin");
var serviceAccount = require("./myfirebase-d2462-firebase-adminsdk-rzrj7-531914b36e.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

let db = admin.firestore();
db.collection("users")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
    });
  })
  .catch((err) => {
    console.log("error getting documents", err);
  });
