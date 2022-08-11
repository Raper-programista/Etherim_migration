Web3 = require('Web3')
const web3 = new Web3('http://127.0.0.1:7545')  //address of local blockchain (Ganache)

module.exports = blockNumber => web3.eth.getBlock(blockNumber) // getting block from Ganache 