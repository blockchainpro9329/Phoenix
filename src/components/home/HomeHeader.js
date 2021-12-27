
import React from 'react';
import { connect } from 'react-redux';
import { StyledEngineProvider } from '@mui/material/styles';
import Menu from "../common/MenuList";
import { ToastContainer, toast } from 'react-toastify';


class HomeHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <ToastContainer>
                </ToastContainer>

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
                        <a id='launch_btn' className='btn action-btn outline ' href='/app'>
                            LAUNCH APP
                        </a>
                        <a id='launch_sm_btn'>
                            <StyledEngineProvider injectFirst>
                                <Menu />
                            </StyledEngineProvider>,
                        </a>
                    </div>
                </div>
                <div className='header_border'></div>
            </>
        );
    }
}
const mapStateToProps = state => {
    return { state };
}
export default connect(mapStateToProps)(HomeHeader);

