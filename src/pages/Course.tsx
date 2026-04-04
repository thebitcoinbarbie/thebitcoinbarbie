import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const modules = [
  {
    number: 1,
    title: "Welcome to Crypto",
    icon: "👋",
    description: "What crypto is, why it matters, and how it changed my life. No jargon, just truth.",
    lessons: [
      { title: "Why I Wrote This Guide", duration: "5 min" },
      { title: "The Four Ways to Read This Book", duration: "3 min" },
      { title: "What Is Cryptocurrency?", duration: "8 min" },
      { title: "Who Is Satoshi Nakamoto?", duration: "4 min" },
    ]
  },
  {
    number: 2,
    title: "Blockchain Basics",
    icon: "⛓️",
    description: "The technology behind everything. I explain it like we're kids playing a game.",
    lessons: [
      { title: "What Is Blockchain?", duration: "7 min" },
      { title: "How Does Blockchain Work?", duration: "10 min" },
      { title: "Public vs. Private Blockchains", duration: "6 min" },
      { title: "What Is a Distributed Ledger?", duration: "5 min" },
    ]
  },
  {
    number: 3,
    title: "Crypto & Traditional Banking",
    icon: "🏦",
    description: "How crypto intersects with the banks, the Fed, and your money.",
    lessons: [
      { title: "What Is a Central Bank?", duration: "6 min" },
      { title: "What Is Fiat Currency?", duration: "5 min" },
      { title: "What Is Inflation?", duration: "7 min" },
      { title: "What Is AML?", duration: "5 min" },
      { title: "What Is KYC?", duration: "4 min" },
    ]
  },
  {
    number: 4,
    title: "Your First Investment",
    icon: "💰",
    description: "Everything you need to know before spending your first dollar in crypto.",
    lessons: [
      { title: "Who Can Invest in Crypto?", duration: "4 min" },
      { title: "Types of Investments", duration: "8 min" },
      { title: "What Is Fundamental Analysis?", duration: "10 min" },
      { title: "What Is Technical Analysis?", duration: "9 min" },
      { title: "What Is DYOR?", duration: "3 min" },
    ]
  },
  {
    number: 5,
    title: "Coins, Tokens & Projects",
    icon: "🪙",
    description: "Bitcoin, Ethereum, altcoins, meme coins — what's the difference and why it matters.",
    lessons: [
      { title: "What Is Bitcoin?", duration: "7 min" },
      { title: "What Is Ethereum?", duration: "8 min" },
      { title: "Coins vs. Tokens — What's the Difference?", duration: "6 min" },
      { title: "What Is a Whitepaper?", duration: "5 min" },
      { title: "What Is Market Cap?", duration: "4 min" },
      { title: "What Is Vitalik Buterin?", duration: "3 min" },
    ]
  },
  {
    number: 6,
    title: "Exchanges & Wallets",
    icon: "🔐",
    description: "Where to buy crypto and how to keep it safe. This is the most important section.",
    lessons: [
      { title: "What Is a Crypto Exchange?", duration: "6 min" },
      { title: "What Is a Wallet?", duration: "7 min" },
      { title: "What Is a Private Key?", duration: "5 min" },
      { title: "What Is a Public Key?", duration: "3 min" },
      { title: "Hot Wallet vs. Cold Storage", duration: "6 min" },
      { title: "What Is Trust Wallet?", duration: "4 min" },
      { title: "What Is a Mobile Wallet?", duration: "3 min" },
    ]
  },
  {
    number: 7,
    title: "Trading Crypto",
    icon: "📊",
    description: "How the markets actually work — volatility, corrections, bull and bear markets.",
    lessons: [
      { title: "What Is Trading?", duration: "5 min" },
      { title: "Bull Market vs. Bear Market", duration: "6 min" },
      { title: "What Is a Correction?", duration: "4 min" },
      { title: "What Is Volatility?", duration: "5 min" },
      { title: "What Is a Transaction Fee?", duration: "3 min" },
      { title: "What Is Liquidity?", duration: "4 min" },
    ]
  },
  {
    number: 8,
    title: "DeFi & The Future",
    icon: "🚀",
    description: "Decentralized finance explained simply — no banks, no intermediaries, just you.",
    lessons: [
      { title: "What Is DeFi?", duration: "7 min" },
      { title: "What Is CeFi?", duration: "5 min" },
      { title: "What Is a DEX?", duration: "6 min" },
      { title: "What Is Staking?", duration: "5 min" },
      { title: "What Is Yield Farming?", duration: "6 min" },
      { title: "What Is a DAO?", duration: "5 min" },
      { title: "What Is Web3?", duration: "7 min" },
    ]
  },
  {
    number: 9,
    title: "NFTs & Digital Ownership",
    icon: "🎨",
    description: "What NFTs really are, how to evaluate them, and why digital ownership matters.",
    lessons: [
      { title: "What Is an NFT?", duration: "6 min" },
      { title: "How to Evaluate an NFT Project", duration: "8 min" },
    ]
  },
  {
    number: 10,
    title: "Crypto Glossary",
    icon: "📖",
    description: "164 essential crypto terms, all defined in plain English. Use this as your reference guide.",
    lessons: [
      { title: "Browse the Full Glossary", duration: "Reference" },
    ]
  },
];

export default function Course() {
  const totalLessons = modules.reduce((sum, m) => sum + m.lessons.length, 0);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-orange-400 text-sm font-medium">THE BITCOIN BARBIE</span>
              <h1 className="text-3xl font-bold mt-1">Crypto Starter Kit — Full Course</h1>
              <p className="text-gray-400 text-sm mt-1">10 modules · {totalLessons} lessons · Beginner Friendly</p>
            </div>
            <a href="/kit" className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg font-medium text-sm transition-colors">
              Enroll — $47
            </a>
          </div>
        </div>
      </header>

      {/* Intro Banner */}
      <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/5 border-b border-orange-500/20">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="text-7xl">📚</div>
            <div>
              <h2 className="text-2xl font-bold mb-2">"I wrote this for people who feel lost."</h2>
              <p className="text-gray-400 leading-relaxed">
                I entered crypto in 2017 with no idea what I was getting into. After a decade of learning from the best in the industry, I distilled everything into this guide — no jargon, no gatekeeping, just real knowledge for real beginners.
              </p>
              <p className="text-orange-400 mt-2 font-medium">— Sydney, TheBitcoinBarbie</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modules */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid gap-6">
          {modules.map((mod) => (
            <Card key={mod.number} className="bg-white/5 border-white/10">
              <CardContent className="p-6">
                <div className="flex gap-5">
                  <div className="text-4xl">{mod.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span className="text-orange-400 text-xs font-bold tracking-wider uppercase">Module {mod.number}</span>
                        <h3 className="text-xl font-bold mt-1">{mod.title}</h3>
                        <p className="text-gray-400 text-sm mt-1">{mod.description}</p>
                      </div>
                      <span className="text-gray-500 text-xs bg-white/5 px-3 py-1 rounded-full">{mod.lessons.length} lessons</span>
                    </div>
                    <div className="mt-4">
                      <ul className="space-y-2">
                        {mod.lessons.map((lesson, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm">
                            <span className="text-orange-400">▶</span>
                            <span className="text-gray-300 flex-1">{lesson.title}</span>
                            <span className="text-gray-600">{lesson.duration}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-orange-500/20 to-amber-500/10 border border-orange-500/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-2">Ready to start?</h3>
          <p className="text-gray-400 mb-6">Get the full course + vocabulary cheat sheet + trading checklist for $47</p>
          <a href="/kit" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors">
            Get Instant Access Now
          </a>
          <p className="text-gray-600 text-xs mt-3">One-time payment · Lifetime access · Instant delivery</p>
        </div>
      </div>
    </div>
  );
}
