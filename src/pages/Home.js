import HomeHeader from "../components/home/HomeHeader";
import HomeHero from "../components/home/HomeHero";
import HomeVision from "../components/home/HomeVision"
import HomeWork from "../components/home/HomeWork";
import Footer from "../components/common/Footer"
import Faq from "../components/common/Faq";
import HomeStart from "../components/home/HomeStart";
import { Component } from "react";
import Web3 from "web3";
import abi from "../contract/abis/ringAbi";
import panAbi from "../contract/abis/panAbi";
import uniswapAbi from "../contract/abis/uniswapAbi";

import { connect } from 'react-redux';


class Home extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.loadRateUsdt();
    }

    async loadRateUsdt() {

        // const bsc = "https://bsc-dataseed.binance.org/"
        // const web3 = new Web3(Web3.givenProvider || bsc);

        // const panRouterAddress = '0x10ED43C718714eb63d5aA57B78B54704E256024E'
        // const contract = new web3.eth.Contract(panAbi, panRouterAddress);
        // const BUSD = "0xe9e7cea3dedca5984780bafc599bd69add087d56";
        // const ringAddress = "0x521ef54063148e5f15f18b9631426175cee23de2";

        // const rate = await contract.methods.getAmountsOut(1, [ringAddress, BUSD]).call();
        // this.setState({ usd: rate[1] });


        // 0xBcB89eddCAb37CD2EF179b96DAbC154fCb61efa0


        const provider = "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";
        // const contractAddress ="0xc84b95776EFdAB05078d0aBc0A4Fe10e8a0c0058";
        
        const contractAddress ="0xBcB89eddCAb37CD2EF179b96DAbC154fCb61efa0";



        // const web3 = new Web3(Web3.givenProvider || provider);
        // const contract = new web3.eth.Contract(nftAbi1.abi, contractAddress);
        // console.log("nft contract", contract);

        // let a = await contract.methods.mintNFT(1, "111").send({from:"0x0aEa9f185fEA3c867c68f8E25f514524BC39ad94"});
        // .then(function(result){

        //     console.log(result);
        // }).catch(function(err){
        //     console.log(err);
        // });

        // console.log(a);
      
        // contract.methods.getValue().call()
        // .then(function(result){
        //     console.log("result", result);
        // }).catch(function(err){
        //     console.log("err", err);
        // });


    //    await contract.methods.setValue(1).send({from: "0x0aEa9f185fEA3c867c68f8E25f514524BC39ad94"});
    //    .then(function(result){
    //         console.log("result1:", result);
        
    //     }).catch(function(err){
    //         console.log("err", err);
    //     });

        // let a = await contract.methods.getValue().call();

        // console.log("a: ", a);
        // console.log("abi", nftAbi);




        // fetch("https://api.pancakeswap.info/api/v2/tokens/0x521ef54063148e5f15f18b9631426175cee23de2", {
        //     mode:'no-cors',
        //     headers: {"Access-Control-Allow-Origin":"*"}
        // }).then((res) => {if (!res.ok) return Promise.reject('error'); return res.json();})
        //   .then((json) => {
        //         this.props.dispatch({
        //             type: "UPDATE_TOKEN_PRICE",
        //             payload: { price_bnb: json.price_BNB, price_usd: json.price }
        //         });
        //     })

        // https://api.pancakeswap.info/api/v2/tokens/0x521ef54063148e5f15f18b9631426175cee23de2
    }

 

    render() {
        return (
            <>
                <HomeHeader></HomeHeader>
                <HomeHero></HomeHero>
                <HomeStart></HomeStart>
                <HomeVision></HomeVision>
                <HomeWork></HomeWork>
                <Faq></Faq>
                <Footer></Footer>
            </>
        );
    }
}

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);