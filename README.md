# Nexus Studio — Design & Strategy ✒️

An premium, high-performance Design Studio Homepage built with **Next.js 15 (App Router)**, **Tailwind CSS**, and **Framer Motion**. This project transitions away from generic, template-driven SaaS landing pages, drawing inspiration instead from fine editorial publications, architectural magazines, and luxury brand aesthetics. 

The core philosophy centers around classical restraint—elevating digital presentation through refined typography, clean horizontal rules, and highly intentional whitespace.

## 🖼️ Visual Aesthetic

As captured in our structural blueprints (`image_7274fb.jpg`):
- **Signature Typography:** High-contrast headlines powered by *Playfair Display* balanced with clean, readable body copy via *Source Sans 3*.
- **The DNA Grid:** Clean, tracked uppercase label structures paired with 1px fine divider rules (`#E8E4DF`) to map out vertical rhythm.
- **Color Discipline:** A monochrome-leaning warm foundation built on an Ivory canvas (`#FAFAF8`) with a singular, quiet Burnished Gold accent (`#B8860B`).
- **Restrained Motion:** Smooth, fluid entrance fades using precise mathematical ease-out curves instead of energetic, elastic bounces.

---

## 🛠️ Folder Structure

```text
my-agency/
├── app/
│   ├── globals.css      # Core Tailwind CSS configuration and theme design tokens
│   ├── layout.js        # Google Fonts injection & Root semantic layouts
│   └── page.js          # Sequential index composition
├── components/
│   ├── Button.jsx       # Custom-tracked layout controls with 44px touch-targets
│   ├── Navbar.jsx       # Glassmorphic, border-anchored masthead
│   ├── Hero.jsx         # Ambient glow composition with oversized serif display
│   ├── SectionTitle.jsx # Reusable architectural rule and layout label primitive
│   ├── ServiceCard.jsx  # Pure white card surfaces utilizing gold hover accents
│   ├── ProjectCard.jsx  # Frame-first cases with detached exterior copy layout
│   ├── Contact.jsx      # Clean-box form layout with golden aria focus states
│   ├── Footer.jsx       # Minimalist tabular signature layout
│   ├── ScrollProgress.jsx
│   └── ScrollToTop.jsx
├── data/
│   ├── portfolio.js     # Optimized visual assets metadata source
│   └── services.js      # Competency definition sets
└── hooks/
    └── useTheme.js      # Hybrid client-safe theme management core

```

---

## 🏎️ Tech Stack & Key Configurations

* **Framework:** Next.js 15 (App Router / Functional & Modular Architecture)
* **Styling Layer:** Tailwind CSS (CSS-first variable structure mapping)
* **Animations:** Framer Motion (Deliberate entrance sequences)
* **Icons:** Lucide React (Rendered at lightweight `strokeWidth={1.5}`)

### Design Tokens Setup (`globals.css`)

```css
@theme {
  --color-background: #FAFAF8;
  --color-foreground: #1A1A1A;
  --color-muted: #F5F3F0;
  --color-muted-foreground: #6B6B6B;
  --color-accent: #B8860B;
  --color-border: #E8E4DF;
  --color-card: #FFFFFF;
}

```

---

## ⚡ Setup & Local Development

1. **Clone and Install Dependencies**
```bash
git clone <repository-url>
cd my-agency
npm install

```


2. **Run Local Server**
```bash
npm run dev

```


Open [http://localhost:3000](http://localhost:3000) to view the live compilation.
3. **Production Optimization & Test Execution**
```bash
npm run build
npm run start

```



---

## 📈 Engineering Standards Upgrades

* **Accessibility (a11y):** Form fields mapped with fully accessible, contextual input identifiers. Focus states use highly noticeable `ring-2 ring-accent` indicators to fulfill sequential keyboard navigation checks. All tap zones scale to a minimum `44px` target.
* **Image Architecture:** Powered entirely by native `next/image` pipelines, blocking Cumulative Layout Shift (CLS) by hard-specifying aspect ratios and declaring safety endpoints using secure wildcard hostname constraints.
* **Performance Constraints:** Removed multi-layered JavaScript tracking callbacks. Layout shifts have been eliminated by enforcing mount state flags on theme configurations to control server hydration errors.

```
