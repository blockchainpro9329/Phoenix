const HomeHero = () => {
  return (
    <section id="section-hero" className="pos-rel">
      <img src="./img/ellipse_left.png" className="pos-abs" style={{ top: "0px", left: "0px", opacity: "0.4" }} />
      <img src="./img/ellipse_right.png" className="pos-abs" style={{ top: "90px", right: "0px", opacity: "0.4" }} />
      <img src="./img/flower.png" className="pos-abs" style={{ top: "90px", right: "20px" }} />

      <div className="content mx-auto">
        <div className="fs-24 c-3080be flex align-center" style={{ height: "280px" }}>
          EARN YOUR CRYPTO ASSETS
        </div>
        <div className="flex align-center" style={{ height: "200px" }}>
          <span className="fs-16 c-w" style={{ width: "500px" }}>
            Lorem lpsum is simply dummy text of the printing and typesetting industry. Lorem lpsum has been the industry.
          </span>
        </div>
        <div className="flex align-center justify-between" style={{ height: "120px", width: "900px" }}>
          <div>
            <button className="btn action-btn m-r-20">
              CALL TO ACTION
            </button>
            <button className="btn action-btn outline">
              CALL TO ACTION
            </button>
          </div>

          <div className="flex align-center pos-rel bg-344d61" style={{ width: "277px", height: "123px" }}>
            <div style={{ marginLeft: "20px" }}>
              <div className="fs-22 c-w">My Briefcase</div>
              <div className="fs-12 c-a4a3a2">7 days statistics</div>
            </div>
            <img className="pos-abs" src="./img/7day.png" style={{ top: "45px", right: "25px" }} />
          </div>
        </div>
        <div className="flex justify-center align-end" style={{ height: "180px" }}>
          <div className="pos-rel">
            <button className="btn c-w cookie_btn justify-center"><span className="m-r-30 m-l-30"> Allow Cookie? </span> <div className="flex align-center justify-center m-l-30" style={{ width: "46px", height: "46px", borderRadius: "23px", backgroundColor: "white", color: "black" }}>OK</div></button>
            <div className="pos-abs" style={{bottom:"20px", right:"-350px"}}>
              <div className="flex flex-col align-center justify-center bg-344d61" style={{ width: "277px", height: "145px" }}>
                <img src="./img/bar.svg" style={{ top: "45px", right: "25px", marginTop:"10px" }} />
                <div className="flex justify-between c-a3a3a2" style={{width:"75%"}}>
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