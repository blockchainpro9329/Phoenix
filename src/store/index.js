import { act } from 'react-dom/cjs/react-dom-test-utils.development';
import { createStore } from 'redux'
import Web3 from 'web3';
import config from '../contract/config';




const _initialState = {
    price_usd: 0,
    price_bnb: 0,
    account: "",
    node_list: [],
    all_nodes: 0,
    my_nodes: [],
    my_nfts: []
}


const init = (init) => {

    return init;
}

const provider = Web3.providers.HttpProvider(config.testNetUrl);
const web3 = new Web3(Web3.givenProvider || provider);




const tokenContract = new web3.eth.Contract(config.FireAbi, config.FireToken);
const nftContract = new web3.eth.Contract(config.NFTAbi, config.FireNFT);
const rewardConatract = new web3.eth.Contract(config.RewardAbi, config.Reward);

console.log("reward Contract", rewardConatract);
console.log("nft Contract", nftContract);
console.log("token Contract", tokenContract);




const reducer = (state = init(_initialState), action) => {

    if (action.type === 'UPDATE_TOKEN_PRICE') {
        return Object.assign({}, state, {
            price_usd: action.payload.price_usd,
            price_bnb: action.payload.price_bnb
        })
    } else if (action.type === "UPDATE_CHAIN_ID") {
        return Object.assign({}, state, {
            chainId: action.payload.chainId
        });
    } else if (action.type === 'GET_NODE_LIST') {
        var list = [];
        for (var i = 0; i < 20; i++) {
            list.push({ id: i, content: i, rewards: i });
        }
        return Object.assign({}, state, {
            node_list: list
        });
    } else if (action.type === 'CONNECT_WALLET') {
        web3.eth.getAccounts((err, accounts) => {
            store.dispatch({
                type: "GET_USER_INFO",
                payload: { account: accounts[0] }
            });
        })
    } else if (action.type === 'SET_CONTRACT_STATUS') {
        console.log("state in redux", state);

    } else if (action.type === "SET_NFT_URL") {
        if (action.payload.type === "master") {

        } else if (action.payload.type === "grand") {

        }
    } else if (action.type === "CLAIM_NODE") {
        console.log("Claim node id", action.payload.node_id);

    } else if (action.type === "BUY_NFT_ART") {

        console.log("Buy NFT art", action.payload.type);

    } else if (action.type === "PAY_NODE_FEE") {


        // let threeFee = await this.state.rewardManagement.methods.getNodeMaintenanceFee().call();
        // await this.state.fireToken.methods.approve(CONTRACT_REWARDMANAGEMENT_ADDRESS, threeFee).send({ from: this.state.walletAddress, gas: 210000 });
        // await this.state.rewardManagement.methods.payNodeFee(0, 0).send({ from: this.state.walletAddress, gas: 2100000 });


        rewardConatract.methods.getNodeMaintenanceFee().call()
            .then((threeFee) => {
                console.log("three month fee1", threeFee);
                tokenContract.methods.approve(config.Reward, threeFee)
                    .send({ from: state.account, gas: 210000 })
                    .then(() => {
                        console.log("three month fee", threeFee);
                        rewardConatract.methods.payNodeFee(action.payload.node_id, 0)
                            .send({ from: state.account, value: threeFee, gas: 21000000 })
                            .then(() => {
                                store.dispatch({ type: "GET_USER_INFO" });
                            })
                    }).catch((err)=>{
                        console.log(err);
                    })
            })
    } else if (action.type === "CREATE_NODE") {
        const promise = [];
        promise.push(rewardConatract.methods.getNodePrice().call());
        promise.push(rewardConatract.methods.getNodeMaintenanceFee().call());
        Promise.all(promise).then((result) => {
            tokenContract.methods.approve(config.Reward, result[0]).send({ from: state.account, gas: 210000 }).then((ret) => {
                rewardConatract.methods.buyNode(1).send({ from: state.account, value: result[1], gas: 2100000 })
                    .then(() => {
                        store.dispatch({ type: "GET_USER_INFO" });
                    });
            }).catch((ret) => { console.log("err", ret) });
        });

    } else if (action.type === "GET_USER_INFO") {

        let account = (action.payload && action.payload.account) ? action.payload.account : state.account;
        let promise = [];
        promise.push(rewardConatract.methods.getNFTList(account).call());
        promise.push(rewardConatract.methods.getNodeList(account).call());
        // promise.push(rewardConatract.methods.getAll)
        Promise.all(promise).then((result) => {
            store.dispatch({ type: "RETURN_DATA", payload: { my_nfts: result[0], my_nodes: result[1], account: account } });
        });

    } else if (action.type === "RETURN_DATA") {
        return Object.assign({}, state, action.payload);
    }
    return state;
}


const store = createStore(reducer);


if (window.ethereum) {
    window.ethereum.on('accountsChanged', function (accounts) {

        store.dispatch({
            type: "GET_USER_INFO",
            payload: { account: accounts[0] }
        });
    })

    window.ethereum.on('chainChanged', function (networkId) {

        store.dispatch({
            type: "UPDATE_CHAIN_ID",
            payload: { chainId: networkId }
        });
    });
}



export default store