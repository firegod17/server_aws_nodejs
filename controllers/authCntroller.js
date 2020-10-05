'use strict';
const docClient = require("../config/config");
const AWS = require("aws-sdk");
const UserScheme = require("../model/Table");
const uuid = require('uuid').v4;

module.exports.login = function(req, res){
    console.log("@@@@@================================================@@@@@" + req.body);

    

    res.status(200).json({
       login: 'from controller'
    })
            
}

module.exports.register = async function(req, res) {
    console.log("!!!!!!!!__________!!!!!!!!!!!!: " + req.body);

    if (checkemail(req.body.email) == true) {
        console.log("_____________");
        createNewUser()
    } else {
        res.status(404).send("Email alredy used")
    }
    
                //   var params = {
                //       TableName: "server_aws_nodejs"
                //     }
        
            function checkemail(email){
                console.log(email);

                var params = { }
                params.TableName = "server_aws_nodejs";
                var key = { "id": { "S": "email"}};
                params.Key = key;

                docClient.getItem(params, function(err, data) {
                    if (err) {
                        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
                        return false
                    } else {
                        console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
                        return true
                    }
                })

            }

            
     function createNewUser() {
        var params = {
            TableName: "server_aws_nodejs",
            Item: {
                "id": uuid(),
                "email":  req.body.email,
                "password": req.body.password,
                "name":  req.body.name
            }
          };


    
        docClient.put(params, function(err, data) {
           if (err) {
               console.error("Unable to add User", req.body.name, ". Error JSON:", JSON.stringify(err, null, 2));
           } else {
               console.log("User add succsess:", req.body.name);
           }
          });
  

        res.status(200).send({
            email: req.body.email,
            password: req.body.password
        })
    }
          
}
//
//