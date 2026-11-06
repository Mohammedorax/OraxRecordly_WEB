/**
 * The English lexicon — the same dictionary shape as Arabic, type-checked against
 * it so the two can never drift.
 *
 * Imported dynamically: an Arabic-first visitor never downloads this file, and an
 * English visitor downloads it in the background before the page is revealed.
 */

import type { Dict } from "./i18n-ar";

export const en: Dict = {
  meta: {
    title: "OraxRecordly — Record what stuns, edit what endures",
    description:
      "The OraxRecordly screen-recording and video-editing studio: capture your screen in crystalline 4K at sixty frames per second, edit at the pace of your imagination, and share your masterpiece with no watermarks.",
    ogTitle: "OraxRecordly — Every great creation began with a single frame",
    ogDescription:
      "From one click to a masterpiece people point at — record, edit, and share without limits.",
  },

  a11y: {
    skipToContent: "Skip to content",
  },

  header: {
    home: "OraxRecordly — Home",
    logoAlt: "OraxRecordly logo",
    openMenu: "Open menu (M)",
    closeMenu: "Close menu",
    menuLabel: "Main menu",
    download: "Download the app (D)",
    toDark: "Switch to dark mode",
    toLight: "Switch to light mode",
    darkCursor: "Dark",
    lightCursor: "Light",
    toEnglish: "Switch to English",
    toArabic: "Switch to Arabic",
    /* Same endonyms as the Arabic dictionary: the cursor label always names
       the language the button will switch TO. */
    langCursorEn: "English",
    langCursorAr: "عربي",
    downloadCursor: "Get",
  },

  nav: [
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Before / After", href: "#contrast" },
    { label: "The Balance", href: "#compare" },
    { label: "FAQ", href: "#faq" },
    { label: "Changelog", href: "#changelog" },
    { label: "Download", href: "#download" },
  ],

  hero: {
    logoAlt: "OraxRecordly logo — a viewfinder frame around a red target and a blue cursor",
    line1: "Record what stuns.",
    line2: "Edit what endures.",
    sub: "From a single click to a work people point at: capture your screen in 4K with glass-clear fidelity, edit at the pace of your imagination, then let the work speak for you — no watermarks dimming the shine, and no limits.",
    scrollHint: "Scroll to continue the story",
    recStart: "Record",
    recStop: "Stop",
    recAria: "Recording button simulation — press to start the count",
    recCaption: "A small simulation of what the red button does inside the app",
    recToastTitle: "Clip saved to your library",
  },

  marquee: {
    label: "Flashes from the studio",
    alts: [
      "OraxRecordly's floating recording HUD with the record button and source picker",
      "The OraxRecordly editor with the preview, the timeline and the appearance panel",
      "The screenshot library on the dashboard with search and folders",
      "The image editor with its pen, arrow, highlighter, pixelate and text tools",
      "The settings panel: appearance, language, screenshot format and file-name template",
      "Dragging the handles to select a screen region before confirming the capture",
    ],
  },

  statement: {
    parts: [
      { text: "Here, footage is not merely recorded — " },
      { text: "the story is forged.", highlight: true },
      {
        text: " One click captures what the eye sees, and an editor that understands the rhythm of your imagination cuts, gathers and polishes, until the work leaves the editing crucible radiant — ready to be told to the world.",
      },
    ],
  },

  stats: {
    aria: "Orax in numbers",
    labels: [
      "4K at sixty frames per second",
      "Two export formats: MP4 & GIF",
      "Six cursor styles",
      "Watermarks — not one",
    ],
  },

  features: {
    heading1: "Everything your story needs,",
    heading2: "under one roof.",
    side: "Seven instruments playing in the harmony of a polished orchestra: each knows its part, and all of them aspire to dazzle your audience — from the first frame to the final applause.",
    items: [
      {
        title: "Screen Recording",
        category: "The full screen or a single window — up to 4K at sixty frames per second",
        alt: "OraxRecordly's floating recording HUD with the record button and source picker",
      },
      {
        title: "Timeline Editor",
        category: "Cut, merge, split and change speed — with backgrounds and a frame worthy of the scene",
        alt: "The OraxRecordly editor: preview, timeline and the appearance panel with backgrounds and frame controls",
      },
      {
        title: "Screenshots",
        category: "Capture what you see without recording, then search and reopen every shot",
        alt: "The screenshot library on the OraxRecordly dashboard with search and folders",
      },
      {
        title: "Image Editor & Annotations",
        category: "Crop, pen, arrow, highlight, pixelate and text — with a full lossless undo",
        alt: "The OraxRecordly image editor with its pen, arrow, highlighter, pixelate and text tools",
      },
      {
        title: "Arabic by Origin",
        category: "An Arabic interface with a full right-to-left layout — and the language stays your choice",
        alt: "The OraxRecordly settings panel: appearance, language and screenshot options",
      },
      {
        title: "Region Capture",
        category: "Drag the frame and pick exactly what you mean — then confirm with one press",
        alt: "Dragging the handles to select a screen region before confirming the capture",
      },
      {
        title: "Shortcuts on Screen",
        category:
          "The keys you press appear as key caps and burn into the exported MP4 or GIF, so a lesson can teach the shortcut itself — off by default, set in Settings → Cursor. It needs keystroke capture, which the app runs on Windows and Linux only — not on macOS",
        alt: "The OraxRecordly editor settings panel with the Cursor and Appearance options",
      },
    ],
  },

  beforeAfter: {
    heading1: "From raw to remarkable.",
    dragHint: "Drag the divider left and right — or use your arrow keys",
    sliderLabel: "Comparison slider between raw footage and the final edit",
    rawChip: "RAW — BEFORE",
    editChip: "ORAX — AFTER",
    exportsCaption:
      "Exports video as MP4 or GIF, and saves stills as PNG or JPEG — in formats to fit every platform and every screen",
  },

  comparison: {
    heading1: "The scale tips,",
    heading2: "and numbers don't flatter.",
    side: "Put the tools on one scale: capabilities, not promises; prices, not fog. Compare with an expert's eye, and choose what matches your respect for your own time.",
    criterion: "Criterion",
    oraxCol: "Orax",
    mobileHint: "Drag sideways to browse the full balance",
    footnote: "Per each vendor's published listings at the time of writing — prices and capabilities change, candour stays.",
    caption: "Comparison of Orax's capabilities and price against OBS Studio, Camtasia and Loom",
    cellLabels: {
      yes: "Available",
      no: "Not available",
      limited: "Limited",
      partial: "Partial",
    },
    rows: [
      {
        label: "Recording up to 4K at 60fps",
        cells: ["yes", "yes", "yes", "limited"],
      },
      { label: "Built-in timeline editor", cells: ["yes", "no", "yes", "limited"] },
      { label: "No watermark — ever", cells: ["yes", "yes", "no", "no"] },
      { label: "Annotations and highlights inside the editor", cells: ["yes", "no", "yes", "no"] },
      { label: "MP4 & GIF export", cells: ["yes", "partial", "yes", "partial"] },
      {
        label: "Teaches the shortcut on screen, inside the video",
        cells: ["yes", "no", "no", "no"],
      },
      { label: "Works fully offline", cells: ["yes", "yes", "yes", "no"] },
      { label: "Complete Arabic interface (RTL)", cells: ["yes", "partial", "no", "no"] },
      {
        label: "Starting price",
        cells: [
          { text: "$0 — free forever", orax: true },
          { text: "$0" },
          { text: "$179 / yr" },
          { text: "$15 / mo" },
        ],
      },
    ],
  },

  faq: {
    heading1: "Questions asked,",
    heading2: "answers that reassure.",
    para: "We gathered what content makers ask most before pressing the download button. Didn't find your question? Write to us — we read every message and reply with makers' courtesy, not robots' chill.",
    items: [
      {
        q: "Is Orax really free? Where's the catch?",
        a: "No catch, and no fine print: the app is completely free and open source. No subscriptions, no paid plans, no credit card, and no account to create before you start. Download it, install it, record.",
      },
      {
        q: "Will recording weigh on my machine or slow my games?",
        a: "We won't promise performance figures we can't prove: on Windows the capture runs through a purpose-built native helper, and export can use NVIDIA CUDA acceleration. The quality ceiling is whatever your screen and machine can give: what your eye sees is what gets captured.",
      },
      {
        q: "Where are my recordings kept? Can you see them?",
        a: "On your machine, exclusively, the moment you stop recording. No account, no cloud, no backend: your library lives in the recordings folder on your own disk, and nothing is sent anywhere — not to us, not to anyone.",
      },
      {
        q: "Do you support Arabic in annotations and text?",
        a: "The interface is Arabic by origin, not translation: editing runs right-to-left, the typography honours lengtheners and diacritics, and annotations write in properly connected Arabic — never chopped letters. There are exactly two locales, Arabic and English, each with a complete layout, and the interface remembers your choice.",
      },
      {
        q: "Which systems does it run on, and what does it need?",
        a: "The published release is Windows only: Windows 10 (build 19041 or newer) or Windows 11, 64-bit. No macOS or Linux installer has been published yet; any new build shows up first on the GitHub releases page.",
      },
      {
        q: "Is the app open source? What does that mean for me?",
        a: "Yes — the source is published under the AGPL-3.0 licence. OraxRecordly is a fork of the open-source Recordly project, and that attribution is kept intact. You can read what runs on your machine, and build it yourself from source. And there is no hidden toll on the road: what is free stays free.",
      },
    ],
  },

  changelog: {
    heading1: "The changelog:",
    heading2: "transparency as a habit.",
    para: "Every release passes through here: what we added, what we improved, what we fixed — with its date and its name. Trust is not bought with ads; it is built one line atop another.",
    kinds: { new: "NEW", improve: "IMPROVED", fix: "FIXED" },
    releases: [
      {
        version: "v1.13.5",
        date: "2026.11.07",
        changes: [
          { kind: "improve", text: "Updated runtime and libraries: the Chromium core that records, decodes and encodes (Electron 43.8.7), the container/codec library (mediabunny 1.65), the preview renderer (Pixi 8.22), the update engine (electron-updater 6.8.11) and the build/test tooling - with the native helpers rebuilt on the new core." },
          { kind: "improve", text: "Verified in full after the upgrade: 1796 unit tests, both typechecks, the production build and eight real export/run specs all pass before publishing." },
        ],
      },
      {
        version: "v1.13.4",
        date: "2026.10.16",
        changes: [
          { kind: "new", text: "Region recording on macOS: the recorder now crops each frame the way it already cropped a tracked window, so the launch menu offers \"Record a region\" there again instead of withholding it on Windows alone." },
          { kind: "new", text: "System audio on Linux, Wayland included: PipeWire capture and PulseAudio loopback are switched on, which is what makes the system's share-audio option exist at all. If the portal still answers with a video-only stream, the app says so and turns the option off rather than recording silence." },
        ],
      },
      {
        version: "v1.13.3",
        date: "2026.10.16",
        changes: [
          { kind: "fix", text: "Honest updates: the app no longer offers an update it cannot install. A deb or rpm installation is owned by the package manager, the portable Windows build cannot replace itself, and the unsigned macOS build cannot install a signed replacement - those users download the newer package instead of pressing a button that does nothing." },
          { kind: "improve", text: "The export report now covers GIF as well: the same elapsed time, average frame rate and per-phase shares, not just for video." },
        ],
      },
      {
        version: "v1.13.2",
        date: "2026.10.16",
        changes: [
          { kind: "new", text: "More than one way to install on every platform: a portable Windows zip that runs from a folder without installing, macOS zips (Apple Silicon and Intel) beside the disk images, and three Linux formats." },
          { kind: "new", text: "Start at login on Linux: the app writes a standard entry to ~/.config/autostart, pointing at the AppImage itself rather than a temporary mount path." },
          { kind: "fix", text: "Region recording is offered only where frames are really cropped: it used to appear on macOS, where the recorder cannot crop, so a drawn area silently recorded the whole screen. It is now Windows-only, pinned by a unit test and two UI tests." },
          { kind: "improve", text: "A per-platform install note shipped with each release: which file to pick, the FUSE workaround for the AppImage, the AppArmor restriction on Ubuntu 24.04, and the fact that only the AppImage updates itself." },
        ],
      },
      {
        version: "v1.13.0",
        date: "2026.10.15",
        changes: [
          { kind: "new", text: "Linux builds: an AppImage that runs on any distribution without installing, a deb for Ubuntu and Debian, an rpm for Fedora and openSUSE, plus a Linux update feed." },
          { kind: "new", text: "An unsigned macOS build (Apple Silicon and Intel) for anyone who wants to try it without an Apple account, with the Gatekeeper steps written out in the install note." },
          { kind: "improve", text: "Automated package verification on Linux: each package is installed, unpacked and actually launched, with every shared library (101 of them), the desktop entry and the icons checked - so \"it built\" is never mistaken for \"it runs\"." },
        ],
      },
    ],
  },

  labels: {
    tagline: "ORAXRECORDLY — EST. 2026",
    recIndicator: "REC —",
    brandTagline: "ORAXRECORDLY — REC / EDIT / SHARE",
    keyboardFirst: "ORAXRECORDLY — KEYBOARD FIRST",
    keyboardHint: "KEYBOARD — ?",
    about: "( 01 — ABOUT ORAXRECORDLY )",
    features: "( 02 — FEATURES )",
    rawToRemarkable: "( 03 — RAW TO REMARKABLE )",
    balance: "( 04 — THE BALANCE )",
    faq: "( 05 — FAQ )",
    changelog: "( 06 — CHANGELOG )",
    getStarted: "( 07 — GET STARTED )",
    shippedContinuously: "SHIPPED CONTINUOUSLY — SINCE 2026",
    showcase: "SHOWCASE",
    noBuildYet: "NO BUILD YET",
    tagWindows: "WINDOWS",
    tag64Bit: "64-BIT",
    statMetas: ["ULTRA HD CAPTURE", "EXPORT FORMATS", "CURSOR STYLES", "NO WATERMARKS"],
    showAllReleases: "All releases",
    showFewerReleases: "Show fewer",
  },

  footer: {
    heading1: "Every creation",
    heading2: "began with a single frame.",
    bio: "The recording and editing studio for those who see the screen as a canvas and time as raw material: content makers, educators and developers — turning the flash of an idea into a scene that lasts.",
    contactTitle: "Mail & support",
    privacy: "Privacy notices",
    copyright: "© 2026 OraxRecordly — All rights reserved",
    keyboard: "Keyboard shortcuts",
    madeIn: "MADE IN YEMEN",
    logoAlt: "OraxRecordly logo",
    copyToastTitle: "Address copied",
    copyToastDesc: "In your hands now — no selecting, no circling around.",
    copyFailTitle: "Automatic copy failed",
    copyFailDesc: "Select the address and copy it manually — our door stays open.",
    copyAria: "Copy the address to the clipboard",
  },

  download: {
    button: "Get Orax — free",
    compact: "Get it free",
    title: "Choose your platform",
    desc: "Fully free for recording and editing — no watermarks, and no card paying for your imagination.",
    licenseNote: "Free for personal and commercial use, under the AGPL-3.0 licence",
    allReleases: "All releases on GitHub ↗",
    choosePlatform: "Choose your system",
    packages: {
      windowsInstaller: "The installer - automatic updates work with it",
      windowsPortable: "Portable: runs from a folder or a stick, nothing to install",
      macArm64Dmg: "Apple Silicon (M1 and later) · unsigned",
      macX64Dmg: "Intel Macs · unsigned",
      macArm64Zip: "Apple Silicon · no disk image",
      macX64Zip: "Intel Macs · no disk image",
      linuxAppImage: "Every distribution: Ubuntu · Fedora · Arch · Manjaro · nothing to install",
      linuxDeb: "Ubuntu · Debian · Mint · Pop!_OS · Kali",
      linuxRpm: "Fedora · RHEL · openSUSE",
    },
    platforms: [
      { note: "The desktop installer for Windows (64-bit)" },
      { note: "Apple Silicon and Intel Macs - dmg and zip" },
      { note: "AppImage for every distribution · deb and rpm for their families" },
    ],
    portable: "portable - runs from a folder, nothing to install",
    linuxFormats: {
      AppImage: "- runs on every distribution, nothing to install",
      deb: "- Debian, Ubuntu and their descendants",
      rpm: "- Fedora, RHEL and openSUSE",
    },
    macFormats: {
      arm64: "- Apple Silicon (unsigned)",
      x64: "- Intel Macs (unsigned)",
    },
    toastTitle: "The download has launched",
    toastDesc: "Bringing OraxRecordly v1.13.5 to {platform} — welcome to the story.",
  },

  demo: {
    button: "Watch the demo",
    play: "Play",
    pause: "Pause",
    timeline: "Progress bar",
    title: "OraxRecordly live preview",
    desc: "An interactive walkthrough of the record, edit and capture journey.",
    scenes: ["Scene one — Recording", "Scene two — Editing", "Scene three — Screenshots"],
  },

  shortcuts: {
    title: "Your fingers are faster than the mouse.",
    desc: "Steer the site from the same home row that steers the app — short letters that open doors and spare you the scrolling.",
    footnote: "Works on every page of the site — no exceptions, no waiting",
    items: [
      { keys: ["M"], text: "The main menu — open it or close it" },
      { keys: ["D"], text: "The download window — pick your platform and go" },
      { keys: ["P"], text: "The live preview — from recording to export" },
      { keys: ["T"], text: "To the top — return to the headline" },
      { keys: ["?"], text: "This very panel" },
      { keys: ["Esc"], text: "Close what you opened" },
    ],
  },

  sticky: {
    title: "OraxRecordly v1.13.5",
    sub: "Free — no watermarks",
  },

  backTop: {
    aria: "Back to the top of the page (T)",
    cursor: "To the top",
  },

  notFound: {
    title: "This frame does not exist.",
    para: "Our editor searched every timeline, library and archive and could not find this page in any scene. It was probably cut in the final edit — it happens to the best of makers.",
    cta: "Back to the studio",
    logoAlt: "OraxRecordly logo",
  },
};
