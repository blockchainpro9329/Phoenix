import React from "react";
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StyledEngineProvider } from '@mui/material/styles';
import Menu from "../common/MenuList";


class RingHeader extends React.Component {

    constructor(props) {
        super(props);
        this.handleConnect = this.handleConnect.bind(this);
        this.state = {
            my_nodes: []
        }
    }

    async handleConnect() {
        if (window.ethereum) {
            await window.ethereum.enable();
            // await window.ethereum.send('eth_requestAccounts');
            this.props.dispatch({
                type: "CONNECT_WALLET"
            });
        } else {
            toast.info("Please install metamask on your device.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    componentDidMount() {

    }
    
    static getDerivedStateFromProps(nextProps, prevProps) {
        return {my_nodes: nextProps.my_nodes };
    }




    render() {
        return (
            <>
                <ToastContainer />
                {/* <> */}
                <div className='header'>
                    <div className="content mx-auto">
                        <div className='flex align-center'>
                            <img alt='' src='/img/logo.png' className="logo-img" />
                            <span className='logo-title noto-bold'>
                                PHOENIX  <span className="noto-thin">Community Capital</span>
                            </span>
                        </div>
                        <div className='menu-container flex1 flex justify-center'>
                            {/* <span className='menu flex flex-col align-center'>
                                <a>MY NESTS</a>
                                <a>{this.props.my_nodes.length}</a>
                            </span>
                            <span className='menu flex flex-col align-center'>
                                <a>ALL NESTS</a>
                                <a>{this.props.all_nodes}</a>
                            </span> */}
                            {/* <span className='menu flex flex-col align-center'>
                                <a>MINING</a>
                                <br/>
                                <a>123</a>
                            </span> */}
                        </div>
                        <div className="launch_wallet f-row f1-end">
                            {
                                !this.props.account ?
                                    <div className="action-btn  flex align-center justify-center" onClick={this.handleConnect}>
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
                        <a id='launch_sm_btn'>
                            <StyledEngineProvider injectFirst>
                                <Menu />
                            </StyledEngineProvider>,
                        </a>
                    </div>
                </div>
                <div className='header_border'></div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        account: state.account,
        my_nodes: state.my_nodes,
        all_nodes: state.all_nodes
    };
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RingHeader);

