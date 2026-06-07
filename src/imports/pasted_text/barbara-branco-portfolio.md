# PROMPT — Figma Make: Barbara Branco Portfolio

---

## PASTE THIS INTO FIGMA MAKE:

---

Build an interactive single-page portfolio website for "Barbara Branco" with a scroll-jacked hero-to-portfolio transition animation. The experience has two visual states that transition as the user scrolls.

---

### VISUAL IDENTITY

- **Primary font:** Ultra-bold, condensed, all-caps display typeface (similar to Anton, Bebas Neue, or Impact). Use the heaviest weight available.
- **Color 1 (hero background):** Bright cobalt blue — #3333FF or similar electric blue
- **Color 2 (portfolio background):** Deep navy / dark blue — #0D0D2B or similar very dark blue
- **Text color on blue backgrounds:** White (#FFFFFF)
- **Card background:** White or very light gray
- **Card text:** Dark gray or near-black

---

### STATE 1 — HERO (initial, before scroll)

**Full viewport layout, no scrollbar visible:**

- Background: Bright cobalt blue, full bleed, covers 100vh
- Center-left of the screen: The name **"BARBARA BRANCO"** rendered in a massive, ultra-bold condensed display font. The text should be enormous — approximately 120–160px, spanning roughly 70–80% of the viewport width. The text breaks into two lines: "BARBARA" on top, "BRANCO" below.
- A small decorative asterisk (*) or star symbol placed near the "O" of "BRANCO"
- Bottom-right corner: a small italic or light-weight phrase reading **"Fazendo design para pessoas"** — approximately 14–16px, right-aligned
- No header, no navigation, no scrollbar in this state
- The page appears locked — no traditional scroll behavior yet

---

### TRANSITION ANIMATION (triggered by scroll gesture)

When the user begins to scroll down, instead of the page scrolling normally, a **scroll-jacked animation sequence** plays out. The page stays in place while elements animate. Normal scrolling only resumes after the transition completes.

**Animate all of the following simultaneously, driven by scroll progress (0% → 100% of transition):**

1. **Background color:** Smoothly interpolates from bright cobalt blue (#3333FF) → deep dark navy (#0D0D2B). Use a smooth ease-in-out curve across the full scroll range.

2. **"BARBARA BRANCO" text — scale + position:**
   - Starts: large (120–160px), centered-left on screen
   - Ends: small (approximately 18–24px, bold but compact), fixed at **top-left corner**, with ~24px padding from edges — functioning as the site logo/wordmark
   - The transition should feel like the text "flies" from the hero to its final nav position
   - Use a smooth ease-in-out on both scale and position

3. **"Fazendo design para pessoas" phrase:**
   - Starts: visible at bottom-right
   - Fades out to opacity: 0 during the first 40% of the scroll transition
   - Disappears completely before the animation finishes

4. **Project cards:**
   - 8 cards arranged in a 4-column grid
   - Cards start below the viewport (translateY: 100vh or similar, off-screen bottom)
   - As scroll progresses, the cards rise upward into view
   - Stagger the cards slightly (each column or card appears with a small delay — 50–80ms stagger)
   - By 100% of the scroll transition, all cards are fully visible in their grid

---

### STATE 2 — PORTFOLIO (after transition completes)

**Layout after the scroll-jacked animation finishes:**

- Background: Deep dark navy (#0D0D2B), full bleed
- **Fixed top-left:** "BARBARA BRANCO" wordmark — small, white, bold — stays fixed as the user scrolls through projects
- No visible navigation menu items (just the logo is enough)
- **Main content:** A grid of project cards, 4 columns, 2 rows visible initially

**Each project card:**
- White or off-white background (#FFFFFF or #F5F5F5)
- Rounded corners (12–16px border-radius)
- Top area: a square/rectangular image placeholder (gray fill, takes up ~60% of card height)
- Bottom area:
  - Small label: "Título" in blue accent color (matching cobalt blue from hero)
  - Tiny metadata text below title (e.g., "nome cliente" in very small gray)
  - A badge/tag on the right side of the title (small pill with "UX" or similar)
  - Below that: short description text, "lorem ipsum texto longo aqui" in dark gray, small size (~12–13px)
- Card has a subtle hover state: slight lift (translateY: -4px) with a soft shadow

**After the transition animation locks into place:**
- Normal page scrolling is re-enabled
- The user can scroll down to see more content below the card grid
- The "BARBARA BRANCO" wordmark stays fixed at the top-left throughout

---

### SCROLL BEHAVIOR SUMMARY

| Scroll Phase | What Happens |
|---|---|
| Page load | State 1: Hero — cobalt blue, giant name, tagline |
| First scroll gesture begins | Scroll is intercepted — animation starts |
| Scroll 0–100% | Color changes, name shrinks to nav, tagline fades, cards rise |
| Scroll reaches 100% | Animation locks. State 2 is complete. |
| Further scrolling | Normal page scroll — user browses the project grid |

---

### ADDITIONAL NOTES

- The scroll-jack effect should feel smooth and intentional, not jarring. Aim for ~600–800ms total animation duration driven by scroll delta.
- Use `position: sticky` or `position: fixed` + scroll event listeners to implement the locked scroll behavior.
- The transition should work well on both desktop and mobile (stack cards to 2 columns on mobile).
- Keep the overall aesthetic minimal and typographic — the giant name IS the design statement.
- No hamburger menu, no other navigation elements needed for this version.
- The star/asterisk (*) near "BRANCO" can optionally stay on screen as a decorative element in the wordmark at small size.