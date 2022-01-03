import { connect } from 'react-redux';


const HomeHero = (props) => {
  return (
    <>
      <section id="section-hero" className="pos-rel">
        <div className="content mx-auto">

          <div className="hero-left">
            <div className="title">
              <div className="fs-60 c-w noto-bold">
                Phoenix Financial
              </div>
              <div className="fs-40 c-w">
                large-scale, high yield<br />
                return investments
              </div>
            </div>
            <div className="flex">
              <button className="btn deaction-btn m-r-20 btn-middle" onClick={() => { window.location.href = "/app" }}>
                <div className="fs-30">
                  Create nest
                </div>

              </button>
              <button className="btn action-btn btn-middle" onClick={() => { window.open("https://traderjoexyz.com/#/trade?outputCurrency=0xfcc6CE74f4cd7eDEF0C5429bB99d38A3608043a5") }}>
                <div className="fs-30">
                  Buy fire
                </div>
              </button>
            </div>
          </div>
          <div className="hero-right">
            <div className="phoenix_img">
            </div>
            <div className="c-w fs-30 flex align-center">Rise from the ashes of traditional finance</div>
          </div>
        </div>
      </section>
      <div className="statistics" >
        <div className="content">
          <span className="flex flex-col align-center">
            <div className="fs-30 c-w noto-thin">
              Treasury Balance
            </div>
            <div className="c-w fs-30 noto-bold">
              ${String(props.treasury_balance).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
            </div>
          </span>
          <span className="flex flex-col align-center">
            <div className="fs-30 c-w noto-bold">
              Current Total investment
            </div>
            <div className="c-w fs-30 noto-bold">
              $7'690'670
            </div>
          </span>
          <span className="flex flex-col align-center">
            <div className="fs-30 c-w noto-thin">
              Number of nests
            </div>
            <div className="c-w fs-30 noto-bold">
              {String(props.all_nodes).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
            </div>
          </span>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    all_nodes: state.all_nodes,
    treasury_balance: state.treasury_balance
  };
}

export default connect(mapStateToProps)(HomeHero);