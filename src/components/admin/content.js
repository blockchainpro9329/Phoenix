import React from "react";
import { create } from 'ipfs-http-client'
import Web3 from "web3";
import config from "../../contract/config";
import { connect } from 'react-redux';


const client = create('https://ipfs.infura.io:5001/api/v0');

class Content extends React.Component {

    constructor(props) {
        super(props);
        this.onSelectFile = this.onSelectFile.bind(this);
        this.state = {
            master_nft_url: props.master_nft_url,
            grand_nft_url: props.grand_nft_url
        }
        this.setContractStatus = this.setContractStatus.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevProps) {
        return { master_nft_url: nextProps.master_nft_url, grand_nft_url: nextProps.grand_nft_url };
    }


    async onSelectFile(event, type) {
        const file = event.target.files[0]
        try {
            const added = await client.add(file)
            const url = `https://ipfs.infura.io/ipfs/${added.path}`

            console.log("url", url);
            // const tokenObject = {
            //     tokenName: "Fire NFT",
            //     tokenSymbol: "Fire",
            //     metaData: {
            //         type: type,
            //         hash: url,
            //     },
            // };
            // const cid = await client.add(JSON.stringify(tokenObject));
            // let tokenURI = `https://ipfs.infura.io/ipfs/${cid.path}`;

            let temp_url = {};
            temp_url[type + "_nft_url"] = url;
            this.setState(temp_url);
            this.props.dispatch({
                type: "SET_NFT_URL",
                payload: {
                    type: type,
                    url: url
                }
            });
        } catch (error) {
            console.log('Error uploading file: ', error)
        }
    }
    setContractStatus(param) {
        this.props.dispatch({
            type: "SET_CONTRACT_STATUS",
            payload: { param: param }
        });
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
                            <img alt="" style={{ height: "250px", width: "250px", marginTop: "20px", marginBottom: "20px" }} src={this.state.master_nft_url}></img>
                            <a className="breath border-purple" data-nsfw-filter-status="swf" style={{ position: "relative" }}>
                                Create & Change
                                <input type="file" style={{ position: "absolute", top: "0px", left: "0px", width: "100%", height: "100%", opacity: "0" }} onChange={(event) => this.onSelectFile(event, "master")} />
                            </a>
                        </div>
                        <div className="card-action shadow">
                            <div className="badge-title text-pink" style={{ marginTop: "10px" }}>Grand</div>
                            <img alt="" style={{ height: "250px", width: "250px", marginTop: "20px", marginBottom: "20px" }} src={this.state.grand_nft_url}></img>
                            <a className="breath border-pink" data-nsfw-filter-status="swf" style={{ position: "relative" }}>
                                Create & Change
                                <input type="file" style={{ position: "absolute", top: "0px", left: "0px", width: "100%", height: "100%", opacity: "0" }} onChange={(event) => this.onSelectFile(event, "grand")} />
                            </a>
                        </div>
                    </div>
                </section>
                <section id="section-start-stop-service" style={{ display: "flex", justifyContent: "center" }}>
                    {
                        this.props.contract_status == 0 ?
                            <button className="btn action-btn" onClick={this.setContractStatus.bind(this, 1)}>Stop Service</button> :
                            <button className="btn action-btn outline" onClick={this.setContractStatus.bind(this, 0)}>Start Service</button>
                    }
                </section>
            </>

        );
    }
}


const mapStateToProps = state => {
    console.log(state);
    return state;
}

const mapDispatchToProps = dispatch => {
    return { dispatch }
}



export default connect(mapStateToProps, mapDispatchToProps)(Content);