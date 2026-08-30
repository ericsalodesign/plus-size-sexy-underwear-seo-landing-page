import { collectionUrl } from "../data/content";

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Veloura home">
        <span className="brand-mark" aria-hidden="true">V</span>
        <span>VELOURA</span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#collection">The collection</a>
        <a href="#guide">Style guide</a>
        <a href="#faq">FAQ</a>
      </nav>
      <a className="header-cta" href={collectionUrl} target="_blank" rel="noreferrer">
        Browse collection <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}
