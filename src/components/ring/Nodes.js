import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { connect } from 'react-redux';
import moment from 'moment';

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
            passed: 0
        }
        this.props.dispatch({
            type: "GET_NODE_LIST"
        });
        this.timer = setInterval(() => {
            this.updateRewards();
        }, 1000);
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
                temp['remains'] = duration.months() + "M-" + duration.days() + "D " + duration.hours() + ":" + duration.minutes() + ":" + duration.seconds();
    
                temp['reward'] = Number(temp['reward']) + 0.225 / (3600 * 24);
                sum += temp['reward'];
                temp['reward'] = temp['reward'].toFixed(9);                
            } else {
                temp['remains'] = 'Expired';
            }
            list.push(temp);
        }
        var curTime = Number(this.props.currentTime);
        if (curTime !== 0) {
            curTime = curTime + 1;
        }

        this.setState({ my_nodes: list });
        this.props.dispatch({type:"RETURN_DATA", payload:{
            cur_all_reward: sum,
            currentTime : curTime
        }});
    }

    claimNode(id) {
        this.props.dispatch({
            type: "CLAIM_NODE",
            payload: {
                node_id: id
            }
        });
    }

    payNodeFee(id) {
        this.props.dispatch({
            type: "PAY_NODE_FEE",
            payload: {
                node_id: id
            }
        })
    }


    render() {
        const List = this.state.my_nodes.map((item, index) => {
            return (
                <div key={index} className='fs-18 flex align-center' style={{ height: "50px" }}>
                    <div className='padder-10' style={{ flex: "3" }}>
                       {
                           item.masterNFT? <img alt='' src={this.props.master_nft_url} style={{ width: "20px" }} />: <></>
                       }
                       {
                           item.granNFT?  <img alt='' src={this.props.grand_nft_url} style={{ width: "20px" }} /> : <></>
                       }                        
                        Node:
                        {index + 1}
                    </div>
                    <div className='text-center' style={{ flex: "1" }}>{moment(item.createTime * 1000).format("YYYY.MM.DD HH:mm:ss")}</div>
                    <div className='text-center' style={{ flex: "1" }}>{item.remains}</div>
                    <div className='text-center' style={{ flex: "1" }}>{item.reward}</div>
                    <div className='text-center' style={{ flex: "1" }}>
                        <div className="claim-button c-green" onClick={this.payNodeFee.bind(this, index)}>
                            Pay Fee
                        </div>
                    </div>
                    <div className='text-center' style={{ flex: "1" }}>
                        <div className="claim-button text-green" onClick={this.claimNode.bind(this, index)}> CLAIM </div>
                    </div>
                </div>
            )
        });

        if (this.state.my_nodes.length === 0) {
            return <></>;
        } else {
            return (
                <>
                    <div className="mx-auto m-t-20 mynode-header flex align-center justify-between">
                        <div className='flex'>
                            <div className='c-yellow fs-30 flex align-center'>
                                <img alt="" src="/img/myNode.svg" style={{ marginRight: "10px", width: "30px" }} />
                                {this.props.my_nodes.length}
                            </div>
                            <div className='c-yellow fs-30 flex align-center'>
                                <img alt="" src="/img/meat.png" style={{ marginRight: "10px", width: "30px" }} />
                                :10
                            </div>
                            <div className='c-yellow fs-30 flex align-center'>
                                <img alt="" src="/img/covid.png" style={{ marginRight: "10px", width: "30px" }} />
                                :1
                            </div>

                        </div>
                        <div>
                            <div className='claim-button c-green claim-all' style={{ width: "150px", height: "50px" }} onClick={this.claimNode.bind(this, -1)}> CLAIM ALL</div>
                        </div>
                    </div>
                    <div className="mx-auto custom-container mx-auto text-justify info-container m-b-30 mynode-list">


                        <div className='h-40 flex align-center fs-20' style={{ width: "100%" }}>
                            <div className='c-4cce13 padder-10' style={{ flex: "3" }}>NAME</div>
                            <div className='c-4cce13 text-center' style={{ flex: "1" }}>CREATED</div>
                            <div className='c-4cce13 text-center' style={{ flex: "1" }}>REMAINS</div>
                            <div className='c-4cce13 text-center' style={{ flex: "1" }}>REWARDS</div>
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
    // console.log("current state", state);
    return { my_nodes: state.my_nodes, currentTime: state.currentTime};
}

const mapDispatchToProps = dispatch => {
    return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nodes);
