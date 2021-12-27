

import React from "react";
import Modal from "react-modal";
import { connect } from 'react-redux';


Modal.setAppElement("#root");
const customStyles = {
    content: {
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: '800px',
        background: "#1a202c",
        border: "1px solid rgba(0,0,0,.2)",
        // zIndex: "100",
        overflow: "unset",
        height: "fit-content",
        padding: "none",
        position: "unset !important"
    },
};

Modal.defaultStyles.overlay.backgroundColor = "rgba(0,0,0,0.4)";
Modal.defaultStyles.overlay.display = "flex";
Modal.defaultStyles.overlay.overflow = "auto";
// Modal.defaultStyles.overlay.paddingBottom = "100px";
Modal.defaultStyles.overlay.justifyContent = "center";
Modal.defaultStyles.overlay.alignItems = "center";


class Create extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            selected_item: -1
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.selectItem = this.selectItem.bind(this);
        this.createNode = this.createNode.bind(this);
    }

    createNode() {
        this.props.dispatch({
            type: "CREATE_NODE"
        });
    }


    openModal() {
        this.setState({ modalIsOpen: true });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    selectItem(index) {
        this.setState({ selected_item: index });
    }

    render() {
        return (
            <div className="custom-container mx-auto text-justify info-container"
                style={{ textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "40px", marginBottom: "150px", marginLeft: "30px", marginRight: "30px", height: "fit-content", padding: "20px" }}>
                <div className="create_title">
                    Create a Nest with 10 FIRE Tokens
                </div>
                <p id="create-ring">Create a Phoenix Nest with <strong>10</strong>
                    <span className="sc-gsTEea cdmEaM">$FIRE</span> tokens to earn <span className="sc-gsTEea cdmEaM">$FIRE</span>
                    token rewards.<br />Current estimated rewards:<strong> 0.225</strong> <span
                        className="sc-gsTEea cdmEaM">$FIRE</span>/day.
                </p>
                <div className="container flex justify-center mt-4"><button className="action-btn btn" onClick={this.createNode}>CREATE A NODE</button>
                </div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className="">
                        <div className="modal-header">
                            <div className="modal-title h4 c-w">
                                <div className="h2 col-12 text-center" style={{ marginTop: "10px" }}>Create your <span
                                    className="sc-gsTEea cdmEaM">Node</span></div>
                            </div><button type="button" className="btn-close btn-close-white" aria-label="Close" onClick={this.closeModal}></button>
                        </div>
                        <div className="modal-body c-w">
                            <div className="row justify-content-center">
                                <div className="col-8 text-center" style={{ lineHeight: "1.75" }}>Start earning lifetime high-yield <span
                                    className="sc-gsTEea cdmEaM">$RING</span> token rewards. Rewards calculations are based on many factors,
                                    including the number of nodes, node revenue, token price, and protocol revenue, and they are variable.</div>
                            </div>
                            <div className="row justify-content-evenly mt-3">
                                <div className={this.state.selected_item === 1 ? "col-3 text-center node-type active_item1" : "col-3 text-center node-type"}
                                    onClick={() => { this.selectItem(1) }}>
                                    <img alt="" src="/img/bronze-node-x2.png" width="150" />
                                    <div>Bronze</div>
                                    <div>1 $RING</div>
                                    <div>2000%</div>
                                    <div>Earn 7.89$ /day*</div>
                                </div>
                                <div className={this.state.selected_item === 2 ? "col-3 text-center node-type active_item2" : "col-3 text-center node-type"} onClick={() => { this.selectItem(2) }}>
                                    <img alt="" src="/img/silver-node-x2.png" width="150" />
                                    <div>Silver</div>
                                    <div>5 $RING</div>
                                    <div>2300%</div>
                                    <div>Earn 46.19$ /day*</div>
                                </div>
                                <div className={this.state.selected_item === 3 ? "col-3 text-center node-type active_item3" : "col-3 text-center node-type"} onClick={() => { this.selectItem(3) }}>
                                    <img alt="" src="/img/gold-node-x2.png" width="150" />
                                    <div>Gold</div>
                                    <div>10 $RING</div>
                                    <div>2600%</div>
                                    <div>Earn 104.41$ /day*</div>
                                </div>
                            </div>
                            <div style={{ marginTop: "25px", fontSize: "12px" }}>*the rate is calculated with the actual $RING price and it may vary
                                depending on various factors.</div>
                            {/* <div className="label" style={{ marginTop: "10px" }}>Node Name</div>
                            <div className="input-group mb-3">
                                <input placeholder="My Node" type="text" className="form-control" id="name" value="" />
                            </div> */}
                            <div style={{ marginTop: "40px" }}>
                                <p>A contribution of $RING tokens to the <span className="sc-gsTEea cdmEaM">RING</span> community is required to
                                    create a node and participate in rewards. </p>
                                <p>Your <span className="sc-gsTEea cdmEaM">$RING</span> tokens will be distributed as follows: </p>
                                <ul style={{ listStyle: "inside" }}>
                                    <li>20% future use</li>
                                    <li>10% to RING-AVAX Pool for rewards</li>
                                    <li>70% into node rewards pool</li>
                                    <li>Distribution subject to optimization over time.</li>
                                </ul>
                            </div>
                            <div>
                                <form className="">
                                    <div className="form-check"><input type="checkbox" className="form-check-input" value="false" /><label title=""
                                        className="form-check-label"><span>I have read the <a
                                            href="/disclaimer">disclaimer</a> and I want to create my
                                            RING-node.</span></label></div>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer"><div className="approuval-button"><span>Approve Creation</span></div></div>
                    </div>
                </Modal>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return { dispatch };
}


export default connect(mapDispatchToProps)(Create);