const getBlock = require('./getBlock')

const mongoClient = require('mongodb').MongoClient
const url = 'mongodb://127.0.0.1:27017' 
const dbname = 'etherium'


const save = (blockNumber, addToDatabase) => {

    getBlock(blockNumber)
        .then( addToDatabase )
}

const addToDatabase = (block => {

    mongoClient.connect(url, {}, (err, client) => {

        if(err) console.log('cannot connect to the database')
        
        const db  =  client.db(dbname)
    
        db.collection('blocks').insertOne( block, (error, result) => {

            if(error) console.log('block adding error') 
        
        }) 

        db.collection('blocks').find({}) //all
            .toArray((error, result) => console.log(result))
    })
})


module.exports.add = blockNr => save(blockNr, addToDatabase)