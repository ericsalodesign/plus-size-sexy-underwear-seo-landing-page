import { highlights } from "../data/content";

export default function Highlights() {
  return (
    <section className="section highlights" id="collection">
      <div className="section-intro">
        <p className="eyebrow"><span /> A closer look</p>
        <h2>Intimate pieces with a point of view.</h2>
        <p>
          Plus-size style should never be an afterthought. This collection is an invitation to choose pieces that reflect your energy, your body, and the way you want to show up.
        </p>
      </div>
      <div className="highlight-grid">
        {highlights.map((item) => (
          <article className="highlight-card" key={item.number}>
            <div className="card-image">
              <img src={item.image} alt={item.alt} loading="lazy" />
              <span className="card-number">{item.number}</span>
            </div>
            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a href="https://ericsalodesign.com/collections/mens-womens-plus-size-fashion" target="_blank" rel="noreferrer">Explore the edit <span aria-hidden="true">↗</span></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
