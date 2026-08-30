import { faqs } from "../data/content";

export default function FAQ() {
  return (
    <section className="section faq-section" id="faq">
      <div className="faq-heading">
        <p className="eyebrow"><span /> Questions, answered</p>
        <h2>Make your next layer feel like a yes.</h2>
      </div>
      <div className="faq-list">
        {faqs.map((item) => (
          <details key={item.question}>
            <summary>{item.question}<span aria-hidden="true">+</span></summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
