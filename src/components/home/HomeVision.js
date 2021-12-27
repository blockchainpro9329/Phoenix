const HomeVision = () => {
    return (
        <>
            <section id="section-vision">
                <div id="vision-content" className="container mx-auto c-w">
                    <div className="title">
                        The Phoenix Finance Vision
                    </div>
                    <div className="subtitle" data-nsfw-filter-status="swf">
                        An innovative step forward for passive income generation
                    </div>
                    <div className="vision-container">
                        <div className="vision-left-item">
                            <div className="c-w" style={{ width: "70%" }}>
                                <span className="vision-item-no">
                                    01.
                                </span>
                                <p className="vision-item-info">
                                    $FIRE will research and independently verify each protocol that will be invested in through an experienced team that eat, sleep, and dream about DeFi.
                                </p>
                            </div>
                        </div>
                        <div className="vision-right-item">
                            <div className="c-w" style={{ width: "70%" }}>
                                <span className="vision-item-no">
                                    02.
                                </span>
                                <p className="vision-item-info">
                                    Phoenix Finance will move as one, and therefore its participants will be exposed to 30+ DeFi protocols without the network fees, manual swapping, bridging, staking, bonding, etc.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
                {/* <!-- chips --> */}
            </section>
            <section id="chip-vision">
                <div className="chips-container">
                    <div id="chips-header">Benefits for Phoenix Network Members</div>
                    <div className="chips">
                        <div className="fs-22 chip">
                            <img alt="" className="m-r-20" src="/img/icon_check.svg" />
                            Lowered Risk
                        </div>
                        <div className="fs-22 chip">
                            <img alt="" className="m-r-20" src="/img/icon_check.svg" />
                            Less Fees
                        </div>
                        <div className="fs-22 chip">
                            <img alt="" className="m-r-20" src="/img/icon_check.svg" />
                            Less Hassle
                        </div>
                        <div className="fs-22 chip">
                            <img alt="" className="m-r-20" src="/img/icon_check.svg" />
                            Less Research
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomeVision;