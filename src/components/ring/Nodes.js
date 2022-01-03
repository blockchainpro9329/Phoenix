import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { connect } from 'react-redux';
import moment from 'moment';
import PayDlg from '../common/PayDlg';
import { toast } from 'react-toastify';
import { touchRippleClasses } from '@mui/material';

const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
        borderRadius: 6,
        backgroundColor: 'rgba(35, 49, 86, 0.8)'
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

const CustomScrollbars = props => (
    <Scrollbars
        renderThumbHorizontal={renderThumb}
        renderThumbVertical={renderThumb}
        {...props}
    />
);


class Nodes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            my_nodes: [],
            open: false,
            fee_index: -1,
            selected_tab: 0
        }
        this.props.dispatch({
            type: "GET_NODE_LIST"
        });
        this.timer = setInterval(() => {
            this.updateRewards();
        }, 1000);
        this.handleModalClose = this.handleModalClose.bind(this);
        this.PayAllNode = this.PayAllNode.bind(this);
        this.createNode = this.createNode.bind(this);



    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    static getDerivedStateFromProps(nextProps, prevProps) {
        return { my_nodes: nextProps.my_nodes };
    }

    updateRewards() {
        if (this.state.my_nodes == null) {
            return;
        }
        var list = [];
        var sum = 0;
        for (var item in this.state.my_nodes) {
            const temp = this.state.my_nodes[item];
            var remain = moment(temp.lastTime * 1000).diff(this.props.currentTime * 1000);
            if (remain > 0) {
                var duration = moment.duration(remain);
                temp['remains'] = duration.months() + "m - " +
                    duration.days() + "d " +
                    duration.hours() + ":" +
                    duration.minutes() + ":" +
                    duration.seconds();

                var bonus = 0.225;
                if (temp['masterNFT']) {
                    bonus += 0.025;
                }
                if (temp['grandNFT']) {
                    bonus += 0.05;
                }
                temp['reward'] = Number(temp['reward']) + bonus / (3600 * 24);
                sum += temp['reward'];
                temp['reward'] = temp['reward'].toFixed(9);

                if (remain > 3600 * 24 * 30) {
                    temp['payable'] = false;
                } else {
                    temp['payable'] = true;
                }
            } else {
                temp['remains'] = 'Expired';
                temp['reward'] = 0;
            }
            list.push(temp);
        }
        var curTime = Number(this.props.currentTime);
        if (curTime !== 0) {
            curTime = curTime + 1;
        }

        this.setState({ my_nodes: list });
        this.props.dispatch({
            type: "RETURN_DATA", payload: {
                cur_all_reward: sum,
                currentTime: curTime
            }
        });
    }


    selectTab = function (index) {
        this.setState({ selected_tab: index });
    }


    PayAllNode() {
        if (!this.props.can_perform) {
            toast.info("Please wait. Another transaction is running.", {
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
        this.props.dispatch({ type: "UPDATE_CAN_PERFORM_STATUS", payload: { can_perform: false } });
        let cnt = 0;
        for (var index in this.state.my_nodes) {
            if (this.state.my_nodes[index].payable == true) {
                cnt = cnt + 1;
            }
        }
        this.setState({ open: true, pay_type: 0, pay_cnt: cnt });
    }

    claimNode(id) {
        if (!this.props.can_perform) {
            toast.info("Please wait. Another transaction is running.", {
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
        this.props.dispatch({ type: "UPDATE_CAN_PERFORM_STATUS", payload: { can_perform: false } });

        var payload = { node_id: id, cnt: 1 };
        if (id == -1) {
            let cnt = 0;
            for (var index in this.state.my_nodes) {
                if (this.state.my_nodes[index].remain !== 'Expired') {
                    cnt = cnt + 1;
                }
            }
            payload.cnt = cnt;
        }
        this.props.dispatch({
            type: "CLAIM_NODE",
            payload: payload
        });
    }

    handleModalClose(value) {
        this.setState({ open: false });
        if (value) {
            this.props.dispatch({ type: "UPDATE_CAN_PERFORM_STATUS", payload: { can_perform: false } });
            if (this.state.pay_type == 1) {

                this.props.dispatch({
                    type: "PAY_NODE_FEE",
                    payload: {
                        node_id: this.state.fee_index,
                        duration: value.id
                    }
                })
            } else if (this.state.pay_type == 0) {
                this.props.dispatch({
                    type: "PAY_FEE_ALL",
                    payload: { count: this.state.pay_cnt, duration: value.id }
                });
            }
        }
    };

    payNodeFee(id) {
        // if (!this.props.my_nodes[id].payable) {
        //     toast.info("You have already purchased.", {
        //         position: "top-center",
        //         autoClose: 3000,
        //         hideProgressBar: true,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: true
        //     });
        //     return;
        // }
        if (!this.props.can_perform) {
            toast.info("Please wait. Another transaction is running.", {
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
        this.props.dispatch({ type: "UPDATE_CAN_PERFORM_STATUS", payload: { can_perform: false } });
        this.setState({ open: true, fee_index: id, pay_type: 1 });
    }

    createNode() {
        if (!this.props.can_perform) {
            toast.info("Please wait. Another transaction is running.", {
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
        this.props.dispatch({ type: "UPDATE_CAN_PERFORM_STATUS", payload: { can_perform: false } });
        this.props.dispatch({
            type: "CREATE_NODE"
        });
    }

    render() {
        const List = this.state.my_nodes.map((item, index) => {
        // const List = ["123", "222", "543", "23", "2342", '234', '2342', '2333', '1231', '1231'].map((item, index) => {
            return (
                <div key={index} className={index % 2 == 0 ? 'item-font nest-list-even' : 'item-font nest-list-odd'}>

                    <div className='text-center' style={{ flex: "1" }}>NEST {index + 1}</div>
                    <div className='text-center' style={{ flex: "3" }}>{moment(item.createTime * 1000).format("MMM DD YYYY")}</div>
                    <div className='text-center' style={{ flex: "2" }}>{item.reward}</div>
                    <div className='text-center' style={{ flex: "2" }}>{item.remains}</div>
                    <div className="pay-button list" style={{ width: "150px" }} onClick={this.payNodeFee.bind(this, index)}>Pay fee</div>
                    <div className="claim-button list" style={{ width: "150px" }} onClick={this.claimNode.bind(this, index)}> claim </div>
                </div>
            )
        });


        return (
            <>
                <PayDlg
                    selectedValue={this.state.selectedValue}
                    open={this.state.open}
                    onClose={this.handleModalClose}
                />

                <section id='section-nests'>
                    <div className='content mx-auto'>
                        <div className='nest-header'>
                            <span className='fs-40 c-w'>
                                Create a Phoenix Nest with <span className='noto-bold'>10</span> <span className='c-yellow'>$FIRE</span> Tokens
                            </span>
                            <button className='btn action-btn' onClick={this.createNode}>Create your nest</button>
                        </div>
                        <div className='tab-header flex'>
                            <div className={this.state.selected_tab === 0 ?
                                'fs-40 cursor-pointer tab-item noto-bold active' : "fs-40 noto-bold cursor-pointer tab-item"}
                                onClick={() => { this.selectTab(0) }}>My Nests</div>
                            <div className={this.state.selected_tab === 1 ?
                                'fs-40 cursor-pointer tab-item noto-bold active' : "fs-40 noto-bold cursor-pointer tab-item"}
                                onClick={() => { this.selectTab(1) }}>NFT Boosts</div>
                        </div>
                        <div className='tab-content'>
                            {this.state.selected_tab === 0 ?
                                <>
                                    <div className='h-60 flex align-center node-title-header' style={{ width: "100%" }}>
                                        <div className='padder-10 noto-bold' style={{ flex: "1" }}>Name</div>
                                        <div className='text-center noto-bold' style={{ flex: "3" }}>Created</div>
                                        <div className='text-center noto-bold' style={{ flex: "2" }}>My Rewards</div>
                                        <div className='text-center noto-bold' style={{ flex: "2" }}>Fees</div>
                                        <div className="pay-button" style={{ width: "150px" }} onClick={this.PayAllNode.bind(this, -1)}>Pay all fees</div>
                                        <div className="claim-button" style={{ width: "150px" }} onClick={this.claimNode.bind(this, -1)}> claim all</div>
                                    </div>
                                    <div className='mynode-list-content'>
                                        <CustomScrollbars>
                                            {List}
                                        </CustomScrollbars>
                                    </div>
                                </> :
                                <>
                                    <div className='flex justify-center align-center' style={{ width: "100%", height: "100%" }}>
                                        <div className='c-yellow flex align-center m-l-20 fs-40' style={{ width: "200px" }}>
                                            <img alt="" src={this.props.master_nft_url} style={{ marginRight: "10px", width: "60px" }} />
                                            : {this.props.my_nfts.length <= 10 ? this.props.my_nfts.length : 10}
                                        </div>
                                        <div className='c-yellow flex align-center m-l-20 fs-40' style={{ width: "200px" }}>
                                            <img alt="" src={this.props.grand_nft_url} style={{ marginRight: "10px", width: "60px" }} />
                                            : {this.props.my_nfts.length > 10 ? this.props.my_nfts.length - 10 : 0}
                                        </div>
                                    </div>

                                </>}
                        </div>
                    </div>
                </section>

                {/* <div className="mx-auto m-t-20 mynode-header flex align-center justify-between " style={{ flexWrap: "wrap" }}>
                    <div className='flex'>
                        <div className='c-yellow node-table-item flex align-center' style={{ width: "80px" }}>
                            <img alt="" src="/img/myNode.svg" style={{ marginRight: "10px", width: "30px" }} />
                            {this.props.my_nodes.length}
                        </div>
                        <div className='c-yellow node-table-item flex align-center m-l-20' style={{ width: "80px" }}>
                            <img alt="" src={this.props.master_nft_url} style={{ marginRight: "10px", width: "30px" }} />
                            : {this.props.my_nfts.length <= 10 ? this.props.my_nfts.length : 10}
                        </div>
                        <div className='c-yellow node-table-item flex align-center m-l-20' style={{ width: "80px" }}>
                            <img alt="" src={this.props.grand_nft_url} style={{ marginRight: "10px", width: "30px" }} />
                            : {this.props.my_nfts.length > 10 ? this.props.my_nfts.length - 10 : 0}
                        </div>
                    </div>
                    <div className='flex align-center button-set'>
                        <div className='claim-button btn-outline c-green claim-all' onClick={this.PayAllNode.bind(this, -1)}> Pay ALL FEE</div>
                        <div className='claim-button c-green claim-all' onClick={this.claimNode.bind(this, -1)}> CLAIM ALL</div>
                    </div>
                </div>
                <div className="mx-auto custom-container mx-auto text-justify info-container m-b-30 mynode-list">
                    <div className='h-40 flex align-center node-title-header' style={{ width: "100%" }}>
                        <div className='c-4cce13 padder-10' style={{ flex: "1" }}>NFT</div>
                        <div className='c-4cce13 padder-10' style={{ flex: "1" }}>NAME</div>
                        <div className='c-4cce13 text-center' style={{ flex: "3" }}>REWARD START TIME</div>
                        <div className='c-4cce13 text-center' style={{ flex: "2" }}>REMAINS</div>
                        <div className='c-4cce13 text-center' style={{ flex: "2" }}>REWARDS</div>
                        <div className='c-4cce13 text-center' style={{ flex: "1" }}></div>
                        <div className='c-4cce13 text-center' style={{ flex: "1" }}></div>
                    </div>
                    <div className='mynode-list-content'>
                        <CustomScrollbars>
                            {List}
                        </CustomScrollbars>
                    </div>
                </div> */}
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        my_nodes: state.my_nodes,
        currentTime: state.currentTime,
        my_nfts: state.my_nfts,
        master_nft_url: state.master_nft_url,
        grand_nft_url: state.grand_nft_url,
        can_perform: state.can_perform,
    };
}

const mapDispatchToProps = dispatch => {
    return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nodes);
