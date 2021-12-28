import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { connect } from 'react-redux';
import moment from 'moment';
import PayDlg from '../common/PayDlg';

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
        }
        this.props.dispatch({
            type: "GET_NODE_LIST"
        });
        this.timer = setInterval(() => {
            this.updateRewards();
        }, 1000);
        this.handleModalClose = this.handleModalClose.bind(this);
        this.PayAllNode = this.PayAllNode.bind(this);

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


    PayAllNode() {
        let cnt = 0;
        for (var index in this.state.my_nodes) {
            if (this.state.my_nodes[index].remain !== 'Expired') {
                cnt = cnt + 1;
            }
        }
        this.setState({ open: true, pay_type: 0, pay_cnt: cnt});

    }

    claimNode(id) {
        this.props.dispatch({
            type: "CLAIM_NODE",
            payload: {
                node_id: id
            }
        });
    }

    handleModalClose(value) {
        this.setState({ open: false });
        if (value) {
            if (this.state.pay_type == 1) {

                this.props.dispatch({
                    type: "PAY_NODE_FEE",
                    payload: {
                        node_id: this.state.fee_index,
                        duration: value.id
                    }
                })
            } else if (this.state.pay_type = 0) {
                this.props.dispatch({
                    type: "PAY_FEE_ALL",
                    payload: { count: this.state.pay_cnt, duration: value.id }
                });
            }
        }
    };

    payNodeFee(id) {

        this.setState({ open: true, fee_index: id, pay_type: 1 });

    }


    render() {
        const List = this.state.my_nodes.map((item, index) => {
            return (
                <div key={index} className='fs-18 flex align-center' style={{ height: "50px" }}>
                    <div className='padder-10' style={{ flex: "3" }}>
                        {
                            item.masterNFT ? <img alt='' src={this.props.master_nft_url} style={{ width: "20px" }} /> : <></>
                        }
                        {
                            item.granNFT ? <img alt='' src={this.props.grand_nft_url} style={{ width: "20px" }} /> : <></>
                        }
                        NEST:
                        {index + 1}
                    </div>
                    <div className='text-center' style={{ flex: "2" }}>{moment(item.createTime * 1000).format("MMM DD YYYY HH:mm:ss")}</div>
                    <div className='text-center' style={{ flex: "2" }}>{item.remains}</div>
                    <div className='text-center' style={{ flex: "2" }}>{item.reward}</div>
                    <div className='text-center' style={{ flex: "1" }}>
                        {item.remains === 'Expired' ? <button className='claim-button btn c-gree' disabled></button> : <button className="claim-button c-green" onClick={this.payNodeFee.bind(this, index)}>
                            Pay Fee
                        </button>}
                    </div>
                    <div className='text-center' style={{ flex: "1" }}>
                        <div className="claim-button text-green" onClick={this.claimNode.bind(this, index)}> CLAIM </div>
                    </div>
                </div>
            )
        });

        if (this.state.my_nodes.length !== 0) {
            return <></>;
        } else {
            return (
                <>
                    <PayDlg
                        selectedValue={this.state.selectedValue}
                        open={this.state.open}
                        onClose={this.handleModalClose}
                    />
                    <div className="mx-auto m-t-20 mynode-header flex align-center justify-between " style={{ flexWrap: "wrap" }}>
                        <div className='flex'>
                            <div className='c-yellow node-table-item flex align-center'>
                                <img alt="" src="/img/myNode.svg" style={{ marginRight: "10px", width: "30px" }} />
                                {this.props.my_nodes.length}
                            </div>
                            <div className='c-yellow node-table-item flex align-center m-l-20' style={{ width: "100px" }}>
                                <img alt="" src={this.props.master_nft_url} style={{ marginRight: "10px", width: "30px" }} />
                                : {this.props.my_nfts.length <= 10 ? this.props.my_nfts.length : 10}
                            </div>
                            <div className='c-yellow node-table-item flex align-center m-l-20' style={{ width: "100px" }}>
                                <img alt="" src={this.props.grand_nft_url} style={{ marginRight: "10px", width: "30px" }} />
                                : {this.props.my_nfts.length > 10 ? this.props.my_nfts.length - 10 : 0}
                            </div>
                        </div>
                        <div className='flex align-center'>
                            <div className='claim-button btn-outline c-green claim-all' onClick={this.PayAllNode.bind(this, -1)}> Pay ALL FEE</div>
                            <div className='claim-button c-green claim-all' onClick={this.claimNode.bind(this, -1)}> CLAIM ALL</div>
                        </div>
                    </div>
                    <div className="mx-auto custom-container mx-auto text-justify info-container m-b-30 mynode-list">


                        <div className='h-40 flex align-center node-title-header' style={{ width: "100%" }}>
                            <div className='c-4cce13 padder-10' style={{ flex: "3" }}>NAME</div>
                            <div className='c-4cce13 text-center' style={{ flex: "2" }}>CREATED</div>
                            <div className='c-4cce13 text-center' style={{ flex: "2" }}>REMAINS</div>
                            <div className='c-4cce13 text-center' style={{ flex: "2" }}>REWARDS</div>
                            <div className='c-4cce13 text-center' style={{ flex: "1" }}></div>
                            <div className='c-4cce13 text-center' style={{ flex: "1" }}></div>
                        </div>
                        <div className='mynode-list-content'>
                            {/* <CustomScrollbars autoHide autoHideTimeout={500} autoHideDuration={200}> */}
                            <CustomScrollbars>
                                {List}
                            </CustomScrollbars>
                        </div>
                    </div>
                </>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        my_nodes: state.my_nodes,
        currentTime: state.currentTime,
        my_nfts: state.my_nfts,
        master_nft_url: state.master_nft_url,
        grand_nft_url: state.grand_nft_url
    };
}

const mapDispatchToProps = dispatch => {
    return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nodes);
