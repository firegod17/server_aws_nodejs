const { DynamoDB } = require('aws-sdk')
const AWS = require('aws-sdk')

const userScheme = new AWS.Schemas({
    name: {
        type: String,
        required: true,
        min: 3,
        max:200
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max:200
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max:1000
    },
})

module.exports = userScheme