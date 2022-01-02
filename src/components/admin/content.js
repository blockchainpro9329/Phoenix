import React from "react";
import { create } from 'ipfs-http-client'
import Web3 from "web3";
import config from "../../contract/config";
import { connect } from 'react-redux';


const client = create('https://ipfs.infura.io:5001/api/v0');

class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            master_nft_url: props.master_nft_url,
            grand_nft_url: props.grand_nft_url,
            claim_fee: 0,
            maintenance_fee: 0,
            fire_price: 0,
            nest_price: 0,
            ownUpdate: false
        }

        this.onSelectFile = this.onSelectFile.bind(this);
        this.setContractStatus = this.setContractStatus.bind(this);
        this.changeOwnerShip = this.changeOwnerShip.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);

        this.props.dispatch({ type: "GET_ADMIN_PRICE" });
        // this.handleConnect = this.handleConnect.bind(this);
    }

    // async handleConnect() {
    //     await window.ethereum.enable();
    //     this.props.dispatch({
    //         type: "CONNECT_WALLET"
    //     });
    // }

    static getDerivedStateFromProps(props, state) {
        var ret = {
            master_nft_url: props.master_nft_url,
            grand_nft_url: props.grand_nft_url
        }
        if (!state.ownUpdate) {
            ret.fire_price = props.fire_price;
            ret.claim_fee = props.claim_fee;
            ret.maintenance_fee = props.maintenance_fee;
            ret.nest_price = props.nest_price;
        } else {
            ret.ownUpdate = false;
        }
        return ret;
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

    changeOwnerShip() {
        this.props.dispatch({
            type: "CHANGE_REWARD_OWNER"
        })
    }


    onChangeValue(event, type) {
        var value = event.target.value;
        if (type === "claim_fee") {
            this.setState({ claim_fee: value, ownUpdate: true });
        } else if (type == "maintenance_fee") {
            this.setState({ maintenance_fee: value, ownUpdate: true });
        } else if (type == "nest_price") {
            this.setState({ nest_price: value, ownUpdate: true });
        } else if (type === "fire_price") {
            this.setState({ fire_price: value, ownUpdate: true });
        }
    }

    setValue(type) {

        if (type === "claim_fee") {
            this.props.dispatch({ type: "SET_PRICE_VALUE", payload: { type: type, value: this.state.claim_fee } });
        } else if (type == "maintenance_fee") {
            this.props.dispatch({ type: "SET_PRICE_VALUE", payload: { type: type, value: this.state.maintenance_fee } });
        } else if (type == "nest_price") {
            this.props.dispatch({ type: "SET_PRICE_VALUE", payload: { type: type, value: this.state.nest_price } });
        } else if (type === "fire_price") {
            this.props.dispatch({ type: "SET_PRICE_VALUE", payload: { type: type, value: this.state.fire_price } });
        }
    }

    render() {
        return (
            <>
                {/* <div id="launch_sm_connect_btn" className="flex">
                    <div>
                        {
                            !this.props.account ?
                                <div className="action-btn outline flex align-center justify-center fs-15" style={{ width: "90px", height: "40px" }} onClick={this.handleConnect}>
                                    <span><i className="fas fa-wallet"></i>

                                    </span>
                                </div>
                                :
                                <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                                    <div className="c-green connected-account-text">{this.props.account.slice(0, 8) + "..." + this.props.account.slice(34)}</div>
                                    <div className="connected-text">WALLET CONNECTED</div>
                                </div>
                        }
                    </div>
                </div> */}
                <section id="section-started" className="admin c-w flex flex-col align-center" style={{height:"1000px", padding:"30px"}}>
                    <h2>Setting FIRE NFT ART</h2>
                    <span className="subtitle" data-nsfw-filter-status="swf"> Only owners can change and update NFT arts.</span>

                    <div id="started-content" className="flex mx-auto m-t-40 started-content-admin" style={{ justifyContent: "space-around" }}>
                        <div className="card-action shadow admin admin-card">
                            <div className="c-yellow fs-30" style={{ marginTop: "10px" }}>Master</div>
                            <img alt="" style={{ height: "250px", width: "250px", marginTop: "20px", marginBottom: "20px" }} src={this.state.master_nft_url}></img>
                            <a className="breath border-purple" data-nsfw-filter-status="swf" style={{ position: "relative" }}>
                                Create & Change
                                <input type="file" style={{ position: "absolute", top: "0px", left: "0px", width: "100%", height: "100%", opacity: "0" }} onChange={(event) => this.onSelectFile(event, "master")} />
                            </a>
                        </div>
                        <div className="card-action shadow admin admin-card">
                            <div className="c-yellow fs-30" style={{ marginTop: "10px" }}>Grand</div>
                            <img alt="" style={{ height: "250px", width: "250px", marginTop: "20px", marginBottom: "20px" }} src={this.state.grand_nft_url}></img>
                            <a className="breath border-pink" data-nsfw-filter-status="swf" style={{ position: "relative" }}>
                                Create & Change
                                <input type="file" style={{ position: "absolute", top: "0px", left: "0px", width: "100%", height: "100%", opacity: "0" }} onChange={(event) => this.onSelectFile(event, "grand")} />
                            </a>
                        </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        {
                            this.props.contract_status == 0 ?
                                <button className="btn action-btn" onClick={this.setContractStatus.bind(this, 1)}>Stop Service</button> :
                                <button className="btn action-btn outline" onClick={this.setContractStatus.bind(this, 0)}>Start Service</button>
                        }
                    </div>
                    <div className="m-t-40">
                        <div className="admin-input-item">
                            <label className="admin-input-label">Claim Fee (AVAX): </label>
                            <div className="flex align-center">
                                <input type="number" className="form-contral admin-input-content" min={0} value={this.state.claim_fee}
                                    onChange={(event) => { this.onChangeValue(event, "claim_fee") }} />
                                <button className="btn action-btn outline admin-setting-btn" onClick={() => { this.setValue("claim_fee") }}>SET</button>
                            </div>
                        </div>
                        <div className="admin-input-item">
                            <label className="admin-input-label">Maintenance Fee (AVAX): </label>
                            <div className="flex align-center">
                                <input type="number" className="form-contral admin-input-content" min={0} value={this.state.maintenance_fee}
                                    onChange={(event) => { this.onChangeValue(event, "maintenance_fee") }} />
                                <button className="btn action-btn outline admin-setting-btn" onClick={() => { this.setValue("maintenance_fee") }}>SET</button>
                            </div>
                        </div>
                        <div className="admin-input-item">
                            <label className="admin-input-label">FIRE Price (AVAX): </label>
                            <div className="flex align-center">
                                <input type="number" className="form-contral admin-input-content" min={0} value={this.state.fire_price}
                                    onChange={(event) => { this.onChangeValue(event, "fire_price") }}
                                />
                                <button className="btn action-btn outline admin-setting-btn" onClick={() => { this.setValue("fire_price") }}>SET</button>
                            </div>
                        </div>
                        <div className="admin-input-item">
                            <label className="admin-input-label">FIRE PER NESTS: </label>
                            <div className="flex align-center">
                                <input type="number" className="form-contral admin-input-content" min={0} value={this.state.nest_price}
                                    onChange={(event) => { this.onChangeValue(event, "nest_price") }}
                                />
                                <button className="btn action-btn outline admin-setting-btn" onClick={() => { this.setValue("nest_price") }}>SET</button>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}


const mapStateToProps = state => {
    return {
        master_nft_url: state.master_nft_url,
        grand_nft_url: state.grand_nft_url,
        fire_price: state.fire_price,
        maintenance_fee: state.maintenance_fee,
        claim_fee: state.claim_fee,
        nest_price: state.nest_price,
        contract_status: state.contract_status
    };
}

const mapDispatchToProps = dispatch => {
    return { dispatch }
}


export default connect(mapStateToProps, mapDispatchToProps)(Content);