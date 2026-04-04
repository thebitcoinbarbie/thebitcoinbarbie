import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Success() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center">
      <div className="max-w-lg mx-auto px-6 py-16 text-center">
        <div className="text-7xl mb-6">🎉</div>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
          Payment Successful!
        </h1>
        <p className="text-gray-400 mb-2">
          Welcome to the crypto journey. Your order is confirmed.
        </p>
        <p className="text-gray-500 text-sm mb-8">
          A download link has been sent to your email. Check your inbox (and spam folder just in case).
        </p>
        <div className="space-y-3">
          <Button size="lg" className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white border-0" asChild>
            <Link to="/">Back to Home</Link>
          </Button>
          <Button size="lg" variant="outline" className="w-full border-orange-500/30 text-orange-400 hover:bg-orange-500/10" asChild>
            <Link to="/consulting">Book a 1-on-1 Session</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
