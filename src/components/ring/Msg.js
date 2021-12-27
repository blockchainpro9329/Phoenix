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

    createNode() {
        this.props.dispatch({
            type: "CREATE_NODE"
        });
    }



    render() {
        return (
            <>
                <div id="launch_sm_connect_btn" className="flex">
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
                </div>
                <div className="custom-container mx-auto informations-container">
                    <div className="info-container-1">
                        <img alt="" className="info-data-icon" src="/img/myNode.svg" />
                        <div className="info-datas">
                            <div className="info-data-value">{this.props.my_nodes.length}<span style={{ color: "rgb(160, 174, 192)", marginLeft: "0.5rem" }}>/
                                100</span></div>
                            <div className="c-yellow" style={{ marginTop: "4px" }}>My NESTS</div>
                        </div>
                        <div className="flex1"></div>
                        <div className="btn action-btn outline m-r-20 create_node_btn" onClick={this.createNode}>CREATE NEST</div>
                    </div>
                    <div className="info-container-1">
                        <img alt="" className="info-data-icon" src="/img/allNode.svg" />
                        <div className="info-datas">
                            <div className="info-data-value">{this.props.all_nodes}</div>
                            <div className="c-yellow" style={{ marginTop: "4px" }}>All NESTS</div>
                        </div>
                    </div>
                    <div className="info-container-1"><img alt="" className="info-data-icon"
                        src="/img/rewards.svg" />
                        <div className="info-datas">
                            <div className="info-data-value" title="0">{Number(this.props.cur_all_reward).toFixed(9)}<span className="ml-1"
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
                            Welcome to Phoenix Community Finance
                        </div>
                        <p className="msg-content">
                            From this console, you can view, manage, and launch Phoenix Nests. You can also
                            see how many rewards have been allocated and claim them here. You can use the rewards to create more
                            Phoenix Nests and grow your holding to a maximum of 100 Nests per wallet.</p>
                        <div id="welcome-buttons" className="mt-2">
                            <button className="action-btn btn welcome-action-btn"
                                onClick={() => { window.open("https://traderjoexyz.com/#/trade?outputCurrency=0xfcc6CE74f4cd7eDEF0C5429bB99d38A3608043a5") }}>
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
    return {
        account: state.account,
        my_nodes: state.my_nodes,
        cur_all_reward: state.cur_all_reward,
        all_nodes: state.all_nodes
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(RingMsg);