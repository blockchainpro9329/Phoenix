import React from 'react';
import { connect } from 'react-redux';

class HomeVision extends React.Component {


    render() {
        return (
            <>
                <section id="section-vision">
                    <div id="vision-content" className="container mx-auto c-w">
                        <div className="title noto-bold">
                            The Phoenix Finance Vision
                        </div>
                        {/* <div className="subtitle" data-nsfw-filter-status="swf">
                            An innovative step forward for passive income generation
                        </div> */}
                        <div className="vision-container">
                            <div className="vision-left-item pos-rel">
                                <div className="pos-abs fs-180 noto-bold" style={{ top: "-110px" }}> 1</div>
                                <div className="c-w" style={{ width: "70%" }}>
                                    <p className="vision-item-info">
                                        $FIRE will research and independently verify each protocol that will be invested in through an experienced team that eat, sleep, and dream about DeFi.
                                    </p>
                                </div>
                            </div>
                            <div className="vision-right-item pos-rel">
                                <div className="pos-abs fs-180 noto-bold" style={{ top: "-110px" }}>2</div>
                                <div className="c-w" style={{ width: "70%" }}>
                                    <p className="vision-item-info">
                                        Phoenix Finance will move as one, and therefore its participants will be exposed to 30+ DeFi protocols without the network fees, manual swapping, bridging, staking, bonding, etc.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                <section id="section-nft">
                    <div className="content mx-auto">
                        <div className='nft-left'>
                            <div className="fs-60 l-h-1-1 card-title noto-bold">
                                NFT
                            </div>
                            <div className="flex start-subtitle-container">
                                <span className="start-subtitle" data-nsfw-filter-status="swf">A non-fungible token is a unique and non-interchangeable unit of data stored on the blockchain, a form of a digital ledger. NFT’s can be associated with reproducible digital files such as photos, videos, and audio.
                                </span>
                            </div>
                        </div>
                        <div className='nft-right'>
                            <div className="cards">
                                <div className="card">
                                    <div className="card-img" style={{ backgroundImage: "url(" + this.props.master_nft_url + ")" }}></div>
                                    <div className="card-item-title">
                                        <span className="c-w text-center noto-bold"> MASTER NFT</span>
                                    </div>
                                    <div className="card-item-info">The Master NFT is available once you build at least 10 Nests. The Master NFT will be applied to 10 Nests and boosts rewards by 0.025 for each day. Each wallet will be limited to a total of 10 Master NFT’s.
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-img" style={{ backgroundImage: "url(" + this.props.grand_nft_url + ")" }}></div>
                                    <div className="card-item-title">
                                        <span className="c-w text-center noto-bold">GRAND MASTER</span>
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
