import { connect } from "react-redux";
import React from 'react'


class HomeStart extends React.Component {

  constructor(props) {
    super(props);
    this.goAppPage = this.goAppPage.bind(this);
  }

  goAppPage() {
    window.open("/app");
  }
  render() {
    return (
      <section id="section-started">
        < div id="started-content" className="container mx-auto" >
          <div className="fs-60 l-h-1-1 c-w card-title">
            NFT
          </div>
          <div className="flex justify-end start-subtitle-container">
            <span className="start-subtitle" data-nsfw-filter-status="swf">A non-fungible token is a unique and non-interchangeable unit of data stored on the blockchain, a form of a digital ledger. NFT’s can be associated with reproducible digital files such as photos, videos, and audio.
            </span>
          </div>
          <div className="cards">
            <div className="card">
              <div className="card-img" style={{  backgroundImage: "url(" + this.props.master_nft_url + ")" }}></div>
              <div className="card-item-title">
                <img alt="" src="/img/left-bar.png" style={{ height: "2px" }} />
                <span className="c-w text-center"> MASTER NFT</span>
                <img alt="" src="/img/right-bar.png" style={{ height: "2px" }} />
              </div>
              <div className="card-item-info">The Master NFT is available once you build at least 10 Nests. The Master NFT will be applied to 10 Nests and boosts rewards by 0.025 for each day. Each wallet will be limited to a total of 10 Master NFT’s.
              </div>
              {/* <div className="card-item-collection">Collection 1</div> */}
            </div>
            <div className="card">
              <div className="card-img" style={{ backgroundImage: "url(" + this.props.grand_nft_url + ")" }}></div>
              <div className="card-item-title">
                <img alt="" src="/img/left-bar.png" style={{ height: "2px" }} />
                <span className="c-w text-center">GRAND NFT</span>
                <img alt="" src="/img/right-bar.png" style={{ height: "2px" }} />
              </div>
              <div className="card-item-info">The Grand Master NFT is available once you build all 100 NESTS. The Grand Master NFT boosts rewards by 0.05 for each Nest per day. Each wallet will be limited to a total of one Grand Master NFT.
              </div>
              {/* <div className="card-item-collection">Collection 1</div> */}
            </div>
          </div>
          <div className="lifetime-title">
            Start Earning Lifetime Rewards
          </div>
          <div className="m-t-30 try_btn_container">
            <button className="action-btn btn" onClick={this.goAppPage}>Try it</button>
          </div>

          <div className="flex justify-between m-t-60 card-action-container">
            <div className="card-action shadow">
              <div className="badge-title c-yellow">BUY $FIRE</div>
              <p data-nsfw-filter-status="swf">
                $FIRE is available on the
                <span className="text-blue mx-1" data-nsfw-filter-status="swf">Avalanche Network</span>.  You can swap AVAX for $FIRE on Trader Joe.
              </p>
            </div>
            <div className="card-action shadow">
              <div className="badge-title c-yellow"> BUILD A PHOENIX-NEST</div>
              <p data-nsfw-filter-status="swf">
                A PHOENIX-NEST costs only <span className="text-blue mx-1" data-nsfw-filter-status="swf">10 $FIRE </span> plus a minimal $20 maintenance fee every 90 days.
              </p>
            </div>
            <div className="card-action shadow">
              <div className="badge-title c-yellow">ENJOY REWARDS</div>
              <p data-nsfw-filter-status="swf">
                You can create up to <span className="text-blue mx-1" data-nsfw-filter-status="swf"> 100 PHOENIX </span>Nests per wallet. Claim accrued rewards at your convenience.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => {
  return {
    grand_nft_url: state.grand_nft_url,
    master_nft_url: state.master_nft_url
  };
}

export default connect(mapStateToProps)(HomeStart);