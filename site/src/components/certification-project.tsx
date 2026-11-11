import { useState } from "react";
import { AppWindow, BarChart3, ExternalLink, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import demand from "@/assets/certifications-demand.png.asset.json";
import costs from "@/assets/certifications-costs.png.asset.json";
import salaries from "@/assets/certifications-salaries.png.asset.json";
import roi from "@/assets/certifications-roi.png.asset.json";

// Cuando publiques el dashboard en Power BI Service, pon aquí la URL pública y el botón
// "Ver dashboard" pasa a estar habilitado automáticamente.
const DASHBOARD_URL: string | null = null;

const STREAMLIT_URL = "https://cert-roi-latam.streamlit.app/";

const screenshots = [
  { label: "Demanda", asset: demand, alt: "Demanda de certificaciones tech en LATAM: ranking de menciones con PMP en primer lugar" },
  { label: "Costos", asset: costs, alt: "Costos de examen, preparación e inversión por certificación" },
  { label: "Salarios", asset: salaries, alt: "Cobertura y rangos salariales publicados; periodo de pago pendiente de verificar" },
  { label: "Simulador ROI", asset: roi, alt: "Simulación de recuperación de inversión con un aumento mensual supuesto uniforme" },
] as const;

const tags = ["SQL Server 2025", "Power BI", "DAX", "Python 3.12", "Playwright", "BeautifulSoup", "pyodbc", "pytest", "Git"];

function ProjectActions() {
  return (
    <>
      <Button asChild variant="outline" size="sm">
        <a href="https://github.com/OrlandoCorona/cert-roi-latam" target="_blank" rel="noreferrer">
          <Github /> Ver código
        </a>
      </Button>
      <Button asChild size="sm" variant="outline">
        <a href={STREAMLIT_URL} target="_blank" rel="noreferrer">
          <AppWindow /> App en Streamlit
        </a>
      </Button>
      {DASHBOARD_URL ? (
        <Button asChild size="sm">
          <a href={DASHBOARD_URL} target="_blank" rel="noreferrer">
            <ExternalLink /> Ver dashboard
          </a>
        </Button>
      ) : (
        <>
          <Button disabled size="sm">
            <ExternalLink /> Ver dashboard
          </Button>
          <span className="self-center text-xs text-muted-foreground">Pendiente de publicar en Power BI Service</span>
        </>
      )}
    </>
  );
}

export function CertificationProject() {
  const [selected, setSelected] = useState(0);
  const screenshot = screenshots[selected] ?? screenshots[0];

  return (
    <article className="project-card group relative overflow-hidden border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/70 lg:col-span-2">
      <Dialog>
        <div className="grid lg:grid-cols-2">
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              className="relative h-auto w-full overflow-hidden rounded-none p-0"
              aria-label="Ver capturas y detalles del Tracker de Certificaciones Tech en LATAM"
            >
              <img
                src={demand.url}
                alt={screenshots[0].alt}
                loading="lazy"
                className="aspect-[16/10] w-full object-contain"
              />
              <span className="absolute bottom-3 right-3 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium backdrop-blur">
                +3 capturas
              </span>
            </Button>
          </DialogTrigger>

          <div className="flex flex-col p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="inline-flex items-center gap-2 rounded-full border border-signal/40 bg-signal/10 px-3 py-1.5 text-xs font-semibold uppercase text-signal">
                <Sparkles className="size-3.5" /> Primer proyecto personal · Hecho desde cero
              </span>
              <span className="rounded-sm border border-signal/40 bg-signal/10 px-2 py-1 font-semibold text-signal">
                En desarrollo
              </span>
              <span className="text-muted-foreground">Octubre de 2026 – actualidad</span>
            </div>

            <h3 className="mt-5 text-xl font-semibold sm:text-2xl">Tracker de Certificaciones Tech en LATAM</h3>

            <p className="mt-2 text-sm leading-6">
              Analicé 656 vacantes de GetOnBoard y un catálogo de 28 certificaciones con SQL Server, Python y Power BI.
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Análisis de demanda, costos y ROI de 28 certificaciones tech en el mercado laboral LATAM.
            </p>

            <p className="mt-4 leading-7 text-muted-foreground">
              Analicé 656 vacantes tech de <span translate="no">GetOnBoard</span> contra un catálogo propio de 28 certificaciones. Dashboard con demanda, costos, cobertura salarial y simulador de ROI.
            </p>

            <p className="mt-5 border-l-2 border-primary pl-4 text-sm leading-6">
              <strong>38 vacantes mencionan al menos una certificación (5.8% de la muestra de 656 vacantes de GetOnBoard).</strong>
            </p>

            <div className="mt-6 flex flex-wrap gap-2" translate="no">
              {tags.map(tag => (
                <span key={tag} className="rounded-sm border border-border bg-secondary px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <ProjectActions />
              <DialogTrigger asChild>
                <Button size="sm" variant="ghost">
                  <BarChart3 /> Ver detalles
                </Button>
              </DialogTrigger>
            </div>
          </div>
        </div>

        <DialogContent className="max-h-[90dvh] w-[calc(100%-2rem)] max-w-5xl space-y-5 overflow-y-auto">
          <DialogHeader className="pr-6 text-left">
            <DialogTitle className="text-xl leading-7 tracking-normal sm:text-2xl">
              Tracker de Certificaciones Tech en LATAM
            </DialogTitle>
            <DialogDescription>Octubre de 2026 – actualidad · En desarrollo</DialogDescription>
          </DialogHeader>

          <p className="text-sm leading-6">
            <strong>Rol:</strong> Diseño del pipeline, implementación end-to-end y análisis.
          </p>

          <p className="text-sm leading-6 text-muted-foreground">
            Analicé 656 vacantes de GetOnBoard y un catálogo de 28 certificaciones con SQL Server, Python y Power BI.
          </p>

          <p className="text-sm leading-6 text-muted-foreground">
            Partí de 656 ofertas de empleo tech publicadas en <span translate="no">GetOnBoard</span>, extraídas el 28 de octubre de 2026, y las crucé contra un catálogo propio de 28 certificaciones: <span translate="no">AWS, Azure, GCP, PMI, Cisco, CompTIA, Scrum, ISC2</span> y otras.
          </p>

          <div className="flex flex-wrap gap-2" aria-label="Capturas del dashboard">
            {screenshots.map((item, index) => (
              <Button
                key={item.label}
                size="sm"
                variant={selected === index ? "default" : "outline"}
                aria-pressed={selected === index}
                onClick={() => setSelected(index)}
              >
                {item.label}
              </Button>
            ))}
          </div>

          <img
            src={screenshot.asset.url}
            alt={screenshot.alt}
            className="aspect-video w-full object-contain"
          />

          <div>
            <h4 className="font-semibold">Hallazgos de la muestra</h4>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
              <li><strong className="text-foreground">38 vacantes</strong> mencionan al menos una certificación (5.8% de la muestra de 656 vacantes de GetOnBoard).</li>
              <li>
                Las más mencionadas:{" "}
                <span translate="no">PMP (11), CISSP (5), GCP Professional Data Engineer (5) y CompTIA Security+ (4)</span>.
              </li>
              <li>230 vacantes publican rango salarial en USD.</li>
              <li>10 certificaciones del catálogo no aparecen en ninguna vacante.</li>
            </ul>
          </div>

          <p className="text-sm leading-6 text-muted-foreground">
            El dashboard tiene cinco páginas: <strong className="text-foreground">Demanda</strong>, <strong className="text-foreground">Costos</strong>, <strong className="text-foreground">Salarios</strong>, <strong className="text-foreground">Simulador ROI</strong> y <strong className="text-foreground">Metodología</strong>.
          </p>

          <div>
            <h4 className="font-semibold">Simulación y limitaciones</h4>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              El simulador permite elegir un aumento mensual supuesto y calcula meses de recuperación y ROI por certificación a 36 meses. El umbral de recuperación a 24 meses es <strong className="text-foreground">$666.67 MXN/mes</strong> (mediana de inversión / 24).
            </p>
            <p className="mt-3 border-l-2 border-signal pl-4 text-sm leading-6">
              El resultado corresponde al 5.8% de la muestra de 656 vacantes de GetOnBoard; no se extrapola al mercado LATAM. El aumento simulado es uniforme para todas las certificaciones; en la realidad varía por certificación, rol y empresa. No es un pronóstico salarial. El periodo de pago de los salarios publicados está pendiente de verificar: no deben interpretarse como importes mensuales.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Qué aprendí</h4>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Que ser explícito sobre los límites del análisis pesa más que inflar los números. La página de metodología del dashboard aclara qué supuestos entran al modelo y qué conclusiones no pueden sacarse de 656 vacantes de un solo portal. Ese marco honesto es tan importante como el código mismo.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Stack técnico</h4>
            <div className="mt-2 flex flex-wrap gap-2" translate="no">
              {tags.map(tag => (
                <span key={tag} className="rounded-sm border border-border bg-secondary px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <ProjectActions />
          </div>
        </DialogContent>
      </Dialog>
    </article>
  );
}
