import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';
import { createStore } from 'redux'
import Web3 from 'web3';
import config from '../contract/config';

const _initialState = {
    price_usd: 0,
    price_bnb: 0,
    account: "",
    node_list: []
}


const init = (init) => {

    return init;
}

const provider = Web3.providers.HttpProvider(config.testNetUrl);
const web3 = new Web3(Web3.givenProvider || provider);


const reducer = (state = init(_initialState), action) => {

    if (action.type === 'UPDATE_TOKEN_PRICE') {
        return Object.assign({}, state, {
            price_usd: action.payload.price_usd,
            price_bnb: action.payload.price_bnb
        })
    } else if (action.type === "UPDATE_WALLET_ACCOUNT") {
        console.log("accounts updated");
        return Object.assign({}, state, {
            account: action.payload.account
        });
    } else if (action.type === "UPDATE_CHAIN_ID") {
        return Object.assign({}, state, {
            chainId: action.payload.chainId
        });
    } else if (action.type === 'GET_NODE_LIST') {
        var list = [];
        for (var i = 0; i < 100; i++) {
            list.push({ id: i, content: i, rewards: i });
        }
        return Object.assign({}, state, {
            node_list: list
        });
    } else if (action.type === 'CONNECT_WALLET') {
        web3.eth.getAccounts((err, accounts) => {
            store.dispatch({
                type: "UPDATE_WALLET_ACCOUNT",
                payload: { account: accounts[0] }
            });
        })
    } else if (action.type === 'SET_CONTRACT_STATUS') {
        console.log("state in redux", state);

    } else if (action.type === "SET_NFT_URL" ) {
        if (action.payload.type === "master") {

        } else if (action.payload.type === "grand") {

        }
    } else if (action.type === "CLAIM_NODE") {        
        console.log("Claim node id", action.payload.node_id);
    } else if (action.type === "BUY_NFT_ART") {
        console.log("Buy NFT art", action.payload.type);
    }

    return state;
}

const store = createStore(reducer);


if (window.ethereum) {
    window.ethereum.on('accountsChanged', function (accounts) {

        store.dispatch({
            type: "UPDATE_WALLET_ACCOUNT",
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