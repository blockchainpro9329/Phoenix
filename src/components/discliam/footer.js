


const Footer = () => {
    return (
        <footer>
            <div className="container mx-auto">
                <div>
                    <div id="footer-brand" className="f-row f2-center gap-2" style={{ fontSize: "larger" }}>
                        <img className="img-spin" width="48" height="48" src="/img/logo-color.png" alt="" /><span id="brand-name" data-nsfw-filter-status="swf">FIRE</span>
                    </div>
                    <span id="copyright" data-nsfw-filter-status="swf">© 2021 Copyright FIRE.financial</span>
                </div>
                <div id="links">
                    <a href="/">Main</a> |
                    <a href="/app" data-nsfw-filter-status="swf">Dapp</a> |
                    <a href="https://blockchainpro9329.gitbook.io/firedocs/" data-nsfw-filter-status="swf">Docs</a>|
                    <a href="mailto:help@ring.financial" data-nsfw-filter-status="swf">Contact</a>
                </div>
                <div id="links">
                    <a href="https://twitter.com/RingFinancial" data-nsfw-filter-status="swf">Twitter</a> |<a href="https://t.me/ring_financial" data-nsfw-filter-status="swf">Telegram</a>
                    |<a href="https://discord.gg/ring" data-nsfw-filter-status="swf">Discord</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

