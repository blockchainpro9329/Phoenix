

import React from "react";
import Modal from "react-modal";
import { connect } from 'react-redux';



class Nft extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            selected_item: -1
        };
    }

    buyNft(type) {
        console.log("buy nft art");
        this.props.dispatch({
            type: "BUY_NFT_ART",
            payload: {
                type: type
            }
        });
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
                        <div className="card">
                            <div className="card-img" style={{ backgroundImage: "url(" + this.props.master_nft_url + ")" }}></div>
                            <div className="card-item-title">
                                <img alt="" src="/img/left-bar.png" style={{ height: "2px" }} />
                                <span className="c-w">Card One</span>
                                <img alt="" src="/img/right-bar.png" style={{ height: "2px" }} />
                            </div>
                            <div className="card-item-info">Lorem lpsum is simply dummy text of the printing and typesetting industry. Lorem lpsum has been the industry.</div>
                            <button className="action-btn outline btn mx-auto c-yellow fs-30" onClick={this.buyNft.bind(this, "master")}>Buy Now</button>
                        </div>
                        <div className="card">
                            <div className="card-img" style={{ backgroundImage: "url(" + this.props.grand_nft_url + ")" }}></div>
                            <div className="card-item-title">
                                <img alt="" src="/img/left-bar.png" style={{ height: "2px" }} />
                                <span className="c-w">Card Two</span>
                                <img alt="" src="/img/right-bar.png" style={{ height: "2px" }} />
                            </div>
                            <div className="card-item-info">Lorem lpsum is simply dummy text of the printing and typesetting industry. Lorem lpsum has been the industry.</div>
                            <button className="action-btn outline btn mx-auto c-yellow fs-30" onClick={this.buyNft.bind(this, "grand")}>Buy Now</button>
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
        master_nft_url: state.master_nft_url
    };
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Nft);