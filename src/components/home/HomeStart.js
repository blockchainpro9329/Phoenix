const HomeStart = () => {

  return (
    <section id="section-started" className="pos-rel">
        <img src="./img/spiral.svg" className="pos-abs" style={{top:"550px", left:"0px", zIndex:-1}}/>

      <div id="started-content" className="container mx-auto f-row f1-between">
        <div className="fs-60 l-h-1-1 c-w">
          Those are our<br />fantastic cards
        </div>
        <div className="flex justify-end">
          <span className="start-subtitle" data-nsfw-filter-status="swf">Lorem lpsum is simply dummy text of the printing and typesetting industry. Lorem lpsum has been the industry.</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="card-img" style={{ backgroundImage: "url(./img/meat.svg)" }}></div>
            <div className="flex justify-between align-center h-60">
              <img alt="" src="./img/left-bar.png" style={{ height: "2px" }} />
              <span className="fs-26 c-w">Card One</span>
              <img alt="" src="./img/right-bar.png" style={{ height: "2px" }} />
            </div>
            <div className="h-80 c-8fced5 fs-16">Lorem lpsum is simply dummy text of the printing and typesetting industry. Lorem lpsum has been the industry.</div>
            <div className="h-30 c-8fced5 text-center fs-16">Collection 1</div>
          </div>
          <div className="card">
            <div className="card-img" style={{ backgroundImage: "url(./img/covid.svg)" }}></div>
            <div className="flex justify-between align-center h-60">
              <img alt="" src="./img/left-bar.png" style={{ height: "2px" }} />
              <span className="fs-26 c-w">Card Two</span>
              <img alt="" src="./img/right-bar.png" style={{ height: "2px" }} />
            </div>
            <div className="h-80 c-8fced5 fs-16">Lorem lpsum is simply dummy text of the printing and typesetting industry. Lorem lpsum has been the industry.</div>
            <div className="h-30 c-8fced5 text-center fs-16">Collection 1</div>
          </div>

        </div>

        <div className="h-60 m-t-110 fs-40 c-w flex align-center">
          Earn Lifetime rewards of 2600% APY
        </div>
        <div className="m-t-30">
          <button className="action-btn btn">CALL ACTION</button>
        </div>
        
        <div className="flex justify-between m-t-60">
          <div className="card-action shadow">
            <div className="badge-title c-yellow">Buy FIRE</div>
            <p data-nsfw-filter-status="swf">
              FIRE is available on the
              <span className="text-blue mx-1" data-nsfw-filter-status="swf">Binance Smart Chain Network</span>.You
              can swap BNB for FIRE on PancakeSwap. 
            </p>
          </div>
          <div className="card-action shadow">
            <div className="badge-title c-yellow">Create a node</div>
            <p data-nsfw-filter-status="swf">
              A FIRE-Node costs only
              <span className="text-purple mx-1" data-nsfw-filter-status="swf">10 FIRE</span> and has no on-going
              maintenance fees, subscriptions, or software to run.
            </p>
          </div>
          <div className="card-action shadow">
            <div className="badge-title c-yellow">enjoy rewards</div>
            <p data-nsfw-filter-status="swf">
              That’s it! You can create up to 100 nodes per wallet, rewards pay
              out
              <span className="text-pink" data-nsfw-filter-status="swf">every 4 hours</span>, and there’s nothing
              else for you to do!
            </p>
          </div>
        </div>


      </div>
    </section>
  )
}

export default HomeStart;