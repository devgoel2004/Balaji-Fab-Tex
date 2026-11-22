import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Menu, X, ArrowRight, ArrowUpRight, MessageCircle, Phone, MapPin, Clock, Factory, Layers3, BadgeCheck, Truck } from 'lucide-react';
import logo from './assets/logo-transparent.png';
import logoLuxury from './assets/logo-luxury.png';
import './styles.css';


const collections = [
  { title: 'Bedsheets', text: 'A wide range of prints, fabrics and sizes for every bedroom.', image: '/images/bedsheets.png', tag: 'Bedroom essentials', number: '01' },
  { title: 'Sofa Covers', text: 'Comfortable, stylish covers to refresh living spaces.', image: '/images/golden-dove.png', tag: 'Living room', number: '02' },
  { title: 'Cushion Covers', text: 'Decorative designs and colours to complete your home.', image: '/images/cusion-crystal.png', tag: 'Decor accents', number: '03' },
  { title: 'Doormats', text: 'Practical design, lasting quality, and style for every doorstep.', image: '/images/doormats.png', tag: 'Doormats', number: '04' },
  { title: 'Table Covers', text: 'Elegant design, lasting quality, and a touch of sophistication for every table.', image: '/images/table-covers.png', tag: 'Dining', number: '05' },
];
const businessPhone = '+91 9897525611';
const additionalPhone = '+91 98370 66828';
const whatsappUrl = 'https://wa.me/8791409356?text=' + encodeURIComponent('Hello Balaji Fab Tex, I am interested in your wholesale home textile products. Please share your product catalogue and details.');
const businessAddress = 'Agarsen Rd, near Sai Mandir, Market, Muradnagar, Ghaziabad, Uttar Pradesh 201206';
const mapUrl = 'https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIGCAEQRRg7MgYIAhAjGCcyCAgDEAAYFhgeMggIBBAAGBYYHjIICAUQABgWGB4yBggGEEUYPTIGCAcQRRg80gEIMzU4NWowajmoAgCwAgA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KcPf70ui9Qw5MdvpO8PvUEkf&daddr=Agarsen+Rd,+near+Sai+Mandir,+Market,+Muradnagar,+Uttar+Pradesh+201206';

const bedsheetProducts = [
  { name: 'Alankar', text: 'Luxury 3 - Piece Sets', image: '/images/Bedsheets/Alankar.png', tag: 'Jaquard', number: '01' },
  { name: 'Printed Cotton Bedsheets', text: 'Soft, breathable cotton bedsheets available in a range of everyday prints.', image: '/images/hero.jpg', tag: 'Printed cotton', number: '02' },
  { name: 'Luxury 3-Piece Sets', text: 'Coordinated bedsheet and pillow cover sets for a complete bedroom look.', image: '/images/about.jpg', tag: '3-piece set', number: '03' },
  { name: 'Wholesale Bedsheet Range', text: 'Durable and attractive designs curated for retailers, distributors and bulk buyers.', image: '/images/bedsheets.png', tag: 'Bulk orders', number: '04' },
];

function BedsheetsPage({ menuOpen, setMenuOpen, closeMenu }) {
  return (
    <div className="site-shell">
      <div className="utility-bar">
        <span>HOME TEXTILE MANUFACTURERS</span>
        <span className="utility-center">WHOLESALE · BULK ORDERS · RETAIL PARTNERS</span>
        <span className="utility-right">MADE WITH CARE <span className="gold-dot">✦</span></span>
      </div>
      <header className="header">
        <a href="/" className="brand" aria-label="Balaji Fab Tex homepage"><img src={logo} alt="Balaji Fab Tex logo" /></a>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="/#home" onClick={closeMenu}>Home</a>
          <a href="/#collections" onClick={closeMenu}>Products</a>
          <a href="/#about" onClick={closeMenu}>About Us</a>
          <a href="/#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Wholesale Enquiry</a>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
      </header>
      <main>
        <section className="bedsheets-hero">
          <div className="bedsheets-hero-copy">
            <p className="eyebrow">THE BEDROOM COLLECTION <span className="eyebrow-line"/></p>
            <h1>Comfort you can<br/><em>sleep beautifully in.</em></h1>
            <p>Explore our range of printed and jaquard bedsheets, available for wholesale, retail and bulk orders.</p>
            <p>Bedsheets with 2 pillow covers, 3-piece sets and more — designed for comfort, style and everyday use.</p>
            <a className="button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Request catalogue <ArrowUpRight size={16}/></a>
          </div>
          <div className="bedsheets-hero-image"><img src="/images/bedsheets.png" alt="Premium Balaji Fab Tex bedsheets"/></div>
        </section>
        <section className="bedsheets-catalog section">
          <div className="collections-heading">
            <p className="eyebrow centered">EXPLORE BEDSHEETS</p>
            <h2>Find your perfect <em>bedroom style</em></h2>
            <p className="collections-intro">Quality fabrics, distinctive patterns and dependable finishing.</p>
          </div>
          <div className="bedsheets-grid">
            {bedsheetProducts.map((item) => (
              <article className="bedsheet-card" key={item.number}>
                <div className="bedsheet-photo"><img src={item.image} alt={item.name}/><span>{item.tag}</span></div>
                <div className="bedsheet-details"><p>COLLECTION {item.number}</p><h3>{item.name}</h3><span>{item.text}</span><div className="bedsheet-sizes" aria-label="Available bed sizes"><span>Single Bed</span><span>Double Bed</span></div><a href={whatsappUrl} target="_blank" rel="noreferrer">Enquire now <ArrowUpRight size={15}/></a></div>
              </article>
            ))}
          </div>
        </section>
        <section className="bedsheets-contact">
          <div><p className="eyebrow light">WHOLESALE ENQUIRIES</p><h2>Need a bulk bedsheet<br/><em>collection?</em></h2></div>
          <a className="button-light" href={whatsappUrl} target="_blank" rel="noreferrer">Speak with our team <ArrowUpRight size={16}/></a>
        </section>
      </main>
      <footer className="footer"><div className="footer-top"><div className="footer-brand"><img src={logoLuxury} alt="Balaji Fab Tex brand logo"/><p>Textiles for the spaces<br/>that bring us together.</p></div><div className="footer-nav"><div><span>EXPLORE</span><a href="/#home">Home</a><a href="/#collections">Products</a><a href="/#about">About Us</a></div><div><span>CONTACT</span><a href="/#contact">Business enquiries</a><a href={`tel:${businessPhone.replaceAll(' ', '')}`}>{businessPhone}</a><a href={`tel:${additionalPhone.replaceAll(' ', '')}`}>{additionalPhone}</a></div><div className="footer-business"><span>VISIT US</span><a href={mapUrl} target="_blank" rel="noreferrer"><MapPin/>{businessAddress}</a><span className="footer-hours"><Clock/> Mon - Sat, 9am - 6pm</span></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} BALAJI FAB TEX. ALL RIGHTS RESERVED.</span><span>HOME TEXTILES · WHOLESALE & MANUFACTURING</span></div></footer>
      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp enquiry"><MessageCircle/></a>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  if (window.location.pathname === '/bedsheets') {
    return <BedsheetsPage menuOpen={menuOpen} setMenuOpen={setMenuOpen} closeMenu={closeMenu}/>;
  }
  return (
    <div className="site-shell">
      <div className="utility-bar">
        <span>HOME TEXTILE MANUFACTURERS</span>
        <span className="utility-center">WHOLESALE · BULK ORDERS · RETAIL PARTNERS</span>
        <span className="utility-right">MADE WITH CARE <span className="gold-dot">✦</span></span>
      </div>
      <header className="header">
        <a href="#home" className="brand" aria-label="Balaji Fab Tex homepage"><img src={logo} alt="Balaji Fab Tex logo" /></a>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#collections" onClick={closeMenu}>Products</a>
          <a href="#about" onClick={closeMenu}>About Us</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Wholesale Enquiry</a>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
      </header>
      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">WELCOME TO <span className="eyebrow-line"/></p>
            <h1>Welcome to<br/><em>Balaji Fab Tex.</em></h1>
            <p className="hero-description">We manufacture Jaquard bedsheets and sofa covers with care, serving homes, retailers and wholesale partners.</p>
            <div className="hero-buttons"><a className="button-primary" href="#collections">Explore Products <ArrowRight size={17}/></a><a className="button-secondary" href={whatsappUrl} target="_blank" rel="noreferrer">Get Wholesale Quote <ArrowUpRight size={16}/></a></div>
            <div className="hero-small-note"><span className="note-mark">BFT</span><span>Textile manufacturing<br/>with a focus on quality.</span></div>
          </div>
          <div className="hero-image-wrap">
            <img src="/images/hero.jpg" alt="Elegant bedroom with soft home textile styling" className="hero-image"/>
            <div className="hero-photo-shade"/>
            <div className="hero-photo-caption"><span>BALAJI FAB TEX</span><strong>Jaquard bedsheets<br/>& sofa covers.</strong><a href="#collections">Discover the range <ArrowUpRight size={15}/></a></div>
          </div>
        </section>
        <section className="trust-strip" aria-label="Business highlights">
          <div className="trust-item"><Factory/><div><strong>Manufacturing Focus</strong><span>Quality & consistency</span></div></div>
          <div className="trust-item"><Layers3/><div><strong>Wide Product Range</strong><span>Home textiles & more</span></div></div>
          <div className="trust-item"><BadgeCheck/><div><strong>Bulk Order Support</strong><span>For traders & retailers</span></div></div>
          <div className="trust-item"><Truck/><div><strong>Pan India Supply</strong><span>Reliable dispatch support</span></div></div>
        </section>
        <section className="collections section" id="collections">
          <div className="collections-heading"><p className="eyebrow centered">OUR COLLECTIONS</p><h2>Explore our <em>product range</em></h2><p className="collections-intro">Discover textile essentials selected for quality, comfort and everyday style.</p></div>
          <div className="collection-grid">{collections.map((item)=><article className="collection-card" key={item.number}><div className="collection-photo"><img src={item.image} alt={item.title}/><span className="photo-tag">{item.tag}</span><span className="photo-number">{item.number}</span><a className="round-arrow" href={item.title === 'Bedsheets' ? '/bedsheets' : '#contact'} aria-label={item.title === 'Bedsheets' ? 'Explore bedsheets' : `Enquire about ${item.title}`}><ArrowUpRight/></a></div><div className="collection-details"><h3>{item.title}</h3><p>{item.text}</p>{item.title === 'Bedsheets' && <a className="collection-explore" href="/bedsheets">Explore bedsheets <ArrowRight size={15}/></a>}</div></article>)}</div>
          <div className="collection-bottom"><span>MADE WITH CARE · BUILT ON TRUST</span><a href="#contact">Enquire about our products <ArrowRight size={16}/></a></div>
        </section>
        <section className="about-section" id="about">
          <div className="about-photo"><img src="/images/about.jpg" alt="Warm home interior with textile details"/><div className="about-seal">BALAJI<br/>FAB TEX</div></div>
          <div className="about-text"><p className="eyebrow">ABOUT BALAJI FAB TEX <span className="eyebrow-line"/></p><h2>Rooted in textiles.<br/><em>Built on trust.</em></h2><p>We bring together comfort, practical design and a commitment to dependable quality. Balaji Fab Tex works with wholesalers, retailers, distributors and businesses looking for a trusted home textile partner.</p><div className="about-points"><div><Factory/><strong>Manufacturing-led</strong><span>Focused on quality and consistency</span></div><div><Layers3/><strong>Multiple collections</strong><span>Options for different markets</span></div></div><a href="#contact" className="button-outline">Partner with us <ArrowUpRight size={16}/></a></div>
        </section>
        <section className="wholesale-band"><div className="wholesale-symbol"><Truck/></div><div className="wholesale-copy"><p className="eyebrow light">FOR WHOLESALERS & RETAILERS</p><h2>Looking for a textile<br/><em>partner you can trust?</em></h2><p>Connect with us for catalogue details, bulk orders and business enquiries.</p></div><a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-light">Let's talk business <ArrowUpRight size={17}/></a></section>
        <section className="contact-section section" id="contact"><div className="contact-copy"><p className="eyebrow">GET IN TOUCH</p><h2>Let's make something<br/><em>good together.</em></h2><p>For wholesale, retail, distribution or bulk enquiries, get in touch with our team.</p></div><div className="contact-box"><span className="contact-label">BUSINESS ENQUIRIES</span><a className="contact-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle/> Start a WhatsApp conversation <ArrowUpRight className="contact-arrow"/></a><div className="contact-meta"><div className="phone-list"><a href={`tel:${businessPhone.replaceAll(' ', '')}`}><Phone/> {businessPhone}</a><a href={`tel:${additionalPhone.replaceAll(' ', '')}`}><Phone/> {additionalPhone}</a></div><span><Factory/> Home textile manufacturer</span></div></div></section>
      </main>
      <footer className="footer"><div className="footer-top"><div className="footer-brand"><img src={logoLuxury} alt="Balaji Fab Tex brand logo"/><p>Textiles for the spaces<br/>that bring us together.</p></div><div className="footer-nav"><div><span>EXPLORE</span><a href="#home">Home</a><a href="#collections">Products</a><a href="#about">About Us</a></div><div><span>CONTACT</span><a href="#contact">Business enquiries</a><a href={`tel:${businessPhone.replaceAll(' ', '')}`}>{businessPhone}</a><a href={`tel:${additionalPhone.replaceAll(' ', '')}`}>{additionalPhone}</a><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp Enquiry</a></div><div className="footer-business"><span>VISIT US</span><a href={mapUrl} target="_blank" rel="noreferrer"><MapPin/>{businessAddress}</a><span className="footer-hours"><Clock/> Mon - Sat, 9am - 6pm</span></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} BALAJI FAB TEX. ALL RIGHTS RESERVED.</span><span>HOME TEXTILES · WHOLESALE & MANUFACTURING</span></div></footer>
      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp enquiry"><MessageCircle/></a>
    </div>
  );
}


createRoot(document.getElementById('root')).render(<App/>);
