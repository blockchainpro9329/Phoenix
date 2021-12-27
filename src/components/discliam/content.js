import React from "react";

class Content extends React.Component {
    render() {
        return (
            <>
                <section className="c-w flex flex-col align-center" style={{ marginTop: "60px" }}>
                    <div className="disclaim-title ">
                        Disclaimer
                    </div>
                    <div className="disclaim-content" style={{ width: "75%", marginTop: "25px" }}>
                        The information shared on The Phoenix social media channels (Facebook, Twitter and Discord) and thephoenix.finance are not to be considered financial investment advice.  Any purchase in crypto currency is inherently risky especially when we’re dealing with DeFi. The purchase of FIRE tokens constitutes an investment and provides a level of risk.
                        There is no guarantee from the management team of what the price a FIRE token is or will be, all discussion of price is purely speculatory.  There is no guarantee that the management team will use FIRE funds to maintain a minimum price of the token.  The current token reward system is 0.225 FIRE per NEST per Day.  The management reserves the right to amend this should the need of the protocol require.
                        Finally, please be aware that the following factors may hinder the development of FIRE: the evolution of the crypto market and the beginning of a lasting bear market, instability, congestion, any possible bugs on the Avalanche Network, a hack that allows someone to recover (part or all) of the protocol funds despite the protocol’s security efforts, legal obstacles and changing regulations that prevent the FIRE team from completing the project, and finally technical, human, or financial failures on the DeFi yield protocols FIRE aims to work with. There is no guarantee that these situations cannot happen in the future, as they are beyond the control of the FIRE team.
                    </div>
                </section>
            </>
        );
    }
}

export default Content;