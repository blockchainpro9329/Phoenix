import React from "react";


class RingMsg extends React.Component {


    render() {
        return (
            <>
                <div className="custom-container mx-auto informations-container">
                    <div className="info-container-1">
                        <img alt="" className="info-data-icon" src="./img/myNode.svg" />
                        <div className="info-datas">
                            <div className="info-data-value">0<span style={{ color: "rgb(160, 174, 192)", marginLeft: "0.5rem" }}>/
                                100</span></div>
                            <div className="c-yellow" style={{ marginTop: "4px" }}>My Nodes</div>
                        </div>
                        <div className="flex1"></div>
                        <div className="btn action-btn outline m-r-20 create_node_btn" >CREATE NODE</div>
                    </div>
                    <div className="info-container-1">
                        <img alt="" className="info-data-icon" src="./img/allNode.svg" />
                        <div className="info-datas">
                            <div className="info-data-value">30.000</div>
                            <div className="c-yellow" style={{ marginTop: "4px" }}>All Nodes</div>
                        </div>
                    </div>
                    <div className="info-container-1"><img alt="" className="info-data-icon"
                        src="./img/rewards.svg" />
                        <div className="info-datas">
                            <div className="info-data-value" title="0">0.0000<span className="ml-1"
                                style={{ color: "rgb(160, 174, 192)", marginLeft: "0.5rem" }}>Phoenix</span></div>
                            <div className="c-4cce13" style={{ marginTop: "4px" }}>My Rewards</div>
                        </div>
                        <div className="flex1"></div>
                        {/* <div className="btn action-btn outline m-r-20" style={{ width: "120px", height: "40px" }}>CLAIM ALL</div> */}
                    </div>
                </div>

                <img src="./img/cake.svg" className="pos-abs" style={{ top: "100px", right: "0px", zIndex: -1 }} />

                <div id="welcome-message" className="flex custom-container mx-auto m-t-100">
                    <div className="c-w">
                        <div className="msg-title">
                            Welcome to FIRE
                        </div>
                        <p className="msg-content">
                            From this console, you can view, manage, and launch FIRE-nodes. You can also see how many rewards
                            have been allocated, and claim them here. Then if you want, you can use them to create more
                            FIRE-nodes, up to a maximum of 100 per wallet.</p>
                        <div id="welcome-buttons" className="mt-2">
                            <button className="action-btn btn welcome-action-btn">BUY $FIRE</button>
                            <button className="action-btn btn outline welcome-action-btn">DISCORD</button>
                        </div>
                    </div>
                    {/* <div id="cards">
                        <div id="card-1" className="shadowed mb-2" style={{visibility:"hidden"}}>
                            <img alt="" style={{ width: "16px", height: "16px" }} src="./img/icon1.png" />
                            <span>Ensure you are at <b className="ml-1 text-blue">https://app.ring.financial</b></span></div>
                        <div id="card-3" className="shadowed mb-2" style={{visibility:"hidden"}}>
                            <img alt="" style={{ width: "16px", height: "16px" }} src="./img/icon2.png" />
                            <span>Current
                                rewards: <b className="ml-1 mr-1 text-green">0.556</b> per node, per day</span></div>
                    </div> */}
                </div>
            </>
        );
    }
};

export default RingMsg;