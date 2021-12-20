import React from "react";

class Faq extends React.Component {

    constructor() {
        super();
        this.state = { selId: -1 };
    }

    clickItem(index) {
        if (this.state.selId === index) {
            this.setState({ selId: -1 });
        } else {
            this.setState({ selId: index });
        }
    }


    render() {
        return (
            <section id="section-faq">
                <div className="faq-title">
                    Frequently Asked Questions
                </div>
                <div id="faq-content" className="container mx-auto">
                    <button className={this.state.selId === 1 ? "accordion active" : "accordion"} onClick={() => { this.clickItem(1) }} >What is the FIRE token ?</button>
                    <div className="panel" >
                        <p data-nsfw-filter-status="swf">
                            FIRE is a token that is designed to generate high-yield rewards for
                            you, by combining more than 30 different DeFi yield protocols.
                            <br />
                            <br />
                            This means that you will be able to take advantage of a large
                            variety of yield-generating protocols, without having to find the
                            best ones yourself and conduct due-diligence, and without having to
                            pay for the fees of each platform.
                        </p>
                    </div>

                    <button className={this.state.selId === 2 ? "accordion active" : "accordion"} onClick={() => { this.clickItem(2) }}>How to get FIRE lifetime rewards ?</button>
                    <div className="panel" >
                        <p data-nsfw-filter-status="swf">
                            FIRE uses a simple yet innovative mechanism to redistribute the
                            yield while supporting the growth of the token: the FIRE-nodes.
                            <br />
                            <br />
                            You can create a FIRE-node with 10 FIRE tokens. Once your node is
                            created, it can’t be undone and it generates
                            <span className="c-purple" data-nsfw-filter-status="swf"> lifetime returns</span> in FIRE tokens for
                            you.
                        </p>
                    </div>

                    <button className={this.state.selId === 3 ? "accordion active" : "accordion"} onClick={() => { this.clickItem(3) }}>
                        What happens to the 10 FIRE used to create a node ?
                    </button>
                    <div className="panel" >
                        <p data-nsfw-filter-status="swf">
                            When a FIRE-node is created, 7 FIRE are transferred to the rewards
                            pool, 1 FIRE is added to the liquidity pool as 50% FIRE and 50% BNB,
                            and 2 FIRE are transferred to the marketing/team wallet to ensure
                            the stabilization of the whole protocol, and the token growth.
                        </p>
                    </div>

                    <button className={this.state.selId === 4 ? "accordion active" : "accordion"} onClick={() => { this.clickItem(4) }}>
                        Which DeFi yield protocols are currently used by FIRE ?
                    </button>
                    <div className="panel" >
                        <p data-nsfw-filter-status="swf">
                            FIRE has just been launched (this means that you are still very
                            early) so our current focus is to ensure the
                            <span className="c-purple" data-nsfw-filter-status="swf"> stability and growth of FIRE</span>,
                            leveraging its powerful tokenomics designed for steady growth.
                            <br />
                            <br />
                            The next step of our roadmap is to begin navigating between
                            different DeFi yield protocols. That being said, you can receive
                            very high lifetime returns by creating FIRE-nodes.
                        </p>
                    </div>

                    <button className={this.state.selId === 5 ? "accordion active" : "accordion"} onClick={() => { this.clickItem(5) }}>
                        Why is FIRE on the Binance Smart Chain ?
                    </button>
                    <div className="panel" >
                        <p data-nsfw-filter-status="swf">
                            Our goal is to bring DeFi into the average household. Ethereum's
                            high gas fees make it impossible for most people to access the
                            Ethereum network.
                            <br />
                            <br />
                            We want FIRE to be
                            <span className="c-purple" data-nsfw-filter-status="swf"> accessible to everyone</span>, including
                            smallholders, so we chose to be on the Binance Smart Chain. However,
                            this does not prevent us from taking advantage of DeFi yield
                            protocols on Ethereum.
                        </p>
                    </div>

                    <button className={this.state.selId === 6 ? "accordion active" : "accordion"} onClick={() => { this.clickItem(6) }}>
                        Where can I buy FIRE and where can I create my FIRE-nodes ?
                    </button>
                    <div className="panel" >
                        <p data-nsfw-filter-status="swf">
                            You can easily buy FIRE on PancakeSwap by
                            <a href="https://pancakeswap.finance/swap?outputCurrency=0x521ef54063148E5F15F18B9631426175ceE23DE2" className="c-purple" style={{ textDecoration: "none" }} data-nsfw-filter-status="swf"> clicking on this link</a>.
                            <br />
                            <br />
                            The contract address of the FIRE token is : <br />
                            <b>0x521ef54063148e5f15f18b9631426175cee23de2</b>
                            <br />
                            <br />
                            You can create your FIRE-nodes and collect your FIRE rewards on our
                            web app: app.ring.financial.
                            <a href="/app" className="c-purple" style={{ textDecoration: "none" }} data-nsfw-filter-status="swf"> Click here </a>
                            to go to the web app.
                        </p>
                    </div>
                </div >
            </section >
        )
    }
}

export default Faq;