# Design

## Color Palette

| Role | Name | Value |
|------|------|-------|
| Primary background / brand | Navy | `#132C3F` |
| Accent / CTA | Orange | `#E86F24` |
| Secondary background | Beige | `#FAF8F5` |
| Text on dark | White | `#FFFFFF` |
| Text on light | Navy | `#132C3F` |
| Muted text on dark | White 45% | `rgba(255,255,255,0.45)` |

The palette is deliberately restrained: navy and beige alternate as section backgrounds with SVG wave transitions. Orange is reserved for CTAs, highlights, and accent elements only.

## Typography

| Role | Font | Weight | Notes |
|------|------|--------|-------|
| Headings | Montserrat | 700–800 | All headings H1–H4 |
| Body / UI | Inter | 400–600 | All body text and labels |

Loaded via `next/font/google`. CSS variables: `--font-montserrat`, `--font-inter`.

## Layout

- **Max content width**: `max-w-7xl` (1280px)
- **Section rhythm**: alternating navy → beige → navy, separated by SVG wave transitions
- **Grid**: 12-column base; cards typically 3–4 columns on desktop, 1 on mobile
- **Spacing scale**: Tailwind defaults (4px base unit)
- **Navbar**: fixed, navy background, height ~72px
- **Logo treatment**: white `rounded-lg` container (`bg-white rounded-lg p-1`) on navy backgrounds

## Components

### Navbar
Fixed navy header. Dropdown "Nos Actions" with 200ms close delay and invisible bridge div to prevent accidental close. Scrollbar hidden on dropdown (`scrollbar-hidden` class).

### ActionPageLayout
Reusable layout for all 13 program pages: navy hero + SVG wave → beige content section → navy CTA. Props: `icon`, `label`, `title`, `subtitle`, `montants[]`, `description`.

### Donation Card (`montants`)
Three preset amounts shown as cards (25€ / 75€ / 300€ typical). Orange value, navy label.

### Wave Transition
SVG `<path>` wave between navy and beige sections. Fill matches the section below.

### Footer
4-column grid on desktop: logo+description / Nos Actions / Liens rapides / Contact. White logo on navy with same rounded container treatment.

## Motion

Framer Motion (`whileInView`, `variants`). Stagger on card grids. Ease: cubic defaults (no custom `ease` string to avoid TypeScript errors). Reduced-motion not yet explicitly handled.

## References

- **Jariyaa.com** — inspiration for the "Planter un arbre" program page (tree cards + certificate/video proof + 4-step process)
- **Direction 2 (Sections Contrastées)** — the chosen visual direction: alternating navy/beige with SVG waves
