
var fireAbi = require('./abis/FireToken.json');
var nftAbi = require('./abis/FireNFT.json');
var rewardAbi = require('./abis/RewardManagement.json');


var config = {
    // testNetUrl: "https://api.avax-test.network/ext/bc/C/rpc",
    
    mainNetUrl: "https://ropsten.infura.io/v3/",
    FireToken : "0x06Ba87cc958475235FC5Ff026f825b22A1FF0A51",
    FireAbi: fireAbi,
    FireNFT : "0xDF64D87d93B762b188b4B3B20DfC2F8887A365f8",
    NFTAbi:  nftAbi,
    Reward : "0x6f5F8a28D1DA3F6bc39e11aF88aEd6F8D14e25fE",
    RewardAbi: rewardAbi ,
    cainId: 3
}


export default config;