import React from "react";

class Content extends React.Component {
    render() {
        return (
            <>
                <section className="f-column f2-center" style={{ marginBottom: "35px" }}>
                    <h2>Disclaimer</h2>
                    <div style={{ fontSize: "large", width: "75%", lineHeight: "31px", marginTop: "25px" }}>
                        The information on the ring.financial and app.ring.financial websites and communications from the RING
                        Financial entity (whether on Twitter, Discord or Telegram) are not financial investment advice.
                        The purchase of $RING tokens constitutes an investment so it is inherently risky, and it is even more so as
                        an investment in a DeFi BEP-20 token. <br />
                        As such, there is no guarantee that the price of a RING token will not fall, nor can it be guaranteed that
                        the protocol money will be spent to keep the price of RING at a minimum.
                        You should also be aware that the current RING protocol parameters may vary and are estimates: the reward
                        rate of 0.556 RING per day is an estimate and may change, and the frequency of reward payments (every 4
                        hours) is an estimate but may be delayed. The 2600% APY that the protocol can bring you is an estimate and
                        not a guarantee.<br />
                        Furthermore, it is specified that the RING DeFi proprietary allocation technology is not yet functional,
                        that it is still in development phase. There is no guarantee that this technology will be finished before a
                        certain date nor that it will work as the RING team wants it to work or as the RING team currently imagines
                        it to work.<br />
                        Finally, please be aware that the following factors may hinder the development of RING: the evolution of the
                        crypto market and the beginning of a lasting bear market, instability, congestion, and possible bugs on the
                        Binance Smart Chain, a hack that allows someone to recover (part or all) of the protocol funds despite the
                        protocol’s security efforts, legal obstacles and changing regulations that prevent the RING team from
                        completing the project, and finally technical, human, or financial failures on the DeFi yield protocols RING
                        aims to work with. There is no guarantee that these situations cannot happen in the future, as they are
                        beyond the control of the RING team.
                    </div>
                </section>
            </>
        );
    }
}

export default Content;