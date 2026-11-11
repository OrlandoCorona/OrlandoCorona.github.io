import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Network,
  Sparkles,
  TerminalSquare,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { CertificationProject } from "@/components/certification-project";
import profilePhotoAsset from "@/assets/profile-photo.png.asset.json";
import cvAsset from "@/assets/cv-meneses-general-es.pdf.asset.json";
import elArcaLoginAsset from "@/assets/el-arca-login.png.asset.json";
import binanceEquityAsset from "@/assets/binance-equity-curve.png.asset.json";
import callmeVolumeAsset from "@/assets/callmemaybe-llamadas-dia.png.asset.json";

const links = {
  linkedin: "https://www.linkedin.com/in/carlos-orlando-meneses-corona-da/",
  github: "https://github.com/OrlandoCorona",
  portfolio: "https://orlandocorona.github.io/",
  tableau: "https://public.tableau.com/app/profile/carlos.orlando.meneses.corona",
  email: "mailto:menesescoronacarlosorlando@gmail.com",
  phone: "tel:+522207763876",
};

const navigation = [
  ["Inicio", "#inicio"],
  ["Sobre mí", "#sobre-mi"],
  ["Experiencia", "#experiencia"],
  ["Habilidades", "#habilidades"],
  ["Proyectos", "#proyectos"],
  ["Contacto", "#contacto"],
] as const;

const metrics = [
  { value: "1,092", label: "Operadores analizados" },
  { value: "43,817", label: "Registros procesados en ETL" },
  { value: "7", label: "Proyectos de datos" },
  { value: "99.3%", label: "Percentil en estrategia de pipeline" },
];

const education = [
  {
    title: "Ingeniería en Tecnologías de la Información y la Comunicación",
    place: "Universidad Politécnica de Tlaxcala",
    detail: "Estudios: septiembre 2021 – febrero 2025 · Título expedido: febrero de 2026",
  },
  {
    title: "Curso Intensivo de Análisis de Datos",
    place: "TripleTen",
    detail: "Agosto 2025 – marzo 2026 · Finalizado y certificado · Folio: 202601DAES0003848",
  },
  { title: "Técnico en Electricidad", place: "", detail: "" },
];

const training = [
  { title: "CCNA: Introducción a las redes", place: "Cisco Networking Academy", detail: "Julio 2024" },
  { title: "CCNA: Switching, Routing, and Wireless Essentials", place: "Cisco Networking Academy", detail: "Diciembre 2024" },
  { title: "CCNA: Redes Empresariales, Seguridad y Automatización", place: "Cisco Networking Academy", detail: "Febrero 2025" },
  { title: "NDG Linux Unhatched", place: "Cisco Networking Academy", detail: "Febrero 2024" },
];

const experience = [
  {
    company: "El Arca Restaurante Bar",
    role: "Gerente de Operaciones",
    period: "abril 2024 – junio de 2026",
    points: [
      "Gestioné la operación y los horarios de hasta 20 personas.",
      "Controlé compras, ventas, inventarios y cerca de 25 proveedores.",
      "Analicé más de 7 años de datos (2017–2026) e identifiqué fugas que apoyaron una reducción estimada del 15% en gastos recurrentes.",
      "Diseñé el marketing digital, 4 ciclos anuales de cartas menú y eventos.",
      "Mantuve el POS y los reportes diarios, semanales y mensuales.",
    ],
  },
  {
    company: "El Arca Restaurante Bar",
    role: "Soporte Técnico y Operaciones",
    period: "enero 2022 – abril 2024",
    points: [
      "Administré el POS sobre SQL Server y Visual FoxPro y sus reportes.",
      "Desarrollé la web con PHP, PostgreSQL y Docker, con más de 300 commits en Git.",
      "Monté 2 servidores y la red, hice la instalación eléctrica y más de 25 reparaciones sobre 3 equipos.",
    ],
  },
  {
    company: "Servicios técnicos independientes",
    role: "Autónomo",
    period: "2024 – actualidad",
    points: [
      "Diagnóstico y reparación de tarjetas electrónicas, soporte técnico e instalaciones eléctricas.",
      "En Escuela de Manejo JG instalé la red con repetidores y cámaras conectadas a un servidor local, y creé un sistema propio de registro de ventas para la escuela de manejo, el estacionamiento y el restaurante.",
    ],
  },
];

const skills = [
  {
    title: "Datos & Analítica",
    icon: Database,
    description: "Del dato crudo a una conclusión estadísticamente sustentada.",
    items: [
      "SQL · PostgreSQL · MySQL · SQL Server",
      "Python · Pandas · NumPy · SciPy",
      "ETL · EDA · Estadística",
      "Pruebas estadísticas · Pruebas A/B",
    ],
  },
  {
    title: "BI & Visualización",
    icon: BarChart3,
    description: "Información compleja convertida en decisiones fáciles de leer.",
    items: ["Power BI · DAX · Power Query", "Tableau", "Excel", "Streamlit · Plotly · Dash", "Matplotlib · Seaborn"],
  },
  {
    title: "Herramientas",
    icon: TerminalSquare,
    description: "Flujos reproducibles, documentados y listos para colaborar.",
    items: ["Git · GitHub", "Jupyter Notebook · Google Colab", "Línea de comandos", "Visual FoxPro", "Redes"],
  },
  {
    title: "Conocimientos básicos",
    icon: Code2,
    description: "Bases que sigo fortaleciendo.",
    items: ["Docker", "Linux", "Java · Spring Boot"],
  },
];

type Project = {
  index: string;
  title: string;
  description: string;
  result: string;
  tags: string[];
  featured?: boolean;
  image?: { src: string; alt: string; caption?: string };
  links: { label: string; href: string; kind: "app" | "code" }[];
};

const projects: Project[] = [
  {
    index: "01",
    title: "CallMeMaybe — Desempeño de operadores",
    description:
      "Proyecto final del Curso Intensivo de Análisis de Datos de TripleTen. Análisis de telefonía virtual para identificar operadores con indicadores de bajo desempeño. Incluye pruebas estadísticas y dos dashboards en Tableau.",
    result: "1,092 operadores evaluados con métricas de llamadas perdidas, espera y volumen saliente.",
    tags: ["Python", "Pandas", "SciPy", "Tableau", "Estadística"],
    featured: true,
    image: {
      src: callmeVolumeAsset.url,
      alt: "Gráfico de barras en Tableau del volumen de llamadas por día del proyecto CallMeMaybe",
      caption: "Volumen de llamadas por día. Permite explorar cómo cambia el volumen de llamadas y filtrar entre llamadas internas y externas.",
    },
    links: [
      {
        label: "Dashboard 1",
        href: "https://public.tableau.com/app/profile/carlos.orlando.meneses.corona/viz/CallMeMaybe-Operadoresineficaces/Dashboard1",
        kind: "app",
      },
      {
        label: "Dashboard 2",
        href: "https://public.tableau.com/app/profile/carlos.orlando.meneses.corona/viz/CallMeMaybe-Operadoresineficaces/Dashboard2",
        kind: "app",
      },
      {
        label: "Código",
        href: "https://github.com/OrlandoCorona/callmemaybe-operators-analysis",
        kind: "code",
      },
    ],
  },
  {
    index: "02",
    title: "Binance Crypto ETL Pipeline",
    description:
      "Pipeline ETL que extrae datos de mercado y valida su calidad, con backtesting de estrategias y un dashboard en Power BI.",
    result: "43,817 registros procesados y una estrategia situada en el percentil 99.3%.",
    tags: ["Python", "PostgreSQL", "ETL", "Docker", "Power BI"],
    image: {
      src: binanceEquityAsset.url,
      alt: "Curva de equity acumulada por estrategia frente a buy & hold y drawdown anual de cada estrategia",
      caption: "Suma de equity por fecha de cada estrategia de retención frente a buy & hold, y drawdown anual de cada estrategia.",
    },
    links: [
      { label: "Código", href: "https://github.com/OrlandoCorona/binance-crypto-pipeline", kind: "code" },
    ],
  },
  {
    index: "03",
    title: "Sistema Web “El Arca”",
    description:
      "Desarrollé un sistema web para gestionar reservas, catálogo y contacto de un restaurante, con PHP, PostgreSQL y Docker.",
    result: "Producto funcional desplegado en línea y respaldado por un repositorio público.",
    tags: ["Web", "Base de datos", "UX", "Despliegue"],
    image: {
      src: elArcaLoginAsset.url,
      alt: "Pantalla de inicio de sesión del sistema web El Arca",
      caption: "Inicio de sesión del sistema web para gestionar reservas, catálogo y contacto de un restaurante, desplegado en Render.",
    },
    links: [
      { label: "App en vivo", href: "https://arca-jv4f.onrender.com", kind: "app" },
      {
        label: "Código",
        href: "https://github.com/OrlandoCorona/el-arca-restaurant-system",
        kind: "code",
      },
    ],
  },
  {
    index: "04",
    title: "Megaline — Ingresos por plan",
    description:
      "Comparación del comportamiento de clientes de telecomunicaciones para determinar qué tarifa genera mayores ingresos.",
    result: "Hipótesis contrastadas para comparar planes y mercados con evidencia estadística.",
    tags: ["Python", "Pandas", "NumPy", "SciPy"],
    links: [
      {
        label: "Código",
        href: "https://github.com/OrlandoCorona/megaline-telecom-revenue-analysis",
        kind: "code",
      },
    ],
  },
  {
    index: "05",
    title: "Chicago — Viajes en taxi",
    description:
      "Consultas y análisis de datos de movilidad para estudiar compañías, barrios, clima y duración de trayectos.",
    result: "SQL y pruebas de hipótesis aplicadas a patrones reales de transporte urbano.",
    tags: ["SQL", "Python", "Estadística", "EDA"],
    links: [
      {
        label: "Código",
        href: "https://github.com/OrlandoCorona/chicago-rideshare-sql-analysis",
        kind: "code",
      },
    ],
  },
  {
    index: "06",
    title: "Dashboard de anuncios de autos",
    description:
      "Aplicación interactiva para explorar precios, kilometraje y distribución del inventario de vehículos usados.",
    result: "Filtros y visualizaciones dinámicas disponibles en una aplicación web pública.",
    tags: ["Streamlit", "Plotly", "Python", "Pandas"],
    links: [
      { label: "App en vivo", href: "https://proyecto-sprint7-zsy8.onrender.com/", kind: "app" },
      {
        label: "Código",
        href: "https://github.com/OrlandoCorona/vehicle-ads-dashboard",
        kind: "code",
      },
    ],
  },
  {
    index: "07",
    title: "Mercado de videojuegos",
    description:
      "Estudio histórico de ventas, plataformas, géneros y reseñas para identificar patrones de éxito comercial.",
    result: "Segmentación regional y evaluación de hipótesis sobre calificaciones y plataformas.",
    tags: ["Python", "Pandas", "SciPy", "Visualización"],
    links: [
      {
        label: "Código",
        href: "https://github.com/OrlandoCorona/videogame-sales-analysis",
        kind: "code",
      },
    ],
  },
];

function ExternalLinkButton({ href, children, variant = "outline" }: { href: string; children: React.ReactNode; variant?: "default" | "outline" | "ghost" }) {
  return (
    <Button asChild variant={variant} size="lg">
      <a href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    </Button>
  );
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-shell min-h-screen overflow-x-hidden bg-background text-foreground">
      <a href="#contenido" className="skip-link">Saltar al contenido</a>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#inicio" className="group flex items-center gap-3" aria-label="Ir al inicio">
            <span className="flex size-9 items-center justify-center rounded-md border border-primary/50 bg-primary/15 font-mono text-sm font-bold text-accent-foreground transition-colors group-hover:bg-primary/25">CM</span>
            <span className="hidden text-sm font-semibold text-foreground sm:block">Carlos Meneses</span>
          </a>
          <nav aria-label="Navegación principal" className="hidden items-center gap-1 md:flex">
            {navigation.map(([label, href]) => (
              <a key={href} href={href} className="nav-link rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">{label}</a>
            ))}
          </nav>
          <Button asChild size="sm" className="hidden md:inline-flex">
            <a href={links.email}><Mail /> Hablemos</a>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav aria-label="Navegación móvil" className="border-t border-border bg-background px-5 py-4 md:hidden">
            {navigation.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="block border-b border-border/60 py-3 text-sm text-muted-foreground last:border-0">{label}</a>
            ))}
          </nav>
        )}
      </header>

      <main id="contenido">
        <section id="inicio" className="relative flex min-h-[92vh] scroll-mt-20 items-center pt-24">
          <div className="data-grid absolute inset-0" aria-hidden="true" />
          <div className="network-lines absolute inset-0 opacity-50" aria-hidden="true">
            <i className="node node-a" /><i className="node node-b" /><i className="node node-c" /><i className="node node-d" /><i className="node node-e" />
          </div>
          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_.8fr] lg:py-20">
            <div className="max-w-4xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase text-accent-foreground">
                <span className="size-1.5 rounded-full bg-signal shadow-[0_0_12px_var(--signal)]" /> Disponible para oportunidades
              </div>
              <p className="mb-4 font-mono text-sm text-muted-foreground">Hola, soy</p>
              <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">Carlos Orlando<br /><span className="text-gradient">Meneses Corona</span></h1>
              <p className="mt-6 text-xl font-semibold text-foreground sm:text-2xl">Data Analyst JR <span className="text-primary">|</span> BI Analyst JR <span className="text-primary">|</span> Reporting Analyst JR</p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">SQL, Python, Power BI y Tableau.</p>
              <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground"><MapPin className="size-4 text-primary" /> Tlaxcala, México <span className="text-border">·</span> Remoto o híbrido; presencial en Tlaxcala <span className="text-border">·</span> Inglés intermedio (A2–B1) <span className="text-border">·</span> Disponibilidad inmediata</div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg"><a href="#proyectos">Ver proyectos <ArrowDown /></a></Button>
                <ExternalLinkButton href={links.linkedin}><Linkedin /> LinkedIn</ExternalLinkButton>
                <ExternalLinkButton href={links.github}><Github /> GitHub</ExternalLinkButton>
                <Button asChild variant="ghost" size="lg"><a href={cvAsset.url} download="CV_Carlos_Meneses.pdf"><Download /> Descargar CV</a></Button>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-sm lg:justify-self-end" aria-label="Foto de perfil de Carlos Meneses">
              <div className="portrait-frame relative aspect-[4/5] overflow-hidden rounded-lg border border-primary/40 bg-card shadow-2xl">
                <img
                  src={profilePhotoAsset.url}
                  alt="Carlos Orlando Meneses Corona - Data Analyst Jr · BI Analyst"
                  className="h-full w-full object-cover object-[25%_center]"
                  loading="eager"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/90 to-transparent" />
              </div>
              <div className="absolute -bottom-5 -left-5 hidden rounded-md border border-border bg-card px-4 py-3 shadow-xl sm:block"><p className="text-xs text-muted-foreground">Enfoque</p><p className="mt-1 text-sm font-semibold">Datos → Decisiones</p></div>
            </div>
          </div>
        </section>

        <section aria-label="Resultados destacados" className="border-y border-border bg-card/45">
          <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 sm:px-8 lg:grid-cols-4">
            {metrics.map((metric) => <div key={metric.label} className="metric-cell py-8 text-center lg:text-left"><strong className="block font-mono text-3xl text-foreground sm:text-4xl">{metric.value}</strong><span className="mt-2 block text-xs leading-5 text-muted-foreground sm:text-sm">{metric.label}</span></div>)}
          </div>
        </section>

        <section id="sobre-mi" className="scroll-mt-18 py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.7fr_1.3fr]" data-reveal>
            <SectionLabel number="01" label="Sobre mí" />
            <div>
              <h2 className="max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">Rigor analítico para responder <span className="text-gradient">preguntas reales.</span></h2>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-muted-foreground">Soy Orlando, ingeniero en Tecnologías de la Información y la Comunicación. Busco un puesto junior en análisis de datos, análisis de negocio o reportes. Trabajo con SQL, Python, Tableau y Power BI para preparar información, analizar resultados y crear dashboards. Completé el Curso Intensivo de Análisis de Datos de TripleTen. Mis proyectos incluyen CallMeMaybe, un pipeline de datos de Binance, una aplicación de anuncios de vehículos con Streamlit y dashboards en Tableau Public. Tengo experiencia en operaciones, soporte técnico y sistemas internos. Inglés intermedio (A2–B1). Disponibilidad inmediata.</p>
              <h3 className="mt-12 flex items-center gap-2 text-xl font-semibold"><GraduationCap className="size-5 text-primary" /> Estudios</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {education.map((e) => <InfoCard key={e.title} {...e} />)}
              </div>
              <h3 className="mt-12 flex items-center gap-2 text-xl font-semibold"><Network className="size-5 text-signal" /> Formación complementaria</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {training.map((e) => <InfoCard key={e.title} {...e} accent />)}
              </div>
            </div>
          </div>
        </section>

        <section id="experiencia" className="scroll-mt-18 border-t border-border py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.7fr_1.3fr]" data-reveal>
            <SectionLabel number="02" label="Experiencia" />
            <div className="grid gap-5">
              {experience.map((entry) => (
                <article key={`${entry.company}-${entry.role}`} className="border border-border bg-card p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold sm:text-2xl">{entry.company}</h3>
                      <p className="mt-1 text-primary">{entry.role}</p>
                    </div>
                    <span className="font-mono text-sm text-muted-foreground">{entry.period}</span>
                  </div>
                  <ul className="mt-5 list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                    {entry.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="habilidades" className="scroll-mt-18 border-y border-border bg-section py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8" data-reveal>
            <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]"><SectionLabel number="03" label="Habilidades" /><div><h2 className="text-3xl font-bold sm:text-5xl">Mi stack de análisis</h2><p className="mt-4 max-w-2xl leading-7 text-muted-foreground">Herramientas elegidas según la pregunta, no al revés.</p></div></div>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {skills.map(({ title, icon: Icon, description, items }) => (
                <article key={title} className="skill-card group border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60">
                  <div className="flex size-11 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><Icon className="size-5" /></div>
                  <h3 className="mt-6 text-xl font-semibold">{title}</h3><p className="mt-3 min-h-12 text-sm leading-6 text-muted-foreground">{description}</p>
                  <ul className="mt-6 space-y-3">{items.map((item) => <li key={item} className="flex gap-3 text-sm text-foreground"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-signal" />{item}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="proyectos" className="scroll-mt-18 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8" data-reveal>
            <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]"><SectionLabel number="04" label="Proyectos" /><div><h2 className="text-3xl font-bold sm:text-5xl">Datos que terminan en <span className="text-gradient">resultados.</span></h2><p className="mt-4 max-w-2xl leading-7 text-muted-foreground">Una selección de análisis, pipelines y productos construidos de principio a fin.</p><Button asChild size="lg" className="mt-6"><a href={links.tableau} target="_blank" rel="noreferrer"><BarChart3 /> Mis dashboards en Tableau Public</a></Button></div></div>
            <div className="mt-14 grid gap-5 lg:grid-cols-2">
              <CertificationProject />
              {projects.map((project) => <ProjectCard key={project.index} project={project} />)}
            </div>
          </div>
        </section>

        <section id="contacto" className="relative scroll-mt-18 overflow-hidden border-t border-border bg-section py-24 sm:py-32">
          <div className="data-grid absolute inset-0 opacity-50" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.7fr_1.3fr]" data-reveal>
            <SectionLabel number="05" label="Contacto" />
            <div>
              <p className="font-mono text-sm text-primary">¿Tienes un reto de datos?</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">Convirtámoslo en una decisión clara.</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">Estoy abierto a oportunidades junior, proyectos de Business Intelligence y colaboraciones remotas.</p>
              <Button asChild size="lg" className="mt-8"><a href={links.email}><Mail /> Enviar un correo</a></Button>
              <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <ContactLink href={links.tableau} icon={BarChart3} label="Tableau Public" />
                <ContactLink href={links.linkedin} icon={Linkedin} label="LinkedIn" />
                <ContactLink href={links.github} icon={Github} label="GitHub" />
              </div>
              <p className="mt-8 break-all font-mono text-xs text-muted-foreground">menesescoronacarlosorlando@gmail.com · <a href={links.phone} className="hover:text-primary">+52 220 776 3876</a></p>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-border bg-background"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8"><p>© 2026 Carlos Orlando Meneses Corona</p><p>Data Analyst Jr · BI Analyst · Tlaxcala, México</p></div></footer>
    </div>
  );
}

function SectionLabel({ number, label }: { number: string; label: string }) {
  return <div className="flex items-start gap-3 font-mono text-xs uppercase text-muted-foreground"><span className="text-primary">{number}</span><span className="mt-1 h-px w-8 bg-border" /><span>{label}</span></div>;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card group relative flex flex-col overflow-hidden border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/70 sm:p-8 ${project.featured ? "border-primary/60 lg:col-span-2 lg:grid lg:grid-cols-[.8fr_1.2fr] lg:gap-12" : "border-border"}`}>
      {project.featured && <div className="mb-7 lg:mb-0"><div className="inline-flex items-center gap-2 rounded-full border border-signal/40 bg-signal/10 px-3 py-1.5 text-xs font-semibold uppercase text-signal"><Sparkles className="size-3.5" /> Proyecto final · Curso Intensivo de Análisis de Datos</div>{project.image && <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-background/50"><img src={project.image.src} alt={project.image.alt} loading="lazy" className="aspect-video w-full object-contain" />{project.image.caption && <figcaption className="border-t border-border px-4 py-3 text-xs leading-5 text-muted-foreground">{project.image.caption}</figcaption>}</figure>}<div className="mt-8 hidden font-mono text-8xl font-bold text-primary/15 lg:block">01</div></div>}
      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-4"><span className="font-mono text-sm text-primary">{project.index}</span>{!project.featured && <Code2 className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />}</div>
        {project.image && !project.featured && (
          <figure className="mt-5 overflow-hidden rounded-lg border border-border bg-background/50">
            <img src={project.image.src} alt={project.image.alt} loading="lazy" className="aspect-video w-full object-contain" />
            {project.image.caption && <figcaption className="border-t border-border px-4 py-3 text-xs leading-5 text-muted-foreground">{project.image.caption}</figcaption>}
          </figure>
        )}
        <h3 className="mt-5 text-xl font-semibold sm:text-2xl">{project.title}</h3>
        <p className="mt-4 leading-7 text-muted-foreground">{project.description}</p>
        <p className="mt-5 border-l-2 border-primary pl-4 text-sm leading-6"><strong>{project.result}</strong></p>
        <div className="mt-6 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-sm border border-border bg-secondary px-2.5 py-1 font-mono text-[11px] text-muted-foreground">{tag}</span>)}</div>
        <div className="mt-8 flex flex-wrap gap-3">
          {project.links.map((link) => <Button key={link.href} asChild variant={link.kind === "app" ? "default" : "outline"} size="sm"><a href={link.href} target="_blank" rel="noreferrer">{link.kind === "code" ? <Github /> : <ExternalLink />}{link.label}</a></Button>)}
        </div>
      </div>
    </article>
  );
}

function InfoCard({ title, place, detail, accent }: { title: string; place: string; detail: string; accent?: boolean }) {
  return <div className={`border-l-2 bg-card/50 p-5 ${accent ? "border-signal" : "border-primary"}`}><p className="font-semibold">{title}</p>{place && <p className="mt-1 text-sm text-foreground/80">{place}</p>}{detail && <p className="mt-2 text-sm leading-6 text-muted-foreground">{detail}</p>}</div>;
}

function ContactLink({ href, icon: Icon, label }: { href: string; icon: typeof Linkedin; label: string }) {
  return <a href={href} target="_blank" rel="noreferrer" className="group flex items-center justify-between border-b border-border py-4 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"><span className="flex items-center gap-3"><Icon className="size-4" />{label}</span><ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></a>;
}