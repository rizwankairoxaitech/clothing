import React, {useEffect, useRef, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {motion, AnimatePresence, useMotionValueEvent, useScroll, useTransform} from 'framer-motion';
import './style.css';

const looks = [
  {
    number: '01',
    name: 'THE ORBIT SKIRT',
    note: 'VOLUME STUDY',
    headline: 'RADIAL VOLUME & SCULPTED TOP',
    lead: 'A study in radial geometry and architectural balance.',
    description: 'Sculptural powder poplin blouse with dramatic radial blouson sleeves, anchored by an origami-pleated navy twill skirt and sharp obsidian pumps.',
    fabric: 'Japanese powder poplin / structured navy twill',
    silhouette: 'Radial lantern sleeve & structured A-line volume',
    palette: [
      { name: 'Powder Blue', hex: '#bed8e8' },
      { name: 'Abyss Navy', hex: '#1b2434' },
      { name: 'Pitch Black', hex: '#121314' }
    ],
    details: 'Hand-gathered lantern cuff, concealed side zip, reinforced obi tie',
    image: '/assets/look-01-cut.png',
    products: [
      { name: 'SCULPTED POPLIN BLOUSE', price: '$620', role: 'Top', image: '/assets/product-01-top.png' },
      { name: 'ORBIT TWILL SKIRT', price: '$740', role: 'Skirt', image: '/assets/product-01-skirt.png' },
      { name: 'POINTED LEATHER PUMP', price: '$395', role: 'Footwear', image: '/assets/product-01-shoes.png' },
    ]
  },
  {
    number: '02',
    name: 'AQUA DRAPE',
    note: 'ASYMMETRY STUDY',
    headline: 'ONE-SHOULDER BIAS CASCADE',
    lead: 'Kinetic diagonal tension and whisper-light flow.',
    description: 'Whisper-weight georgette engineered on the true bias with a waterfall handkerchief drape, cinched by a contrasting lacquered black satin obi belt.',
    fabric: 'Draped silk georgette / glazed duchess satin',
    silhouette: 'Single-shoulder waterfall bias drape',
    palette: [
      { name: 'Glacial Mint', hex: '#c0e2d8' },
      { name: 'Lacquered Black', hex: '#141516' },
      { name: 'Foam White', hex: '#eef5f3' }
    ],
    details: 'Floating bias handkerchief hemline, interior corsetry reinforcement',
    image: '/assets/look-02-cut.png',
    products: [
      { name: 'ASYMMETRIC DRAPE DRESS', price: '$890', role: 'Dress', image: '/assets/product-02-dress.png' },
      { name: 'SATIN OBI BELT', price: '$220', role: 'Accessory', image: '/assets/product-02-belt.png' },
      { name: 'PATENT SLINGBACK PUMP', price: '$420', role: 'Footwear', image: '/assets/product-02-shoes.png' },
    ]
  },
  {
    number: '03',
    name: 'THE TRENCH',
    note: 'PROPORTION STUDY',
    headline: 'DECONSTRUCTED MONOLITHIC COAT',
    lead: 'Magnified outerwear softening masculine architecture.',
    description: 'Exaggerated cocoon-cut trench in dense water-repellent washed cotton with deconstructed storm flaps, draped over an ethereal smoked charcoal slip.',
    fabric: 'Washed cotton gabardine / sheer silk voile',
    silhouette: 'Dropped-shoulder cocoon raglan trench',
    palette: [
      { name: 'Sandstone', hex: '#d6cfc2' },
      { name: 'Smoked Charcoal', hex: '#2c2d2e' },
      { name: 'Warm Oatmeal', hex: '#ebe5da' }
    ],
    details: 'Carved horn buttons, convertible funnel collar, storm shield',
    image: '/assets/look-03-cut.png',
    products: [
      { name: 'OVERSIZED COTTON TRENCH', price: '$980', role: 'Outerwear', image: '/assets/product-03-coat.png' },
      { name: 'MINIMAL SATIN SHIFT', price: '$520', role: 'Dress', image: '/assets/product-03-dress.png' },
      { name: 'ANKLE-STRAP PUMP', price: '$430', role: 'Footwear', image: '/assets/product-03-shoes.png' },
    ]
  },
  {
    number: '04',
    name: 'ROSE LIQUID',
    note: 'TEXTURE STUDY',
    headline: 'FEATHER MOHAIR & LIQUID SATIN',
    lead: 'Tactile spun mohair meets molten metallic puddle.',
    description: 'Weightless hand-loomed feather yarn cropped jacket juxtaposed against elongated liquid satin trousers that pool with molten metallic grace.',
    fabric: 'Feather-spun yarn / heavy liquid satin',
    silhouette: 'Boxy crop shrug & high-rise puddle trouser',
    palette: [
      { name: 'Blush Quartz', hex: '#dec1bd' },
      { name: 'Antique Nude', hex: '#ceb6ae' },
      { name: 'Soft Pearl', hex: '#f2e9e6' }
    ],
    details: 'Blind-hem puddle cuff, concealed hook-and-eye closure',
    image: '/assets/look-04-cut.png',
    products: [
      { name: 'FEATHER CROP JACKET', price: '$1,120', role: 'Jacket', image: '/assets/product-04-jacket.png' },
      { name: 'LIQUID SATIN TROUSER', price: '$680', role: 'Pant', image: '/assets/product-04-trouser.png' },
      { name: 'NUDE POINT PUMP', price: '$390', role: 'Footwear', image: '/assets/product-04-shoes.png' },
    ]
  },
  {
    number: '05',
    name: 'PLEATED LINE',
    note: 'MOVEMENT STUDY',
    headline: 'KINETIC ACCORDION COLUMN',
    lead: 'Double-faced virgin wool poised over dynamic fluting.',
    description: 'Collarless double-faced ivory wool jacket falling cleanly over sharp sunburst accordion pleats engineered to expand dynamically with every kinetic stride.',
    fabric: 'Double-faced virgin wool / micro-pleated crepe',
    silhouette: 'Razor-cut tunic & sunburst accordion column',
    palette: [
      { name: 'Alabaster Chalk', hex: '#eeebe3' },
      { name: 'Mineral Slate', hex: '#4a5358' },
      { name: 'Pure Ivory', hex: '#faf9f5' }
    ],
    details: 'Thermal razor-cut seam finish, weighted ribbon hemline',
    image: '/assets/look-05-cut.png',
    products: [
      { name: 'COLLARLESS WOOL JACKET', price: '$760', role: 'Jacket', image: '/assets/product-05-jacket.png' },
      { name: 'PLEATED MAXI SKIRT', price: '$620', role: 'Skirt', image: '/assets/product-05-skirt.png' },
      { name: 'CLASSIC POINT PUMP', price: '$395', role: 'Footwear', image: '/assets/product-05-shoes.png' },
    ]
  }
];

const desktopSlots = [
  {x: 111, scale: 1.10, rotate: 0, blur: 2, opacity: 0},
  {x: 75, scale: 1, rotate: 0, blur: 0, opacity: 1},
  {x: 50, scale: 0.74, rotate: 0, blur: 0.7, opacity: 0.88},
  {x: 34, scale: 0.56, rotate: 0, blur: 2.4, opacity: 0.68},
  {x: 22, scale: 0.42, rotate: 0, blur: 5, opacity: 0.46},
  {x: 12, scale: 0.31, rotate: 0, blur: 8, opacity: 0.25},
];

const mobileSlots = [
  {x: 122, scale: 1.05, rotate: 0, blur: 2, opacity: 0},
  {x: 68, scale: 0.96, rotate: 0, blur: 0, opacity: 1},
  {x: 31, scale: 0.60, rotate: 0, blur: 1, opacity: 0.78},
  {x: 15, scale: 0.41, rotate: 0, blur: 3.5, opacity: 0.48},
  {x: 6, scale: 0.29, rotate: 0, blur: 7, opacity: 0.22},
  {x: -4, scale: 0.2, rotate: 0, blur: 10, opacity: 0},
];

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const mix = (from, to, amount) => from + (to - from) * amount;
const ease = value => value < 0.5 ? 4 * value * value * value : 1 - Math.pow(-2 * value + 2, 3) / 2;

function scrollPhase(progress) {
  const raw = progress * (looks.length - 1);
  if (raw >= looks.length - 1) return looks.length - 1;
  const step = Math.floor(raw);
  const local = raw - step;
  const moving = ease(clamp((local - 0.10) / 0.78, 0, 1));
  return step + moving;
}

function readSlot(relative, slots, key) {
  if (relative <= -1) return slots[0][key];
  if (relative >= 4) return slots[5][key];
  const lower = Math.floor(relative);
  const amount = relative - lower;
  const from = slots[lower + 1][key];
  const to = slots[lower + 2][key];
  return mix(from, to, amount);
}

function readOpacity(relative, slots) {
  if (relative <= -1) return 0;
  if (relative < 0) {
    const exit = -relative;
    if (exit < 0.46) return 1;
    return mix(1, 0, (exit - 0.46) / 0.54);
  }
  return readSlot(relative, slots, 'opacity');
}

function useIsMobile() {
  const [mobile, setMobile] = useState(() => window.matchMedia('(max-width: 760px)').matches);
  useEffect(() => {
    const query = window.matchMedia('(max-width: 760px)');
    const update = event => setMobile(event.matches);
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  return mobile;
}

/* Landing Screen with Centered HAJA & Loading Motion */
function LandingScreen({ onFinished }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('ALIGNING KINETIC LINES');
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const delta = Math.max(1, Math.floor((100 - prev) * 0.15) + Math.floor(Math.random() * 3));
        const next = Math.min(100, prev + delta);
        if (next < 35) setStatusText('INITIALIZING SILHOUETTES');
        else if (next < 70) setStatusText('ALIGNING KINETIC LINES');
        else if (next < 95) setStatusText('CURATING ATELIER LOOKS');
        else setStatusText('READY');
        return next;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setIsClosing(true);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  return (
    <AnimatePresence onExitComplete={onFinished}>
      {!isClosing && (
        <motion.div
          className="landing-curtain"
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: {
              duration: 1.05,
              ease: [0.77, 0, 0.175, 1], // luxury effortless sliding curtain
            }
          }}
        >
          {/* Subtle background ambient gradient */}
          <div className="landing-backdrop-pattern" />

          <div className="landing-center-box">
            <motion.span
              className="landing-collection-badge"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              SPRING — SUMMER 2026 // RUNWAY
            </motion.span>

            <motion.h1
              className="landing-brand-name"
              initial={{ opacity: 0, letterSpacing: '0.45em', y: 15 }}
              animate={{ opacity: 1, letterSpacing: '0.28em', y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              HAJA
            </motion.h1>

            <motion.div
              className="landing-rule"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />

            <motion.p
              className="landing-tagline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              ATELIER D'ART ET DE SILHOUETTE
            </motion.p>

            {/* Loading progress bar & counter */}
            <div className="landing-loader-box">
              <div className="landing-progress-bar">
                <motion.div
                  className="landing-progress-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="landing-loader-meta">
                <span className="landing-status">{statusText}</span>
                <span className="landing-counter">{String(progress).padStart(2, '0')}%</span>
              </div>
            </div>

            <button
              type="button"
              className="landing-skip-btn"
              onClick={() => setIsClosing(true)}
              aria-label="Enter runway directly"
            >
              ENTER RUNWAY →
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function RunwayModel({look, index, phase, mobile}) {
  const slots = mobile ? mobileSlots : desktopSlots;
  const left = useTransform(phase, value => `${readSlot(index - value, slots, 'x')}%`);
  const scale = useTransform(phase, value => readSlot(index - value, slots, 'scale'));
  const rotate = useTransform(phase, value => `${readSlot(index - value, slots, 'rotate')}deg`);
  const opacity = useTransform(phase, value => readOpacity(index - value, slots));
  const filter = useTransform(phase, value => `blur(${readSlot(index - value, slots, 'blur')}px)`);
  const zIndex = useTransform(phase, value => {
    const relative = index - value;
    return relative < 0 ? 80 : Math.round(70 - relative * 10);
  });

  return (
    <motion.figure className="runway-model" style={{left, opacity, filter, zIndex}}>
      <motion.div className="model-visual" style={{scale, rotate}}>
        <img src={look.image} alt={`${look.name} runway look`} draggable="false" />
      </motion.div>
    </motion.figure>
  );
}

function EditorialCard({look, direction, activeIndex, onSelectLook}) {
  const cardVariants = {
    enter: (dir) => ({
      y: dir > 0 ? 28 : -28,
      opacity: 0,
      filter: 'blur(8px)',
    }),
    center: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.52,
        ease: [0.16, 1, 0.3, 1],
        when: 'beforeChildren',
        staggerChildren: 0.05,
      },
    },
    exit: (dir) => ({
      y: dir > 0 ? -24 : 24,
      opacity: 0,
      filter: 'blur(6px)',
      transition: {
        duration: 0.32,
        ease: [0.7, 0, 0.84, 0],
      },
    }),
  };

  const itemVariants = {
    enter: { opacity: 0, y: 14 },
    center: { opacity: 1, y: 0, transition: { duration: 0.42, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.22 } },
  };

  return (
    <div className="editorial-container">
      {/* Interactive Look Tabs */}
      <div className="look-nav-tabs" aria-label="Look selector navigation">
        {looks.map((item, idx) => (
          <button
            key={item.number}
            type="button"
            className={`look-tab-btn ${idx === activeIndex ? 'active' : ''}`}
            onClick={() => onSelectLook(idx)}
            aria-label={`Jump to Look ${item.number}: ${item.name}`}
          >
            <span>LOOK {item.number}</span>
            {idx === activeIndex && (
              <motion.div
                className="look-tab-indicator"
                layoutId="activeTabUnderline"
                transition={{ type: 'spring', stiffness: 420, damping: 32 }}
              />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={look.number}
          custom={direction}
          variants={cardVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="editorial-card"
        >
          {/* Eyebrow / Study header */}
          <motion.div variants={itemVariants} className="editorial-eyebrow-row">
            <span className="eyebrow-season">SPRING — SUMMER 2026</span>
            <span className="eyebrow-sep">/</span>
            <span className="eyebrow-note">{look.note}</span>
          </motion.div>

          {/* Design Title */}
          <motion.div variants={itemVariants} className="editorial-title-box">
            <h1 className="editorial-title">{look.name}</h1>
          </motion.div>

          {/* Lead statement */}
          <motion.p variants={itemVariants} className="editorial-lead">
            {look.lead}
          </motion.p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function ProductSet({look, index, phase}) {
  const y = useTransform(phase, value => `${(index - value) * 100}%`);
  return (
    <motion.div className="product-set" style={{y}} aria-hidden={false}>
      {look.products.map(product => (
        <article className="product-card" key={product.name}>
          <button className="favorite" type="button" aria-label={`Save ${product.name}`}>♡</button>
          <img src={product.image} alt={product.name} draggable="false" />
          <div className="product-copy">
            <h3>{product.name}</h3>
            <span>{product.price}</span>
          </div>
          <button className="add-product" type="button" aria-label={`Add ${product.name}`}>+</button>
        </article>
      ))}
    </motion.div>
  );
}

function ProductRail({active, phase, progress}) {
  return (
    <aside className="product-rail" aria-label="Pieces from the current runway look">
      <div className="product-rail-head">
        <span>SHOP THE LOOK</span>
        <span>{String(active + 1).padStart(2, '0')} / {String(looks.length).padStart(2, '0')}</span>
        <motion.i style={{scaleX:progress}} />
      </div>
      <div className="product-viewport">
        {looks.map((look, index) => <ProductSet key={look.number} look={look} index={index} phase={phase} />)}
      </div>
    </aside>
  );
}

/* Post-Runway Body Section 1: Philosophy & Manifesto */
function AtelierManifesto() {
  return (
    <section className="atelier-manifesto" id="philosophy">
      <div className="manifesto-inner">
        <div className="section-eyebrow-row">
          <span className="section-num">01</span>
          <span className="section-title-label">ATELIER PHILOSOPHY</span>
          <span className="section-code">SS — 026</span>
        </div>

        <h2 className="manifesto-quote">
          “Garments conceived not as static decoration, but as living architecture responding fluidly to the body in motion.”
        </h2>

        <div className="manifesto-columns">
          <div className="manifesto-col">
            <h3 className="col-heading">KINETIC DRAPE & RADIAL GEOMETRY</h3>
            <p className="col-body">
              The SS26 collection at HAJA investigates the space between stillness and stride. Every curve, dart, and accordion pleat is engineered through high-precision computational patternmaking combined with artisanal Kyoto hand-folding. The silhouette breathes as the wearer moves, establishing a continuous dialog between weightless volume and razor-cut tailoring.
            </p>
          </div>
          <div className="manifesto-col">
            <h3 className="col-heading">METRIC OF PURITY</h3>
            <div className="manifesto-stats-grid">
              <div className="stat-card">
                <span className="stat-number">05</span>
                <span className="stat-label">ARCHITECTURAL SILHOUETTES</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">15</span>
                <span className="stat-label">INDIVIDUAL RUNWAY PIECES</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">100%</span>
                <span className="stat-label">ORGANIC & RECYCLED YARNS</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">PARIS</span>
                <span className="stat-label">KYOTO ATELIER CO-OP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Post-Runway Body Section 2: Complete Lookbook Showcase */
function CollectionLookbook({ onSelectLook }) {
  return (
    <section className="collection-showcase" id="collection">
      <div className="collection-inner">
        <div className="section-eyebrow-row">
          <span className="section-num">02</span>
          <span className="section-title-label">THE SILHOUETTE GALLERY</span>
          <span className="section-code">LOOKBOOK 01 — 05</span>
        </div>

        <div className="gallery-header-row">
          <h2 className="gallery-title">CURATED RUNWAY OVERVIEW</h2>
          <p className="gallery-lead">
            Select any silhouette to immediately summon it forward on the runway stage.
          </p>
        </div>

        <div className="gallery-grid">
          {looks.map((look, idx) => (
            <article key={look.number} className="gallery-card">
              <div className="card-top">
                <span className="card-num">LOOK {look.number}</span>
                <span className="card-study">{look.note}</span>
              </div>

              <div className="card-visual-wrapper" onClick={() => onSelectLook(idx)}>
                <img src={look.image} alt={look.name} className="card-img" />
                <button type="button" className="card-hover-overlay">
                  <span>VIEW ON RUNWAY ↑</span>
                </button>
              </div>

              <div className="card-info">
                <h3 className="card-name">{look.name}</h3>
                <span className="card-fabric">{look.fabric}</span>
                <div className="card-palette-dots">
                  {look.palette.map(c => (
                    <span key={c.name} className="card-dot" style={{ backgroundColor: c.hex }} title={c.name} />
                  ))}
                </div>
                <button
                  type="button"
                  className="card-select-link"
                  onClick={() => onSelectLook(idx)}
                >
                  EXAMINE DETAILS →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Post-Runway Body Section 3: Material & Tailoring Innovation */
function CraftAndTextiles() {
  const crafts = [
    {
      title: 'JAPANESE POWDER POPLIN',
      origin: 'Banshu, Hyogo Prefecture',
      code: 'TX-019',
      desc: 'Woven with high-twist combed cotton on antique shuttle looms, treated with cold enzymatic wash to achieve a papery, crisp hand with permanent architectural memory.',
    },
    {
      title: 'LIQUID DUCHESS SATIN',
      origin: 'Como, Italy',
      code: 'TX-084',
      desc: 'Spun with micro-denier filament silk weighted at 280g/m², possessing a high-luster molten fluidity that cascades effortlessly across the body on the true bias.',
    },
    {
      title: 'DOUBLE-FACED VIRGIN WOOL',
      origin: 'Biella, Piedmont',
      code: 'TX-302',
      desc: 'Seamless double-cloth construction bonded with microscopic silk filaments, allowing for invisible laser-cut hems and structured collarless volume.',
    },
  ];

  return (
    <section className="craft-section" id="notes">
      <div className="craft-inner">
        <div className="section-eyebrow-row">
          <span className="section-num">03</span>
          <span className="section-title-label">MATERIAL INTEGRITY</span>
          <span className="section-code">TEXTILE SCIENCE</span>
        </div>

        <div className="craft-headline-box">
          <h2 className="craft-title">ARTISANAL WEFT & ARCHITECTURAL WEAVE</h2>
          <p className="craft-intro">
            Every textile in the SS26 runway collection is custom-milled in collaboration with historic heritage mills in Banshu, Como, and Biella.
          </p>
        </div>

        <div className="craft-cards-row">
          {crafts.map((craft, i) => (
            <div key={craft.title} className="craft-card">
              <span className="craft-index">0{i + 1} // {craft.code}</span>
              <h3 className="craft-card-title">{craft.title}</h3>
              <span className="craft-origin">PROVENANCE: {craft.origin}</span>
              <p className="craft-desc">{craft.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Post-Runway Body Section 4: Private Consultation & Salon Appointments */
function PrivateAppointment() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Paris');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="appointment-section" id="atelier">
      <div className="appointment-inner">
        <div className="section-eyebrow-row">
          <span className="section-num">04</span>
          <span className="section-title-label">BESPOKE SERVICES</span>
          <span className="section-code">SALON PRIVÉ</span>
        </div>

        <div className="appointment-layout">
          <div className="appointment-copy">
            <h2 className="appointment-title">EXPERIENCE THE HAJA ATELIER</h2>
            <p className="appointment-desc">
              Private fittings and made-to-measure consultations for the SS26 collection are now available by appointment at our ateliers in Paris, Kyoto, and New York.
            </p>
            <div className="salon-locations">
              <div className="salon-item">
                <strong>PARIS</strong>
                <span>14 Rue de Castiglione, 75001</span>
              </div>
              <div className="salon-item">
                <strong>KYOTO</strong>
                <span>Gion Minamigawa, Higashiyama-ku</span>
              </div>
              <div className="salon-item">
                <strong>NEW YORK</strong>
                <span>68 Mercer Street, SoHo</span>
              </div>
            </div>
          </div>

          <div className="appointment-form-card">
            {submitted ? (
              <div className="appointment-success">
                <span className="success-icon">✓</span>
                <h3>APPOINTMENT REQUEST RECEIVED</h3>
                <p>An atelier concierge will contact you within 24 hours to confirm your private salon booking.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="appointment-form">
                <h3>REQUEST PRIVATE FITTING</h3>
                <div className="form-group">
                  <label htmlFor="salon-city">SELECT SALON LOCATION</label>
                  <select
                    id="salon-city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="form-select"
                  >
                    <option value="Paris">Paris — Rue de Castiglione</option>
                    <option value="Kyoto">Kyoto — Gion Atelier</option>
                    <option value="New York">New York — Mercer SoHo</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="salon-email">CLIENT EMAIL ADDRESS</label>
                  <input
                    type="email"
                    id="salon-email"
                    required
                    placeholder="concierge@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input"
                  />
                </div>
                <button type="submit" className="form-submit-btn">
                  CONFIRM SALON INQUIRY →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Footer in the Same Pristine White Luxury Theme */
function HajaFooter({ onScrollToTop }) {
  const [newsEmail, setNewsEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsEmail) setSubscribed(true);
  };

  return (
    <footer className="haja-footer">
      <div className="footer-inner">
        {/* Giant Watermark Brand Name */}
        <div className="footer-brand-banner">
          <span className="footer-giant-logo">HAJA</span>
        </div>

        <div className="footer-columns-grid">
          {/* Col 1: Brand details */}
          <div className="footer-col">
            <span className="footer-col-title">HAJA ATELIER</span>
            <p className="footer-col-desc">
              Contemporary high couture and architectural tailoring. Conceived in Paris and Kyoto.
            </p>
            <span className="footer-col-meta">SS26 // SERIES 026</span>
          </div>

          {/* Col 2: Navigation */}
          <div className="footer-col">
            <span className="footer-col-title">COLLECTIONS</span>
            <ul className="footer-links">
              <li><a href="#runway">SS26 Runway Lineup</a></li>
              <li><a href="#collection">Silhouette Lookbook</a></li>
              <li><a href="#philosophy">Manifesto & Philosophy</a></li>
              <li><a href="#notes">Textile Science</a></li>
              <li><a href="#atelier">Private Salon Booking</a></li>
            </ul>
          </div>

          {/* Col 3: Client Care */}
          <div className="footer-col">
            <span className="footer-col-title">CLIENT SERVICES</span>
            <ul className="footer-links">
              <li><a href="#atelier">Private Salon Fittings</a></li>
              <li><a href="#atelier">Bespoke Alterations</a></li>
              <li><a href="#">Garment Preservation</a></li>
              <li><a href="#">Complimentary White-Glove Delivery</a></li>
              <li><a href="#">Client Concierge</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="footer-col">
            <span className="footer-col-title">ATELIER DISPATCH</span>
            <p className="footer-col-desc">
              Receive private invitations to runway previews and trunk shows.
            </p>
            {subscribed ? (
              <span className="footer-sub-success">✓ REGISTERED WITH ATELIER</span>
            ) : (
              <form onSubmit={handleSubscribe} className="footer-newsletter-form">
                <input
                  type="email"
                  required
                  placeholder="Enter email..."
                  value={newsEmail}
                  onChange={(e) => setNewsEmail(e.target.value)}
                  className="footer-input"
                />
                <button type="submit" className="footer-btn">→</button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="footer-subrow">
          <span className="footer-copy">© 2026 HAJA ATELIER. ALL RIGHTS RESERVED.</span>
          <div className="footer-legal-links">
            <a href="#">PRIVACY POLICY</a>
            <a href="#">TERMS OF USE</a>
            <a href="#">SUSTAINABILITY CHARTER</a>
          </div>
          <button type="button" onClick={onScrollToTop} className="back-to-top-btn">
            BACK TO TOP ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [landingDone, setLandingDone] = useState(false);
  const experience = useRef(null);
  const mobile = useIsMobile();
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const lastActive = useRef(0);

  const {scrollYProgress} = useScroll({target:experience, offset:['start start','end end']});
  const phase = useTransform(scrollYProgress, scrollPhase);

  useMotionValueEvent(phase, 'change', value => {
    const next = clamp(Math.round(value), 0, looks.length - 1);
    if (next !== lastActive.current) {
      setDirection(next > lastActive.current ? 1 : -1);
      lastActive.current = next;
      setActive(next);
    }
  });

  const scrollToLook = (index) => {
    if (!experience.current) return;
    const maxScroll = experience.current.scrollHeight - window.innerHeight;
    const target = (index / (looks.length - 1)) * maxScroll;
    window.scrollTo({ top: target, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentLook = looks[active];

  return (
    <div className="haja-root-container">
      {/* Landing Preloader / Moving Curtain from Bottom to Top */}
      {!landingDone && (
        <LandingScreen onFinished={() => setLandingDone(true)} />
      )}

      {/* Main Dashboard Experience */}
      <main className="dashboard-content">
        <header className="topbar">
          <a href="#runway" className="brand" aria-label="HAJA Home">HAJA</a>
          <nav aria-label="Primary navigation">
            <a href="#runway">RUNWAY</a>
            <a href="#philosophy">PHILOSOPHY</a>
            <a href="#collection">LOOKBOOK</a>
            <a href="#notes">TEXTILES</a>
            <a href="#atelier">SALON</a>
          </nav>
          <span className="season-code">SS / 026</span>
        </header>

        {/* Scrollable 5-Look Runway Experience */}
        <div ref={experience} className="experience">
          <section className="stage">
            <div className="runway" id="runway">
              {/* Motionly animated respective clothing content */}
              <EditorialCard
                look={currentLook}
                direction={direction}
                activeIndex={active}
                onSelectLook={scrollToLook}
              />

              {/* 3D Runway lineup */}
              <div className="lineup" aria-label="Scroll-driven runway lineup">
                {looks.map((look, index) => (
                  <RunwayModel
                    key={look.number}
                    look={look}
                    index={index}
                    phase={phase}
                    mobile={mobile}
                  />
                ))}
              </div>

              {/* Bottom dynamic look counter and title with motion */}
              <div className="look-label">
                <span>LOOK</span>
                <div className="look-ticker-wrapper">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.strong
                      key={currentLook.number}
                      initial={{ y: direction > 0 ? 36 : -36, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: direction > 0 ? -36 : 36, opacity: 0 }}
                      transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {currentLook.number}
                    </motion.strong>
                  </AnimatePresence>
                </div>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentLook.name}
                    className="look-active-name"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 12 }}
                    transition={{ duration: 0.32 }}
                  >
                    — {currentLook.name}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Directional navigation controls */}
              <div className="direction">
                <div className="step-nav-buttons">
                  <button
                    type="button"
                    className="step-btn"
                    disabled={active === 0}
                    onClick={() => scrollToLook(Math.max(0, active - 1))}
                    aria-label="Previous look"
                  >
                    ↑
                  </button>
                  <button
                    type="button"
                    className="step-btn"
                    disabled={active === looks.length - 1}
                    onClick={() => scrollToLook(Math.min(looks.length - 1, active + 1))}
                    aria-label="Next look"
                  >
                    ↓
                  </button>
                </div>
                <span className="scroll-cue">SCROLL</span>
                <i>↓</i>
              </div>

              <div className="floor-line" />
            </div>

            <ProductRail active={active} phase={phase} progress={scrollYProgress} />
          </section>
        </div>

        {/* Post-Runway Body Sections */}
        <AtelierManifesto />
        <CollectionLookbook onSelectLook={scrollToLook} />
        <CraftAndTextiles />
        <PrivateAppointment />

        {/* Global Footer */}
        <HajaFooter onScrollToTop={scrollToTop} />
      </main>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
