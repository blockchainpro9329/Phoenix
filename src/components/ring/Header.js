import React from "react";
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class RingHeader extends React.Component {

    constructor(props) {
        super(props);
        this.handleConnect = this.handleConnect.bind(this);
        // toast.info("wow so easy!", {
        //     position: "top-center",
        //     autoClose: 3000,
        //     hideProgressBar: true,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        // });
    }

    async handleConnect() {
        await window.ethereum.enable();
        this.props.web3.eth.getAccounts((err, accounts) => {
            // this.setState({account: accounts[0]});
            this.props.dispatch({
                type: "UPDATE_WALLET_ACCOUNT",
                payload: { account: accounts[0] }
            });
        })
    }

    componentDidMount() {
        document.title = "My FIRE-Nodes";
    }

    render() {
        return (
            <>
                {/* <link rel="stylesheet" href="./css2/theme.css"></link>
                <link href="./css2/css2" rel="stylesheet"></link>
                <link href="./css2/2.chunk.css" rel="stylesheet"></link>
                <link href="./css2/main.css" rel="stylesheet"></link> */}
                <ToastContainer />

                {/* <> */}
                <div className='header'>
                    <div className="content mx-auto">
                        <div className='flex align-center'>
                            <img alt='' src='./img/logo.png' className="logo-img" />
                            <span className='logo-title'>
                                PHOENIX
                            </span>
                        </div>
                        <div className='menu-container flex1 flex justify-center'>
                            <span className='menu flex flex-col align-center'>
                                <a>MY NODES</a>
                                {/* <br/> */}
                                <a>123</a>
                            </span>
                            <span className='menu flex flex-col align-center'>
                                <a>ALL NODES</a>
                                {/* <br/> */}
                                <a>123</a>
                            </span>
                            <span className='menu flex flex-col align-center'>
                                <a>MINING</a>
                                {/* <br/> */}
                                <a>123</a>
                            </span>

                        </div>
                        <div className="launch_wallet f-row f1-end">
                            {
                                !this.props.account ?
                                    <div className="action-btn outline flex align-center justify-center" onClick={this.handleConnect}>
                                        <span><i className="fas fa-wallet" style={{ marginRight: "1rem" }}></i>
                                            Connect Wallet
                                        </span>
                                    </div>
                                    :
                                    <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                                        <div className="c-green connected-account-text">{this.props.account.slice(0, 8) + "..." + this.props.account.slice(34)}</div>
                                        <div className="connected-text">WALLET CONNECTED</div>
                                    </div>
                            }
                        </div>

                        <a id='launch_sm_btn' href='/app'>
                            <img src='./img/top_bar.svg' />
                        </a>
                    </div>
                </div>
                <div className='header_border'></div>
            </>
        );
    }
}

const mapStateToProps = state => {
    console.log("ring header: ", state);
    return { account: state.account, web3: state.web3 };
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RingHeader);

