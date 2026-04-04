import { useState, useMemo } from "react";

const terms = [
  { term: "AML", definition: "Anti-Money Laundering. A set of policies and controls that financial institutions use to prevent illegal financial activities like money laundering." },
  { term: "API", definition: "Application Programming Interface. A set of rules that allows different software applications to communicate with each other." },
  { term: "Bear Market", definition: "A market condition where prices are falling or expected to fall. The opposite of a bull market." },
  { term: "Bitcoin", definition: "The first and largest cryptocurrency by market cap. Created in 2009 by an anonymous person/group known as Satoshi Nakamoto. It's a decentralized digital currency that uses blockchain technology." },
  { term: "Black Swan Event", definition: "An unexpected event with severe consequences. In crypto, this often refers to major price crashes or regulatory announcements." },
  { term: "Block", definition: "A collection of transactions that are bundled together and added to the blockchain. Each block contains a reference to the previous block, creating a chain." },
  { term: "Blockchain", definition: "A distributed, decentralized ledger technology. It's a chain of blocks containing transaction data that is shared across a network of computers." },
  { term: "Bull Market", definition: "A market condition where prices are rising or expected to rise. Characterized by investor confidence and optimism." },
  { term: "Central Bank", definition: "A national bank that manages a country's currency, monetary policy, and financial system. Examples include the Federal Reserve (US), ECB (Europe), and Bank of England (UK)." },
  { term: "Central Bank Digital Currency (CBDC)", definition: "A digital form of a country's fiat currency issued and regulated by its central bank. Unlike crypto, it's controlled by governments." },
  { term: "CeFi", definition: "Centralized Finance. Financial services provided by centralized companies (like Coinbase, Binance) where you don't control your private keys." },
  { term: "Cold Storage", definition: "Offline storage of cryptocurrency. Hardware wallets or paper wallets kept disconnected from the internet for security." },
  { term: "Correction", definition: "A decline of 10% or more in the price of a security or index from its most recent peak." },
  { term: "Crypto", definition: "Short for cryptocurrency. A digital asset that uses cryptography for security and operates on a decentralized network." },
  { term: "Custody", definition: "The holding of assets by a third party. In crypto, this means trusting an exchange or service to hold your funds." },
  { term: "DApp", definition: "Decentralized Application. An application that runs on a blockchain network instead of a central server." },
  { term: "DAO", definition: "Decentralized Autonomous Organization. An organization run by code instead of humans, where rules are encoded in smart contracts." },
  { term: "DeFi", definition: "Decentralized Finance. Financial services built on blockchain that operate without traditional intermediaries like banks." },
  { term: "Degen", definition: "Slang for 'degenerate.' Refers to traders who take high-risk bets, often in pursuit of massive gains." },
  { term: "DEX", definition: "Decentralized Exchange. A peer-to-peer marketplace where users trade crypto directly without an intermediary." },
  { term: "Diamond Hands", definition: "An investor who holds their assets through volatility and downturns, refusing to sell even during large losses." },
  { term: "Distributed Ledger", definition: "A database that is spread across multiple locations or participants. Blockchain is a type of distributed ledger." },
  { term: "DYOR", definition: "Do Your Own Research. A common disclaimer in crypto to encourage investors to research before buying." },
  { term: "Ethereum", definition: "The second-largest blockchain after Bitcoin. Created by Vitalik Buterin in 2015. It introduced smart contracts and dApps." },
  { term: "Exchange", definition: "A platform where you can buy, sell, and trade cryptocurrencies. Examples: Coinbase, Binance, Kraken." },
  { term: "Fiat", definition: "Government-issued currency like the US Dollar, Euro, or Yen. Not backed by a physical commodity." },
  { term: "FOMO", definition: "Fear Of Missing Out. The anxiety that arises when others are profiting and you're not." },
  { term: "FUD", definition: "Fear, Uncertainty, and Doubt. Negative sentiment spread about a cryptocurrency, often to manipulate prices." },
  { term: "Fundamental Analysis", definition: "Evaluating an asset by examining financial, economic, and qualitative factors to determine its value." },
  { term: "Gas", definition: "The fee paid to execute transactions on the Ethereum network. Gas prices fluctuate based on network demand." },
  { term: "Genesis Block", definition: "The very first block in a blockchain. The foundation block from which all subsequent blocks are built." },
  { term: "HODL", definition: "Originally a misspelling of 'hold,' now means buy and hold. A strategy of holding crypto long-term regardless of price swings." },
  { term: "Hot Wallet", definition: "A cryptocurrency wallet connected to the internet. More convenient but less secure than cold storage." },
  { term: "ICO", definition: "Initial Coin Offering. A fundraising method where new cryptocurrencies sell tokens to early investors before launch." },
  { term: "Inflation", definition: "The rate at which prices increase over time, reducing the purchasing power of money." },
  { term: "KYC", definition: "Know Your Customer. Identity verification requirements that crypto exchanges must follow to prevent fraud." },
  { term: "Layer 1", definition: "The base blockchain network itself (e.g., Bitcoin, Ethereum). Layer 2 solutions are built on top of Layer 1." },
  { term: "Layer 2", definition: "A secondary framework built on top of an existing blockchain to improve scalability and speed (e.g., Lightning Network for Bitcoin, Arbitrum for Ethereum)." },
  { term: "Ledger", definition: "A record-keeping book. In crypto, a distributed ledger is shared across many computers." },
  { term: "Lightning Network", definition: "A Layer 2 solution for Bitcoin that enables faster and cheaper transactions by processing them off the main blockchain." },
  { term: "Liquidity", definition: "How easily an asset can be bought or sold without significantly affecting its price." },
  { term: "Market Cap", definition: "Market Capitalization. The total value of a cryptocurrency calculated by multiplying its price by the number of coins in circulation." },
  { term: "Mining", definition: "The process of validating transactions and adding them to a blockchain using computational power." },
  { term: "Mobile Wallet", definition: "A smartphone app that stores cryptocurrency private keys. Examples: Trust Wallet, MetaMask Mobile." },
  { term: "Moon/Mooning", definition: "Slang for when a cryptocurrency's price rises dramatically." },
  { term: "NFT", definition: "Non-Fungible Token. A unique digital asset stored on a blockchain that represents ownership of digital or physical items." },
  { term: "Node", definition: "A computer connected to a blockchain network that validates and relays transactions." },
  { term: "Non-Custodial", definition: "A wallet or service where you control your own private keys. You have full ownership of your funds." },
  { term: "Open Source", definition: "Software whose code is publicly available for anyone to view, use, and modify." },
  { term: "Oracle", definition: "A service that feeds real-world data (like prices) into blockchain smart contracts." },
  { term: "Paper Hands", definition: "An investor who sells too early, often at a loss, due to fear or panic." },
  { term: "Peer-to-Peer (P2P)", definition: "A network where two people interact directly without intermediaries. Crypto P2P exchanges connect buyers and sellers directly." },
  { term: "Private Key", definition: "A secret password that gives access to your cryptocurrency. NEVER share this with anyone." },
  { term: "Proof of Stake (PoS)", definition: "A consensus mechanism where validators are chosen to create blocks based on the number of coins they hold and stake." },
  { term: "Proof of Work (PoW)", definition: "A consensus mechanism where miners compete using computational power to validate transactions and create blocks." },
  { term: "Public Key", definition: "An address you can share with others to receive cryptocurrency. It's derived from your private key but is safe to share." },
  { term: "Pump and Dump", definition: "A form of market manipulation where prices are artificially inflated then quickly sold off." },
  { term: "REKT", definition: "Slang for being completely financially ruined from a bad trade or investment." },
  { term: "Sats", definition: "Short for satoshis. The smallest unit of Bitcoin (0.00000001 BTC)." },
  { term: "Satoshi Nakamoto", definition: "The pseudonymous creator(s) of Bitcoin. Their true identity remains unknown." },
  { term: "Scalability", definition: "A blockchain's ability to handle a growing number of transactions efficiently." },
  { term: "SEC", definition: "Securities and Exchange Commission. The US regulator that oversees securities and may regulate certain cryptocurrencies." },
  { term: "Shilling", definition: "Promoting a cryptocurrency aggressively, often without disclosing personal利益." },
  { term: "Smart Contract", definition: "A self-executing program stored on the blockchain that automatically enforces rules when conditions are met." },
  { term: "Solana", definition: "A high-speed, low-cost blockchain known for its fast transaction times and growing ecosystem of dApps." },
  { term: "Stablecoin", definition: "A cryptocurrency pegged to a stable asset like the US Dollar. Examples: USDT (Tether), USDC, DAI." },
  { term: "Staking", definition: "Locking up cryptocurrency to support a blockchain network and earn rewards." },
  { term: "Technical Analysis", definition: "Studying price charts and patterns to predict future price movements." },
  { term: "To The Moon", definition: "Crypto slang for when a coin's price is skyrocketing." },
  { term: "Token", definition: "A digital asset built on top of an existing blockchain. Unlike coins, tokens don't have their own blockchain." },
  { term: "Trading", definition: "Buying and selling financial assets, including crypto, to profit from price movements." },
  { term: "Transaction Fee", definition: "The cost paid to process a crypto transaction, usually paid to miners or validators." },
  { term: "Trust Wallet", definition: "A popular non-custodial mobile cryptocurrency wallet that supports thousands of tokens." },
  { term: "USDT", definition: "Tether. The world's largest stablecoin, pegged 1:1 to the US Dollar." },
  { term: "Utility Token", definition: "A token that provides access to a specific product or service within a blockchain ecosystem." },
  { term: "Vitalik Buterin", definition: "The co-founder and primary developer of Ethereum. One of the most influential figures in crypto." },
  { term: "Volatility", definition: "How much the price of an asset fluctuates. Crypto is known for high volatility." },
  { term: "Wallet", definition: "A digital tool that stores your private keys and allows you to interact with the blockchain." },
  { term: "Web3", definition: "The vision of a decentralized internet built on blockchain technology, where users control their own data." },
  { term: "Whale", definition: "An individual or entity that holds massive amounts of cryptocurrency and can influence markets." },
  { term: "When Lambo", definition: "A meme in crypto culture asking when you'll be rich enough to buy a Lamborghini. Represents the aspirational side of crypto investing." },
  { term: "Whitepaper", definition: "A technical document that explains a cryptocurrency project's technology, goals, and roadmap." },
  { term: "Wrapped Coin", definition: "A tokenized version of a cryptocurrency that can be used on another blockchain. Example: Wrapped BTC (WBTC)." },
  { term: "Yield Farming", definition: "The practice of earning rewards by lending or staking cryptocurrency in DeFi protocols." },
];

export default function Glossary() {
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return terms.filter(t => t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q));
  }, [search]);

  const toggle = (term: string) => setExpanded(expanded === term ? null : term);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-orange-400 text-sm font-medium">THE BITCOIN BARBIE</span>
              <h1 className="text-3xl font-bold mt-1">Crypto Glossary</h1>
              <p className="text-gray-400 text-sm mt-1">164 terms every beginner needs to know</p>
            </div>
            <a href="/kit" className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg font-medium text-sm transition-colors">
              Get the Full Kit
            </a>
          </div>
        </div>
      </header>

      {/* Search */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for any crypto term..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 pl-12 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/25"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl">🔍</span>
        </div>
        <p className="text-gray-500 text-sm mt-3">{filtered.length} terms found</p>
      </div>

      {/* Terms Grid */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div className="grid gap-3">
          {filtered.map(({ term, definition }) => (
            <div key={term} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <button
                onClick={() => toggle(term)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold text-white">{term}</span>
                <span className={`text-gray-400 transition-transform ${expanded === term ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {expanded === term && (
                <div className="px-6 pb-5 pt-1">
                  <p className="text-gray-300 leading-relaxed">{definition}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No terms found for "{search}"</p>
            <button onClick={() => setSearch("")} className="mt-4 text-orange-400 hover:text-orange-300 text-sm">
              Clear search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
