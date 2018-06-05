//npm init -y 
//npm i csvtojson -E

const csvFilePath='D:\\govind\\meanstack_workspace\\csv-to-json\\customer-data.csv'
const csv=require('csvtojson')
const path = require('path')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);
})