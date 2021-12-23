import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { connect } from 'react-redux';

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
            node_list: []
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
        return { node_list: nextProps.node_list };
    }

    updateRewards() {
        if (this.state.node_list.length == 0) {
            return;
        }
        var list = this.state.node_list;
        for (var item in list) {
            list[item].rewards += 0.001;
        }
        this.setState({ node_list: list });
    }

    claimNode(id) {
        this.props.dispatch({
            type: "CLAIM_NODE",
            payload: {
                node_id: id
            }
        });
    }



    render() {
        const List = this.state.node_list.map((item, index) => {
            return (
                <div key={index} className='fs-18 flex align-center' style={{ height: "50px" }}>
                    <div className='padder-10' style={{ flex: "3" }}>
                        <img src='/img/meat1.png' style={{ width: "20px" }} />
                        <img src='/img/covid1.png' style={{ width: "20px" }} />
                        Node:
                        {item.id}
                    </div>
                    <div className='text-center' style={{ flex: "1" }}>{item.content}</div>
                    <div className='text-center' style={{ flex: "1" }}>{item.content}</div>
                    <div className='text-center' style={{ flex: "1" }}>{item.rewards.toFixed(3)}</div>
                    <div className='text-center' style={{ flex: "1" }}>
                        <div className="claim-button c-green">
                            {/* <a className='text-green cursor-pointer'> */}
                            Pay Fee
                            {/* </a> */}
                        </div>
                    </div>
                    <div className='text-center' style={{ flex: "1" }}>
                        <div className="claim-button text-green" onClick={this.claimNode.bind(this, item.id)}> CLAIM </div>
                    </div>
                </div>
            )
        });

        return (
            <>
                <div className="mx-auto m-t-20 mynode-header flex align-center justify-between">
                    <div className='flex'>
                        <div className='c-yellow fs-30 flex align-center'>
                            <img alt="" src="/img/myNode.svg" style={{ marginRight: "10px", width: "30px" }} />
                            11
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
                        <div className='claim-button c-green' style={{ width: "150px", height: "50px" }} onClick={this.claimNode.bind(this, -1)}> CLAIM ALL</div>
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

const mapStateToProps = state => {
    return { node_list: state.node_list };
}

const mapDispatchToProps = dispatch => {
    return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nodes);
