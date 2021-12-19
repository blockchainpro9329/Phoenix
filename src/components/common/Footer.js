
const Footer = () => {
    return (
        <footer>
            <div className="container mx-auto">

                <div className="footer-main">
                    <div className="flex align-center">
                        <img className="img-spin" width="48" height="48" src="../img/logo.png" alt="" />
                        <span id="brand-name" className="logo-title" data-nsfw-filter-status="swf">PHOENIX</span>
                    </div>
                    <div className="flex1 flex justify-center">
                        <span className="footer-link"><a href="" className="c-w">Twitter</a></span>
                        <span className="footer-link"><a href="" className="c-w">Instagram</a></span>
                        <span className="footer-link"><a href="" className="c-w">Contact</a></span>
                    </div>

                </div>
                <div className="footer-bottom">
                    <span>2021, All Rights Reserved</span>
                    <span>
                        <a href="" className="c-w m-r-20">Privacy</a>
                        <a href="" className="c-w">Cookie</a>
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

