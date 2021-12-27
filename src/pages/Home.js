import HomeHeader from "../components/home/HomeHeader";
import HomeHero from "../components/home/HomeHero";
import HomeVision from "../components/home/HomeVision"
import HomeWork from "../components/home/HomeWork";
import Footer from "../components/common/Footer"
import Faq from "../components/common/Faq";
import HomeStart from "../components/home/HomeStart";
import { Component } from "react";
import { connect } from 'react-redux';


class Home extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.loadRateUsdt();
    }

    async loadRateUsdt() {
    }



    render() {
        return (
            <>
                <HomeHeader></HomeHeader>
                {/* <Header></Header> */}
                <HomeHero></HomeHero>
                <HomeStart></HomeStart>
                <HomeVision></HomeVision>
                <HomeWork></HomeWork>
                <Faq></Faq>
                <Footer></Footer>
            </>
        );
    }
}

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);