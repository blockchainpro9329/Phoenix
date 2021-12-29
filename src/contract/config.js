
var fireAbi = require('./abis/FireToken.json');
var nftAbi = require('./abis/FireNFT.json');
var rewardAbi = require('./abis/RewardManagement.json');
// var rewardAbi = require('./abis/reward_new.json'); //test


var config = {
    
    mainNetUrl: "https://api.avax.network/ext/bc/C/rpc",
    FireToken : "0xfcc6CE74f4cd7eDEF0C5429bB99d38A3608043a5",
    FireAbi: fireAbi,
    FireNFT : "0x1F066543De7E2c2B68be02c490Df600aeD59f986",
    NFTAbi:  nftAbi,
    Reward : "0x7EB0d0D17eD138344F56127cb592E6dEeF863dCe",
    // Reward : "0x8c454e41722B39d2E0b87579ceF9b62a6D38D4be",  //test
    RewardAbi: rewardAbi ,
    chainId: 0xa86a
}


export default config;