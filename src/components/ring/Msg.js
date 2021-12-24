import React from "react";
import { connect } from "react-redux";


class RingMsg extends React.Component {

    constructor(props) {
        super(props);
        this.handleConnect = this.handleConnect.bind(this);
        this.createNode = this.createNode.bind(this);
    }

    async handleConnect() {
        await window.ethereum.enable();
        this.props.dispatch({
            type: "CONNECT_WALLET"
        });
    }

    createNode () {
        this.props.dispatch({
            type:"CREATE_NODE"
        });
    }



    render() {
        return (
            <>
                <div id="launch_sm_connect_btn" className="flex">
                    <div>
                        {
                            !this.props.account ?
                                <div className="action-btn outline flex align-center justify-center fs-15" style={{width:"90px", height:"40px"}} onClick={this.handleConnect}>
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
                </div>
                <div className="custom-container mx-auto informations-container">
                    <div className="info-container-1">
                        <img alt="" className="info-data-icon" src="/img/myNode.svg" />
                        <div className="info-datas">
                            <div className="info-data-value">{this.props.my_nodes.length}<span style={{ color: "rgb(160, 174, 192)", marginLeft: "0.5rem" }}>/
                                100</span></div>
                            <div className="c-yellow" style={{ marginTop: "4px" }}>My Nodes</div>
                        </div>
                        <div className="flex1"></div>
                        <div className="btn action-btn outline m-r-20 create_node_btn" onClick={this.createNode}>CREATE NODE</div>
                    </div>
                    <div className="info-container-1">
                        <img alt="" className="info-data-icon" src="/img/allNode.svg" />
                        <div className="info-datas">
                            <div className="info-data-value">30.000</div>
                            <div className="c-yellow" style={{ marginTop: "4px" }}>All Nodes</div>
                        </div>
                    </div>
                    <div className="info-container-1"><img alt="" className="info-data-icon"
                        src="/img/rewards.svg" />
                        <div className="info-datas">
                            <div className="info-data-value" title="0">0.0000<span className="ml-1"
                                style={{ color: "rgb(160, 174, 192)", marginLeft: "0.5rem" }}>Phoenix</span></div>
                            <div className="c-4cce13" style={{ marginTop: "4px" }}>My Rewards</div>
                        </div>
                        <div className="flex1"></div>
                        {/* <div className="btn action-btn outline m-r-20" style={{ width: "120px", height: "40px" }}>CLAIM ALL</div> */}
                    </div>
                </div>
                <div id="welcome-message" className="flex custom-container mx-auto m-t-100">
                    <div className="c-w">
                        <div className="msg-title">
                            Welcome to FIRE
                        </div>
                        <p className="msg-content">
                            From this console, you can view, manage, and launch FIRE-nodes. You can also see how many rewards
                            have been allocated, and claim them here. Then if you want, you can use them to create more
                            FIRE-nodes, up to a maximum of 100 per wallet.</p>
                        <div id="welcome-buttons" className="mt-2">
                            <button className="action-btn btn welcome-action-btn"
                                onClick={() => { window.open("https://pancakeswap.finance/swap?outputCurrency=0x521ef54063148E5F15F18B9631426175ceE23DE2") }}>
                                BUY $FIRE
                            </button>
                            <button className="action-btn btn outline welcome-action-btn">DISCORD</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

const mapDispatchToProps = dispatch => {
    return { dispatch };
}

const mapStateToProps = state => {
    return { account: state.account, my_nodes: state.my_nodes };
}
export default connect(mapStateToProps, mapDispatchToProps)(RingMsg);