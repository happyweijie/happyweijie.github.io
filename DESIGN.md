---
name: happyweijie.github.io
description: Wei Jie's personal portfolio rendered as a live terminal session
colors:
  prompt-green: "#7ce38b"
  headline-white: "#f7f3ea"
  signal-grey: "#eae6de"
  desktop: "#161616"
  terminal-black: "#0c0c0c"
  chrome: "#1c1c1c"
  card-black: "#101010"
  card-black-hover: "#131313"
  border: "#2a2a2a"
  output-text: "#c0c0c0"
  dim-text: "#8a8a8a"
  dot-close: "#b3554e"
  dot-min: "#b3893e"
  dot-max: "#4e9e5f"
typography:
  body:
    fontFamily: 'ui-monospace, "Cascadia Code", "SF Mono", Menlo, Consolas, "Liberation Mono", monospace'
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.6
  heading:
    fontFamily: 'ui-monospace, "Cascadia Code", "SF Mono", Menlo, Consolas, "Liberation Mono", monospace'
    fontSize: "clamp(1.25rem, 1.15rem + 0.4vw, 1.45rem)"
    fontWeight: 700
    lineHeight: 1.3
  command:
    fontFamily: 'ui-monospace, "Cascadia Code", "SF Mono", Menlo, Consolas, "Liberation Mono", monospace'
    fontSize: "1em"
    fontWeight: 600
    lineHeight: 1.6
  command-sub:
    fontFamily: 'ui-monospace, "Cascadia Code", "SF Mono", Menlo, Consolas, "Liberation Mono", monospace'
    fontSize: "0.85em"
    fontWeight: 400
    lineHeight: 1.6
  title:
    fontFamily: 'ui-monospace, "Cascadia Code", "SF Mono", Menlo, Consolas, "Liberation Mono", monospace'
    fontSize: "1.1em"
    fontWeight: 600
    lineHeight: 1.6
  banner:
    fontFamily: 'ui-monospace, "Cascadia Code", "SF Mono", Menlo, Consolas, "Liberation Mono", monospace'
    fontSize: "clamp(0.7rem, 3vw, 1.05rem)"
    fontWeight: 400
    lineHeight: 1.2
  label:
    fontFamily: 'ui-monospace, "Cascadia Code", "SF Mono", Menlo, Consolas, "Liberation Mono", monospace'
    fontSize: "0.85em"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1.25rem"
  lg: "2rem"
  xl: "3.5rem"
components:
  card:
    backgroundColor: "{colors.card-black}"
    textColor: "{colors.output-text}"
    rounded: "{rounded.md}"
    padding: "1.25rem"
  card-hover:
    backgroundColor: "{colors.card-black-hover}"
  nav-link:
    textColor: "{colors.prompt-green}"
  window:
    backgroundColor: "{colors.terminal-black}"
    rounded: "{rounded.lg}"
  window-chrome:
    backgroundColor: "{colors.chrome}"
    textColor: "{colors.dim-text}"
---

# Design System: happyweijie.github.io

## 1. Overview

**Creative North Star: "The Live Terminal Session"**

The site IS a running shell session — not a webpage decorated with terminal props. A visitor opens a zsh window sitting on a dark desktop; commands (`whoami`, `cat experience.log`, `ls projects/`) sit with their output already rendered — a session that has just been run, idling at a blinking prompt. Everything on the page must be something a real terminal user would recognize as correct: the prompt syntax, the `#` comments, the figlet banner, the blinking block cursor. The moment a detail reads as decoration rather than plausible shell output, it has failed. The playfulness (emoji in log entries, "goes brrr", `# Absolute Cinema`) lands precisely because the shell fluency underneath is genuine.

The system explicitly rejects the template dev portfolio (hero headshot, skill bars, timeline), the corporate resume site (beige, formal, forgettable), overdone hacker cosplay (Matrix rain, glitch effects, fake hacking theatrics), and design-agency flash (heavy WebGL, huge display type, scroll-jacking). The terminal is native, not costume — and it is a working tool, not a performance.

**Key Characteristics:**
- One monospace voice for everything; hierarchy comes from color and weight, with exactly one sanctioned size jump — the section headings (see The Flat Scale Rule).
- Near-black layered surfaces stepped by hue-less greys; Prompt Green is the page's only chromatic color, and highlights are carried by bold-white grey.
- Sections open with a plain-English heading recruiters can scan (About / Experience / Projects / Activities / Films); the typed prompt line sits demoted beneath it as flavor, prose flows as `stdout`, asides are `# comments`.
- GUI card grids are the one sanctioned break from pure text — "GUI output" launched from the shell.
- Progressive enhancement throughout: fully readable with no JS, every animation has a reduced-motion fallback.

## 2. Colors

A near-black greyscale ramp carries the entire surface; one chromatic voice (green) plus a bold-white grey carry all meaning.

### Primary
- **Prompt Green** (#7ce38b): The interactive voice — and the page's only chromatic color. Marks the `~ $` prompt, nav links, focus outlines, card hover borders, and the blinking cursor. If it's green, you can act on it or the shell is talking to you.

### Secondary
- **Headline White** (#f7f3ea): The headline voice — the brightest text on the page, one step above Signal Grey and still warm, never stark #ffffff. Section headings, experience roles, and card titles. It exists so the things a recruiter scans for (section names, job titles, project names) clear the surrounding text decisively.
- **Signal Grey** (#eae6de): The highlight voice — a warm off-white, clearly above Output Text without the glare of pure white. The figlet banner and mid-tier highlights. It says "this is emphasized output" the way a real shell renders bold text, without competing with green's interactivity claim or Headline White's structural claim. Stark #ffffff is deliberately avoided: it reads harsh against the soft terminal palette.

### Neutral
- **Desktop** (#161616): The page background behind the window — the desktop the terminal floats on.
- **Terminal Black** (#0c0c0c): The terminal body; the canvas everything renders on.
- **Chrome** (#1c1c1c): The title bar.
- **Card Black** (#101010): GUI card resting background; steps to **#131313** on hover.
- **Border** (#2a2a2a): 1px window and card borders.
- **Output Text** (#c0c0c0): Body copy; standard `stdout` (ANSI white, 10.8:1 on Terminal Black). Sits a full step below Signal Grey so highlights genuinely pop.
- **Dim Text** (#8a8a8a): Comments, dates, sublabels — 5.7:1 on Terminal Black, do not darken. Also the experience graph's single stroke color: node rings, stems, and arrowheads all share it.
- **Traffic-light Dots** (#b3554e / #b3893e / #4e9e5f): The window chrome's close/min/max dots. Decorative quotation of terminal chrome, never UI meaning — muted so they don't compete with the Two Voices.

### Named Rules
**The Two Voices Rule.** Prompt Green means interactive or shell-spoken; the warm off-whites (Headline White above Signal Grey) mean highlighted output. Never swap the roles, and never introduce a second chromatic color for UI meaning — green is the only hue on the page (shields.io badge logos are quoted images, not palette).

**The Single Source Rule.** The palette lives only in `index.css` custom properties. Never hardcode a palette value in two places.

## 3. Typography

**Body Font:** ui-monospace stack — "Cascadia Code", "SF Mono", Menlo, Consolas (with Liberation Mono, monospace fallbacks)
**Display Font:** none — the terminal has exactly one voice

**Character:** A single system monospace family everywhere, exactly as a real terminal renders. Deliberately flat: no display font, no type-scale theatrics. The figlet ASCII banner is the only "display type" on the page, and it is made of characters.

### Hierarchy
- **Heading** (700, clamp(1.25rem, 1.15rem + 0.4vw, 1.45rem), 1.3 line-height, Headline White): The five section names — the page's only size jump, and the first thing a scanning recruiter reads.
- **Command** (600, 1em): The typed part of a standalone prompt line. Weight, not size, marks it.
- **Command, demoted** (400, 0.85em, command in Dim): The prompt line sitting under a section heading — the `~ $` keeps its green voice, the command drops to Dim at label size. Flavor, not structure.
- **Title** (600, 1.1em, Headline White): GUI card titles and experience roles — above body on two axes, size and color.
- **Body** (400, 0.95rem → 1rem ≥1180px, 1.6 line-height): All output prose, capped at 68–70ch.
- **Banner** (400, clamp(0.7rem, 3vw, 1.05rem), 1.2 line-height, Signal Grey): The figlet ASCII art answer to `whoami`.
- **Label** (400, 0.8–0.85em, Dim Text): Title-bar text, dates, card sublabels, `# comments`.

### Named Rules
**The Flat Scale Rule (amended).** Hierarchy is expressed through color (Headline White vs Signal Grey vs Output Text vs Dim) and weight (700/600 vs 400), with exactly **one** sanctioned size jump: the five section headings at ~1.25–1.45rem. Big bold section headers are genuine terminal output (man pages, `gh`/`npm` CLI headers) — a louder voice, not a different one. Everything else stays flat; a second size tier breaks the terminal's reality.

**The Plausible Shell Rule.** Every prompt line must be a command that would actually run: real flags, real syntax, `#` for comments, `>` for log notes. Invented pseudo-commands read as cosplay.

## 4. Elevation

One window, flat inside. The terminal window floats over the desktop with the page's single ambient shadow (`box-shadow: 0 20px 60px rgb(0 0 0 / 0.5)`); everything inside it is flat, with depth conveyed by 1px borders (#2a2a2a) and background steps (#0c0c0c → #101010 → #1c1c1c). Shadows otherwise appear only as a response to hover.

### Shadow Vocabulary
- **Window float** (`box-shadow: 0 20px 60px rgb(0 0 0 / 0.5)`): The terminal window against the desktop. Used exactly once.
- **Card lift** (`box-shadow: 0 10px 24px rgb(0 0 0 / 0.45)`): GUI cards on hover/focus only, paired with `translateY(-3px) scale(1.015)`.

### Named Rules
**The One Window Rule.** Exactly one resting shadow exists on the page — the terminal window's. Any surface inside the terminal is flat at rest; a second floating layer breaks the metaphor.

## 5. Components

Interactive elements are quiet until touched: flat and understated at rest, answering hover with a lift, a green border, and a soft shadow.

### The Terminal Window
- **Structure:** Chrome title bar (traffic-light dots #b3554e / #b3893e / #4e9e5f, path title, `zsh` tag) over the terminal body.
- **Corner Style:** Softly squared (8px radius; 6px under 720px).
- **Border:** 1px Border (#2a2a2a); max-width 1400px, centered.

### Section Headings
- **Structure:** A plain-English heading (`About`, `Experience`, `Projects`, `Activities`, `Films`) in Headline White at the page's one size jump, weight 700, as the real `<h1>`/`<h2>` — the accessible and visual structure match, no sr-only doubling. The section's prompt line sits directly beneath it, demoted (see Prompt Lines) and `aria-hidden`.
- **Rhythm:** Heading, demoted command, then output form one tight group; the 3.5rem gap stays between sections, so each section scans as a single unit.
- **No scaffolding:** No ruled underlines, no eyebrows, no numbering — the size jump and the dim command beneath carry the structure alone.

### Prompt Lines
- **Structure:** `~ $ ` in Prompt Green + command in Output Text at 600 weight; hanging indent (4ch) for wrapped lines. **Demoted variant** (under a section heading): 0.85em, prompt keeps Prompt Green, command drops to Dim at 400 weight.
- **Motion:** None — commands are static, already-run output. The typing animation was removed (it pulled attention from the content); the blinking cursor at the session's end is the page's only idle motion.

### GUI Cards ("GUI output")
- **Corner Style:** Gently squared (6px radius).
- **Background:** Card Black (#101010), stepping to #131313 on hover.
- **Border:** 1px Border at rest; Prompt Green on hover/focus.
- **Hover:** `translateY(-3px) scale(1.015)` + card-lift shadow, 0.2s ease; the title shifts to Prompt Green alongside the border, so the whole card speaks one interaction color. Transform suppressed under reduced motion; hover styling gated behind `(hover: hover)` with `:active` carrying the touch equivalent.
- **Internal Padding:** 1.25rem; 16:9 thumbnail (4px radius) on top, title, description, shield row.
- **Grid:** `repeat(auto-fill, minmax(380px, 1fr))`, 1.75rem gap; single column under 720px.

### Side Navigation
- **Style:** Sticky right-aligned column of lowercase Prompt Green links, visible only ≥1180px.
- **States:** The `›` is a menu cursor, not a link underline: it rests on the active section (which also carries 600 weight, driven by scroll position) and snaps instantly to whichever link is hovered or focused — no underline, no fade, TUI-style. Chevron space is reserved on every link so the marker never reflows the sticky column.
- **Hover areas are contiguous:** vertical spacing lives inside each link as padding (never flex `gap`), so moving the cursor between two items never crosses a dead zone that would snap the marker back to the active section. The nav's negative `margin-block` cancels the first/last links' padding so the column's optical bounds stay put.

### Status Line (narrow-screen navigation)
- **Style:** Below 1180px the sidebar is replaced by a tmux-style status line fixed to the bottom of the screen: Chrome background, 1px Border top, window-list entries (`0:about 1:exp 2:proj 3:acts 4:films`) in Dim Text at 0.8rem.
- **States:** The active section renders in Prompt Green at 600 weight with the tmux current-window `*` suffix (reserved invisibly on inactive items so the row never shifts). Same scroll-driven highlight as the sidebar.
- **Touch:** ≥44px tap targets; safe-area insets respected (`env(safe-area-inset-bottom)`).

### Shield Rows
- **Style:** shields.io `for-the-badge` images at exactly 1.75rem (native 28px) so they render crisp; 1.4rem on mobile, smaller inside cards. Flex-wrapped with 0.5rem gap.
- **Linked badges** (the contact row's Gmail / GitHub / LinkedIn): a 3px lift plus a brightness step (`brightness(1.15)`) on hover and focus, gated behind `(hover: hover)`. Under reduced motion the lift is suppressed and the brightness step alone carries the feedback. Plain tech-stack badges never lift; only things that go somewhere move.

### The Experience Graph (signature component)
- The experience log renders as a downward DAG with drawn node/edge elements, all in a single stroke color (Dim): each role is a solid graph vertex (1.25rem disc, Border-grey fill, 4px ring) centered on its first line, and a 3px stem runs beside the entry into a small arrowhead (9×6px, continuous with the stem) landing on the next node — `○──▶ ○──▶ ○` turned vertical. Stems meet the rings flush at their tangent points, never crossing inside (pseudo-elements need explicit `box-sizing: border-box`; the `*` reset doesn't reach them). Text keeps 2.5rem clearance from the rail. Built from empty CSS pseudo-elements; rem-sized so the graph scales with the fluid root. Newest role sits at the top; the arrows read "built on".

### Focus
- **All interactive elements:** 2px solid Prompt Green outline, 2px offset, via `:focus-visible`.

## 6. Do's and Don'ts

### Do:
- **Do** keep every shell detail plausible — real commands, real flags, `#` comments, `>` notes. The Plausible Shell Rule is the brand.
- **Do** express hierarchy with color and weight, plus the one sanctioned size jump for section headings; body stays 0.95–1rem, titles cap at 1.1em.
- **Do** keep Prompt Green (#7ce38b) exclusively for interactive/shell elements and the warm off-whites (Headline White #f7f3ea, Signal Grey #eae6de) exclusively for highlighted output.
- **Do** define every color once in `index.css` custom properties.
- **Do** ship every animation with a `prefers-reduced-motion: reduce` fallback and keep the page fully readable with JavaScript disabled.
- **Do** design mobile first-class: the card grid collapses to one column, shields shrink, the window keeps slim padding under 720px. The viewport is part of the design.
- **Do** keep prose under ~70ch and dim text no darker than #8a8a8a (5.7:1 on Terminal Black).

### Don't:
- **Don't** build the template dev portfolio — hero headshot, skill bars, timeline, testimonial slider — or the corporate resume site: "a LinkedIn profile re-rendered as a beige, formal, forgettable webpage" (PRODUCT.md).
- **Don't** slide into overdone hacker cosplay: no Matrix rain, no glitch effects, no green-on-black phosphor glow, no fake "hacking" theatrics.
- **Don't** use stark #ffffff for text: highlights are warm off-white (#eae6de); pure white reads harsh against the softer terminal palette.
- **Don't** reach for design-agency flash: no WebGL, no huge display type, no scroll-jacking, no font beyond the monospace stack.
- **Don't** add a second resting shadow inside the terminal (The One Window Rule) or a third chromatic UI color (The Two Voices Rule).
- **Don't** add a second size tier — the section headings own the page's only size jump; any other text bigger than 1.1em has left the terminal.
- **Don't** gate content visibility on animation; any future motion must enhance text that is already present in the DOM.
