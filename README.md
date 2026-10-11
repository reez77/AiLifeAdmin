# Ai Life Admin — Exclusive Waitlist & Early Access Landing Page

A minimalist, luxury, and high-conversion waitlist landing page for **Ai Life Admin**.

## 🎨 Design & Aesthetic
- **Theme**: Charcoal & obsidian black backgrounds (`#060608`, `#0c0c10`) with subtle champagne & metallic gold accents (`#d4af37`).
- **Hero Headline**: **"Stop Drowning in Tasks. Let AI Admin Your Life."**
- **Subheadline**: **"Join the exclusive waitlist to get early access. Only 100 beta spots available."**
- **Call to Action**: Email waitlist form with live endpoint integration, spinner loading state, spot reservation counter, and instant bonus delivery.

---

## ⚡ Formspree & Guide PDF Configuration

In both [`index.html`](./index.html) and [`App.jsx`](./App.jsx), you can find the constants at the top of the script:

```javascript
// Configured Formspree endpoint URL
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xoejwpwj";

// Official Free Guide Google Drive Link
const GUIDE_PDF_URL = "https://drive.google.com/file/d/1jiRgbth2gMH8oKt3_fto5X8x0t20ZOTC/view?usp=sharing";
```

- **Live Submission**: Submissions are sent via Formspree.
- **Dynamic Referral Link**: Uses `window.location.origin` so VIP referral links dynamically adapt to any domain (e.g. Vercel).
- **Loading state**: Disables the email input and switches the button to an animated spinner with `"Securing spot..."`.
- **Success state**: Hides the email field and displays `"🎉 You're on the list! Keep an eye on your inbox."` with the **"Download Free Guide"** button linking directly to the official Google Drive guide.

---

## 🚀 Instant Preview

Simply open [`index.html`](./index.html) directly in any browser (Chrome, Edge, Safari, Firefox). No build steps or server required.
