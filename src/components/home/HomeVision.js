import React from 'react';
import { connect } from 'react-redux';

class HomeVision extends React.Component {


    render() {
        return (
            <>
                <section id="section-vision">
                    <div id="vision-content" className="container mx-auto c-w">
                        <div className="title noto-bold">
                            Phoenix Community Capital Vision
                        </div>
                        {/* <div className="subtitle" data-nsfw-filter-status="swf">
                            An innovative step forward for passive income generation
                        </div> */}
                        <div className="vision-container">
                            <div className="vision-left-item pos-rel">
                                {/* <div className="pos-abs fs-180 noto-bold" style={{ top: "-110px" }}> 1</div> */}
                                <div className="c-w" style={{ width: "70%" }}>
                                    <p className="vision-item-info">
                                        Phoenix Community Capital will take community recommendations combined with independent research, and qualify each protocal prior to investment, to spread risk across short, medium, and long term ROI.
                                    </p>
                                </div>
                            </div>
                            <div className="vision-right-item pos-rel">
                                {/* <div className="pos-abs fs-180 noto-bold" style={{ top: "-110px" }}>2</div> */}
                                <div className="c-w" style={{ width: "70%" }}>
                                    <p className="vision-item-info">
                                        Phoenix Community Capital exposes the community to a multitude of on-chain and off-chain physical investments, while reducing fees through consolidation.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                <section id="section-nft">
                    <div className="content mx-auto">
                        <div className='nft-left'>
                            <div className="card-title noto-bold">
                                BOOST  <br className='mobile-hidden' /> 
                                REWARDS
                            </div>
                            <div className="flex start-subtitle-container">
                                <span className="start-subtitle" data-nsfw-filter-status="swf">
                                    NFTs are available for purchase upon certain milestones. Our NFTs boost your daily reward rate and increase your earning potential. For more information regarding out NFT's, please see our whitepaper.
                                </span>
                            </div>
                            <div className='action-btn btn fs-28 m-t-30 mx-auto' style={{width:"330px", height:"50px"}} onClick={() => { window.open("/docs/Phoenix Community Capital White Paper.pdf") }}>
                                SEE WHITEPAPER
                            </div>
                        </div>
                        <div className='nft-right'>
                            <div className="cards">
                                <div className="card">
                                    <div className="card-img" style={{ backgroundImage: "url(" + this.props.master_nft_url + ")" }}></div>
                                    <div className="card-item-title">
                                        <span className="text-center noto-bold"> MASTER NFT</span>
                                    </div>
                                    <div className="card-item-info">The Master NFT is available once you build at least 10 Nests. The Master NFT will be applied to 10 Nests and boosts rewards by 0.025 for each day. Each wallet will be limited to a total of 10 Master NFT’s.
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-img" style={{ backgroundImage: "url(" + this.props.grand_nft_url + ")" }}></div>
                                    <div className="card-item-title">
                                        <span className="text-center noto-bold">GRAND MASTER</span>
                                    </div>
                                    <div className="card-item-info">The Grand Master NFT is available once you build all 100 NESTS. The Grand Master NFT boosts rewards by 0.05 for each Nest per day. Each wallet will be limited to a total of one Grand Master NFT.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );

    }




}


const mapStateToProps = state => {
    return {
        grand_nft_url: state.grand_nft_url,
        master_nft_url: state.master_nft_url
    };
}

export default connect(mapStateToProps)(HomeVision);
