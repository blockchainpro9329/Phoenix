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
        return {node_list: nextProps.node_list};
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

    render() {
        const List = this.state.node_list.map((item, index) => {
            return (
                <div key={index} className='fs-18 flex align-center' style={{ height: "50px" }}>
                    <div className='padder-10' style={{ flex: "3" }}>
                        <img src='./img/meat1.png' style={{ width: "20px" }} />
                        <img src='./img/covid1.png' style={{ width: "20px" }} />
                        Node:
                        {item.id}
                    </div>
                    <div className='text-center' style={{ flex: "1" }}>{item.content}</div>
                    <div className='text-center' style={{ flex: "1" }}>{item.content}</div>
                    <div className='text-center' style={{ flex: "1" }}>{item.rewards.toFixed(3)}</div>
                    <div className='text-center' style={{ flex: "1" }}>
                        {/* <div className="claim-button text-green">  */}
                        <a className='text-green cursor-pointer'>
                            Pay Fee
                        </a>
                        {/* </div> */}
                    </div>
                    <div className='text-center' style={{ flex: "1" }}>
                        <div className="claim-button text-green"> CLAIM </div>
                    </div>
                </div>
            )
        });

        return (
            <>
                <div className="mx-auto m-t-20 mynode-header">
                    <div className='c-yellow fs-30' style={{ display: "flex" }}>
                        <img alt="" src="./img/myNode.svg" style={{ marginRight: "10px" }} />
                        My Nodes
                    </div>
                    <div>
                        {/* <span className='c-green' style={{ marginRight: "0.5rem" }}>
                            Current rewards cycle estimation is
                        </span>
                        <span className='c-w m-r-10'>
                            {4}
                        </span>
                        <span className='c-green'>
                            hours
                        </span>
                        <input type="text" style={{ border: "1px solid #eee", background: "#031420ee", paddingLeft: "5px", borderRadius: "3px", marginLeft: "0.5rem" }} placeholder="Search..." onChange={this.onSearch}></input> */}

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
                        <CustomScrollbars autoHide autoHideTimeout={500} autoHideDuration={200}>
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
