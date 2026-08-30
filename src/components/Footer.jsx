import { collectionUrl } from "../data/content";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <p className="footer-kicker">Start with the piece that makes you pause.</p>
        <h2>There is no right way<br /><i>to feel beautiful.</i></h2>
      </div>
      <a className="button button-light" href={collectionUrl} target="_blank" rel="noreferrer">Visit the collection <span aria-hidden="true">↗</span></a>
      <div className="footer-bottom">
        <span>© 2025 Veloura editorial guide</span>
        <span>For grown-up self-expression, always.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
