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
                <link rel="stylesheet" href="./css2/theme.css"></link>
                <link href="./css2/css2" rel="stylesheet"></link>
                <link href="./css2/2.chunk.css" rel="stylesheet"></link>
                <link href="./css2/main.css" rel="stylesheet"></link>
                <ToastContainer />
                <nav className="container mx-auto">
                    <div className="f-row f2-center gap-2" style={{ width: "167px" }}><img alt="" className="img-spin" width="48" height="48"
                        src="./img/logo-color.png" /><span id="brand-name">FIRE</span></div>
                    <div className="nav" id="topbar-links"><a role="button" className="nav-link-selected nav-link" tabIndex="0">My
                        Nodes</a><a role="button" className="nav-link" tabIndex="0">
                            <div style={{ cursor: "no-drop", color: "var(--secondary-text)" }}>All Nodes<br /><span
                                style={{ color: "var(--secondary-text)", fontSize: "12px", display: "block", width: "91px" }}>(coming
                                soon...)</span></div>
                        </a><a role="button" className="nav-link" tabIndex="0">
                            <div style={{ cursor: "no-drop", color: "var(--secondary-text)" }}>Mining<br /><span
                                style={{ color: "var(--secondary-text)", fontSize: "12px", display: "block", width: "91px" }}>(coming
                                soon...)</span></div>
                        </a></div>
                    <div className="f-row f1-end">
                        {
                            !this.props.account ?
                                <div className="connect-button" onClick={this.handleConnect}>
                                    <span><i className="fas fa-wallet" style={{ marginRight: "1rem" }}></i>
                                        Connect Wallet
                                    </span>
                                </div>
                                :
                                <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                                    <div className="text-green connected-account-text">{this.props.account.slice(0, 8) +"..."+ this.props.account.slice(34)}</div>
                                    <div className="connected-text">WALLET CONNECTED</div>
                                </div>

                        }
                    </div>
                </nav>

            </>
        );
    }
}

const mapStateToProps = state => {
    console.log("ring header: ", state);
    return {account: state.account, web3: state.web3};
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RingHeader);

