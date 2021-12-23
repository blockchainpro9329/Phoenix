
const RingFooter = () => {
    return (
        <footer>
            <div className="custom-container mx-auto">
                <div>
                    <div id="footer-brand" className="f-row f2-center gap-2" style={{fontSize: "larger"}}>
                        <img alt="" className="img-spin" width="48" height="48" src="/img/logo-color.png" />
                        <span id="brand-name">FIRE</span>
                    </div>
                    <span id="copyright">© 2021 Copyright FIRE.financial</span>
                </div>
                <div id="links">
                    <div id="links">
                        <a href="/">Main</a> |
                        <a href="/disclaimer">Disclaimer</a>|
                        <a href="https://blockchainpro9329.gitbook.io/firedocs/">Docs</a>|
                        <a href="mailto:help@ring.financial">Contact</a>
                    </div>
                </div>
                <div id="links">
                    <a href="https://twitter.com/RingFinancial">Twitter</a> |
                    <a href="https://t.me/ring_financial">Telegram</a> |
                    <a href="https://discord.gg/ring">Discord</a>
                </div>
            </div>
        </footer>
    );
}

export default RingFooter;

