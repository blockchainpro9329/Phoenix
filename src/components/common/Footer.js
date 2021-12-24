
const Footer = () => {
    return (
        <footer>
            <div className="container mx-auto">

                <div className="footer-main">
                    <div className="flex align-center">
                        <img className="img-spin logo-img" src="/img/logo.png" alt="" />
                        <span id="brand-name" className="logo-title" data-nsfw-filter-status="swf">PHOENIX</span>
                    </div>
                   <div className="link-div">
                    <div className="link-container">
                        <span className="footer-link"><a href="/" className="c-w">Home</a></span>
                        <span className="footer-link"><a href="/app" className="c-w">Dapp</a></span>
                        <span className="footer-link"><a href="/disclaimer" className="c-w">Disclaimer</a></span>
                        <span className="footer-link"><a href="" className="c-w">Twitter</a></span>
                        <span className="footer-link"><a href="" className="c-w">Instagram</a></span>
                        <span className="footer-link"><a href="" className="c-w">Contact</a></span>
                    </div>
                    <div className="footer-privacy">
                        <div className="footer-link"><a href="" className="c-w">Privacy</a></div>    
                        <div className="footer-link"><a href="" className="c-w">Cookie</a></div>    
                    </div>
                   </div>

                </div>
                <div className="footer-bottom">
                    <span>2021, All Rights Reserved</span>
                    <span className="footer-bottom-privacy">
                        <a href="" className="c-w m-r-20">Privacy</a>
                        <a href="" className="c-w">Cookie</a>
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

