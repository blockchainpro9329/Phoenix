const HomeHero = () => {
  return (
    <section id="section-hero" className="pos-rel">
      <img src="/img/ellipse_left.png" className="pos-abs" style={{ top: "0px", left: "0px", opacity: "0.4" }} />
      <img src="/img/ellipse_right.png" className="pos-abs" style={{ top: "90px", right: "0px", opacity: "0.4" }} />
      {/* <img src="/img/flower.png" className="pos-abs flower-pos" style={{ top: "90px", right: "20px" }} /> */}

      <div className="content mx-auto">
        <div className="fs-24 c-3080be flex align-center earn-title" style={{ height: "280px" }}>
          EARN YOUR CRYPTO ASSETS
        </div>
        <div className="c-w earn-subtitle" >

          Lorem lpsum is simply dummy text of the printing and typesetting industry. Lorem lpsum has been the industry.
        </div>
        <div className="statistics" >
          <div className="sub_statistics">
            <button className="btn action-btn first_action_btn">
              CALL TO ACTION
            </button>
            <button className="btn action-btn outline">
              CALL TO ACTION
            </button>
          </div>

          <div className="brief_board">
            <div className="flex align-center pos-rel bg-344d61" style={{ width: "277px", height: "123px" }}>
              <div style={{ marginLeft: "20px" }}>
                <div className="fs-22 c-w">My Briefcase</div>
                <div className="fs-12 c-a4a3a2">7 days statistics</div>
              </div>
              <img className="pos-abs" src="/img/7day.png" style={{ top: "45px", right: "25px" }} />
            </div>
          </div>
        </div>
        <div className="cookie">
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

        </div>
      </div>
    </section>

  );
}

export default HomeHero;