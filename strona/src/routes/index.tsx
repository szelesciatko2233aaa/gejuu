import { createFileRoute } from "@tanstack/react-router";
import { Heart, ShieldCheck, Navigation, Star, ArrowRight, MessageCircle } from "lucide-react";
import heroImg from "../assets/hero.jpg";
import p1 from "@/assets/profile1.jpg";
import p2 from "@/assets/profile2.jpg";
import p3 from "@/assets/profile3.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

// TODO: podmień na swój link afiliacyjny
const AFFILIATE_URL = "#";
const AFFILIATE_REL = "noopener noreferrer sponsored";

const profiles = [
  { name: "Natalia", nick: "NatiSlodka", age: 27, hobby: "Joga, Wino, Kino", img: p1 },
  { name: "Klaudia", nick: "KlaudiaXO", age: 31, hobby: "Fitness, Taniec, Podróże", img: p2 },
  { name: "Weronika", nick: "WeraGorąca", age: 29, hobby: "Fotografia, Kawa, Imprezy", img: p3 },
];

const reviews = [
  { name: "Piotr", text: "Nie wierzyłem, że to zadziała, ale po dwóch dniach umówiłem się na spotkanie. Portal robi robotę, dziewczyny same piszą pierwsze!" },
  { name: "Michał", text: "Premium za tak małą kwotę to śmiech na sali – w pozytywnym sensie. Wiadomości sypią się non stop, a jakość profili naprawdę mnie zaskoczyła." },
  { name: "Kamil", text: "Po rozwodzie myślałem, że randki nie są dla mnie. Tutaj poznałem kobietę, z którą spotykam się już regularnie. Serdecznie polecam każdemu facetowi." },
  { name: "Bartek", text: "Próbowałem różnych portali, ale tylko tu naprawdę dochodzi do spotkań. Konkretne kobiety, żadnych botów, wszystko na luzie i bez ściemy." },
];

function Gradient({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="bg-clip-text text-transparent"
      style={{ backgroundImage: "var(--gradient-brand)" }}
    >
      {children}
    </span>
  );
}

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* NAV */}
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-4 sm:px-6 sm:py-6">
          <a href="#" className="truncate text-lg font-bold tracking-tight sm:text-2xl">
            randkuj<span style={{ color: "var(--primary)" }}>24</span>.pl
          </a>
          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel={AFFILIATE_REL}
            className="shrink-0 rounded-md border border-white/70 px-3 py-2 text-[10px] font-semibold uppercase tracking-widest text-white transition hover:bg-white hover:text-background sm:px-5 sm:text-xs"
          >
            Zacznij teraz
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Sensualna kobieta w bieliźnie"
          width={1920}
          height={1088}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[70%_center] sm:object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-4 pb-16 pt-28 text-center sm:px-6 sm:pt-32">
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Darmowe <Gradient>sex</Gradient> spotkania z <Gradient>kobietami</Gradient>!
          </h1>
          <p className="mt-4 text-sm font-semibold text-white/90 sm:mt-5 md:text-base">
            Zarejestruj się w kilka sekund i otrzymuj wiadomości już teraz!
          </p>
          <a
            id="rejestracja"
            href={AFFILIATE_URL}
            target="_blank"
            rel={AFFILIATE_REL}
            className="mt-7 inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-md px-6 py-4 text-base font-semibold text-white transition-transform hover:scale-105 sm:w-auto sm:px-10 sm:text-lg"
            style={{ backgroundColor: "var(--primary)", boxShadow: "var(--shadow-pink)" }}
          >
            Zarejestruj się <ArrowRight className="h-5 w-5" />
          </a>

          <div className="mt-8 flex flex-col items-center gap-2 sm:mt-10 sm:gap-3">
            <p className="text-sm text-white sm:text-base">
              <span className="font-bold">Randkuj24.pl</span> oceniono na
            </p>
            <div className="flex items-center gap-2 rounded-md border border-white/30 px-4 py-1.5">
              <Star className="h-5 w-5 fill-current" style={{ color: "var(--success)" }} />
              <span className="text-lg font-bold" style={{ color: "var(--success)" }}>4.8</span>
            </div>
            <p className="text-xs text-white/90 sm:text-sm">
              Na podstawie <span className="font-bold">828</span> recenzji
            </p>
            <a href="#opinie" className="text-sm underline" style={{ color: "var(--secondary)" }}>
              Zobacz opinie
            </a>
          </div>

          {/* Feature row */}
          <div className="mt-12 grid w-full gap-6 text-left sm:mt-16 sm:gap-8 md:grid-cols-3">
            {[
              { icon: Heart, title: "Kobiety piszą pierwsze", desc: "Dzięki specjalnemu systemowi zdecydowanie większą część na naszym portalu stanowią kobiety i to one zazwyczaj rozpoczynają konwersacje!" },
              { icon: ShieldCheck, title: "Zweryfikowane profile", desc: "Nasz zespół czuwa nad weryfikacją profili, dzięki czemu masz pewność, że rozmawiasz z realnymi osobami." },
              { icon: Navigation, title: "Spotkania w twojej okolicy", desc: "Poznaj tysiące samotnych osób z całej Polski, a nawet z twojej okolicy." },
            ].map((f, i) => (
              <div key={i} className="flex gap-4">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: i === 1 ? "oklch(0.65 0.22 295)" : "var(--primary)" }}
                >
                  <f.icon className="h-5 w-5 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-white">{f.title}</h3>
                  <p className="mt-1 text-sm text-white/80">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROFILES */}
      <section id="profile" className="bg-white py-16 text-slate-800 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold sm:text-3xl md:text-4xl">
            Popularne <Gradient>profile</Gradient> w twojej okolicy
          </h2>
          <div className="mt-10 grid gap-8 sm:mt-12 sm:grid-cols-2 md:grid-cols-3">
            {profiles.map((p) => (
              <div key={p.name} className="flex flex-col items-center text-center">
                <img
                  src={p.img}
                  alt={`Profil ${p.name}`}
                  loading="lazy"
                  decoding="async"
                  width={512}
                  height={640}
                  className="h-80 w-64 rounded-lg object-cover shadow-lg sm:h-72 sm:w-56"
                />
                <h3 className="mt-5 text-lg font-semibold" style={{ color: "oklch(0.55 0.22 195)" }}>
                  {p.name}
                </h3>
                <div className="mt-2 space-y-1 text-xs" style={{ color: "oklch(0.65 0.18 195)" }}>
                  <p>Nick na portalu: {p.nick}</p>
                  <p>Wiek: {p.age} lat</p>
                  <p>Status: Samotna</p>
                  <p>Hobby: {p.hobby}</p>
                </div>
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel={AFFILIATE_REL}
                  className="mt-4 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
                  style={{ backgroundColor: "var(--primary)", boxShadow: "var(--shadow-pink)" }}
                >
                  Wyślij wiadomość <MessageCircle className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="opinie" className="bg-white pb-20 text-slate-800 sm:pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold sm:text-3xl md:text-4xl">
            Zobacz co mówią <Gradient>klienci</Gradient>
          </h2>
          <p className="mt-3 text-center text-sm" style={{ color: "oklch(0.65 0.18 195)" }}>
            Nie jesteś przekonany? Poznaj opinie innych.
          </p>
          <div className="mt-10 grid gap-8 sm:mt-12 sm:gap-10 md:grid-cols-2">
            {reviews.map((r) => (
              <div key={r.name} className="flex gap-4">
                <div
                  className="h-12 w-12 shrink-0 rounded-full"
                  style={{ background: "var(--gradient-brand)" }}
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <p className="text-sm leading-relaxed" style={{ color: "oklch(0.5 0.15 195)" }}>
                    "{r.text}"
                  </p>
                  <div className="mt-3 flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" style={{ color: "var(--primary)" }} />
                    ))}
                  </div>
                  <p className="mt-2 text-xs font-medium text-slate-400">{r.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 text-center sm:py-24">
        <div className="absolute inset-0" style={{ background: "var(--gradient-brand)", opacity: 0.15 }} />
        <div className="relative mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Gotowy na <Gradient>nowe znajomości</Gradient>?
          </h2>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            Dołącz do tysięcy zadowolonych użytkowników. Rejestracja zajmuje tylko chwilę.
          </p>
          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel={AFFILIATE_REL}
            className="mt-8 inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-md px-6 py-4 text-base font-semibold text-white transition-transform hover:scale-105 sm:w-auto sm:px-10 sm:text-lg"
            style={{ backgroundColor: "var(--primary)", boxShadow: "var(--shadow-pink)" }}
          >
            Zarejestruj się za darmo <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border px-4 py-8 text-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Randkuj24.pl · Serwis wyłącznie dla osób pełnoletnich (18+)</p>
      </footer>
    </div>
  );
}
