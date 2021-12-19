const HomeVision = () => {
    return (
        <section id="section-vision">
            {/* <!-- title --> */}

            {/* <!-- content --> */}
            <div id="vision-content" className="container mx-auto c-w">
                <h2>The Phoenix network vision</h2>
                <span className="subtitle" data-nsfw-filter-status="swf">
                    An innovative step forward for passive income generation
                </span>
                <div className="flex justify-between m-t-50">
                    <div className="vision-left-item">
                        <div className="c-w" style={{ width: "275px" }}>
                            <span className="text-center">
                                <h2>01.</h2>
                            </span>
                            <p className="m-t-20 m-b-20">
                                FIRE will research and independently verify each protocol that will be invested in through an experienced team that eat, sleep, and dream about DeFi.
                            </p>
                        </div>
                    </div>
                    <div className="vision-right-item">
                        <div className="c-w" style={{ width: "275px" }}>
                            <span className="text-center">
                                <h2>02.</h2>
                            </span>
                            <p className="m-t-20 m-b-20">
                                The RING Network will move as one, and therefore its participants will be exposed to 30+ DeFi protocols without the network fees, the manual swapping, bridging, staking, bonding, etc.
                            </p>
                        </div>
                    </div>

                </div>

                <div id="chips-header"><h2>Benefits for FIRE Network Members</h2></div>
                <div className="chips m-t-60">
                    <div className="fs-22 chip">
                        <img alt="" className="m-r-20" src="./img/icon_check.svg" />
                        Lowered Risk
                    </div>
                    <div className="fs-22 chip">
                        <img alt="" className="m-r-20" src="./img/icon_check.svg" />
                        Less Fees
                    </div>
                    <div className="fs-22 chip">
                        <img alt="" className="m-r-20" src="./img/icon_check.svg" />
                        Less Hassle
                    </div>
                    <div className="fs-22 chip">
                        <img alt="" className="m-r-20" src="./img/icon_check.svg" />
                        Less Research
                    </div>
                </div>
            </div>
            {/* <!-- chips --> */}
        </section>
    );
}

export default HomeVision;