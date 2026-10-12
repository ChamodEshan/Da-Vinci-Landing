const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "947XXXXXXXX").replace(/\D/g, "");
const isConfigured = /^\d{10,15}$/.test(whatsappNumber) && !whatsappNumber.includes("XXXXXXXX");
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://your-vercel-domain.vercel.app";

function whatsappLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

const gallery = [
  {
    title: "Soft stone tones",
    category: "CALM & NATURAL",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
    alt: "Neutral-toned contemporary interior used as mosaic tile design inspiration",
  },
  {
    title: "A statement surface",
    category: "BOLD & MODERN",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",
    alt: "Modern architectural interior with carefully composed material finishes",
  },
  {
    title: "Spa-inspired spaces",
    category: "FRESH & SERENE",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
    alt: "Calm modern home interior for bathroom and spa-style tile inspiration",
  },
];

const faqs = [
  {
    q: "Where can mosaic tiles be used?",
    a: "Mosaic tiles are commonly considered for bathroom details, kitchen backsplashes, feature walls and selected pool or wet-area designs. Suitability depends on the specific product, installation system and intended use, so please confirm the technical details with our team.",
  },
  {
    q: "How do I get prices and product specifications?",
    a: "Send us an inquiry on WhatsApp and tell us which space you are planning. Our team can confirm current availability, pricing, dimensions, finishes and installation guidance for the products available.",
  },
  {
    q: "Can I get help choosing a design?",
    a: "Yes. Share a photo of your space, approximate measurements and the style you like. Ask our team which available options may suit your project.",
  },
];

export default function Home() {
  const heroMessage = "Hello Da Vinci Ceramics, I would like to enquire about the Mosaic Tile Collection.";
  const projectMessage = "Hello Da Vinci Ceramics, I would like help choosing mosaic tiles for my project.";
  const contactUrl = isConfigured ? whatsappLink(heroMessage) : "https://www.davinciceramics.com";

  return (
    <main>
      <div className="announcement">
        <span>DA VINCI CERAMICS</span>
        <span className="announcement-divider">/</span>
        <span>DESIGN YOUR SPACE, YOUR WAY</span>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Da Vinci Ceramics home">
          <span className="brand-mark" aria-hidden="true">DV</span>
          <span className="brand-copy"><strong>DA VINCI</strong><small>CERAMICS</small></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#collection">Collection</a>
          <a href="#inspiration">Inspiration</a>
          <a href="#faq">FAQs</a>
        </nav>
        <a className="header-cta" href="#contact">Enquire now <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> THE MOSAIC COLLECTION</p>
          <h1>Small details.<br /><em>Beautiful impact.</em></h1>
          <p className="hero-description">
            Bring texture, rhythm and character to your space with mosaic tile design inspiration from Da Vinci Ceramics.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#contact">Explore the collection <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#inspiration">Find your inspiration <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-note">
            <span className="note-icon" aria-hidden="true">✳</span>
            <p>For homes, hospitality and considered interiors.<br /><strong>Enquire for current designs and availability.</strong></p>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image" role="img" aria-label="Warm modern interior inspiration with natural materials">
            <div className="image-label"><span>01 / 03</span><span>FORM MEETS FEELING</span></div>
          </div>
          <div className="floating-card">
            <span className="floating-card-kicker">DESIGN NOTE 01</span>
            <strong>Make space<br />for the details.</strong>
            <span className="floating-card-arrow" aria-hidden="true">↗</span>
          </div>
          <div className="vertical-caption">MATERIAL · MOOD · MEANING</div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Collection highlights">
        <div><span className="strip-number">01</span><span>Design-led inspiration</span></div>
        <div><span className="strip-number">02</span><span>Ideas for different spaces</span></div>
        <div><span className="strip-number">03</span><span>Personal product inquiries</span></div>
      </section>

      <section className="intro section-wrap" id="collection">
        <div className="section-kicker">A NEW WAY TO SEE SURFACES <span>— 01</span></div>
        <div className="intro-grid">
          <h2>Let your walls<br />tell a <em>story.</em></h2>
          <div className="intro-copy">
            <p>Mosaic is more than a finish. It is a way to bring pattern, texture and a considered point of view into a room.</p>
            <p>Explore ideas for refreshing a bathroom, adding personality to a kitchen or creating a focal point in a hospitality space. Ask our team about the available Mosaic Collection, product details and options for your project.</p>
            <a className="underlined-link" href="#contact">Talk to our team <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section className="feature-band">
        <div className="feature-image" role="img" aria-label="Architectural material and interior design inspiration" />
        <div className="feature-copy">
          <p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> MADE FOR YOUR MOOD</p>
          <h2>Find the feeling<br />you want to <em>create.</em></h2>
          <p>From understated and natural to graphic and expressive, start with the atmosphere you want your space to have. Then ask us about the products that can help bring your idea to life.</p>
          <a className="button button-light" href="#contact">Discuss your project <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="inspiration section-wrap" id="inspiration">
        <div className="section-kicker">IDEAS TO START WITH <span>— 02</span></div>
        <div className="section-heading">
          <div><h2>A little inspiration.<br /><em>A lot of possibility.</em></h2></div>
          <p>Explore looks and spaces to help define your direction. Images are visual inspiration; contact us to confirm actual collection products and specifications.</p>
        </div>
        <div className="gallery-grid">
          {gallery.map((item, index) => (
            <article className={`gallery-card gallery-card-${index + 1}`} key={item.title}>
              {/* Remote images are used for this assessment mockup; replace with approved product photography before launch. */}
              <div className="gallery-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.alt} loading="lazy" />
                <span className="gallery-index">0{index + 1}</span>
              </div>
              <div className="gallery-meta"><span>{item.category}</span><span aria-hidden="true">↗</span></div>
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="project-steps">
        <div className="section-wrap steps-inner">
          <div className="section-kicker">LET&apos;S MAKE A PLAN <span>— 03</span></div>
          <div className="section-heading">
            <h2>Your space.<br /><em>Your next step.</em></h2>
            <p>A simple starting point for getting from an idea to a product inquiry.</p>
          </div>
          <div className="steps-grid">
            <article><span>01</span><h3>Tell us about your space</h3><p>Bathroom, kitchen, pool, feature wall or a commercial project.</p></article>
            <article><span>02</span><h3>Share your inspiration</h3><p>Send a photo, a reference image or a few words about your preferred style.</p></article>
            <article><span>03</span><h3>Ask about the collection</h3><p>Confirm current designs, pricing, specifications and availability with our team.</p></article>
          </div>
        </div>
      </section>

      <section className="faq section-wrap" id="faq">
        <div className="section-kicker">GOOD QUESTIONS <span>— 04</span></div>
        <div className="faq-grid">
          <h2>Before you<br /><em>get started.</em></h2>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.q}>
                <summary>{faq.q}<span aria-hidden="true">+</span></summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-text">
          <p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> YOUR NEXT CHAPTER STARTS HERE</p>
          <h2>Have a space<br />in <em>mind?</em></h2>
          <p>Tell us what you are planning. Ask about the Mosaic Collection, current availability and the details you need to make your next decision.</p>
          <a className="button button-light" href={contactUrl} target="_blank" rel="noreferrer">
            {isConfigured ? "Enquire on WhatsApp" : "Visit Da Vinci Ceramics"} <span aria-hidden="true">↗</span>
          </a>
          {!isConfigured && <p className="setup-warning">Setup required: add the official WhatsApp number in your Netlify environment variables.</p>}
          <p className="contact-email">Or email <a href="mailto:davinciceramics.digital@gmail.com">davinciceramics.digital@gmail.com</a></p>
        </div>
        <div className="contact-art" role="img" aria-label="Elegant neutral interior with natural material finishes">
          <div className="contact-art-label">A SPACE THAT FEELS LIKE YOU.</div>
        </div>
      </section>

      <footer className="footer">
        <a className="brand brand-footer" href="#top">
          <span className="brand-mark" aria-hidden="true">DV</span>
          <span className="brand-copy"><strong>DA VINCI</strong><small>CERAMICS</small></span>
        </a>
        <p>Design inspiration for the spaces you live in.</p>
        <div className="footer-links"><a href="#collection">Collection</a><a href="#inspiration">Inspiration</a><a href="#contact">Contact</a></div>
        <small>© {new Date().getFullYear()} Da Vinci Ceramics. Assessment concept; confirm all product information before publication.</small>
      </footer>

      <a className="mobile-whatsapp" href={contactUrl} target="_blank" rel="noreferrer" aria-label="Contact Da Vinci Ceramics">
        <span aria-hidden="true">↗</span> Enquire now
      </a>
    </main>
  );
}
