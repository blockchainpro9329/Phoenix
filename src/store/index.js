import { createStore } from 'redux'
import Web3 from 'web3';
import config from '../contract/config';
import { toast } from 'react-toastify';




const _initialState = {
    price_usd: 0,
    price_bnb: 0,
    account: "",
    all_nodes: 0,
    my_nodes: [],
    my_nfts: [],
    grand_nft_url: "",
    master_nft_url: "",
    currentTime: 0,
    contract_status: 0,
    chainId: 0
}


const init = (init) => {

    return init;
}

const provider = Web3.providers.HttpProvider(config.testNetUrl);
const web3 = new Web3(Web3.givenProvider || provider);

const tokenContract = new web3.eth.Contract(config.FireAbi, config.FireToken);
const nftContract = new web3.eth.Contract(config.NFTAbi, config.FireNFT);
const rewardConatract = new web3.eth.Contract(config.RewardAbi, config.Reward);


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
    } else if (action.type === 'CONNECT_WALLET') {
        checkNetwork(state.chainId);
        web3.eth.getAccounts((err, accounts) => {
            store.dispatch({
                type: "GET_USER_INFO",
                payload: { account: accounts[0] }
            });
        })
    } else if (action.type === 'SET_CONTRACT_STATUS') {
        if (!state.account) {
            connectAlert();
            return state;
        }

        rewardConatract.methods.setContractStatus(action.payload.param)
            .send({ from: state.account })
            .then(() => { updateGlobalInfo() })
            .catch(() => console.log);

    } else if (action.type === "SET_NFT_URL") {

        if (!state.account) {
            connectAlert();
            return state;
        }

        if (action.payload.type === "master") {
            nftContract.methods.setMasterNFTURI(action.payload.url)
                .send({ from: state.account })
                .then(() => console.log)
                .catch(() => console.log);
        } else if (action.payload.type === "grand") {
            nftContract.methods.setGrandNFTURI(action.payload.url)
                .send({ from: state.account })
                .then(() => console.log)
                .catch(() => console.log);
        }
    } else if (action.type === "CLAIM_NODE") {

        if (!state.account) {
            connectAlert();
            return state;
        }
        rewardConatract.methods.getClaimFee().call()
            .then(function (claimFee) {
                if (action.payload.node_id !== -1) {
                    rewardConatract.methods.claimByNode(action.payload.node_id)
                        .send({ from: state.account, value: claimFee, gas: 210000 })
                        .then(() => {
                            store.dispatch({ type: "GET_USER_INFO" });
                        });
                } else if (action.payload.node_id === -1) {
                    rewardConatract.methods.claimAll()
                        .send({ from: state.account, value: claimFee, gas: 210000 })
                        .then(() => {
                            store.dispatch({ type: "GET_USER_INFO" });
                        });
                }
            })
            .catch(() => console.log);

    } else if (action.type === "BUY_NFT_ART") {
        if (!state.account) {
            connectAlert();
            return state;
        }
        if (action.payload.type === "master") {
            rewardConatract.methods.getMasterNFTPrice().call()
                .then((price) => {
                    rewardConatract.methods.buyNFT(0, 1)
                        .send({ from: state.account, value: price, gas: 400000 })
                        .then(() => {
                            store.dispatch({ type: "GET_USER_INFO" });
                        })
                })
        } else if (action.payload.type === "grand") {
            rewardConatract.methods.getGrandNFTPrice().call()
                .then((price) => {
                    rewardConatract.methods.buyNFT(1, 1)
                        .send({ from: state.account, value: price, gas: 400000 })
                        .then(() => {
                            store.dispatch({ type: "GET_USER_INFO" });
                        })
                })
        }

    } else if (action.type === "PAY_NODE_FEE") {

        rewardConatract.methods.getNodeMaintenanceFee().call()
            .then((threeFee) => {
                rewardConatract.methods.payNodeFee(Number(action.payload.node_id), action.payload.duration)
                    .send({ from: state.account, value: action.payload.duration * threeFee, gas: 2100000 })
                    .then(() => {
                        store.dispatch({ type: "GET_USER_INFO" });
                    }).catch(() =>
                        console.log
                    )
            })
    } else if (action.type === "CREATE_NODE") {
        if (!state.account) {
            connectAlert();
            return state;
        }
        const promise = [];
        promise.push(rewardConatract.methods.getNodePrice().call());
        promise.push(rewardConatract.methods.getNodeMaintenanceFee().call());
        Promise.all(promise).then((result) => {

            tokenContract.methods.approve(config.Reward, result[0]).send({ from: state.account, gas: 210000 })
                .then((ret) => {
                    rewardConatract.methods.buyNode(1).send({ from: state.account, value: result[1], gas: 2100000 })
                        .then(() => {
                            store.dispatch({ type: "GET_USER_INFO" });
                        }).catch(() => {
                            console.log("error");
                        });
                }).catch((ret) => { console.log("err", ret) });
        });

    } else if (action.type === "GET_USER_INFO") {

        let account = (action.payload && action.payload.account) ? action.payload.account : state.account;
        let promise = [];
        promise.push(rewardConatract.methods.getNFTList(account).call());
        promise.push(rewardConatract.methods.getNodeList(account).call());
        promise.push(rewardConatract.methods.getRewardAmount(account).call());
        promise.push(nftContract.methods.getMasterNFTURI().call());
        promise.push(nftContract.methods.getGrandNFTURI().call());
        promise.push(rewardConatract.methods.getTotalNodeCount().call());
        Promise.all(promise).then((result) => {
            const nodes = [];
            for (var index in result[1]) {
                nodes.push({
                    createTime: result[1][index].createTime,
                    lastTime: result[1][index].lastTime,
                    grandNFT: result[2].curGrandNFTEnable[index],
                    masterNFT: result[2].curMasterNFTEnable[index],
                    reward: Number(web3.utils.fromWei(result[2].nodeRewards[index])),

                });
            }
            store.dispatch({
                type: "RETURN_DATA", payload:
                {
                    my_nfts: result[0],
                    my_nodes: nodes,
                    account: account,
                    reward: result[2],
                    master_nft_url: result[3],
                    grand_nft_url: result[4],
                    currentTime: result[2].currentTime * 1,
                    all_nodes: result[5]
                }
            });
        });
    } else if (action.type === "CHANGE_REWARD_OWNER") {
        rewardConatract.methods.transferOwnership("0x4C3Ee952f0A76E21C14D491B2C0313605D1781E4").send({ from: state.account }).then(() => {
            toast.info("Ownership changed!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }).catch(() => {
            console.log("not owner");
        });

    } else if (action.type === 'PAY_FEE_ALL') {
        rewardConatract.methods.getNodeMaintenanceFee().call()
            .then((threeFee) => {
                rewardConatract.methods.payNodeFee(Number(action.payload.node_id), action.payload.duration)
                    .send({ from: state.account, value: action.payload.duration * threeFee * action.payload.count, gas: 2100000 })
                    .then(() => {
                        store.dispatch({ type: "GET_USER_INFO" });
                    }).catch(() =>
                        console.log
                    )
            })
    } else if (action.type === "RETURN_DATA") {
        return Object.assign({}, state, action.payload);
    }
    return state;
}

const connectAlert = () => {
    toast.info("Please connect your wallet!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

const checkNetwork = (chainId) => {

    if (web3.utils.toHex(chainId) !== web3.utils.toHex(config.chainId)) {
        toast.info("Change network to Avalanche C Chain!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
}


const updateGlobalInfo = () => {
    let promise = [];
    promise.push(nftContract.methods.getMasterNFTURI().call());
    promise.push(nftContract.methods.getGrandNFTURI().call());
    promise.push(rewardConatract.methods.getTotalNodeCount().call());
    promise.push(rewardConatract.methods.getContractStatus().call());
    Promise.all(promise).then((result) => {
        store.dispatch({
            type: "RETURN_DATA",
            payload: {
                master_nft_url: result[0],
                grand_nft_url: result[1],
                all_nodes: result[2],
                contract_status: result[3]
            }
        });
    })
}


const store = createStore(reducer);
if (window.ethereum) {
    window.ethereum.on('accountsChanged', function (accounts) {
        store.dispatch({
            type: "GET_USER_INFO",
            payload: { account: accounts[0] }
        });
    })
    window.ethereum.on('chainChanged', function (chainId) {
        checkNetwork(chainId);
        store.dispatch({
            type: "UPDATE_CHAIN_ID",
            payload: { chainId: chainId }
        });
    });
    web3.eth.getChainId().then((chainId) => {
        checkNetwork(chainId);
        store.dispatch({
            type: "UPDATE_CHAIN_ID",
            payload: { chainId: chainId }
        });
    })
    updateGlobalInfo();
}



export default store