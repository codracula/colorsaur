# Colorsaur — Artist Asset Guide

This folder contains all the slots where custom artwork replaces the placeholder boxes on the website.
Each subfolder is one art slot. Drop your final file in, name it exactly as shown, then swap the placeholder in `index.html`.

---

## How to Replace a Placeholder in index.html

Every placeholder block looks like this:

```html
<div class="art-placeholder art-placeholder--hero">
  <div class="art-ph-inner"> ... </div>
</div>
```

**Replace the entire block** with a single `<img>` tag:

```html
<img
  src="assets/hero/mascot.png"
  alt="Colorsaur mascot dinosaur"
  class="art-img art-img--hero"
  loading="eager"
/>
```

Use `loading="lazy"` for everything below the hero.

---

## General Rules for All Art

| Rule | Requirement |
|------|-------------|
| Color mode | **RGB** (not CMYK) |
| Color profile | **sRGB** |
| Bit depth | 8-bit per channel |
| Background | **Transparent PNG** preferred for illustrations; JPG/WebP ok for photos |
| Resolution | Export at **2× the canvas size** listed below (for retina screens) |
| File size | Keep under **500 KB** per image. Use [Squoosh](https://squoosh.app) or [TinyPNG](https://tinypng.com) to compress |
| Naming | **Lowercase, no spaces** — use the exact filenames listed below |

---

## Slot Specs

---

### 1. `hero/` — Mascot Art
**File:** `hero/mascot.png`

This is the most prominent art on the page — the first thing visitors see.

| Property | Value |
|----------|-------|
| Canvas size | **800 × 960 px** |
| Export size | 800 × 960 px @ 2× → **1600 × 1920 px** |
| Format | PNG with transparent background |
| Placement | Right half of hero section, floats gently up and down |
| Style | Colorsaur dino mascot, friendly pose, full body or ¾ view. Bright, vivid colors. |
| Mood | Cheerful, welcoming, full of personality |
| Notes | Leave ~40 px padding on all edges so the float animation doesn't clip. The dino should face slightly left (toward the text). A speech bubble is optional — it can be baked into the art. |

**Do not include:** drop shadows (handled by CSS), heavy outlines that clash with the background gradient.

---

### 2. `about/` — Studio Art
**File:** `about/studio.png` or `about/studio.jpg`

| Property | Value |
|----------|-------|
| Canvas size | **880 × 880 px** |
| Export size | **1760 × 1760 px** |
| Format | PNG (illustration) or JPG/WebP (photo) |
| Placement | Left column of the About section |
| Style | Team photo, studio workspace, or a group illustration of the team characters |
| Mood | Collaborative, warm, human/approachable |
| Notes | Will be displayed in a rounded rectangle frame (border-radius: 32px). Keep subjects centered with 32 px safe margin on all sides. For a team photo: bright, candid, good lighting. |

---

### 3. `mission/` — Mission Art
**File:** `mission/mission.png`

| Property | Value |
|----------|-------|
| Canvas size | **720 × 760 px** |
| Export size | **1440 × 1520 px** |
| Format | PNG with transparent background |
| Placement | Right column of the Mission section (purple background) |
| Style | Abstract or symbolic illustration — ideas: glowing game controller, colorful paintbrush, open book transforming into a game level |
| Mood | Inspiring, creative, forward-looking |
| Notes | The section background is deep purple (`#7c3aed → #9333ea`). Use **light or white-dominant colors** so the art reads well against it. Avoid dark backgrounds in the art itself. |

---

### 4. `vision-innovation/` — Innovation Art
**File:** `vision-innovation/innovation.png`

| Property | Value |
|----------|-------|
| Canvas size | **880 × 440 px** (landscape / wide) |
| Export size | **1760 × 880 px** |
| Format | PNG with transparent or light background |
| Placement | Top portion (image area) of the "Innovation & Creativity" vision card |
| Style | Abstract tech + art fusion — circuit patterns, light bulbs, colorful geometric shapes, creative tools |
| Mood | Bold, inventive, energetic |
| Notes | Will be cropped to 220 px tall in a card. Keep key visuals centered vertically. Avoid text in the art. |

---

### 5. `vision-community/` — Community Art
**File:** `vision-community/community.png`

| Property | Value |
|----------|-------|
| Canvas size | **880 × 440 px** (landscape / wide) |
| Export size | **1760 × 880 px** |
| Format | PNG with transparent or light teal/mint background |
| Placement | Top portion of the "Community First" vision card |
| Style | People connecting, group of characters/avatars, chat bubbles, celebration |
| Mood | Warm, inclusive, joyful, social |
| Notes | Same crop as Innovation Art. Card background is teal/mint (`#f0fdfa`). Match warm/cool tones accordingly. |

---

### 6. `coming-soon/` — Coming Soon / Stay Tuned Art
**File:** `coming-soon/teaser.png`

| Property | Value |
|----------|-------|
| Canvas size | **800 × 600 px** |
| Export size | **1600 × 1200 px** |
| Format | PNG with transparent background preferred |
| Placement | Left column of the "Stay Tuned" banner |
| Style | Teaser art for the upcoming game — could be a key character, a scene snippet, or a stylized "coming soon" graphic with the dino |
| Mood | Exciting, mysterious, builds hype |
| Notes | Background is white with a subtle dot pattern. Art will sit left of text — compose with the focal point on the right side of the canvas. |

---

### 7. `contact/` — Contact Art
**File:** `contact/contact.png`

| Property | Value |
|----------|-------|
| Canvas size | **560 × 560 px** |
| Export size | **1120 × 1120 px** |
| Format | PNG with transparent background |
| Placement | Left column of the Contact card |
| Style | Friendly character (dino or mascot) waving, holding a letter/envelope, or at a mailbox |
| Mood | Approachable, friendly, inviting |
| Notes | Background is light purple (`#faf5ff`). Keep the character roughly centered. |

---

### 8. `logo/` — Logo Variants
**Files:**

| Filename | Use |
|----------|-----|
| `logo/logo-full.svg` | Full logo (mark + wordmark) for nav and footer |
| `logo/logo-mark.svg` | Icon only (the dino face) |
| `logo/logo-dark.svg` | Dark/white version for footer or dark backgrounds |
| `logo/favicon.png` | **64 × 64 px** PNG for browser tab favicon |
| `logo/og-image.png` | **1200 × 630 px** Open Graph image for social sharing |

**Logo safe zone:** Keep 16 px clear space around all logo elements.

---

## Delivery Checklist

Before handing off files, confirm:

- [ ] File is named exactly as listed above
- [ ] Placed in the correct subfolder
- [ ] Exported at 2× resolution
- [ ] Under 500 KB (compressed)
- [ ] RGB color mode, sRGB profile
- [ ] PNG background is transparent (not white)
- [ ] No text embedded in the art (text lives in HTML)
- [ ] Tested at 100% zoom — no pixelation, no soft blurriness
