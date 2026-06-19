---
name: Nebula Core
colors:
  surface: '#0f1321'
  surface-dim: '#0f1321'
  surface-bright: '#353849'
  surface-container-lowest: '#0a0d1c'
  surface-container-low: '#171b2a'
  surface-container: '#1b1f2e'
  surface-container-high: '#262939'
  surface-container-highest: '#303444'
  on-surface: '#dfe1f6'
  on-surface-variant: '#c7c4d8'
  inverse-surface: '#dfe1f6'
  inverse-on-surface: '#2c303f'
  outline: '#918fa1'
  outline-variant: '#464555'
  surface-tint: '#c4c0ff'
  primary: '#c4c0ff'
  on-primary: '#2000a4'
  primary-container: '#8781ff'
  on-primary-container: '#1b0091'
  inverse-primary: '#4f44e2'
  secondary: '#7bd0ff'
  on-secondary: '#00354a'
  secondary-container: '#00a6e0'
  on-secondary-container: '#00374d'
  tertiary: '#c4c7c9'
  on-tertiary: '#2d3133'
  tertiary-container: '#8e9193'
  on-tertiary-container: '#272a2c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e3dfff'
  primary-fixed-dim: '#c4c0ff'
  on-primary-fixed: '#100069'
  on-primary-fixed-variant: '#3622ca'
  secondary-fixed: '#c4e7ff'
  secondary-fixed-dim: '#7bd0ff'
  on-secondary-fixed: '#001e2c'
  on-secondary-fixed-variant: '#004c69'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#0f1321'
  on-background: '#dfe1f6'
  surface-variant: '#303444'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-md:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The design system is engineered for an immersive, cinematic exploration of the cosmos. It targets enthusiasts and researchers who value a sense of discovery and high-tech sophistication. The emotional response should be one of awe, mystery, and precision.

The visual style is **Futuristic Glassmorphism**. It utilizes deep, layered backgrounds to simulate the vastness of space, accented by glowing interactive elements that represent starlight and energy. The aesthetic is characterized by high contrast between dark "void" surfaces and vibrant, luminous primary actions. Elements should feel lightweight yet grounded, often appearing as translucent HUD (Heads-Up Display) layers floating over planetary imagery.

## Colors

The palette is rooted in the "Void," using **Space Black** for primary backgrounds to maximize the impact of OLED displays and depth. **Deep Navy** provides tonal separation for containers and navigation bars. 

**Cosmic Purple** serves as the primary brand color, used for high-priority calls to action and structural accents. **Neon Blue** is the secondary functional color, reserved for informational highlights and active states. All typography is anchored by **Star White** for maximum legibility against dark backgrounds, with **Soft Grey** utilized for secondary metadata and de-emphasized labels.

## Typography

This design system uses a dual-font strategy to balance technical character with readability. **Space Grotesk** is the voice of the system, used for all headlines and display text. Its geometric quirks and "tech" feel reinforce the space-exploration theme. 

**Inter** handles all functional body text and interface labels. It is chosen for its exceptional legibility at small sizes and high-contrast environments. Large headlines should utilize tight letter spacing to feel impactful, while labels use slightly expanded tracking and uppercase transformations to mimic aeronautical cockpit displays.

## Layout & Spacing

The layout follows a **Fluid Grid** model with generous safe areas to maintain a "cinematic" feel. A 12-column grid is used for desktop (1280px max-width), scaling down to a 4-column grid for mobile devices.

Spacing is based on an 8px rhythmic scale. Layouts should prioritize vertical rhythm and deep margins to prevent the interface from feeling cluttered. Content blocks are separated by significant whitespace (64px+) to allow the cosmic background imagery to breathe and serve as a primary visual driver.

## Elevation & Depth

Depth is established through **Glassmorphism and Tonal Layers** rather than traditional drop shadows. 

1.  **Level 0 (Void):** The base background, typically a dark gradient or cosmic imagery.
2.  **Level 1 (Surface):** Semi-transparent `Deep Navy` containers with a `backdrop-filter: blur(12px)`.
3.  **Level 2 (Active):** Surfaces with a 1px inner border of `Star White` at 10% opacity and a subtle outer glow using `Cosmic Purple` or `Neon Blue` (blur: 20px, opacity: 0.15).

Interactions are signaled by an increase in border opacity and glow intensity, simulating a "powering on" effect.

## Shapes

The shape language is modern and approachable, utilizing a **Rounded** (0.5rem base) corner radius. This softens the high-tech aesthetic, making the vastness of space feel inviting rather than clinical.

- **Standard Elements:** 8px (0.5rem) radius (Buttons, Input Fields).
- **Large Containers:** 16px (1rem) radius (Cards, Modals).
- **Interactive Pills:** Fully rounded (Chips, Category Tags).

## Components

### Buttons
Primary buttons use a solid **Cosmic Purple** fill with a soft glow of the same color. Text is white and centered. Secondary buttons use a ghost style with a **Neon Blue** 1px border and high-blur background.

### Cards
Cards are the primary container for exploration content. They must feature a background blur of at least 16px and a 1px border (`#F8FAFC` at 10% opacity). On hover, the border color shifts to **Cosmic Purple** and the background image slightly scales up (1.05x).

### Input Fields
Inputs are dark and recessed. The bottom border is the primary focus; when active, it transitions from **Soft Grey** to **Neon Blue** with a faint glow.

### Chips & Badges
Used for categories like "Planet" or "Mission Status." They feature a semi-transparent fill of the category's accent color with high-contrast text.

### Navigation
The navigation bar is a fixed-top "glass" element. Links utilize a hover state that adds a small **Neon Blue** dot below the text, mimicking a star.