import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Start From Zero",
    desc: "No prior crypto knowledge needed. We explain everything from what Bitcoin is to how to place your first trade."
  },
  {
    title: "Risk Management",
    desc: "Learn how to protect your capital first. Most beginners lose money by jumping in without understanding position sizing."
  },
  {
    title: "Real Strategies",
    desc: "Not theoretical fluff. Practical setups that actually work in current market conditions."
  },
  {
    title: "Build Real Wealth",
    desc: "The goal isn't trading excitement — it's compounding Bitcoin over time and watching your net worth grow."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-white/5">
        <img src="https://thebitcoinbarbie.com/images/logo.jpg" alt="The Bitcoin Barbie" className="h-14 object-contain" />
        <div className="flex gap-6 text-sm font-medium">
          <Link to="/kit" className="hover:text-pink-400 transition">Starter Kit</Link>
          <Link to="/course" className="hover:text-pink-400 transition">Course</Link>
          <Link to="/glossary" className="hover:text-pink-400 transition">Glossary</Link>
          <Link to="/consulting" className="hover:text-pink-400 transition">Coaching</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative px-8 py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto">
          <Badge className="mb-6 bg-pink-500/10 text-pink-400 border-pink-500/20 text-xs px-4 py-1">
            Trusted by 1,000+ beginners worldwide
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-pink-400 via-pink-300 to-purple-400 bg-clip-text text-transparent">
              Your First Bitcoin
            </span>
            <br />
            <span className="text-white">Starts Here</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            The step-by-step system that takes you from knowing nothing about crypto to confidently building your first Bitcoin portfolio — in under 7 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kit">
              <Button className="bg-pink-500 hover:bg-pink-600 text-white text-lg px-8 py-6 h-auto rounded-xl font-semibold">
                Get the Starter Kit — $7
              </Button>
            </Link>
            <Link to="/course">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 text-lg px-8 py-6 h-auto rounded-xl">
                Explore the Course
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="border-y border-white/5 bg-white/[0.02] py-8 px-8">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-12 text-center text-gray-500 text-sm">
          <div><span className="text-white font-bold text-lg">1,000+</span><br/>Students</div>
          <div><span className="text-white font-bold text-lg">4.9★</span><br/>Rating</div>
          <div><span className="text-white font-bold text-lg">50+</span><br/>Countries</div>
          <div><span className="text-white font-bold text-lg">24/7</span><br/>Access</div>
        </div>
      </section>

      {/* Features */}
      <section className="px-8 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Start</h2>
            <p className="text-gray-400 text-lg">No jargon. No confusion. Just clear, actionable guidance.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white/[0.03] border border-white/5 rounded-2xl p-8 hover:bg-white/[0.05] transition">
                <h3 className="text-xl font-semibold text-white mb-3">{f.title}</h3>
                <p className="text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kit Preview */}
      <section className="px-8 py-24 bg-gradient-to-b from-[#0a0a0f] to-[#12121a]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-pink-500/10 text-pink-400 border-pink-500/20 text-xs">What's Inside</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Bitcoin Starter Kit</h2>
              <ul className="space-y-4 text-gray-300">
                {["Bitcoin basics explained in plain English", "How to set up your first exchange account", "Security best practices — protect your funds", "How to read crypto charts (step by step)", "The exact buying strategy I recommend for beginners", "Common mistakes 90% of beginners make", "Glossary of 100+ essential crypto terms"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-pink-400 mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/kit">
                  <Button className="bg-pink-500 hover:bg-pink-600 text-white text-lg px-8 py-6 h-auto rounded-xl font-semibold">
                    Get Instant Access — $7
                  </Button>
                </Link>
                <p className="text-gray-500 text-sm mt-3">Instant digital delivery. Start learning in seconds.</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/5 border border-pink-500/20 rounded-3xl p-10 text-center">
              <img src="https://thebitcoinbarbie.com/images/logo.jpg" alt="The Bitcoin Barbie" className="w-48 mx-auto mb-6 object-contain" />
              <div className="text-5xl font-bold text-white mb-2">$7</div>
              <div className="text-gray-400 mb-6">One-time payment</div>
              <div className="text-left text-sm text-gray-300 space-y-2">
                <p>✓ Instant download access</p>
                <p>✓ Lifetime updates included</p>
                <p>✓ 100% satisfaction guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Bitcoin Journey?</h2>
          <p className="text-gray-400 text-lg mb-10">Join thousands of beginners who went from confused to confident in just days.</p>
          <Link to="/kit">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white text-xl px-12 py-8 h-auto rounded-2xl font-bold shadow-lg shadow-pink-500/20">
              Get Started for $7
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-8 py-10 text-center">
        <img src="https://thebitcoinbarbie.com/images/logo.jpg" alt="" className="h-10 object-contain mx-auto mb-4 opacity-60" />
        <p className="text-gray-600 text-sm">© 2026 The Bitcoin Barbie. All rights reserved.</p>
      </footer>
    </div>
  );
}
