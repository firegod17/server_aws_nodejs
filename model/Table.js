const router = require('express').Router();
const docClient = require("../config/config");

var dynamoDb = new docClient.DynamoDB();

router.put('/CreateTable', async (req, res) => {

    var params = {
        TableName: "Test_Server",
        KeySchema: [
            {AttributeName: "_id", KeyType: "HASH"},
            {AttributeName: "email", KeyType: "HASH"},
        ],
        AttributeDefinitions: [
            {AttributeName: "_id", AttributeType: "S"},
            {AttributeName: "email", AttributeType: "S"},
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 10,
            WriteCapacityUnits: 10
        }
    };

    docClient.dynamoDb(params, function (err, data) {
        if (err) {
            console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
            res.status(404).send('Cannot create a table. ERRROR: ' + err.message)
        } else {
            console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
            res.status(200).send('Nice table created' + params)
        }
    });
});

module.exports = router;
