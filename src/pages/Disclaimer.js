
import Header from "../components/home/HomeHeader";
import {connect} from "react-redux";
import Content from "../components/discliam/content";
import React from "react";
import Footer from "../components/common/Footer";


class Disclaimer extends React.Component {

    constructor(props) {
        super(props);
        this.state = props;
    }


    render() {

        return (
            <>
                <Header></Header>
                <Content></Content>
                <Footer></Footer>
            </>
        );
    }
}

const mapStateToProps = state => {
    return { state };
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Disclaimer);