const AWS = require("aws-sdk");
const dotenv = require("dotenv").config();

AWS.config.update({
    region: "eu-central-1",
    endpoint: "https://dynamodb.eu-central-1.amazonaws.com",
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

var docClient = new AWS.DynamoDB.DocumentClient();

module.exports = docClient
//