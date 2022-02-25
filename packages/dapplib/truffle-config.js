require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remember slow guess castle off snake'; 
let testAccounts = [
"0x5f73b7660bf68974486fdee0f8564c62665ff0a81a68ee53eda2968de9c8042b",
"0x69256e4ae59a290ab2a0bdaa0c1215934ebc4bce378a05259ae86777dd82774b",
"0xa73ba9778306e8ef63021c2b8b9ebc2f8cf0ea9c2675f6d2b290b44391e475bd",
"0xc8b6c63a5dd7eceeb16464d96a12f05802bcda31cdf7282381da3bba52077b9f",
"0xd1559ee17245b17a8db63a6ac5a950da0b5284905b734104ccdafd2db65367b5",
"0x3ddcc3b4c2b8627072f02bd8eb77e36b5f7387bc49f98aa03530d22b4c5fc60a",
"0x146b7b9ce9a0079c1b0ab2c197edcf28df136299b0d4d82e2225b2cddf6135e3",
"0xbd8160f5140efe56fc35264780570f4e958ab0239ac21d2849abd7659a7d2b66",
"0xa26de5e9ff69b3acf78971580890845312e3512b7e91541b475127141967fcc7",
"0xedf9e328768d9e0d2f2d0eaf8f3c49af7d44dd22df9d086a32a242aab3a1aea7"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

