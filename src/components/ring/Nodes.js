import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

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
            list: []
        }
        this.onSearch = this.onSearch.bind(this);
    }

    componentDidMount() {
        var list = [];
        for (var i = 0; i < 100; i++) {
            list.push({ id: i, content: i, rewards: i });
        }
        this.setState({ list: list });

        setInterval(() => {
            this.updateRewards();            
        }, 1000);
    }

    onSearch(event) {

        var list = [];
        for (var i = 10; i < 100; i++) {
            list.push({ id: i, content: i, rewards: i });
        }
        this.setState({ list: list });
        console.log(event.target.value);
    }


    updateRewards() {
        var list = this.state.list;
        for (var item in list) {
            list[item].rewards += 0.001;
        }
        this.setState({ list: list });
    }


    render() {
        const List = this.state.list.map((item, index) => {
            return (
                <div key={index} style={{ display: "flex" }}>
                    <div style={{ flex: "4" }}>{item.id}</div>
                    <div style={{ flex: "1" }}>{item.content}</div>
                    <div style={{ flex: "1" }}>{item.content}</div>
                    <div style={{ flex: "1" }}>{item.rewards.toFixed(3)}</div>
                    <div style={{ flex: "1" }}>
                        <div className="claim-button text-green"> CLAIM </div>
                    </div>
                </div>
            )
        });


        return (
            <>
                <div className="mx-auto" style={{ height: "90px", width: "1048px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex" }}>
                        <img alt="" src="./img/all-node-icon.svg" style={{ marginRight: "10px", width: "40px" }} />
                        My Nodes
                    </div>
                    <div>
                        <span style={{ color: "rgb(160, 174, 192)", marginRight: "0.5rem" }}>
                            Current rewards cycle estimation is
                        </span>

                        {4} <span>
                            hours
                        </span>
                        <input type="text" style={{ border: "1px solid #1a202c", borderRadius: "2px", marginLeft: "0.5rem" }} placeholder="Search..." onChange={this.onSearch}></input>

                    </div>
                </div>
                <div className="mx-auto" style={{ flexDirection: "column", marginLeft: "30px", marginRight: "30px", height: "560px", width: "1048px" }}>


                    <div style={{ display: "flex", width: "100%" }}>
                        <div style={{ flex: "4" }}>NAME</div>
                        <div style={{ flex: "1" }}>CREATED</div>
                        <div style={{ flex: "1" }}>NEXT REWARD IN</div>
                        <div style={{ flex: "1" }}>REWARDS</div>
                        <div style={{ flex: "1" }}></div>
                    </div>
                    <div style={{ height: "500px", width: "100%" }}>
                        <CustomScrollbars autoHide autoHideTimeout={500} autoHideDuration={200}>
                            {List}
                        </CustomScrollbars>
                    </div>
                </div>
            </>
        );
    }
}

export default Nodes;
