const HomeHero = () => {
  return (
    <>
      <section id="section-hero" className="pos-rel">
        <div className="content mx-auto">

          <div className="hero-left">
            <div className="title">
              <div className="fs-60 c-w">
                Phoenix Financial
              </div>
              <div className="fs-40 c-w">
                large-scale, high yield<br />
                return investments
              </div>
            </div>
            <div className="flex">
              <button className="btn deaction-btn m-r-20 fs-30 btn-middle" onClick={() => { window.location.href = "/app" }}
              >create nest</button>
              <button className="btn action-btn fs-30 btn-middle" onClick={() => { window.open("https://traderjoexyz.com/#/trade?outputCurrency=0xfcc6CE74f4cd7eDEF0C5429bB99d38A3608043a5") }}>buy fire</button>
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
            <div className="fs-30 c-w noto-regular">
              Treasury Balance
            </div>
            <div className="c-w fs-30">
              $2'690'670
            </div>
          </span>
          <span className="flex flex-col align-center">
            <div className="fs-30 c-w">
              Current Total investment
            </div>
            <div className="c-w fs-30">
              $7'690'670
            </div>
          </span>
          <span className="flex flex-col align-center">
            <div className="fs-30 c-w">
              Number of nests
            </div>
            <div className="c-w fs-30">
              $11'984
            </div>
          </span>
        </div>
      </div>
    </>
  );
}

export default HomeHero;