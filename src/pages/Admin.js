import React from "react";

import Content from "../components/admin/content";
import Footer from "../components/common/Footer"
// import Header from "../components/home/HomeHeader";
import Header from "../components/ring/Header";



class Admin extends React.Component {

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


export default Admin;