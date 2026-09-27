import { useMemo, useState } from "react";
import shortLogo from "./assets/ShortLogo.PNG";
import "./App.css";

const categories = [
  "All",
  "Storage Devices",
  "PC & Servers",
  "Networking Devices",
  "Motherboards",
  "Memory",
  "CPUs & Processors",
  "Cables & Adapters",
];

const products = [
  {
    id: 1,
    name: "960GB Enterprise SATA Read-Intensive SSD",
    category: "Storage Devices",
    type: "Solid State Drives",
    price: "$289.00",
    badge: "NEW",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/5/420590195/KC/NV/ID/3094787/dell-960gb-sata-6g-ssd-500x500.jpg",
    description:
      "Enterprise-grade SATA solid state drive designed for reliable data-center workloads and high availability.",
    specs: ["960GB Capacity", "SATA III", "2.5-inch", "Enterprise"],
  },
  {
    id: 2,
    name: "2U Rack Server Chassis",
    category: "PC & Servers",
    type: "Server Chassis",
    price: "$2,480.50",
    badge: "FEATURED",
    image: '/src/assets/images/category-servers.jpg',
    description:
      "Professional 2U rack server chassis with redundant power architecture for enterprise deployments.",
    specs: ["2U Rack", "800W PSU", "Redundant Power", "Hot Swap"],
  },
  {
    id: 3,
    name: "48-Port Managed Network Switch",
    category: "Networking Devices",
    type: "Switches",
    price: "$1,314.00",
    badge: "TOP",
    image:"https://cdn.prod.website-files.com/69e0036b695965871f0524ab/69e0036b695965871f0530fb_48%20Port%20PoE%2B%20L2%20Managed%20Switch.webp",
    description:
      "High-density managed switch with 48 Gigabit ports and 10G SFP+ uplinks.",
    specs: ["48 Ports", "4 × 10G SFP+", "Managed", "Enterprise"],
  },
  {
    id: 4,
    name: "32GB DDR4-3200 ECC Registered Memory",
    category: "Memory",
    type: "Server Memory",
    price: "$178.40",
    badge: "SALE",
    image:
      "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=900&q=85",
    description:
      "Reliable ECC registered server memory designed for demanding enterprise workloads.",
    specs: ["32GB", "DDR4", "3200MHz", "ECC Registered"],
  },
  {
    id: 5,
    name: "Dual Socket Server Motherboard",
    category: "Motherboards",
    type: "Server Motherboards",
    price: "Call for Price",
    badge: "",
    image:
      "https://motherboard-world.com/wp-content/uploads/2024/08/390054.jpg",
    description:
      "Enterprise motherboard supporting dual processors and high-capacity memory configurations.",
    specs: ["Dual Socket", "16 DIMM Slots", "IPMI 2.0", "Enterprise"],
  },
  {
    id: 6,
    name: "20-Core Scalable Server Processor",
    category: "CPUs & Processors",
    type: "Server CPUs",
    price: "$742.90",
    badge: "NEW",
    image:
      "https://images.unsplash.com/photo-1555617981-dac3880eac6e?auto=format&fit=crop&w=900&q=85",
    description:
      "High-performance 20-core server processor built for virtualization and enterprise workloads.",
    specs: ["20 Cores", "2.5GHz", "150W", "Server"],
  },
  {
    id: 7,
    name: "6TB 7200RPM SAS Enterprise HDD",
    category: "Storage Devices",
    type: "Internal Hard Drives",
    price: "$331.75",
    badge: "",
    image:
      "https://i.ebayimg.com/images/g/-1YAAOSw~ghoUZXL/s-l1200.webp",
    description:
      "High-capacity SAS enterprise hard drive designed for rack-mounted storage environments.",
    specs: ["6TB", "7200RPM", "SAS 12Gb/s", "3.5-inch"],
  },
  {
    id: 8,
    name: "10G SFP+ Direct Attach Copper Cable",
    category: "Cables & Adapters",
    type: "Data Cables",
    price: "$43.64",
    badge: "",
    image:
      "https://m.media-amazon.com/images/I/61XxDPfqJBL._AC_UF894,1000_QL80_.jpg",
    description:
      "High-speed direct attach copper cable for reliable 10 Gigabit networking connections.",
    specs: ["10Gbps", "SFP+", "DAC", "3 Meter"],
  },
  {
    id: 9,
    name: "16GB DDR4 ECC Server Memory",
    category: "Memory",
    type: "Server Memory",
    price: "Call for Price",
    badge: "",
    image:
      "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=900&q=85",
    description:
      "Enterprise ECC memory module suitable for compatible server platforms.",
    specs: ["16GB", "DDR4", "ECC", "Server"],
  },
  {
    id: 10,
    name: "1U Rack Server System Board",
    category: "Motherboards",
    type: "Server Motherboards",
    price: "$265.87",
    badge: "FEATURED",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHNXEhd4ClmBMPmSnhrzqoljCuivB8KRDuDiQrMOhrEtOVy9t0VERL9vo&s=10",
    description:
      "Compact enterprise server board designed for high-density 1U rack environments.",
    specs: ["1U", "Server", "Enterprise", "High Density"],
  },
  {
    id: 11,
    name: "10G Fiber Media Converter",
    category: "Networking Devices",
    type: "Network Equipment",
    price: "$1,314.41",
    badge: "",
    image:
      "https://cdn.fiberroad.com/app/uploads/2020/04/FR-2206_side-1.jpg",
    description:
      "10G media conversion solution for enterprise fiber network infrastructure.",
    specs: ["10Gbps", "Fiber", "Multimode", "Enterprise"],
  },
  {
    id: 12,
    name: "SATA Power Y-Splitter Adapter",
    category: "Cables & Adapters",
    type: "Power Cables",
    price: "$12.40",
    badge: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLtPz11Y7s3p3Egj0fgd-Sm535uh2B0wVJbjtNZdBqqZ16Fj3vcQj8ur8p&s=10",
    description:
      "Compact SATA power splitter for enterprise and workstation hardware configurations.",
    specs: ["SATA", "Power", "Y-Splitter", "6-inch"],
  },
];

function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        activeCategory === "All" || product.category === activeCategory;

      const searchMatch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase()) ||
        product.type.toLowerCase().includes(search.toLowerCase());

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search]);

  const openQuote = (productName = "") => {
    setQuoteProduct(productName);
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">

      {/* TOP BAR */}
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Enterprise IT Hardware Solutions</span>

          <div className="top-contact">
            <a href="tel:+13149129478">+1 (314) 912-9478</a>
            <a href="mailto:sales@nexteratech.com">
              sales@nexteratech.com
            </a>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <header className="navbar">
        <div className="container nav-inner">

          <a className="logo" href="#home" aria-label="Nextera home">
            <img className="brand-logo" src={shortLogo} alt="Nextera logo" />
            <span className="brand-copy">
              <strong>NextEra</strong>
              <small>TECHNOLOGIES</small>
            </span>
          </a>

          <button
            className="mobile-toggle"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            ☰
          </button>

          <nav className={mobileMenu ? "nav-links open" : "nav-links"}>
            <a href="#home" onClick={() => setMobileMenu(false)}>
              Home
            </a>

            <a href="#catalog" onClick={() => setMobileMenu(false)}>
              Products
            </a>

            <a href="#categories" onClick={() => setMobileMenu(false)}>
              Categories
            </a>

            <a href="#about" onClick={() => setMobileMenu(false)}>
              About
            </a>

            <a href="#contact" onClick={() => setMobileMenu(false)}>
              Contact
            </a>

            <button
              className="nav-quote"
              onClick={() => {
                setMobileMenu(false);
                openQuote();
              }}
            >
              Request a Quote
            </button>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-grid"></div>

        <div className="container hero-content">

          <div className="hero-copy">

            <div className="eyebrow">
              <span></span>
              ENTERPRISE TECHNOLOGY
            </div>

            <h1 className="hero-title">
              <span className="hero-title-main">
                B2B Enterprise Hardware
              </span>
              <span className="hero-title-sub">built for</span>
              <span className="hero-title-accent">mission-critical</span>
              <span className="hero-title-sub">infrastructure.</span>
            </h1>

            <p>
Servers, storage, networking, and enterprise IT components sourced for B2B businesses, data centers, and IT teams across the United States.            </p>

            <div className="hero-actions">
              <a href="#catalog" className="primary-btn">
                Explore Products
                <span>→</span>
              </a>

              <button
                className="secondary-btn"
                onClick={() => openQuote()}
              >
                Request a Quote
              </button>
            </div>

            <div className="hero-trust">
              <div>
                <strong>10K+</strong>
                <span>Parts Available</span>
              </div>

              <div>
                <strong>48H</strong>
                <span>Fast Dispatch</span>
              </div>

              <div>
                <strong>24/7</strong>
                <span>Support</span>
              </div>
            </div>

          </div>

          <div className="hero-visual">
            <div className="hero-glow"></div>

            <div className="hardware-tiles">
              <div className="tile tile-large">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw8aTS9M9B9bPdsQ1JxGrNxMUcTEGB_Ye785xYjIPh1X20gUlupwbZtE4&s=10"
                  alt="Enterprise server rack"
                />
                <span>Servers</span>
              </div>

              <div className="tile tile-stack">
                <div className="mini-tile">
                  <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=90"
                    alt="Server motherboard"
                  />
                  <span>Core Components</span>
                </div>

                <div className="mini-tile">
                  <img
                    src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=900&q=90"
                    alt="Enterprise SSD storage"
                  />
                  <span>Storage</span>
                </div>
              </div>

              <div className="tile tile-large tile-accent">
                <img
                  src="https://images.unsplash.com/photo-1555617981-dac3880eac6e?auto=format&fit=crop&w=1200&q=90"
                  alt="Networking and processing hardware"
                />
                <span>Networking</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* TRUST BAR */}
      <section className="trust-section">
        <div className="container trust-grid">

          <div className="trust-item">
            <div className="trust-icon">✓</div>
            <div>
              <strong>Tested & Verified</strong>
              <span>Enterprise-ready hardware</span>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon">↗</div>
            <div>
              <strong>Fast US Shipping</strong>
              <span>Reliable dispatch nationwide</span>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon">◈</div>
            <div>
              <strong>Enterprise Quality</strong>
              <span>Built for demanding workloads</span>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon">24</div>
            <div>
              <strong>Expert Support</strong>
              <span>Help when you need it</span>
            </div>
          </div>

        </div>
      </section>

      {/* CATEGORIES */}
      {/* <section className="categories-section" id="categories">
        <div className="container">

          <div className="section-heading">
            <div>
              <span className="section-label">WHAT WE SUPPLY</span>

              <h2>
                Infrastructure for
                <span> every workload.</span>
              </h2>
            </div>

            <p>
              From individual components to complete enterprise
              infrastructure, find the hardware your business needs.
            </p>
          </div>

          <div className="category-grid">

            {categories.slice(1).map((category, index) => (
              <button
                className="category-card"
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  document
                    .getElementById("catalog")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <div className="category-number">
                  0{index + 1}
                </div>

                <div className="category-icon">
                  {["▣", "▤", "⌁", "◉", "▥", "◈", "⌘"][index]}
                </div>

                <h3>{category}</h3>

                <span>
                  Explore category →
                </span>
              </button>
            ))}

          </div>
        </div>
      </section> */}

      {/* CATALOG */}
      <section className="catalog-section" id="catalog">
        <div className="container">

          <div className="catalog-top">

            <div>
              <span className="section-label">PRODUCT CATALOG</span>

              <h2>
                Enterprise hardware,
                <span> ready to deploy.</span>
              </h2>

              <p>
                Browse our selection of server, storage, networking and
                infrastructure components.
              </p>
            </div>

            <div className="catalog-search">
              <span>⌕</span>

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
              />
            </div>

          </div>

          {/* FILTERS */}
          <div className="filters">
            {categories.map((category) => (
              <button
                key={category}
                className={
                  activeCategory === category ? "active" : ""
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* PRODUCTS */}
          <div className="product-grid">

            {filteredProducts.map((product) => (
              <article className="product-card" key={product.id}>

                <div className="product-image">

                  {product.badge && (
                    <span className="product-badge">
                      {product.badge}
                    </span>
                  )}

                  <img src={product.image} alt={product.name} />

                  <button
                    className="quick-view"
                    onClick={() => setSelectedProduct(product)}
                  >
                    View Details
                  </button>
                </div>

                <div className="product-body">

                  <span className="product-category">
                    {product.category}
                  </span>

                  <h3>{product.name}</h3>

                  <p>{product.description}</p>

                  <div className="spec-row">
                    {product.specs.slice(0, 2).map((spec) => (
                      <span key={spec}>{spec}</span>
                    ))}
                  </div>

                 

                </div>

              </article>
            ))}

          </div>

          {filteredProducts.length === 0 && (
            <div className="no-results">
              <h3>No products found</h3>
              <p>
                Try another search term or select a different category.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
              >
                Reset Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="solutions-section">

        <div className="container solutions-container">

          <div className="solutions-image">
            <img
              src="src/assets/images/SERVER1.jpg" alt="Enterprise server rack"
            />

            <div className="image-label">
              <span></span>
              BUILT FOR BUSINESS
            </div>
          </div>

          <div className="solutions-content">

            <span className="section-label">
              COMPLETE INFRASTRUCTURE
            </span>

            <h2>
              The right hardware.
              <br />
              <span>Without the long wait.</span>
            </h2>

            <p>
              Modern businesses cannot afford infrastructure
              bottlenecks. NextEra Technologies helps IT teams source
              enterprise hardware quickly, efficiently and with
              confidence.
            </p>

            <div className="solution-list">

              <div>
                <span>01</span>
                <div>
                  <h3>Servers & Systems</h3>
                  <p>
                    Rack servers, chassis and enterprise system
                    components.
                  </p>
                </div>
              </div>

              <div>
                <span>02</span>
                <div>
                  <h3>Storage Infrastructure</h3>
                  <p>
                    SSDs, HDDs and storage components for critical
                    environments.
                  </p>
                </div>
              </div>

              <div>
                <span>03</span>
                <div>
                  <h3>Networking</h3>
                  <p>
                    Switches, adapters, cables and connectivity
                    solutions.
                  </p>
                </div>
              </div>

            </div>

            <button
              className="primary-btn"
              onClick={() => openQuote()}
            >
              Talk to Our Team →
            </button>

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section className="about-section" id="about">

        <div className="container about-grid">

          <div className="about-content">

            <span className="section-label">
              ABOUT NEXTERA
            </span>

            <h2>
              Technology that keeps
              <span> business moving.</span>
            </h2>

            <p>
              NextEra Technologies supplies enterprise hardware to
              businesses, data centers, integrators and IT teams across
              the United States.
            </p>

            <p>
              Our focus is simple: make it easier for businesses to
              source reliable infrastructure without unnecessary delays.
            </p>

            <button
              className="secondary-btn dark"
              onClick={() => openQuote()}
            >
              Work With Us →
            </button>

          </div>

          <div className="stats-grid">

            <div className="stat-card">
              <strong>10K+</strong>
              <span>Parts & Components</span>
            </div>

            <div className="stat-card">
              <strong>48H</strong>
              <span>Average Dispatch</span>
            </div>

            <div className="stat-card">
              <strong>24/7</strong>
              <span>Customer Support</span>
            </div>

            <div className="stat-card">
              <strong>USA</strong>
              <span>Business Focused</span>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="cta-section">

        <div className="cta-pattern"></div>

        <div className="container cta-content">

          <span className="section-label">
            HAVE A HARDWARE REQUIREMENT?
          </span>

          <h2>
            Tell us what you're
            <span> looking for.</span>
          </h2>

          <p>
            Send us your part number, specification or hardware
            requirement and our team will help you find the right
            solution.
          </p>

          <button
            className="primary-btn light"
            onClick={() => openQuote()}
          >
            Request a Quote →
          </button>

        </div>

      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">

        <div className="container contact-grid">

          <div className="contact-info">

            <span className="section-label">
              CONTACT OUR TEAM
            </span>

            <h2>
              Let's build your
              <span> next infrastructure.</span>
            </h2>

            <p>
              Have a specific part number or looking for a complete
              hardware solution? Send us your requirements.
            </p>

            <div className="contact-details">

              <div>
                <span>PHONE</span>
                <a href="tel:+13149129478">
                  +1 (314) 912-9478
                </a>
              </div>

              <div>
                <span>EMAIL</span>
                <a href="mailto:sales@nexteratech.com">
                  sales@nexteratech.com
                </a>
              </div>

              <div>
                <span>LOCATION</span>
                <p>United States</p>
              </div>

            </div>

          </div>

          <form
            className="quote-form"
            onSubmit={(e) => {
              e.preventDefault();

              alert(
                "Thank you! Your quote request has been received."
              );
            }}
          >

            <div className="form-heading">
              <h3>Request a Quote</h3>
              <p>
                Tell us what hardware you need.
              </p>
            </div>

            <div className="form-row">

              <input
                required
                placeholder="Full Name *"
              />

              <input
                required
                type="email"
                placeholder="Business Email *"
              />

            </div>

            <div className="form-row">

              <input
                placeholder="Company Name"
              />

              <input
                placeholder="Phone Number"
              />

            </div>

            <input
              value={quoteProduct}
              onChange={(e) => setQuoteProduct(e.target.value)}
              placeholder="Product / Part Number"
            />

            <textarea
              required
              placeholder="Tell us about your hardware requirement..."
              rows="5"
            ></textarea>

            <button
              type="submit"
              className="primary-btn form-button"
            >
              Submit Request →
            </button>

          </form>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="footer">

        <div className="container footer-grid">

          <div className="footer-brand">

            <a className="logo footer-logo" href="#home">
              <span className="logo-mark">N</span>

              <span>
                <strong>NextEra</strong>
                <small>TECHNOLOGIES</small>
              </span>
            </a>

            <p>
              Enterprise IT hardware for businesses, data centers
              and technology teams.
            </p>

            <div className="socials">
              <a href="#linkedin">in</a>
              <a href="#facebook">f</a>
              <a href="#x">X</a>
            </div>

          </div>

          <div className="footer-column">

            <h4>Products</h4>

            <a href="#catalog">Servers</a>
            <a href="#catalog">Storage</a>
            <a href="#catalog">Networking</a>
            <a href="#catalog">Memory</a>
            <a href="#catalog">Processors</a>

          </div>

          <div className="footer-column">

            <h4>Company</h4>

            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
            <a href="#contact">Request Quote</a>

          </div>

          <div className="footer-column">

            <h4>Contact</h4>

            <a href="tel:+13149129478">
              +1 (314) 912-9478
            </a>

            <a href="mailto:sales@nexteratech.com">
              sales@nexteratech.com
            </a>

            <span>
              United States
            </span>

          </div>

        </div>

        <div className="footer-bottom">
          <div className="container">
            <span>
              © 2026 NextEra Technologies. All rights reserved.
            </span>

            <span>
              Enterprise IT Hardware Solutions
            </span>
          </div>
        </div>

      </footer>

      {/* PRODUCT MODAL */}
      {selectedProduct && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProduct(null)}
        >

          <div
            className="product-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>

            <div className="modal-image">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
              />
            </div>

            <div className="modal-content">

              <span className="product-category">
                {selectedProduct.category}
              </span>

              <h2>{selectedProduct.name}</h2>

              <p>
                {selectedProduct.description}
              </p>

              <div className="modal-specs">

                {selectedProduct.specs.map((spec) => (
                  <div key={spec}>
                    ✓ {spec}
                  </div>
                ))}

              </div>

              {/* <div className="modal-price">
                {selectedProduct.price}
              </div> */}

              <button
                className="primary-btn"
                onClick={() => {
                  setSelectedProduct(null);
                  openQuote(selectedProduct.name);
                }}
              >
                Request Quote →
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default App;