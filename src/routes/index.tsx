import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Scale,
  Users,
  Briefcase,
  Building2,
  ShieldCheck,
  Landmark,
  Gavel,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  Menu,
  X,
  ChevronRight,
  BookOpen,
  Target,
  Trophy,
} from "lucide-react";
import logoMM from "@/assets/logo-mm.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Abogados", href: "#abogados" },
  { label: "Servicios", href: "#servicios" },
  { label: "Metodología", href: "#metodologia" },
  { label: "Contacto", href: "#contacto" },
];

const values = [
  {
    Icon: BookOpen,
    title: "Deontología Jurídica",
    text: "Conducimos cada causa bajo los más estrictos estándares de ética, probidad y confidencialidad profesional.",
  },
  {
    Icon: Target,
    title: "Técnica Rigurosa",
    text: "Abordamos la complejidad jurídica mediante el estudio exhaustivo de la jurisprudencia, la doctrina y las reformas legislativas vigentes.",
  },
  {
    Icon: Trophy,
    title: "Orientación al Éxito",
    text: "Diseñamos soluciones con un enfoque pragmático y de alta eficiencia costo-beneficio para salvaguardar los intereses jurídicos de nuestros representados.",
  },
];

const services = [
  {
    Icon: Scale,
    title: "Derecho Civil y Mercantil",
    lead: "Litigio y consultoría especializada.",
    bullets: [
      "Contratos y obligaciones de alta complejidad.",
      "Derecho de propiedad, usucapión y regularización patrimonial.",
      "Títulos y operaciones de crédito; carteras vencidas y controversias societarias.",
    ],
  },
  {
    Icon: Users,
    title: "Derecho Familiar y Sucesorio",
    lead: "Protección del patrimonio y del núcleo familiar.",
    bullets: [
      "Juicios sucesorios testamentarios e intestamentarios.",
      "Divorcio incausado, custodia y patria potestad.",
      "Pensiones alimenticias conforme a criterios jurisprudenciales.",
    ],
  },
  {
    Icon: Briefcase,
    title: "Derecho Laboral",
    lead: "Defensa y representación integral.",
    bullets: [
      "Despido injustificado e indemnizaciones constitucionales.",
      "Rescisión de contratos y liquidaciones.",
      "Asesoría patronal y reglamentos internos.",
    ],
  },
  {
    Icon: Building2,
    title: "Corporativo y Compliance",
    lead: "Prevención y cumplimiento normativo.",
    bullets: [
      "Auditoría legal y diagnóstico de riesgos.",
      "Protección de datos personales y contratos electrónicos.",
      "Estructuración de gobierno corporativo.",
    ],
  },
  {
    Icon: ShieldCheck,
    title: "Amparo y Constitucional",
    lead: "Defensa de derechos fundamentales.",
    bullets: [
      "Juicio de amparo directo e indirecto.",
      "Impugnación de actos de autoridad.",
      "Garantías individuales y derechos humanos.",
    ],
  },
];

const phases = [
  {
    n: "I",
    title: "Diagnóstico Jurídico Inicial",
    text: "Análisis exhaustivo de la situación fáctica y recepción de los elementos probatorios para determinar la viabilidad jurídica y el grado de contingencia del asunto.",
  },
  {
    n: "II",
    title: "Diseño de la Estrategia Procesal",
    text: "Estructuración ad hoc de la teoría del caso, fundamentada en la doctrina dogmática, precedentes jurisprudenciales y la legislación adjetiva aplicable.",
  },
  {
    n: "III",
    title: "Ejecución y Patrocinio Judicial",
    text: "Representación y defensa activa ante los órganos jurisdiccionales, con transparencia total e informes periódicos sobre el estatus procesal a nuestros mandantes.",
  },
];

function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-[oklch(0.78_0.13_85/0.6)]" />
      <div className="size-1.5 rotate-45 bg-gradient-gold" />
      <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-[oklch(0.78_0.13_85/0.6)]" />
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow?: string;
  title: React.ReactNode;
}) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      {eyebrow && (
        <p className="text-[0.65rem] sm:text-xs tracking-[0.35em] uppercase text-[color:var(--gold-dark)]">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-serif text-gold-gradient leading-tight">
        {title}
      </h2>
      <GoldDivider className="mt-5" />
    </div>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative z-10 min-h-screen scroll-smooth">
      {/* ========= HEADER ========= */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[oklch(0.18_0.04_260/0.75)] border-b border-[oklch(0.78_0.13_85/0.2)]">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 py-3 md:py-4">
          <div className="flex items-center justify-between gap-4">
            <a href="#inicio" className="flex items-center gap-3 shrink-0">
              <img
                src={logoMM}
                alt="Manjarrez Abogados"
                width={56}
                height={56}
                className="w-11 md:w-14 h-auto"
              />
              <div className="hidden sm:block leading-tight">
                <p className="font-serif text-lg md:text-xl text-gold-gradient">
                  Manjarrez Abogados
                </p>
                <p className="text-[0.6rem] tracking-[0.3em] uppercase text-[color:var(--gold-dark)]">
                  Bufete Jurídico
                </p>
              </div>
            </a>

            <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm tracking-wide text-silver-gradient font-medium">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-[color:var(--gold-light)] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/525554940363"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-gold text-[color:var(--navy-deep)] text-sm font-semibold shadow-gold hover:scale-[1.02] transition"
            >
              Agendar Consulta <ChevronRight className="size-4" />
            </a>

            <button
              type="button"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden inline-flex size-11 items-center justify-center rounded-full border border-[oklch(0.78_0.13_85/0.5)] text-[color:var(--gold-light)]"
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>

          {menuOpen && (
            <div className="lg:hidden mt-3 rounded-lg bg-gradient-card border border-[oklch(0.78_0.13_85/0.25)] shadow-elegant p-2 animate-in fade-in slide-in-from-top-2">
              <ul className="flex flex-col divide-y divide-[oklch(0.78_0.13_85/0.15)]">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setMenuOpen(false)}
                      className="block px-4 py-3 text-sm tracking-wide text-silver-gradient hover:text-[color:var(--gold-light)]"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/525554940363"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-2 block text-center px-5 py-3 rounded-md bg-gradient-gold text-[color:var(--navy-deep)] font-semibold"
              >
                Agendar Consulta
              </a>
            </div>
          )}
        </nav>
      </header>

      {/* ========= HERO ========= */}
      <section id="inicio" className="relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at 50% 20%, oklch(0.78 0.13 85 / 0.18) 0%, transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-10 pt-16 md:pt-24 pb-20 md:pb-28 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="text-center lg:text-left">
            <p className="text-[0.65rem] sm:text-xs tracking-[0.4em] uppercase text-[color:var(--gold-dark)]">
              Bufete Jurídico · Excelencia · Confianza
            </p>
            <h1 className="mt-5 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
              <span className="text-silver-gradient">Manjarrez Abogados</span>
              <span className="block mt-2 text-gold-gradient text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Bufete Jurídico Integral
              </span>
            </h1>
            <p className="mt-6 italic text-base md:text-lg text-[color:var(--gold-light)] max-w-2xl mx-auto lg:mx-0">
              Patrocinio legal estratégico, solvencia técnica y estricta observancia ética en la defensa de sus derechos e intereses.
            </p>
            <p className="mt-6 text-sm md:text-base text-[color:var(--muted-foreground)] leading-relaxed text-justify max-w-2xl mx-auto lg:mx-0">
              Bienvenidos a Manjarrez Abogados. Somos un bufete jurídico de vanguardia comprometida con la prestación de servicios de consultoría, representación y litigio de alta especialidad. Nuestro ejercicio profesional se fundamenta en el análisis riguroso de la norma, la actualización dogmática constante y el diseño de estrategias legales ad hoc, orientadas a mitigar riesgos patrimoniales y garantizar la seguridad jurídica de nuestros mandantes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/525554940363"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[color:var(--navy-deep)] bg-gradient-gold shadow-gold transition-transform hover:scale-[1.02]"
              >
                Agendar Consulta Jurídica <ChevronRight className="size-4" />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[oklch(0.78_0.13_85/0.5)] text-[color:var(--gold-light)] hover:bg-[oklch(0.78_0.13_85/0.1)] transition"
              >
                Ver Áreas de Práctica
              </a>
            </div>
          </div>

          {/* Emblem panel */}
          <div className="relative mx-auto">
            <div className="absolute -inset-6 rounded-full bg-[oklch(0.78_0.13_85/0.12)] blur-3xl" />
            <div className="relative rounded-full p-[2px] bg-gradient-gold shadow-gold">
              <div className="rounded-full bg-gradient-card p-8 sm:p-10 md:p-12 flex items-center justify-center">
                <img
                  src={logoMM}
                  alt="Logotipo MM"
                  width={280}
                  height={280}
                  className="w-48 sm:w-56 md:w-64 h-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                />
              </div>
            </div>
          </div>
        </div>
        <GoldDivider className="pb-4" />
      </section>

      {/* ========= NOSOTROS ========= */}
      <section id="nosotros" className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 py-16 md:py-24">
        <SectionHeading
          eyebrow="¿Quiénes Somos?"
          title={<>Solidez Jurídica y <span className="text-silver-gradient">Relevo Generacional</span></>}
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="rounded-xl bg-gradient-card border border-[oklch(0.78_0.13_85/0.2)] p-6 md:p-9 shadow-elegant">
            <p className="text-sm md:text-base leading-relaxed text-justify text-[color:var(--muted-foreground)]">
              En Manjarrez Abogados, amalgamamos la solidez que otorgan los años de experiencia en la praxis legal con el dinamismo y la innovación metodológica del derecho contemporáneo. Fundada bajo la dirección del <span className="text-[color:var(--gold-light)] font-medium">Lic. Francisco Javier Manjarrez Tellez</span>, la firma se ha consolidado como un referente de confiabilidad gracias a una trayectoria regida por la excelencia operativa y el éxito procesal.
            </p>
            <p className="mt-4 text-sm md:text-base leading-relaxed text-justify text-[color:var(--muted-foreground)]">
              Con la incorporación del <span className="text-[color:var(--gold-light)] font-medium">Lic. Angel David Manjarrez Montaño</span>, consolidamos una estructura de relevo institucional que potencia nuestras capacidades técnicas, incorporando herramientas de análisis aplicadas al derecho, optimización de procesos procesales y una visión global adaptada a las exigencias regulatorias actuales.
            </p>
          </div>

          <div className="grid gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="group relative rounded-lg p-[1.5px] bg-gradient-panel-silver shadow-elegant transition-transform hover:-translate-y-1"
              >
                <div className="rounded-[7px] bg-[color:var(--navy)] p-5 flex gap-4 items-start">
                  <div className="shrink-0 inline-flex size-11 items-center justify-center rounded-full bg-gradient-gold">
                    <v.Icon className="size-5 text-[color:var(--navy-deep)]" strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-serif text-gold-gradient">{v.title}</h3>
                    <p className="mt-1 text-xs md:text-sm text-[color:var(--muted-foreground)] leading-relaxed">
                      {v.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Misión y Visión */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Misión",
              body: "Brindar soluciones jurídicas integrales y de alta especialidad a través de un patrocinio legal estratégico y ético, salvaguardando el patrimonio, la libertad y los derechos de nuestros representados con el más estricto rigor técnico.",
            },
            {
              title: "Visión",
              body: "Consolidar a Manjarrez Abogados como un bufete jurídico líder y de referencia en la región, reconocida por su excelencia operativa, la innovación metodológica en el litigio y la capacidad de adaptación ante las transformaciones del derecho contemporáneo.",
            },
          ].map((p) => (
            <div
              key={p.title}
              className="rounded-xl bg-gradient-card border border-[oklch(0.78_0.13_85/0.25)] p-7 md:p-9 shadow-elegant relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 size-40 rounded-full bg-[oklch(0.78_0.13_85/0.08)] blur-3xl" />
              <h3 className="text-2xl md:text-3xl font-serif text-gold-gradient">{p.title}</h3>
              <div className="my-3 h-px w-12 bg-gradient-gold" />
              <p className="text-sm md:text-base leading-relaxed text-justify text-[color:var(--muted-foreground)] relative">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========= ABOGADOS ========= */}
      <section id="abogados" className="relative py-16 md:py-24 border-y border-[oklch(0.78_0.13_85/0.15)] bg-[oklch(0.20_0.045_260/0.5)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
          <SectionHeading
            eyebrow="Cuerpo de Abogados Directores"
            title="Nuestros Especialistas"
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              {
                name: "Lic. Francisco Javier Manjarrez Tellez",
                role: "Socio Fundador · Asesor Senior",
                bio: "Más de tres décadas de trayectoria dedicadas al ejercicio del derecho. Su liderazgo y experiencia han cimentado la reputación de la firma en asuntos de gran envergadura ante instancias federales y locales.",
                initials: "FJM",
                icon: Scale,
                motto: "Experientia Docet",
                mottoTr: "La experiencia enseña",
                variant: "gold" as const,
              },
              {
                name: "Lic. Angel David Manjarrez Montaño",
                role: "Abogado Especialista · Dirección Técnica",
                bio: "Especializado en litigio civil, mercantil y constitucional, aporta a la firma una visión estratégica moderna, rigor técnico y el impulso metodológico del derecho contemporáneo.",
                initials: "ADM",
                icon: Gavel,
                motto: "Ius et Ratio",
                mottoTr: "Derecho y razón",
                variant: "gold" as const,
              },
            ].map((a) => {
              const Icon = a.icon;
              const isGold = a.variant === "gold";
              return (
                <article
                  key={a.name}
                  className="rounded-xl bg-gradient-card border border-[oklch(0.78_0.13_85/0.25)] p-6 md:p-8 shadow-elegant"
                >
                  <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-6">
                    {/* Emblem */}
                    <div
                      className={`shrink-0 rounded-lg p-[2px] ${
                        isGold ? "bg-gradient-gold" : "bg-gradient-silver"
                      }`}
                    >
                      <div className="relative w-28 h-36 md:w-32 md:h-40 rounded-[8px] bg-[color:var(--navy-deep)] flex flex-col items-center justify-center overflow-hidden">
                        {/* subtle radial glow */}
                        <div
                          className="absolute inset-0 opacity-40"
                          style={{
                            background: isGold
                              ? "radial-gradient(circle at 50% 30%, oklch(0.78 0.13 85 / 0.35), transparent 65%)"
                              : "radial-gradient(circle at 50% 30%, oklch(0.85 0.02 260 / 0.30), transparent 65%)",
                          }}
                        />
                        {/* corner ornaments */}
                        <span className={`absolute top-2 left-2 w-3 h-3 border-t border-l ${isGold ? "border-[color:var(--gold-light)]" : "border-[color:var(--silver)]"}`} />
                        <span className={`absolute top-2 right-2 w-3 h-3 border-t border-r ${isGold ? "border-[color:var(--gold-light)]" : "border-[color:var(--silver)]"}`} />
                        <span className={`absolute bottom-2 left-2 w-3 h-3 border-b border-l ${isGold ? "border-[color:var(--gold-light)]" : "border-[color:var(--silver)]"}`} />
                        <span className={`absolute bottom-2 right-2 w-3 h-3 border-b border-r ${isGold ? "border-[color:var(--gold-light)]" : "border-[color:var(--silver)]"}`} />

                        <Icon
                          className={isGold ? "size-7 text-[color:var(--gold-light)]" : "size-7 text-[color:var(--silver)]"}
                          strokeWidth={1.4}
                        />
                        <div
                          className={`mt-2 font-serif text-2xl md:text-3xl leading-none ${
                            isGold ? "text-gold-gradient" : "text-silver-gradient"
                          }`}
                        >
                          {a.initials}
                        </div>
                        <div className={`mt-2 h-px w-10 ${isGold ? "bg-[color:var(--gold-dark)]" : "bg-[color:var(--silver)]"} opacity-60`} />
                        <div className="mt-1 text-[9px] tracking-[0.25em] uppercase text-[color:var(--muted-foreground)]">
                          Manjarrez
                        </div>
                      </div>
                    </div>

                    <div className="min-w-0 flex-1 text-center sm:text-left">
                      <h3 className="text-xl md:text-2xl font-serif text-gold-gradient leading-tight">
                        {a.name}
                      </h3>
                      <p className="mt-1 text-xs tracking-[0.2em] uppercase text-[color:var(--gold-dark)]">
                        {a.role}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-justify text-[color:var(--muted-foreground)]">
                        {a.bio}
                      </p>
                      <div className="mt-5 pt-4 border-t border-[oklch(0.78_0.13_85/0.15)] flex items-center justify-center sm:justify-start gap-2">
                        <span className={`italic font-serif text-sm ${isGold ? "text-[color:var(--gold-light)]" : "text-[color:var(--silver)]"}`}>
                          “{a.motto}”
                        </span>
                        <span className="text-xs text-[color:var(--muted-foreground)]">— {a.mottoTr}</span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========= SERVICIOS ========= */}
      <section id="servicios" className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 py-16 md:py-24">
        <SectionHeading
          eyebrow="Portafolio de Servicios"
          title={<>Áreas de <span className="text-silver-gradient">Práctica</span></>}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className={`group relative rounded-xl p-[1.5px] shadow-elegant transition-transform hover:-translate-y-1 ${
                i % 2 === 0 ? "bg-gradient-panel-gold" : "bg-gradient-panel-silver"
              }`}
            >
              <div className="h-full rounded-[11px] bg-[color:var(--navy)] p-6 flex flex-col">
                <div className="flex items-center gap-3">
                  <div className={`inline-flex size-11 items-center justify-center rounded-full ${i % 2 === 0 ? "bg-gradient-gold" : "bg-gradient-panel-silver"}`}>
                    <s.Icon className="size-5 text-[color:var(--navy-deep)]" strokeWidth={1.75} />
                  </div>
                  <h3 className={`text-lg font-serif ${i % 2 === 0 ? "text-gold-gradient" : "text-silver-gradient"}`}>
                    {s.title}
                  </h3>
                </div>
                <p className="mt-3 text-xs uppercase tracking-[0.15em] text-[color:var(--gold-dark)]">
                  {s.lead}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-[color:var(--muted-foreground)] leading-relaxed">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-gradient-gold" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ========= METODOLOGÍA ========= */}
      <section
        id="metodologia"
        className="relative py-16 md:py-24 border-y border-[oklch(0.78_0.13_85/0.15)] bg-[oklch(0.20_0.045_260/0.5)]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
          <SectionHeading
            eyebrow="Metodología Operativa"
            title="Proceso de Trabajo"
          />

          <ol className="mt-14 relative">
            {/* vertical rail (mobile) / horizontal (desktop) */}
            <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[oklch(0.78_0.13_85/0.5)] to-transparent" />
            <div className="md:hidden absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[oklch(0.78_0.13_85/0.5)] to-transparent" />

            <div className="grid gap-8 md:grid-cols-3">
              {phases.map((p) => (
                <li key={p.n} className="relative pl-16 md:pl-0 md:text-center">
                  <div className="absolute left-0 top-0 md:static md:mx-auto size-12 rounded-full bg-gradient-panel-silver p-[1.5px] shadow-elegant">
                    <div className="size-full rounded-full bg-[color:var(--navy)] flex items-center justify-center">
                      <span className="text-base font-serif text-silver-gradient">{p.n}</span>
                    </div>
                  </div>
                  <h4 className="mt-2 md:mt-5 text-lg md:text-xl font-serif text-gold-gradient">
                    Fase {p.n}: {p.title}
                  </h4>
                  <p className="mt-2 text-sm text-[color:var(--muted-foreground)] leading-relaxed text-justify md:px-3">
                    {p.text}
                  </p>
                </li>
              ))}
            </div>
          </ol>
        </div>
      </section>

      {/* ========= CONTACTO / FOOTER ========= */}
      <section id="contacto" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 py-16 md:py-24">
          <SectionHeading
            eyebrow="Canal de Atención"
            title="Agendar Consulta o Evaluación de Contingencia Jurídica"
          />
          <p className="mt-6 max-w-3xl mx-auto text-center text-sm md:text-base text-[color:var(--muted-foreground)] leading-relaxed text-justify">
            Para someter su asunto al análisis de nuestro cuerpo de especialistas o concertar una consulta presencial en nuestras oficinas de atención, lo invitamos a formalizar su solicitud a través de nuestros canales oficiales de comunicación.
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Info panel */}
            <div className="rounded-xl bg-gradient-card border border-[oklch(0.78_0.13_85/0.25)] p-7 md:p-9 shadow-elegant space-y-6">
              <div>
                <p className="text-[0.65rem] tracking-[0.35em] uppercase text-[color:var(--gold-dark)]">Cuerpo de Abogados Directores</p>
                <p className="mt-2 font-serif text-lg md:text-xl text-gold-gradient">
                  Lic. Francisco Javier Manjarrez Tellez
                </p>
                <p className="font-serif text-lg md:text-xl text-gold-gradient">
                  Lic. Angel David Manjarrez Montaño
                </p>
              </div>
              <div className="h-px bg-gradient-to-r from-[oklch(0.78_0.13_85/0.4)] to-transparent" />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex gap-3 items-start">
                  <MapPin className="size-5 shrink-0 text-[color:var(--gold-light)] mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--gold-dark)]">Despacho Nezahualcóyotl</p>
                    <p className="mt-1 text-sm text-[color:var(--foreground)]">
                      Nezahualcóyotl, Estado de México
                      <br />
                      <span className="text-[color:var(--muted-foreground)]">Área Metropolitana</span>
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <MapPin className="size-5 shrink-0 text-[color:var(--gold-light)] mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--gold-dark)]">Despacho Ciudad de México</p>
                    <p className="mt-1 text-sm text-[color:var(--foreground)]">
                      Aguascalientes 175, Piso 11
                      <br />
                      <span className="text-[color:var(--muted-foreground)]">Colonia Condesa, Ciudad de México</span>
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start sm:col-span-2 lg:col-span-1">
                  <Clock className="size-5 shrink-0 text-[color:var(--gold-light)] mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--gold-dark)]">Horario de Audiencias</p>
                    <p className="mt-1 text-sm text-[color:var(--foreground)]">
                      Lunes a Viernes · 09:00 a 15:00 hrs.
                      <br />
                      <span className="text-[color:var(--muted-foreground)]">Atención con cita previa</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact buttons */}
            <div className="grid gap-4 content-start">
              <a
                href="tel:+525554940363"
                className="group flex items-center justify-between gap-4 rounded-xl bg-gradient-card border border-[oklch(0.78_0.13_85/0.3)] p-5 shadow-elegant hover:-translate-y-0.5 transition"
              >
                <span className="flex items-center gap-3">
                  <span className="inline-flex size-11 items-center justify-center rounded-full bg-gradient-gold">
                    <Phone className="size-5 text-[color:var(--navy-deep)]" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.25em] text-[color:var(--gold-dark)]">Línea Telefónica</span>
                    <span className="block font-serif text-lg text-silver-gradient">Contáctenos por teléfono</span>
                  </span>
                </span>
                <ChevronRight className="size-5 text-[color:var(--gold-light)] group-hover:translate-x-1 transition" />
              </a>

              <a
                href="https://wa.me/525554940363"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 rounded-xl bg-gradient-card border border-[oklch(0.78_0.13_85/0.3)] p-5 shadow-elegant hover:-translate-y-0.5 transition"
              >
                <span className="flex items-center gap-3">
                  <span className="inline-flex size-11 items-center justify-center rounded-full bg-gradient-gold">
                    <MessageCircle className="size-5 text-[color:var(--navy-deep)]" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.25em] text-[color:var(--gold-dark)]">WhatsApp Corporativo</span>
                    <span className="block font-serif text-lg text-silver-gradient">Atención inmediata</span>
                  </span>
                </span>
                <ChevronRight className="size-5 text-[color:var(--gold-light)] group-hover:translate-x-1 transition" />
              </a>

              <a
                href="mailto:manjare_te@hotmail.com"
                className="group flex items-center justify-between gap-4 rounded-xl bg-gradient-card border border-[oklch(0.78_0.13_85/0.3)] p-5 shadow-elegant hover:-translate-y-0.5 transition"
              >
                <span className="flex items-center gap-3 min-w-0">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-gold">
                    <Mail className="size-5 text-[color:var(--navy-deep)]" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-[0.25em] text-[color:var(--gold-dark)]">Correo Electrónico</span>
                    <span className="block font-serif text-sm sm:text-base text-silver-gradient truncate">
                      manjare_te@hotmail.com
                    </span>
                  </span>
                </span>
                <ChevronRight className="size-5 shrink-0 text-[color:var(--gold-light)] group-hover:translate-x-1 transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Brand footer */}
        <footer className="relative border-t border-[oklch(0.78_0.13_85/0.2)] bg-[oklch(0.16_0.035_260)]">
          <GoldDivider className="pt-10" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 py-10 md:py-14 text-center">
            <img
              src={logoMM}
              alt="Manjarrez Montaño Abogados"
              width={200}
              height={200}
              className="mx-auto w-32 md:w-40 h-auto"
            />
            <h2 className="mt-6 font-serif text-2xl md:text-3xl tracking-[0.15em]">
              <span className="text-silver-gradient">MANJARREZ MONTAÑO </span>
              <span className="text-gold-gradient">ABOGADOS</span>
            </h2>
            <div className="mt-3 mx-auto flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[oklch(0.78_0.13_85/0.6)]" />
              <span className="text-[0.65rem] tracking-[0.5em] text-silver-gradient uppercase">Bufete Jurídico</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[oklch(0.78_0.13_85/0.6)]" />
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-[color:var(--muted-foreground)]">
              <a href="#nosotros" className="hover:text-[color:var(--gold-light)] transition">Nosotros</a>
              <span className="text-[color:var(--gold-dark)]">·</span>
              <a href="#servicios" className="hover:text-[color:var(--gold-light)] transition">Servicios</a>
              <span className="text-[color:var(--gold-dark)]">·</span>
              <a href="#metodologia" className="hover:text-[color:var(--gold-light)] transition">Metodología</a>
              <span className="text-[color:var(--gold-dark)]">·</span>
              <a href="#contacto" className="hover:text-[color:var(--gold-light)] transition">Contacto</a>
            </div>
            <p className="mt-6 text-xs text-[color:var(--muted-foreground)]">
              © {new Date().getFullYear()} Manjarrez Abogados. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </section>

      {/* ========= FLOATING WHATSAPP ========= */}
      <a
        href="https://wa.me/525554940363"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Corporativo"
        className="fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-gradient-gold shadow-gold border border-[oklch(0.78_0.13_85/0.6)] hover:scale-110 transition"
      >
        <MessageCircle className="size-6 text-[color:var(--navy-deep)]" strokeWidth={2} />
        <span className="absolute inset-0 rounded-full animate-ping bg-[oklch(0.78_0.13_85/0.35)] -z-10" />
      </a>

      {/* Smooth-scroll offset for sticky header */}
      <style>{`html { scroll-behavior: smooth; scroll-padding-top: 80px; }`}</style>
    </div>
  );
}
