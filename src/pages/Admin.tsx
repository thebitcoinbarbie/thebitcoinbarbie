import { useState, useEffect } from "react";
import { BarChart3, Users, DollarSign, BookOpen, Clock } from "lucide-react";

const mockOrders = [
  { id: "ord_1", customer: "john@example.com", amount: 1500, status: "completed", date: "2026-04-15" },
  { id: "ord_2", customer: "sarah@crypto.io", amount: 1500, status: "completed", date: "2026-04-14" },
  { id: "ord_3", customer: "mike DeFi", amount: 1500, status: "pending", date: "2026-04-14" },
];

export default function Admin() {
  const [orders, setOrders] = useState(mockOrders);

  const totalRevenue = orders.filter(o => o.status === "completed").reduce((sum, o) => sum + o.amount, 0) / 100;
  const totalOrders = orders.length;
  const completedOrders = orders.filter(o => o.status === "completed").length;

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="bg-slate-900 border-b border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center font-bold text-lg">BB</div>
            <div>
              <h1 className="font-bold text-lg">The Bitcoin Barbie</h1>
              <p className="text-xs text-slate-400">Admin Dashboard</p>
            </div>
          </div>
          <a href="/#/kit" className="text-sm text-slate-400 hover:text-white transition-colors">← Back to Store</a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold mb-8">Dashboard Overview</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {[
            { label: "Total Revenue", value: `$${totalRevenue.toFixed(2)}`, icon: DollarSign, color: "text-emerald-400" },
            { label: "Total Orders", value: totalOrders, icon: BookOpen, color: "text-blue-400" },
            { label: "Completed", value: completedOrders, icon: Users, color: "text-purple-400" },
            { label: "Avg. Order", value: totalOrders > 0 ? `$${(totalRevenue / totalOrders).toFixed(2)}` : "$0", icon: BarChart3, color: "text-pink-400" },
          ].map(({ label, value, icon: Icon, color }) => (
            <div key={label} className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-slate-400 text-sm">{label}</span>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <p className={`text-3xl font-bold ${color}`}>{value}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-800">
            <h3 className="font-semibold text-lg">Recent Orders</h3>
          </div>
          <table className="w-full">
            <thead className="bg-slate-800/50">
              <tr>
                <th className="text-left px-6 py-3 text-xs text-slate-400 uppercase tracking-wider">Customer</th>
                <th className="text-left px-6 py-3 text-xs text-slate-400 uppercase tracking-wider">Date</th>
                <th className="text-left px-6 py-3 text-xs text-slate-400 uppercase tracking-wider">Amount</th>
                <th className="text-left px-6 py-3 text-xs text-slate-400 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 text-sm">{order.customer}</td>
                  <td className="px-6 py-4 text-sm text-slate-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {order.date}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-emerald-400">${(order.amount / 100).toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${order.status === "completed" ? "bg-emerald-500/20 text-emerald-400" : "bg-yellow-500/20 text-yellow-400"}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {orders.length === 0 && (
            <div className="text-center py-16 text-slate-400">
              <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>No orders yet</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
