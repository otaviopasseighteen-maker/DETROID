import { ArrowDown, ArrowRight, Gauge, Menu, MoveUpRight, ShieldCheck, Sparkles } from "lucide-react";
import VehicleViewer from "./components/VehicleViewer";

const vehicles = [
  {
    name: "Lancer Evolution",
    category: "SEDAN ESPORTIVO",
    year: "Ícone JDM",
    image:
      "https://images.unsplash.com/photo-1600705722908-babf7e4b2e3b?auto=format&fit=crop&w=1200&q=85",
    tag: "DESTAQUE",
  },
  {
    name: "Pajero",
    category: "SUV 4X4",
    year: "Espírito aventureiro",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=85",
    tag: "EXPLORAR",
  },
  {
    name: "L200 Triton",
    category: "PICAPE",
    year: "Feita para ir além",
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=85",
    tag: "EXPLORAR",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#" aria-label="DETROID início">
          DETR<span>O</span>ID<span className="brand-dot">.</span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a className="nav-active" href="#inicio">Início</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#experiencia">Experiência 3D</a>
          <a href="#sobre">Sobre o DETROID</a>
        </nav>
        <a className="header-cta" href="#catalogo">Explorar veículos <ArrowUpRightIcon /></a>
        <button className="mobile-menu" aria-label="Abrir menu"><Menu size={22} /></button>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-image" role="img" aria-label="Carro esportivo em ambiente escuro" />
        <div className="hero-shade" />
        <div className="hero-content">
          <div className="eyebrow"><span className="eyebrow-line" /> O FUTURO DE ENCONTRAR SEU PRÓXIMO VEÍCULO</div>
          <h1>Mais que olhar.<br /><em>Experimente</em> o carro.</h1>
          <p>Uma nova forma de descobrir máquinas extraordinárias. Explore cada linha, cada detalhe e encontre o veículo que combina com você.</p>
          <div className="hero-actions">
            <a className="button-primary" href="#catalogo">Explorar catálogo <ArrowRight size={17} /></a>
            <a className="button-quiet" href="#experiencia"><span className="play-mark">↗</span> Descubra a experiência 3D</a>
          </div>
          <div className="hero-meta">
            <div><strong>01</strong><span>MARCA INICIAL</span></div>
            <div className="meta-divider" />
            <div><strong>MITSUBISHI</strong><span>PRIMEIRA COLEÇÃO</span></div>
          </div>
        </div>
        <div className="hero-index"><span>01</span> / 03 <div /></div>
        <a className="scroll-cue" href="#catalogo"><ArrowDown size={14} /> ROLE PARA EXPLORAR</a>
      </section>

      <section className="catalog-section section-wrap" id="catalogo">
        <div className="section-heading">
          <div>
            <div className="eyebrow dark-eyebrow"><span className="eyebrow-line" /> CURADORIA DETROID</div>
            <h2>Máquinas com <em>personalidade.</em></h2>
            <p>Uma seleção inicial inspirada na engenharia e no legado Mitsubishi.</p>
          </div>
          <a className="text-link" href="#experiencia">Como funciona <ArrowRight size={16} /></a>
        </div>
        <div className="vehicle-grid">
          {vehicles.map((vehicle, index) => (
            <article className="vehicle-card" key={vehicle.name}>
              <div className="vehicle-image" style={{ backgroundImage: `url("${vehicle.image}")` }}>
                <span className="vehicle-number">0{index + 1}</span>
                <span className="vehicle-tag">{vehicle.tag}</span>
                <button className="vehicle-open" aria-label={`Explorar ${vehicle.name}`}><ArrowUpRightIcon /></button>
              </div>
              <div className="vehicle-info">
                <div className="vehicle-category">{vehicle.category}</div>
                <h3>{vehicle.name}</h3>
                <div className="vehicle-bottom"><span>{vehicle.year}</span><span className="vehicle-arrow"><ArrowRight size={16} /></span></div>
              </div>
            </article>
          ))}
        </div>
        <p className="catalog-note"><span>*</span> Modelos apresentados como conceito de catálogo. Disponibilidade, versões e especificações deverão ser confirmadas com a loja.</p>
      </section>

      <section className="experience-section" id="experiencia">
        <VehicleViewer />
      <div className="experience-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> UMA NOVA PERSPECTIVA</div>
          <h2>Seu próximo veículo.<br /><em>Por todos os ângulos.</em></h2>
          <p>Estamos preparando uma experiência interativa para você explorar o exterior dos veículos em 3D, aproximar detalhes e conhecer cada modelo de um jeito novo.</p>
          <ul className="feature-list">
            <li><span><Sparkles size={17} /></span><div><strong>Detalhes em foco</strong><small>Observe linhas, rodas, faróis e acabamento.</small></div></li>
            <li><span><Gauge size={17} /></span><div><strong>Visão em 360°</strong><small>Explore o veículo de diferentes perspectivas.</small></div></li>
            <li><span><ShieldCheck size={17} /></span><div><strong>Informação transparente</strong><small>Ficha técnica e dados do anúncio em um só lugar.</small></div></li>
          </ul>
          <span className="coming-soon"><span /> MODELO CONCEITUAL 3D INTERATIVO</span>
        </div>
      </section>

      <section className="closing-section" id="sobre">
        <div className="closing-glow" />
        <div className="eyebrow"><span className="eyebrow-line" /> DETROID AUTOMOTIVE SHOWROOM</div>
        <h2>Encontre sua próxima<br /><em>história sobre rodas.</em></h2>
        <p>Uma marca de cada vez. Uma experiência melhor a cada etapa.</p>
        <a className="button-primary" href="#catalogo">Conheça a coleção <ArrowRight size={17} /></a>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#inicio">DETR<span>O</span>ID<span className="brand-dot">.</span></a>
        <p>Showroom digital independente. Mitsubishi é marca de seus respectivos titulares.</p>
        <span>© {new Date().getFullYear()} DETROID. CONCEITO EM DESENVOLVIMENTO.</span>
      </footer>
    </main>
  );
}

function ArrowUpRightIcon() {
  return <MoveUpRight size={16} aria-hidden="true" />;
}
