import React from "react";


class RingMsg extends React.Component {

   
    render() {
        return (
            <>
                <div className="custom-container mx-auto informations-container">
                    <div className="info-container">
                        <img alt="" className="info-data-icon" src="./img/my-node-list-icon.svg" />
                        <div className="info-datas">
                            <div className="info-data-value">0<span style={{ color: "rgb(160, 174, 192)", marginLeft: "0.5rem" }}>/
                                100 Max</span></div>
                            <div className="text-purple" style={{ marginTop: "4px" }}>My Nodes</div>
                        </div>
                    </div>
                    <div className="info-container">
                        <img alt="" className="info-data-icon" src="./img/all-node-icon.svg" />
                        <div className="info-datas">
                            <div className="info-data-value">30.000</div>
                            <div className="text-orange" style={{ marginTop: "4px" }}>All Nodes</div>
                        </div>
                    </div>
                    <div className="info-container"><img alt="" className="info-data-icon"
                        src="./img/reward-icon.svg" />
                        <div className="info-datas">
                            <div className="info-data-value" title="0">0.0000<span className="ml-1"
                                style={{ color: "rgb(160, 174, 192)", marginLeft: "0.5rem" }}>FIRE</span></div>
                            <div className="text-green" style={{ marginTop: "4px" }}>My Rewards</div>
                        </div>
                        <div style={{ marginLeft: "auto" }}>
                            <div>
                                <div className="claim-button text-green"> CLAIM ALL </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="welcome-message" className="custom-container mx-auto text-gray-300">
                    <div>
                        <h2>Welcome to FIRE</h2>
                        <p>From this console, you can view, manage, and launch FIRE-nodes. You can also see how many rewards
                            have been allocated, and claim them here. Then if you want, you can use them to create more
                            FIRE-nodes, up to a maximum of 100 per wallet.</p>
                        <div id="welcome-buttons" className="mt-2"><button className="border-yellow buy-button">BUY
                            $FIRE</button><button className="border-purple ml-4 welcome-discord-button">DISCORD</button>
                        </div>
                    </div>
                    <div id="cards" className="f-col f1-center gap-2">
                        <div id="card-1" className="shadowed mb-2">
                            <img alt="" style={{ width: "16px", height: "16px" }} src="./img/icon1.png" />
                            <span>Ensure you are at <b className="ml-1 text-blue">https://app.ring.financial</b></span></div>
                        <div id="card-3" className="shadowed mb-2">
                            <img alt="" style={{ width: "16px", height: "16px" }} src="./img/icon2.png" />
                            <span>Current
                                rewards: <b className="ml-1 mr-1 text-green">0.556</b> per node, per day</span></div>
                    </div>
                </div>
         </>
        );
    }
};

export default RingMsg;