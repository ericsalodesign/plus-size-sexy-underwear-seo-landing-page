import { collectionUrl } from "../data/content";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />
      <div className="hero-copy">
        <p className="eyebrow"><span /> Intimate apparel for every curve</p>
        <h1>Plus-size sexy underwear, <em>made to feel like you.</em></h1>
        <p className="hero-lede">
          Discover expressive intimate layers for curvy, full-figured adults who want comfort, allure, and confidence to share the same space.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href={collectionUrl} target="_blank" rel="noreferrer">
            Explore the collection <span aria-hidden="true">↗</span>
          </a>
          <a className="text-link" href="#guide">Find your style <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-note">
          <span className="note-icon" aria-hidden="true">✦</span>
          <span>Designed around self-expression,<br />not rules about your body.</span>
        </div>
      </div>
      <div className="hero-art" aria-label="Editorial fashion image">
        <div className="image-frame">
          <img src="https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=1400" alt="Editorial black fashion styling with a confident, modern mood" />
          <div className="image-caption"><span>01 / 04</span><span>Own your presence</span></div>
        </div>
        <div className="vertical-label">CURVES · CONFIDENCE · DESIRE</div>
        <div className="orbit orbit-one" aria-hidden="true" />
        <div className="orbit orbit-two" aria-hidden="true" />
      </div>
    </section>
  );
}
