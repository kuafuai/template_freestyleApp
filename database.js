// Assuming we are using a MongoDB database

const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'ecommerce';

// Collection Names
const userCollection = 'users';
const shareDataCollection = 'shareData';

// Function to store the user in the database
function storeUser(user) {
  MongoClient.connect(url, function(err, client) {
    if (err) throw err;
    console.log('Connected successfully to server');

    const db = client.db(dbName);

    db.collection(userCollection).insertOne(user, function(err, result) {
      if (err) throw err;
      console.log('User stored successfully');
      client.close();
    });
  });
}

// Function to get the user from the database
function getUser(userId) {
  MongoClient.connect(url, function(err, client) {
    if (err) throw err;
    console.log('Connected successfully to server');

    const db = client.db(dbName);

    db.collection(userCollection).findOne({ id: userId }, function(err, user) {
      if (err) throw err;
      console.log('User retrieved successfully');
      console.log(user);
      client.close();
    });
  });
}

// Function to store the share data in the database
function storeShareData(shareData) {
  MongoClient.connect(url, function(err, client) {
    if (err) throw err;
    console.log('Connected successfully to server');

    const db = client.db(dbName);

    db.collection(shareDataCollection).insertOne(shareData, function(err, result) {
      if (err) throw err;
      console.log('Share data stored successfully');
      client.close();
    });
  });
}

// Function to get the share data from the database
function getShareData() {
  MongoClient.connect(url, function(err, client) {
    if (err) throw err;
    console.log('Connected successfully to server');

    const db = client.db(dbName);

    db.collection(shareDataCollection).find({}).toArray(function(err, shareData) {
      if (err) throw err;
      console.log('Share data retrieved successfully');
      console.log(shareData);
      client.close();
    });
  });
}
