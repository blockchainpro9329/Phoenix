import { connect } from 'react-redux';


const HomeHero = (props) => {
  return (
    <>
      <section id="section-hero" className="pos-rel">
        <div className="content mx-auto">

          <div className="hero-left">
            <div className="title">
              <div className="title-main c-w noto-bold">
                Phoenix Community Capital
              </div>
              <div className="title-sub">
                large-scale, high yield<br className='mobile-hidden'/>
                return investments
              </div>
              <div className='c-w title-sub1'>
              Rise from the <br/>Ashes of <br/>Traditional finance
              </div>
            </div>
            <div className="flex create-buy-btn">
              <button className="btn deaction-btn create-nest-btn btn-middle" onClick={() => { window.location.href = "/app" }}>
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
            <div className="c-w fs-30 phoenix_img_info">Rise from the ashes of traditional finance</div>
          </div>
        </div>
      </section>
      <div className="statistics" >
        <div className="content">
          <span className="flex flex-col align-center statistics-item1">
            <div className=" statistics-item1-title">
              Treasury Balance
            </div>
            <div className="c-w fs-30 noto-bold">
              ${String(props.treasury_balance).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
            </div>
          </span>
          <span className="flex flex-col align-center statistics-item2">
            <div className="statistics-item2-title">
              Current Total investment
            </div>
            <div className="c-w fs-30 noto-bold">
              $7'690'670
            </div>
          </span>
          <span className="flex flex-col align-center statistics-item3">
            <div className="statistics-item3-title">
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