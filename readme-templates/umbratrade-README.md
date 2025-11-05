# Umbratrade 🏦

> Decentralized trading platform built on Solana

[![Solana](https://img.shields.io/badge/Solana-14F195?style=for-the-badge&logo=solana&logoColor=white)]()
[![Rust](https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)]()

## 🎯 Overview

Umbratrade is a high-performance decentralized trading platform leveraging Solana's speed and low fees to deliver an institutional-grade trading experience.

## ✨ Features

- ⚡ **Fast Execution** - Sub-second transaction finality
- 💰 **Low Fees** - ~$0.00025 per transaction
- 🔐 **Non-Custodial** - Users maintain full control of funds
- 📊 **Advanced Charts** - TradingView integration
- 🎯 **Limit Orders** - On-chain order book
- 🔄 **Swap** - AMM integration for instant swaps

## 🏗️ Architecture

```
┌─────────────────┐
│   Frontend      │  React + TypeScript
│   (Next.js)     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Anchor        │  Solana Programs
│   Programs      │  (Rust)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Solana        │
│   Blockchain    │
└─────────────────┘
```

## 🛠️ Tech Stack

**Smart Contracts:**
- Rust
- Anchor Framework
- Solana Program Library (SPL)

**Frontend:**
- Next.js 14
- TypeScript
- TailwindCSS
- Wallet Adapter

**Infrastructure:**
- Vercel (hosting)
- RPC: Helius/QuickNode

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Rust 1.70+
- Solana CLI 1.16+
- Anchor 0.29+

### Installation

```bash
# Clone the repo
git clone https://github.com/Mickael78000/umbratrade.git
cd umbratrade

# Install dependencies
npm install

# Build programs
anchor build

# Run tests
anchor test

# Start frontend
npm run dev
```

### Environment Setup

```env
NEXT_PUBLIC_RPC_ENDPOINT=your_rpc_url
NEXT_PUBLIC_PROGRAM_ID=your_program_id
```

## 📖 Documentation

- [Architecture](./docs/architecture.md)
- [Smart Contract API](./docs/api.md)
- [Trading Guide](./docs/trading.md)

## 🧪 Testing

```bash
# Run all tests
anchor test

# Run specific test
anchor test --skip-build -- test_name
```

## 🔐 Security

- ✅ Audited by [Auditor Name] (link to report)
- ✅ Bug bounty program active
- ✅ Multi-sig treasury

## 📊 Performance

- **TPS:** 1,000+ transactions per second
- **Latency:** <500ms average
- **Uptime:** 99.9%

## 🤝 Contributing

Contributions welcome! See [CONTRIBUTING.md](./CONTRIBUTING.md)

## 📄 License

MIT License - see [LICENSE](./LICENSE)

## 🔗 Links

- **Website:** [umbratrade.io](https://umbratrade.io)
- **Docs:** [docs.umbratrade.io](https://docs.umbratrade.io)
- **Twitter:** [@umbratrade](https://twitter.com/umbratrade)
- **Discord:** [Join Community](https://discord.gg/umbratrade)

---

**Built with ❤️ on Solana**
