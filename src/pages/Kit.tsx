import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, BookOpen, Zap, Shield, Download, ArrowRight } from "lucide-react";

const features = [
  { icon: BookOpen, text: "164 pages of plain-English crypto education" },
  { icon: Zap, text: "Go from zero to confident in under 2 hours" },
  { icon: Shield, text: "Written by an experienced crypto investor" },
  { icon: Download, text: "Instant PDF download — read on any device" },
];

const contents = [
  "What Bitcoin actually is (and why it matters)",
  "How to set up your first wallet safely",
  "Understanding blockchain in 5 minutes",
  "DeFi explained without the jargon",
  "Crypto vocab glossary — 100+ terms defined",
  "Common scams and how to avoid them",
  "Proofs & verifications so you know it's real",
];

export default function Kit() {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState<"landing" | "checkout" | "success">("landing");

  const handleCheckout = () => {
    if (!email) return;
    window.open("https://buy.stripe.com/6oU28r7lZgC2fij1Ija7C09", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950">
      <header className="border-b border-emerald-900/30 bg-black/20 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            The Bitcoin Barbie
          </span>
          <a href="/" className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
            ← Back to Home
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16">
        {step === "landing" && (
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <Badge className="mb-4 bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                📖 164-Page PDF Guide
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                The Bitcoin Beginners Kit
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                The plain-English guide to crypto that actually makes sense. No jargon, no hype — just real knowledge from someone who's been there.
              </p>

              <div className="space-y-4 mb-8">
                {features.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-slate-300">
                    <Icon className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-slate-900/80 border-emerald-500/20 backdrop-blur-sm sticky top-8">
              <CardHeader>
                <CardTitle className="text-2xl text-white">What You'll Learn</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {contents.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-slate-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
                <div className="pt-4 border-t border-slate-700">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-white">$7</span>
                    <span className="text-slate-400 line-through text-lg">$27</span>
                    <Badge className="bg-red-500/20 text-red-400 border-red-500/30 text-xs">
                      74% OFF
                    </Badge>
                  </div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder:text-slate-500 mb-3 focus:outline-none focus:border-emerald-500"
                  />
                  <Button
                    onClick={handleCheckout}
                    className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold py-6 text-lg"
                  >
                    Get Instant Access — $7
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <p className="text-center text-xs text-slate-500 mt-3">
                    Secure checkout via Stripe • Instant PDF delivery
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="border-t border-slate-800 mt-16">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-slate-500 text-sm">
          © 2025 The Bitcoin Barbie. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
