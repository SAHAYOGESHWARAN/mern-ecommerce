
const admin = require('firebase-admin');
const serviceAccount = require('./path/to/your/firebase/serviceAccountKey.json'); // Adjust the path

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://<your-database-name>.firebaseio.com"
});

module.exports = admin;
