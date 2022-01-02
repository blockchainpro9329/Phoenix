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
      <>
        <section id="section-started">
          < div id="started-content" className="container mx-auto" >

            {/* 
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
            </div>
          </div>

 */}

            <div className="lifetime-title">
              <div className="c-w fs-40">
                Start Earning Lifetime Rewards
              </div>
              <button className="action-btn btn" onClick={this.goAppPage}>Try it</button>
            </div>

            <div className="flex justify-between card-action-container">
              <div className="card-action shadow">
                <div className="badge-title c-w fs-20">
                  <div className="yellow-circle">1</div>
                  buy fire
                </div>
                <p data-nsfw-filter-status="swf" className="c-purple">
                  $FIRE is available on the
                  <span className="c-yellow mx-1" data-nsfw-filter-status="swf">Avalanche Network</span>.  You can swap AVAX for $FIRE on Trader Joe.
                </p>
              </div>
              <div className="card-action shadow">
                <div className="badge-title c-w fs-20">
                  <div className="yellow-circle">2</div>
                  build nest
                </div>
                <p data-nsfw-filter-status="swf" className="c-purple">
                  A PHOENIX-NEST costs only <span className="c-yellow mx-1" data-nsfw-filter-status="swf">10 $FIRE </span> plus a minimal $20 maintenance fee every 90 days.
                </p>
              </div>
              <div className="card-action shadow">
                <div className="badge-title c-w fs-20">
                  <div className="yellow-circle">3</div>
                  enjoy rewards
                </div>
                <p data-nsfw-filter-status="swf">
                  You can create up to <span className="c-yellow mx-1" data-nsfw-filter-status="swf"> 100 PHOENIX </span>Nests per wallet. Claim accrued rewards at your convenience.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="section-nest">
          <div className="content mx-auto">
            <div className="nest-left">
              <div className="fs-20">
                <span className="noto-medium">Phoenix Finance</span> works for its investors
                by taking the guesswork out.
              </div>
              <div className="m-t-30 fs-20">
                <span className="noto-medium">What is the next big coin?</span><br/>
                How can you grow your wealth?
                Let us research and invest for you.
              </div>
              <button className="btn action-btn m-t-30">learn more</button>
            </div>
            <div className="nest-right">

            </div>
          </div>
        </section>




        <section id="chip-vision">
          <div className="chips-container">
            <div id="chips-header">Benefits for Phoenix Network Members</div>
            <div className="chips">
              <div className=" chip">
                <img alt="" className="m-r-20" src="/img/icon_check.svg" />
                Lowered Risk
              </div>
              <div className=" chip">
                <img alt="" className="m-r-20" src="/img/icon_check.svg" />
                Less Fees
              </div>
              <div className=" chip">
                <img alt="" className="m-r-20" src="/img/icon_check.svg" />
                Less Hassle
              </div>
              <div className=" chip">
                <img alt="" className="m-r-20" src="/img/icon_check.svg" />
                Less Research
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

export default connect(mapStateToProps)(HomeStart);