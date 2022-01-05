
const Footer = () => {
    return (
        <footer>
            <div className="container mx-auto">
                <div className="footer-main">
                    <div className="flex align-center">
                        <img className="img-spin logo-img" src="/img/logo.png" alt="" />
                        <span id="brand-name" className="logo-title" data-nsfw-filter-status="swf">Phoenix Community Capital</span>
                    </div>
                    <div className="link-div">
                        <div className="link-container">
                            <span className="footer-link fs-30 noto-bold c-w mobile-show">Menu</span>
                            <span className="footer-link fs-20"><a className="c-gray" href="/" >Home</a></span>
                            <span className="footer-link fs-20"><a className="c-gray" href="/app" >Story</a></span>
                            <span className="footer-link fs-20"><a className="c-gray" href='mailto:help@thephoenix.finance' >Contact</a></span>
                            <span className="footer-link fs-20"><a className="c-gray" href="/app" >FAQ</a></span>
                            <span className="footer-link fs-20"><a className="c-gray" href="/app" >App</a></span>
                        </div>
                        <div className="footer-privacy">
                            <span className="footer-link fs-20 fs-30 noto-bold c-w">About</span>
                            <span className="footer-link fs-20 cursor-pointer"><a title="Please read our whitepaper" className="c-gray" onClick={() => { window.open("/docs/Phoenix Community Capital White Paper.pdf") }}>Documentation</a></span>
                            <span className="footer-link fs-20 cursor-pointer"><a title="Please read our whitepaper" className="c-gray" onClick={() => { window.open("/docs/Phoenix Community Capital White Paper.pdf") }}>Whitepaper</a></span>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-center mobile-show">
                        <div className="c-w fs-30 flex justify-center">
                            Join the Community
                        </div>
                        <div className="flex justify-center m-t-50">
                            <span className="m-r-20">
                                <a><img alt='' src='/img/bird.png' /></a>
                            </span>
                            <span>
                                <a><img alt='' src='/img/pig.png' /></a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom m-t-20 mobile-hidden">
                    <span className="copy-right">2021, All Rights Reserved</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

