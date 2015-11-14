var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectId;
var url = 'mongodb://localhost:27017/test';
// MongoClient.connect(url, function(err, db) {
//     assert.equal(null, err);
//     console.log("Connected correctly to server.");
//     db.close();
// });


/**
 * [insert a document into a datebase]
 * @param  {[type]}   db       [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
var insertDocument = function(db, callback) {
    db.collection('restaurants').insertOne({
        "address": {
            "street": "2 Avenue",
            "zipcode": "10075",
            "building": "1480",
            "coord": [-73.9557413, 40.7720266]
        },
        "borough": "Manhattan",
        "curisine": "Italian",
        "grades": [{
            "date": new Date("2015 11 7"),
            "grade": "A",
            "score": 11,
        }],
        "name": "Vella",
        "restaurant_id": "41704620"
    }, function(err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into the restaurants collection");
        console.log(result);
        callback();
    });
};

MongoClient.connect(url , function(err , db){
	assert.equal(null , err);
	insertDocument(db,function(){
		db.close();
	});
});
