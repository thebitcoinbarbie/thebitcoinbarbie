import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Consulting() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Nav */}
      <nav className="border-b border-gray-800 bg-[#0a0a0f]/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="font-bold text-xl">TheBitcoinBarbie</Link>
          <Link to="/" className="text-gray-400 hover:text-white text-sm">← Back</Link>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-3 py-1 bg-orange-500/10 rounded-full text-sm text-orange-400 border border-orange-500/20">
            1-on-1 Sessions
          </div>
          <h1 className="text-4xl font-bold mb-4">Personal Crypto Help</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get your specific questions answered directly. Sydney works with beginners who need honest, no-hype guidance in the crypto space.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* 15 min */}
          <Card className="bg-[#111118] border-gray-800">
            <CardContent className="p-8">
              <div className="text-sm text-gray-500 mb-1">QUICK HELP</div>
              <div className="flex items-end gap-2 mb-2">
                <span className="text-4xl font-bold">$25</span>
                <span className="text-gray-500 mb-1">/ 15 min</span>
              </div>
              <div className="text-sm text-gray-400 mb-6">Perfect for a few specific questions</div>
              <ul className="space-y-2 text-sm text-gray-300 mb-6">
                <li>✅ Quick questions answered</li>
                <li>✅ Account setup help</li>
                <li>✅ Term explanation</li>
                <li>✅ Trade strategy review</li>
              </ul>
              <a href="https://buy.stripe.com/YOUR_15MIN_LINK" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white border-0">
                  Book 15 Minutes
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* 1 hour */}
          <Card className="bg-gradient-to-br from-[#111118] to-[#0a0a0f] border-orange-500/30">
            <CardContent className="p-8">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm text-orange-400">RECOMMENDED</span>
              </div>
              <div className="flex items-end gap-2 mb-2">
                <span className="text-4xl font-bold">$75</span>
                <span className="text-gray-500 mb-1">/ 1 hour</span>
              </div>
              <div className="text-sm text-gray-400 mb-6">Deep dive — full session</div>
              <ul className="space-y-2 text-sm text-gray-300 mb-6">
                <li>✅ Complete session</li>
                <li>✅ Personalized roadmap</li>
                <li>✅ Wallet & exchange setup</li>
                <li>✅ DCA strategy planning</li>
                <li>✅ Security best practices</li>
              </ul>
              <a href="https://buy.stripe.com/YOUR_1HR_LINK" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white border-0">
                  Book 1 Hour
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Sessions conducted via video call. Payment required to book. Cancellation policy: 24 hours notice.
          </p>
        </div>
      </div>
    </div>
  );
}
