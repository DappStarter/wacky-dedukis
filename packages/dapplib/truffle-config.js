require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz arch suspect venture stone crawl mushroom pulp harvest office army general'; 
let testAccounts = [
"0xa49e51cb69f7f72d9884b4cbd2f1ab31413b49057ce3fc770547ba4475c1e632",
"0x2ed80c02133b6d779e8a9fe180e09fbfbf5c8ac31cb279d6fee1aa9e3e45bad0",
"0x33392bb01beb3a7f1189ba031a18c4cc118df16d958cbba4143ec60d793d4cb1",
"0xd338042837775eb130a74462193ec4801f453aced339075d7687aecf103030b4",
"0xa67d857d333168cfc4ad0dafffd89c2d3098cc92a96222639c5f40c34422b33e",
"0x693995daec11221da8e51a3be4115081fb483ecb1655ff528575d26bbf9ef5a7",
"0x734303df92b67dfa66dcc6704fea880f33e04a01eeb74a211b6c0b39048b8d7a",
"0x98c0e8e5b9b94764562cd278ef770ef7e59534275496a164e79b21c1589d5f74",
"0xe8a58e5333a45015b498033c6951a13068b019339ba0b37202fee5048542adc2",
"0x5f23106abf75858acf2aa2af40da3ab4140a678643cc9bb977dbfea26442fa8d"
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

