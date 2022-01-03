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
            <div className="lifetime-title">
              <div className="c-w fs-40">
                Start Earning Rewards
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
                <span className="noto-medium">Phoenix Community Capital</span> works for its investors
                by leveraging combined investment capital, which elevates into investment options that are not available to the average investor.
              </div>
              <div className="m-t-30 fs-20">
                <span className="noto-medium">How does your wealth grow?</span><br />
                Phoenix Community Capital enlists trusted and experienced investment advisors, who research new trends and opportunities for the community investment portfolio. Each investment option is delivered to the community along with a report, which will be voted on by the DAO using blockchain to validate votes.
              </div>
              <button className="btn action-btn m-t-30">learn more</button>
            </div>
            <div className="nest-right">

            </div>
          </div>
        </section>




        <section id="chip-vision">
          <div className="chips-container">
            <div id="chips-header">Benefits for Phoenix Community Members</div>
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