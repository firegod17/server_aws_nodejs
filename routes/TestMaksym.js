const router = require('express').Router();
const docClient = require("../config/config");
const uuid = require('uuid').v4;
var dynamoDb = new docClient.DynamoDB.DocumentClient();

router.post('/addSometoDB', async (req, res) => {

    var table = "Test_Server";

    var id = uuid();
    var name = "Maksym";
    var email = "maksym@gmail.com";


    var params = {
        TableName:table,
        KeySchema: [
            {AttributeName: "name", KeyType: "HASH"},
        ],
        Item:{
            "_id": id,
            "name": name,
            "email": email

        }
    };

    console.log("Adding a new item...");
    dynamoDb.put(params, function(err, data) {
        if (err) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
            res.status(404).send('Unable to add item. Error JSON: ' + err.message)

        } else {
            console.log("Added item:", JSON.stringify(data, null, 2));
            res.status(200).send('Added item:' + params)
        }
    });
});

router.post('/getUser', async (req, res) => {

    var table = "Test_Server";

    var name = req.body.name;

    var params = {
        TableName : table,
        ExpressionAttributeNames: {
            "_id": "_id"
        },
        ExpressionAttributeValues: {
            ":a": {
                S: "John Doe"
            }
        },
        FilterExpression: "name = :a",
        ProjectionExpression: "#_id",
    };

    dynamoDb.scan(params, function (err, data) {
        if (err) console.log(err, err.stack);
        else console.log(data);
    });
});

module.exports = router
