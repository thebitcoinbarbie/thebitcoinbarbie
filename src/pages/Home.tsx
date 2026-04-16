import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-zinc-950 to-zinc-950" />
        <div className="relative mx-auto max-w-5xl px-6 py-20 md:py-32 text-center">
          <img
            src="/assets/logo-Clear.png"
            alt="The Bitcoin Barbie Logo"
            className="mx-auto mb-8 h-48 w-auto md:h-64 object-contain drop-shadow-2xl"
            style={{ filter: "drop-shadow(0 0 30px rgba(233,30,140,0.4))" }}
          />
          <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-7xl">
            <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent">
              The Bitcoin Barbie
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-zinc-400 md:text-2xl">
            Your no-fluff guide to crypto. Learn to invest, trade, and build wealth — starting from zero.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/kit"
              className="inline-flex items-center gap-2 rounded-full bg-pink-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-pink-600/30 transition-all hover:bg-pink-500 hover:shadow-pink-500/40"
            >
              Get the Starter Kit — $7
            </Link>
            <Link
              to="/course"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-800 px-8 py-4 text-lg font-semibold text-white border border-zinc-700 transition-all hover:bg-zinc-700"
            >
              Explore the Course
            </Link>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          Everything you need to start{' '}
          <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">your crypto journey</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Crypto Starter Kit",
              price: "$7",
              desc: "The essential guide with 164 terms, cheat sheets, and step-by-step setup. Everything you need to open your first account and make your first trade.",
              cta: "Get the Kit →",
              link: "/kit",
              accent: "from-pink-600 to-pink-700",
              glow: "shadow-pink-600/20",
            },
            {
              title: "Crypto Mastery Course",
              price: "$15/mo",
              desc: "A comprehensive video course walking you through every concept — wallets, exchanges, DeFi, Dollar-Cost Averaging, and building your first portfolio.",
              cta: "Start Learning →",
              link: "/course",
              accent: "from-purple-600 to-pink-600",
              glow: "shadow-purple-600/20",
            },
            {
              title: "1-on-1 Consulting",
              price: "$29/30min",
              desc: "Book a personal session and get direct answers to your specific situation. No fluff, just tailored advice from someone who's been there.",
              cta: "Book a Session →",
              link: "/consulting",
              accent: "from-zinc-600 to-zinc-700",
              glow: "shadow-zinc-600/20",
            },
          ].map((card) => (
            <div
              key={card.title}
              className={`relative rounded-2xl bg-gradient-to-b ${card.accent} p-px`}
            >
              <div className={`h-full rounded-2xl bg-zinc-900 p-8 shadow-lg ${card.glow}`}>
                <div className="mb-4 text-3xl font-bold text-white">{card.title}</div>
                <div className="mb-4 text-2xl font-bold text-pink-400">{card.price}</div>
                <p className="mb-8 text-zinc-400 leading-relaxed">{card.desc}</p>
                <Link
                  to={card.link}
                  className={`inline-block rounded-full bg-gradient-to-r ${card.accent} px-6 py-3 font-semibold text-white transition-all hover:opacity-90`}
                >
                  {card.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="mb-8 text-3xl font-bold md:text-4xl">
          Built by someone who's been{' '}
          <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">in your shoes</span>
        </h2>
        <p className="text-lg text-zinc-400 leading-relaxed">
          I created The Bitcoin Barbie because I remember what it felt like to see Bitcoin everywhere and understand nothing. No judgment, no gatekeeping — just real talk, real examples, and real step-by-step guidance. If you're starting from zero, you're in the right place.
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12 text-center text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} The Bitcoin Barbie. All rights reserved.</p>
      </footer>

      <style>{`
        .appear { opacity: 1 !important; transform: translateY(0) !important; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fadeUp 0.6s ease-out forwards; }
      `}</style>
    </div>
  );
}