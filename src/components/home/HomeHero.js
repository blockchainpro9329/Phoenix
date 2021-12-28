const HomeHero = () => {
  return (
    <>
      <section id="section-hero" className="pos-rel">
        {/* <img src="/img/ellipse_left.png" className="pos-abs" style={{ top: "0px", left: "0px", opacity: "0.4", zIndex: -1 }} /> */}
        {/* <img src="/img/ellipse_right.png" className="pos-abs" style={{ top: "90px", right: "0px", opacity: "0.4", zIndex: -1 }} /> */}
        {/* <div className="pos-abs flex justify-center phoenix_img" style={{ zIndex: -1 }}> */}
        {/* </div> */}
        {/* <div className="pos-abs flex justify-center trend_up_img"> */}
        {/* </div> */}
        <div className="content mx-auto">
          <div className="c-3080be flex align-center earn-title">
            WELCOME TO PHOENIX COMMUNITY FINANCE
          </div>
          <div className="c-w earn-subtitle">
            <div className="earn-subtitle-1">
              <p>
                Welcome to an investment community that works for you. Whether you are a seasoned cryptocurrency investor, or this is your first time investing, <span className="text-blue mx-1" data-nsfw-filter-status="swf">PHOENIX FINANCE</span> is here to help take your investments to the next level.
              </p>
            </div>
            <div className="earn-subtitle-2">
              <p>
                <span className="text-blue mx-1" data-nsfw-filter-status="swf">PHOENIX FINANCE</span> works for its investors by taking the guesswork out of cryptocurrency investments. What is the next big coin? How can you grow your wealth? Let <span className="text-blue mx-1" data-nsfw-filter-status="swf">PHOENIX FINANCE</span> research and invest for you. Together we will take advantage of large-scale, high yield return investments that everyone can benefit from. Returns are paid to our investors in the form of $FIRE TOKENS. All investment profits are used to buy back $FIRE on the open market, thus increasing the market price of $FIRE, which will exchange supplementary profit to the user.
              </p>
            </div>
            <div className="earn-subtitle-3">
              <p>
                Rise from the ashes of traditional finance with <span className="text-blue mx-1" data-nsfw-filter-status="swf">PHOENIX FINANCE</span> and take flight with a DeFi you can trust.
              </p>
            </div>
          </div>

          {/* <div className="cookie">
          <div className="pos-rel cookie_container">
            <button className="btn c-w cookie_btn justify-center"><span className="m-r-30 m-l-30"> Allow Cookie? </span> <div className="flex align-center justify-center m-l-30 cookie_ok" style={{ backgroundColor: "white", color: "black" }}>OK</div></button>
            <div className="week_statistics" >
              <div className="flex flex-col align-center justify-center bg-344d61" style={{ width: "277px", height: "145px" }}>
                <img src="/img/bar.svg" style={{ top: "45px", right: "25px", marginTop: "10px" }} />
                <div className="flex justify-between c-a3a3a2" style={{ width: "75%" }}>
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thi</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>
            </div>
          </div>

        </div> */}
        </div>
      </section>
      <div className="statistics" >
        <div className="sub_statistics">
          <button onClick={() => { window.open("https://traderjoexyz.com/#/trade?outputCurrency=0xfcc6CE74f4cd7eDEF0C5429bB99d38A3608043a5") }}
            className="btn action-btn first_action_btn">
            BUY $FIRE
          </button>
          <button onClick={() => { window.location.href = "/app" }} className="btn action-btn outline">
            CREATE NEST
          </button>
        </div>

        {/* <div className="brief_board">
        <div className="flex align-center pos-rel bg-344d61" style={{ width: "277px", height: "123px" }}>
          <div style={{ marginLeft: "20px" }}>
            <div className="fs-22 c-w">My Briefcase</div>
            <div className="fs-12 c-a4a3a2">7 days statistics</div>
          </div>
          <img className="pos-abs" src="/img/7day.png" style={{ top: "45px", right: "25px" }} />
        </div>
      </div> */}
      </div>
    </>
  );
}

export default HomeHero;