
var fireAbi = require('./abis/FireToken.json');
var nftAbi = require('./abis/FireNFT.json');
var rewardAbi = require('./abis/RewardManagement.json');


var config = {
    
    mainNetUrl: "https://api.avax.network/ext/bc/C/rpc",
    FireToken : "0xfcc6CE74f4cd7eDEF0C5429bB99d38A3608043a5",
    FireAbi: fireAbi,
    FireNFT : "0x1F066543De7E2c2B68be02c490Df600aeD59f986",
    // FireNFT : "0x9A83DD291c2a9BDD678b6c8526d89fA13b2B646d",
    NFTAbi:  nftAbi,
    // Reward : "0x07A78Ec2Dcf6d65dcF5DEcBbcfb4fb3566fFa142",
    Reward : "0xA6AdaA7A538bb23B2e982Cc51C21505F6562e009",
    RewardAbi: rewardAbi ,
    chainId: 0xa86a,

    treasuryAddr: "0x52Fd04AA057ba8Ca4bCc675B55De7366F607A677"
}


export default config;