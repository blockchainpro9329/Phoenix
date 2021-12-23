
import React from 'react';
import { connect } from 'react-redux';
import { StyledEngineProvider } from '@mui/material/styles';
import Menu from "../common/MenuList";

class HomeHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            price_bnb: props.price_bnb,
            price_usd: props.price_usd
        }
    }

    render() {
        return (
            <>
                <div className='header'>
                    <div className="content mx-auto">
                        <div className='flex align-center'>
                            <img alt='' src='/img/logo.png' className='logo-img' />
                            <span className='logo-title'>
                                PHOENIX
                            </span>
                        </div>
                        <div className='menu-container flex1 flex justify-center'>
                            <span className='menu'>
                                <a href='/'>HOME</a>
                            </span>
                            <span className='menu'>
                                <a>STORY</a>
                            </span>
                            <span className='menu'>
                                <a>CONTACT</a>
                            </span>
                            <span className='menu'>
                                <a>TWITTER</a>
                            </span>
                        </div>
                        {/* <button className='btn action-btn outline'> */}
                        <a id='launch_btn' className='btn action-btn outline ' href='/app'>
                            LAUNCH APP
                        </a>
                        {/* <a id='launch_sm_btn' href='/app'> */}
                        <a id='launch_sm_btn'>
                            <StyledEngineProvider injectFirst>
                                <Menu />
                            </StyledEngineProvider>,
                        </a>

                        {/* </button> */}
                    </div>
                </div>
                <div className='header_border'></div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return { price_usd: state.price_usd, price_bnb: state.price_bnb };
}

export default connect(mapStateToProps)(HomeHeader);

