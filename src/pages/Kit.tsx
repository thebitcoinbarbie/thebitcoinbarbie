import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Kit() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePurchase = async () => {
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, product: "crypto-starter-kit" }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Connection failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Nav */}
      <nav className="border-b border-gray-800 bg-[#0a0a0f]/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="font-bold text-xl">TheBitcoinBarbie</Link>
          <Link to="/" className="text-gray-400 hover:text-white text-sm">← Back</Link>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Product Info */}
          <div>
            <div className="inline-block mb-4 px-3 py-1 bg-orange-500/10 rounded-full text-sm text-orange-400 border border-orange-500/20">
              Complete Digital Bundle
            </div>
            <h1 className="text-4xl font-bold mb-4">Crypto Starter Kit</h1>
            <p className="text-gray-400 mb-8">
              The complete beginner's guide to crypto — three powerful resources that take you from zero knowledge to confident holder.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex gap-3">
                <span className="text-2xl">📖</span>
                <div>
                  <div className="font-semibold">164-Page Beginner Guide</div>
                  <div className="text-gray-500 text-sm">From "what is Bitcoin?" to making your first trade. No prior knowledge needed.</div>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">🗂️</span>
                <div>
                  <div className="font-semibold">100+ Term Glossary</div>
                  <div className="text-gray-500 text-sm">Crypto vocabulary explained in plain English. Finally understand what you're reading.</div>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <div className="font-semibold">First Trade Checklist</div>
                  <div className="text-gray-500 text-sm">A foolproof step-by-step checklist for your first purchase.</div>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">🔒</span>
                <div>
                  <div className="font-semibold">Lifetime Access</div>
                  <div className="text-gray-500 text-sm">Buy once, keep forever. Future updates included free.</div>
                </div>
              </div>
            </div>

            <Card className="bg-[#111118] border-gray-800">
              <CardContent className="p-4 text-sm text-gray-400">
                <div className="flex items-start gap-2">
                  <span>💡</span>
                  <p>100+ people have trusted Sydney's guidance to start their crypto journey the right way.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right - Checkout */}
          <div>
            <Card className="bg-gradient-to-br from-[#111118] to-[#0a0a0f] border-orange-500/30 sticky top-24">
              <CardContent className="p-8">
                <div className="text-sm text-gray-500 mb-1">Total</div>
                <div className="flex items-end gap-2 mb-6">
                  <span className="text-5xl font-bold">$47</span>
                  <span className="text-gray-500 mb-2">one-time</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-[#1a1a24] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  {error && (
                    <div className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2">
                      {error}
                    </div>
                  )}

                  <Button
                    onClick={handlePurchase}
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white border-0 py-6 text-lg"
                  >
                    {loading ? "Redirecting..." : "Buy Now — $47"}
                  </Button>

                  <div className="text-center text-gray-500 text-xs">
                    Secure checkout powered by Stripe. You'll receive your download link immediately after payment.
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
