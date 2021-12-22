import React from "react";
import { create } from 'ipfs-http-client'
import Web3 from "web3"; 
import config from "../../contract/config";


const client = create('https://ipfs.infura.io:5001/api/v0')

class Content extends React.Component {

    constructor(props) {
        super(props);
        this.onSelectFile = this.onSelectFile.bind(this);
        this.state = {
            master_url:"../img/empty_img1.png",
            grand_url:"../img/empty_img1.png"
        }
        this.connectWeb3 = this.connectWeb3.bind(this);
    }

   async onSelectFile(event, type) {
        console.log(event);
        console.log(type);

        const file = event.target.files[0]
        try {
            const added = await client.add(file)
            const url = `https://ipfs.infura.io/ipfs/${added.path}`
            
            console.log("url", url);
            const tokenObject = {
                tokenName: "Fire NFT",
                tokenSymbol: "Fire",
                metaData: {
                    type: type,
                    hash: url,
                },
            };


            const cid = await client.add(JSON.stringify(tokenObject));
            let tokenURI = `https://ipfs.infura.io/ipfs/${cid.path}`;
            console.log(cid);


            let temp_url = {};
            temp_url[type + "_url"] = url;
            this.setState(temp_url);
            console.log("tokenURI", tokenURI);

        } catch (error) {
            console.log('Error uploading file: ', error)
        }



    }

    connectWeb3() {

        const provider = Web3.providers.HttpProvider(config.testNetUrl);
        const web3 = new Web3(Web3.givenProvider || provider);

        const contract = new web3.eth.Contract(config.nftContractAbi.abi, config.nftContractAddress);

        contract.methods.mintNFT(0).send({from:"0x8695CAfcaAA4F8C6Ce1ea23a45c628C7D3FBFb07"})
        .then(console.log);
 
    }

    render() {
        return (
            <>
                <section id="section-started" className="c-w flex flex-col align-center">
                    <h2>Setting FIRE NFT ART</h2>
                    <span className="subtitle" data-nsfw-filter-status="swf"> Only owners can change and update NFT arts.</span>

                    <div id="started-content" className="flex mx-auto m-t-40" style={{ justifyContent: "space-around" }}>
                        <div className="card-action shadow">
                            <div className="badge-title text-purple" style={{ marginTop: "10px" }}>Master</div>
                            <img alt="" style={{ height: "250px", width: "250px", marginTop: "20px", marginBottom: "20px" }} src={this.state.master_url}></img>
                            <a className="breath border-purple" data-nsfw-filter-status="swf" style={{ position: "relative" }}>
                                Create & Change
                                <input type="file" style={{ position: "absolute", top: "0px", left: "0px", width: "100%", height: "100%", opacity: "0" }} onChange={(event) => this.onSelectFile(event, "master")} />
                            </a>
                        </div>
                        <div className="card-action shadow">
                            <div className="badge-title text-pink" style={{ marginTop: "10px" }}>Grand</div>
                            <img alt="" style={{ height: "250px", width: "250px", marginTop: "20px", marginBottom: "20px" }} src={this.state.grand_url}></img>
                            <a className="breath border-pink" data-nsfw-filter-status="swf" style={{ position: "relative" }}>
                                Create & Change
                                <input type="file" style={{ position: "absolute", top: "0px", left: "0px", width: "100%", height: "100%", opacity: "0" }} onChange={(event) => this.onSelectFile(event, "grand")} />
                            </a>
                        </div>
                    </div>
                </section>
                <section id="section-start-stop-service" style={{display:"flex", justifyContent:"center"}}>
                    <button className="btn action-btn outline m-r-20" onClick={this.startService}>Start Service</button>
                    <button className="btn action-btn"  onClick={this.stopService}>Stop Service</button>
                </section>
            </>

        );
    }
}


export default Content;