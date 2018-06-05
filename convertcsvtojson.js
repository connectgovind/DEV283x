//npm init -y 
//npm i csvtojson -E

const csvFilePath='D:\\govind\\meanstack_workspace\\csv-to-json\\customer-data.csv'
const csv=require('csvtojson')
const fs = require('fs')
const path = require('path')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);
	fs.writeFile('customer-data.json', JSON.stringify(jsonObj, null, 2), (error)=>{
      if (error) return process.exit(1)
      console.log('done')
      process.exit(0)
    })
})