/*
the program use local database: mongoDB
and local blockchain symulator: Ganache
*/

// strat program

const saveBlock = require('./saveBlock')

const url = 'mongodb://127.0.0.1:27017'  // address of local database (mongoBD)
const dbname = 'etherium' // name of database

saveBlock.set(url, dbname) // setnig adderss DB and name

for(let i = 1; i<=10; i++)  // saving 10 sample blocks to the database (1-10)

    saveBlock.add(i) //save