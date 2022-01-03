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
                        The information shared on The Phoenix Community Capital social media channels (Facebook, Twitter, and Discord) and thephoenix.finance are not to be considered financial investment advice.  Any purchase in crypto currency has inherent risks. The purchase of $FIRE tokens constitutes an investment and provides a level of risk. There is no $FIRE price guarantee, from the Founders or the extended management team. All discussion of price is purely speculatory.  There is no guarantee that the Founders or the extended management team will use $FIRE funds to maintain a minimum price of the token.  The current token reward system is 0.225 $FIRE per NEST per day. The Founders and extended management reserve the right to amend the rate should the need of the protocol require. Finally, please be aware that the following factors may hinder the development of $FIRE: the evolution of the crypto market and the beginning of a lasting bear market, instability, congestion, any possible bugs on the Avalanche Network, a security breach that allows someone to manipulate (part or all) of the protocol funds despite the protocol’s security efforts, legal obstacles and changing regulations that prevent the Phoenix Community Capital team from completing the project, and finally technical, human, or financial failures of the DeFi yield protocols which Phoenix Community Capital aims to invest. There is no guarantee that these situations cannot happen in the future, as they are beyond the control of the Phoenix Community Capital team.                    </div>
                </section>
            </>
        );
    }
}

export default Content;