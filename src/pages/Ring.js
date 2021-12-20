import Footer from "../components/common/Footer";
import Faq from "../components/common/Faq";
import RingNext from "../components/ring/Next";
import RingHeader from "../components/ring/Header";
import RingMsg from "../components/ring/Msg";
import MyNodes from "../components/ring/Nodes";
import Create from "../components/ring/Create";
import React from "react";


class Ring extends React.Component {


    render() {
    
        return (
            <>
                <RingHeader></RingHeader>
                <RingMsg></RingMsg>
                {/* <MyNodes></MyNodes> */}
                <Create></Create>
                {/* <RingNext></RingNext> */}
                <Faq></Faq>
                <Footer></Footer>
            </>
        );
    }
}


export default Ring;