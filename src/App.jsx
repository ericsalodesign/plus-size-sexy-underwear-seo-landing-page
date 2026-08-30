import Header from "./components/Header";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import StyleGuide from "./components/StyleGuide";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import { collectionUrl, faqs } from "./data/content";

const faqSchema = faqs.map((item) => ({
  "@type": "Question",
  name: item.question,
  acceptedAnswer: {
    "@type": "Answer",
    text: item.answer
  }
}));

export default function App() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Plus-Size Sexy Underwear",
    description:
      "A guide to expressive plus-size intimate apparel for curvy and full-figured adults.",
    url: collectionUrl,
    isPartOf: {
      "@type": "WebSite",
      name: "Veloura"
    },
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: faqSchema
    }
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <Header />
      <main>
        <Hero />
        <div className="marquee" aria-label="Plus-size style keywords">
          <span>CONFIDENCE IN EVERY CURVE</span><b>✦</b><span>INTIMATE LAYERS, UNFILTERED</span><b>✦</b><span>CONFIDENCE IN EVERY CURVE</span>
        </div>
        <Highlights />
        <StyleGuide />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
