

import React from "react";
import { connect } from 'react-redux';
import { toast } from 'react-toastify';



class Nft extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            selected_item: -1
        };
    }

    buyNft(type) {
        if (!this.props.can_perform) {
            toast.warning("Please wait. Another transaction is running.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }
        this.props.dispatch({ type: "UPDATE_CAN_PERFORM_STATUS", payload: { can_perfrom: false } });
        this.props.dispatch({
            type: "BUY_NFT_ART",
            payload: {
                type: type
            }
        });
    }


    static getDerivedStateFromProps(props, state) {
        var count = 0;
        for (var index in props.my_nodes) {
            if (!props.my_nodes[index].masterNFT) {
                count++;
            }
        }
        var ret = {
            enableMaster: false,
            enableGrand: false
        }   
        if (count > 10) {
            ret.enableMaster = true;
        }

        if (count == 0 && props.my_nodes.length == 100) {
            ret.enableGrand = true;
        }
        return ret;
    }


    render() {
        return (
            <div className="custom-container mx-auto text-justify info-container"
                style={{ textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "40px", marginBottom: "150px", marginLeft: "30px", marginRight: "30px", height: "fit-content", padding: "40px" }}>
                <div className="create_title">
                    Phoenix NFT Boosts
                </div>
                <p id="create-ring">Buy a Phoenix NFT to boost <span
                    className="sc-gsTEea cdmEaM">$FIRE</span> token rewards.</p>
                <div style={{ width: "100%" }}>
                    <div className="cards">
                        <div>
                            <div className="card">
                                <div className="card-img" style={{ backgroundImage: "url(" + this.props.master_nft_url + ")" }}></div>
                                <div className="card-item-title">
                                    <img alt="" src="/img/left-bar.png" style={{ height: "2px" }} />
                                    <span className="c-w text-center">MASTER NFT</span>
                                    <img alt="" src="/img/right-bar.png" style={{ height: "2px" }} />
                                </div>
                                <div className="card-item-info">The Master NFT is available once you build at least 10 Nests. The Master NFT will be applied to 10 Nests and boosts rewards by 0.025 for each day. Each wallet will be limited to a total of 10 Master NFT’s.
                                </div>
                            </div>
                            <button className="action-btn outline btn mx-auto c-yellow buy_nft_btn m-t-20"
                                disabled={!this.state.enableMaster} onClick={this.buyNft.bind(this, "master")}>Buy Now</button>
                        </div>
                        <div className="nft-margin-top">

                            <div className="card">
                                <div className="card-img" style={{ backgroundImage: "url(" + this.props.grand_nft_url + ")" }}></div>
                                <div className="card-item-title">
                                    <img alt="" src="/img/left-bar.png" style={{ height: "2px" }} />
                                    <span className="c-w text-center">GRAND NFT</span>
                                    <img alt="" src="/img/right-bar.png" style={{ height: "2px" }} />
                                </div>
                                <div className="card-item-info">The Grand Master NFT is available once you build all 100 NESTS. The Grand Master NFT boosts rewards by 0.05 for each Nest per day. Each wallet will be limited to a total of one Grand Master NFT.
                                </div>
                            </div>
                            <button className="action-btn outline btn mx-auto c-yellow buy_nft_btn m-t-20"
                                disabled={!this.state.enableGrand} onClick={this.buyNft.bind(this, "grand")}>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        grand_nft_url: state.grand_nft_url,
        master_nft_url: state.master_nft_url,
        can_perform: state.can_perform,
        my_nodes: state.my_nodes
    };
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Nft);