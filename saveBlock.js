const getBlock = require('./getBlock')

const mongoClient = require('mongodb').MongoClient
var url
var dbname

const set = (adresUrl, databaseName) => {
    url = adresUrl
    db = databaseName
}


const save = (blockNumber, addToDatasbase) => {

    getBlock(blockNumber) // getting block by web3.eth.getBlock()
        .then( addToDatabase ) // the next call to a method that writes this block
}

const addToDatabase = (block => { // writing block to the db

    mongoClient.connect(url, {}, (err, client) => {  // creating a connection with the db

        if(err) console.log('cannot connect to the database') // if error with connecting 
        
        const db  =  client.db(dbname) // seting a name of the db (if not exist -> creating)
    
        db.collection('blocks').insertOne( block, (error, result) => {  // calling a db's method that writes one record

            if(error => console.log) console.log('block adding error')  // if error with wrinting 
        
        }) 

        db.collection('blocks').find({}) // find records that ( without arguments -> all)
            .toArray((error, result) => console.log(result)) // and show on the screen
    })
})

add = blockNr => save(blockNr, addToDatabase) // preparation to the module exports



module.exports = { add, set }