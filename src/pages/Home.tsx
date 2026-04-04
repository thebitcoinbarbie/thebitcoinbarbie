import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Nav */}
      <header className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <span className="text-orange-400 font-bold text-lg tracking-wide">THE BITCOIN BARBIE</span>
            <span className="text-white/40 text-xs block">Crypto Starter Kit</span>
          </div>
          <nav className="flex items-center gap-6 text-sm">
            <Link to="/course" className="text-gray-400 hover:text-white transition-colors">Course</Link>
            <Link to="/glossary" className="text-gray-400 hover:text-white transition-colors">Glossary</Link>
            <Link to="/consulting" className="text-gray-400 hover:text-white transition-colors">Consulting</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-[#0a0a0f] to-[#0a0a0f]" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="inline-block bg-orange-500/20 text-orange-400 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              👑 From the author of a published crypto book — now digital
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              The Crypto Starter Kit for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400"> Absolute Beginners</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl">
              Everything you need to go from zero to confident investor — explained in plain English. From what Bitcoin is, to your first trade, to understanding DeFi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/kit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-center text-lg transition-colors">
                Get the Kit — $47
              </Link>
              <Link to="/course" className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-xl text-center text-lg transition-colors">
                Browse the Course Free
              </Link>
            </div>
            <p className="text-gray-600 text-sm mt-4">One-time payment · Instant access · 164 terms included</p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "164", label: "Crypto Terms Defined" },
              { number: "10", label: "Course Modules" },
              { number: "1", label: "Published Book Author" },
              { number: "0", label: "Jargon Left Behind" },
            ].map(({ number, label }) => (
              <div key={label}>
                <div className="text-3xl md:text-4xl font-bold text-orange-400">{number}</div>
                <div className="text-gray-500 text-sm mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">What's Inside the Kit</h2>
          <p className="text-gray-400">Everything you need, nothing you don't</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              emoji: "📖",
              title: "The Full Guide",
              desc: "Your complete beginner's guide to crypto. From blockchain basics to your first trade — written like we're friends talking.",
              tag: "60+ pages"
            },
            {
              emoji: "📖",
              title: "Crypto Vocabulary Cheat Sheet",
              desc: "164 crypto terms defined in plain English. No MBA required. Print it, bookmark it, use it daily.",
              tag: "164 terms"
            },
            {
              emoji: "✅",
              title: "Beginner's Checklist",
              desc: "Step-by-step checklist for setting up your first wallet, buying your first crypto, and staying safe.",
              tag: "Actionable"
            },
            {
              emoji: "💰",
              title: "Bonus: Trading Basics",
              desc: "Understand bull markets, bear markets, corrections, and volatility — without the panic.",
              tag: "Free bonus"
            },
            {
              emoji: "🔐",
              title: "Bonus: Wallet Security Guide",
              desc: "Hot wallet vs. cold storage, private keys, and how to never get hacked.",
              tag: "Free bonus"
            },
            {
              emoji: "📚",
              title: "10-Module Course Access",
              desc: "Structured lessons walking you through every concept, module by module.",
              tag: "Free bonus"
            },
          ].map(({ emoji, title, desc, tag }) => (
            <Card key={title} className="bg-white/5 border-white/10">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">{emoji}</div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-bold text-white">{title}</h3>
                  <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded-full">{tag}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/kit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-xl text-lg transition-colors inline-block">
            Get Everything for $47
          </Link>
        </div>
      </section>

      {/* Course Preview */}
      <section className="bg-white/[0.02] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">10 Modules. Zero fluff.</h2>
            <p className="text-gray-400">Here's a preview of what you'll learn</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              { num: "1", title: "Welcome to Crypto", emoji: "👋", desc: "What crypto is and why I believe in it" },
              { num: "2", title: "Blockchain Basics", emoji: "⛓️", desc: "Explained like we're kids playing a game" },
              { num: "3", title: "Crypto & Banking", emoji: "🏦", desc: "How it intersects with the Fed and your money" },
              { num: "4", title: "Your First Investment", emoji: "💰", desc: "What to know before spending your first dollar" },
              { num: "5", title: "Coins, Tokens & Projects", emoji: "🪙", desc: "BTC, ETH, altcoins — what's the difference" },
              { num: "6", title: "Exchanges & Wallets", emoji: "🔐", desc: "Where to buy and how to keep it safe" },
              { num: "7", title: "Trading Crypto", emoji: "📊", desc: "How markets actually work" },
              { num: "8", title: "DeFi & The Future", emoji: "🚀", desc: "No banks, no intermediaries — just code" },
              { num: "9", title: "NFTs & Digital Ownership", emoji: "🎨", desc: "What NFTs really are and how to evaluate them" },
              { num: "10", title: "Crypto Glossary", emoji: "📖", desc: "164 terms — your permanent reference guide" },
            ].map(({ num, title, emoji, desc }) => (
              <div key={num} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4">
                <span className="text-2xl">{emoji}</span>
                <div>
                  <span className="text-orange-400 text-xs font-bold">MODULE {num}</span>
                  <h4 className="font-semibold text-white">{title}</h4>
                  <p className="text-gray-500 text-xs">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/course" className="text-orange-400 hover:text-orange-300 font-semibold transition-colors">
              See full course outline →
            </Link>
          </div>
        </div>
      </section>

      {/* Glossary Teaser */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">164 Terms. All Free to Browse.</h2>
          <p className="text-gray-400">The hardest part of crypto is the vocabulary. I've done the work for you.</p>
        </div>
        <div className="max-w-2xl mx-auto">
          {["AML", "DeFi", "DYOR", "FUD", "Gas", "HODL", "Market Cap", "NFT", "Sats", "Whale"].map((term, i) => (
            <div key={term} className="flex items-center gap-3 py-3 border-b border-white/5">
              <span className="text-orange-400 font-mono text-sm">{term}</span>
              <span className="text-gray-600 flex-1">────────────────────</span>
            </div>
          ))}
          <p className="text-center mt-4 text-gray-500 text-sm">...and 154 more terms</p>
        </div>
        <div className="text-center mt-6">
          <Link to="/glossary" className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-3 rounded-xl transition-colors inline-block">
            Browse Full Glossary Free
          </Link>
        </div>
      </section>

      {/* Author */}
      <section className="bg-gradient-to-br from-orange-500/10 to-amber-500/5 border-y border-orange-500/20">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <div className="text-6xl mb-4">👑</div>
          <h2 className="text-2xl font-bold mb-2">Meet Sydney</h2>
          <p className="text-gray-400 leading-relaxed">
            I've spent nearly a decade in the crypto space — learning from the best, making every mistake in the book, and distilling it all into terms anyone can understand. I wrote this guide because the industry is growing too fast and the understanding gap is real. No gatekeeping. No jargon. Just truth.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <span className="text-gray-500 text-sm">@thebitcoinbarbie</span>
            <span className="text-gray-600">·</span>
            <span className="text-gray-500 text-sm">@thebitcoinbarb1</span>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-lg mx-auto">
          <div className="bg-gradient-to-br from-orange-500/20 to-amber-500/10 border border-orange-500/30 rounded-3xl p-8 text-center">
            <div className="text-sm text-orange-400 font-semibold mb-2">CRYPTO STARTER KIT</div>
            <div className="flex items-end justify-center gap-1 mb-2">
              <span className="text-5xl font-bold">$47</span>
              <span className="text-gray-500 mb-2">one-time</span>
            </div>
            <p className="text-gray-400 text-sm mb-8">Everything below included, plus lifetime updates</p>
            <ul className="text-left space-y-3 mb-8">
              {[
                "The Complete Beginner's Guide (60+ pages)",
                "Crypto Vocabulary Cheat Sheet (164 terms)",
                "Beginner's Action Checklist",
                "Trading Basics Bonus",
                "Wallet Security Guide",
                "10-Module Full Course Access",
                "Consulting rates unlock after purchase",
              ].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="text-orange-400">✓</span> {item}
                </li>
              ))}
            </ul>
            <Link to="/kit" className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl text-lg transition-colors">
              Get Instant Access — $47
            </Link>
            <p className="text-gray-600 text-xs mt-3">Secure checkout · Instant delivery · Start immediately</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-orange-400 font-bold">THE BITCOIN BARBIE</span>
            <p className="text-gray-600 text-sm mt-1">© 2025 thebitcoinbarbie.com · All rights reserved</p>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="/course" className="hover:text-white transition-colors">Course</Link>
            <Link to="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <Link to="/consulting" className="hover:text-white transition-colors">Consulting</Link>
            <Link to="/kit" className="hover:text-white transition-colors">Get the Kit</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
