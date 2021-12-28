
const RingNext = () => {
    return (
        <div className="what-next-container ">
            <div className="row custom-container mx-auto">
                <div className="col-md-6 col-sm-12 what-next-text-container">
                    <div>
                        <h2 className="what-next-title" style={{ marginBottom: "30px" }}> Wondering what’s next?</h2>
                        <div style={{ color: "rgb(160, 174, 192)" }}>While sitting back, relaxing, and waiting for the
                            rewards to pour in can be fun, sometimes it’s nice to be more involved. Check out the
                            different ways you can be involved with the FIRE community below!</div>
                    </div>
                    <div>
                        <div className="text-blue small-title">SHARE YOUR NEST STATS ON TWITTER</div>
                        <div>Share your FIRE-nest stats on Twitter and let the community know you’re part of the
                            FIRE Network! By doing so, you will automatically be entered into a draw to receive 5
                            FIRE tokens. <br /><span className="text-blue link-underline">Share on Twitter.</span></div>
                    </div>
                    <div>
                        <div className="text-purple small-title">JOIN US ON DISCORD</div>
                        <div>Join thousands of community members on Discord where they are helping shape the future
                            of the FIRE Network. <br /><span className="text-purple link-underline">Join FIRE
                                Discord.</span></div>
                    </div>
                    <div>
                        <div className="text-pink small-title">REPORT A BUG WITH THE WEBSITE</div>
                        <div>Help make FIRE better by reporting any issues you’ve found with the website or dApp.
                            This is also the place to report any security disclosures. <br /><a
                                href="mailto:help@ring.financial" className="text-pink link-underline">Report a bug.</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 img-container position-relative">
                    <img alt="" className="pulse-img" src="/img/ring-round-logo.svg" />
                    <img alt="" className="animation-spin" src="/img/logo-color.png"
                        style={{ position: "absolute", top: "50%", left: "50%", marginTop: "-50px", marginLeft: "-50px", height: "100px", width: "100px" }} />
                </div>
            </div>
        </div>
    )
};

export default RingNext;





