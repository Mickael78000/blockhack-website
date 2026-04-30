# BlockHack Website

Professional blockchain security audit website for Solana and EVM smart contracts.

## 🌟 Features

- Responsive design (mobile-first)
- Modern animations with Framer Motion
- Interactive project showcase carousel
- Solana and EVM audit services
- Contact and team information

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** TailwindCSS + PostCSS
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Package Manager:** pnpm

## 🛠️ Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint

# Run tests
pnpm test

# Add a dependency
pnpm add <package>

# Add a dev dependency
pnpm add -D <package>
```

> **Lockfile:** `pnpm-lock.yaml`. Après migration, supprimer `package-lock.json` pour éviter toute ambiguïté sur le gestionnaire de paquets du projet.

## 📂 Project Structure

```
blockhack-website/
├── app/                          # App Router (routes Next.js)
│   ├── layout.tsx                # Root layout (html, body, styles globaux)
│   ├── page.tsx                  # Route /
│   └── demander-audit/
│       └── page.tsx              # Route /demander-audit
├── public/
│   ├── images/
│   └── videos/
└── src/
    ├── features/                 # Logique métier par domaine
    │   └── audit-request/
    │       └── AuditRequestForm.tsx
    ├── shared/                   # Code transversal réutilisable
    │   ├── components/
    │   │   ├── AnimatedSection.tsx
    │   │   ├── FloatingParticles.tsx
    │   │   ├── GridPattern.tsx
    │   │   └── ...
    │   └── hooks/
    │       └── useScrollAnimation.ts
    ├── sections/                 # Sections de présentation de page
    │   ├── Hero/
    │   ├── Navbar/
    │   ├── ServicesSection/
    │   ├── CaseStudiesCarousel/
    │   ├── TeamSection/
    │   ├── Footer/
    │   └── ...
    └── styles/
        └── globals.css           # Styles globaux Tailwind + tokens CSS
```

### `"use client"` — frontières clientes

En App Router, les composants sont Server Components par défaut. `"use client"` doit être ajouté **uniquement aux fichiers qui définissent une frontière cliente** rendue directement depuis un composant serveur — typiquement ceux qui utilisent des hooks React, des gestionnaires d'événements, des APIs navigateur ou des bibliothèques strictement clientes (ex. `framer-motion`). Les composants enfants importés depuis cette frontière n'ont pas tous besoin de répéter la directive.

### Aliases TypeScript

| Alias | Chemin |
|---|---|
| `@/*` | `src/*` |
| `@features/*` | `src/features/*` |
| `@shared/*` | `src/shared/*` |

## 🌐 Deployment

Built with Next.js, can be deployed to:
- Vercel (recommandé)
- Netlify
- Any Node.js hosting service

## 📄 License

MIT License - see LICENSE file

## 👤 Author

**Mickaël Girondeau**  
- Website: [BlockHack.io](https://blockhack.io)
- GitHub: [@Mickael78000](https://github.com/Mickael78000)

## 🔐 Security

For security issues, please email: security@blockhack.io
