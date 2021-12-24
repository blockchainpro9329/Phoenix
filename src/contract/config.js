
var fireAbi = require('./abis/FireToken.json');
var nftAbi = require('./abis/FireNFT.json');
var rewardAbi = require('./abis/RewardManagement.json');


var config = {
    // testNetUrl: "https://api.avax-test.network/ext/bc/C/rpc",
    
    mainNetUrl: "https://ropsten.infura.io/v3/",
    FireToken : "0x47B0f79dfA871c52D099677CC6d9b34ab871bB75",
    FireAbi: fireAbi,
    FireNFT : "0x5652e64D2436B38dB6b2891d9Fa73B02B65b9Bbe",
    NFTAbi:  nftAbi,
    Reward : "0xb8C04c59B3d645439F59e601c842FdFB6332D7bf",
    RewardAbi: rewardAbi 
}


export default config;