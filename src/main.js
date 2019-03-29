const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('4a179bcb0818b6a437dbdc4b70319e43d820d933bb39d9291b12d9e973854d39');
const myWalletAddress = myKey.getPublic('hex');

let cluffCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'address2', 100);
tx1.signTransaction(myKey);
cluffCoin.addTransaction(tx1);

console.log('\nMining....');
cluffCoin.minePendingTransactions('myWalletAddress');

const tx2 = new Transaction(myWalletAddress, 'address1', 50);
tx2.signTransaction(myKey);
cluffCoin.addTransaction(tx2);

console.log('\nMining....');
cluffCoin.minePendingTransactions('myWalletAddress');

console.log();
console.log('\nBalance of chuck is', cluffCoin.getBalanceOfAddress('myWalletAddress'));

console.log('Is chain valid?', cluffCoin.isChainValid() ? 'Yes' : 'No');