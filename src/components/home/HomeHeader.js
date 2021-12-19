
import React from 'react';
import {connect} from 'react-redux';

class HomeHeader extends React.Component  {

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
                        <img alt='' src='./img/logo.png' style={{height:"54px"}}/>
                        <span className='logo-title'>
                            PHOENIX
                        </span>
                    </div>
                    <div className='flex1 flex justify-center'>
                        <span className='menu'>
                            <a>HOME</a>
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
                    <button className='btn action-btn'>
                        CALL TO ACTION
                    </button>
                </div>
            </div>
            <div className='header_border'></div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {price_usd: state.price_usd, price_bnb: state.price_bnb};
}

export default connect(mapStateToProps)(HomeHeader);

