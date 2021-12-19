import { createStore } from 'redux'
import Web3 from 'web3';
import config from '../contract/config';

const _initialState = {
    price_usd: 0,
    price_bnb: 0,
    account: ""
}


const init = (init) => {
    console.log("config", config);
    const provider = Web3.providers.HttpProvider(config.testNetUrl);
    init.provider = provider;
    console.log("init", provider);
    init.web3 = new Web3(Web3.givenProvider || provider);
    return init;
}


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
    }
    return state;
}

const store = createStore(reducer);


if (window.ethereum) {
    window.ethereum.on('accountsChanged', function (accounts) {

        store.dispatch({
            type: "UPDATE_WALLET_ACCOUNT",
            payload: {account: accounts[0]}
        });
    })
    
    window.ethereum.on('chainChanged', function (networkId) {

        store.dispatch({
            type:"UPDATE_CHAIN_ID",
            payload: {chainId: networkId}
        });
    });
}



export default store