import React, { useState } from 'react';

// ============================================================================
// AI LIFE ADMIN — MINIMALIST LUXURY WAITLIST & EARLY ACCESS COMPONENT
// Features: Mobile App Mockup in Hero, Side-by-Side "How It Works", Voice Mic Pulse
// ============================================================================

// --- Inline Refined SVG Icons ---
export const SparklesIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="M5 3v4M3 5h4M19 17v4M17 19h4"/>
  </svg>
);

export const MicIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
    <line x1="12" y1="19" x2="12" y2="22"/>
  </svg>
);

export const CheckCircleIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

export const CalendarIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

export const ClockIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

export const CrownIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/>
  </svg>
);

export const LockIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

export const BookOpenIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>
);

export const ChevronDownIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

export const ArrowRightIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

export const CopyIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
  </svg>
);

export const DownloadIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

export const ZapIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

export const BotIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="10" rx="2"/>
    <circle cx="12" cy="5" r="2"/>
    <path d="M12 7v4"/>
    <line x1="8" y1="16" x2="8.01" y2="16"/>
    <line x1="16" y1="16" x2="16.01" y2="16"/>
  </svg>
);

export const SpinnerIcon = ({ className = "w-4 h-4" }) => (
  <svg className={`animate-spin ${className}`} viewBox="0 0 24 24" fill="none">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
  </svg>
);

// ============================================================================
// CONFIGURATION / ENDPOINTS (Update with your live URLs)
// ============================================================================
// Replace with your Formspree endpoint URL (e.g., https://formspree.io/f/xyzabced)
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/xoejwpwj";

// Official Free Guide Google Drive Link
export const GUIDE_PDF_URL = "https://drive.google.com/file/d/1jiRgbth2gMH8oKt3_fto5X8x0t20ZOTC/view?usp=sharing";

export default function App() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [reservedSpot, setReservedSpot] = useState(null);
  const [claimedCount, setClaimedCount] = useState(72);
  const [openFaq, setOpenFaq] = useState(null);
  const [copied, setCopied] = useState(false);
  const [guideDownloaded, setGuideDownloaded] = useState(false);

  // Interactive Voice Dump Simulator State
  const [isRecording, setIsRecording] = useState(true);
  const [activeDemoTab, setActiveDemoTab] = useState('all'); // 'all', 'calendar', 'tasks'
  const [completedTasks, setCompletedTasks] = useState({ 1: true });

  const totalSpots = 100;
  const spotsRemaining = Math.max(0, totalSpots - claimedCount);

  const handleWaitlistSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsLoading(true);
    setErrorMessage('');

    try {
      // If the placeholder endpoint is still present, simulate real network latency
      if (FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID")) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } else {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({ email: email })
        });

        if (!response.ok) {
          throw new Error('Submission failed');
        }
      }

      const assignedSpot = claimedCount + 1;
      setClaimedCount(assignedSpot);
      setReservedSpot(assignedSpot);
      setIsSubmitted(true);
    } catch (err) {
      console.error("Waitlist error:", err);
      setErrorMessage("Failed to submit. Please verify the form endpoint and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const copyReferralLink = () => {
    const origin = window.location.origin;
    const link = `${origin}/vip?ref=spot-${reservedSpot || 73}`;
    navigator.clipboard?.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const triggerGuideDownload = () => {
    setGuideDownloaded(true);
    const element = document.createElement("a");
    const file = new Blob([
      `# Ai Life Admin — Executive Life Operating System & Organization Guide\n\n` +
      `Welcome to early cohort #${reservedSpot || 73} of 100.\n\n` +
      `## 1. The Core Life Triage Protocol\n` +
      `- Daily Morning Brain Dump (Unload all cognitive friction in 90 seconds)\n` +
      `- 3 Needle-Mover Priorities (Autonomously locked into high-energy calendar slots)\n` +
      `- Asynchronous Errand Delegation (Letting AI resolve vendor bookings, appointments, and reminders)\n\n` +
      `## 2. Dynamic Schedule Protection\n` +
      `- Buffer Architecture: 15-minute cognitive breathing room between commitments\n` +
      `- Deep Work Quarantine: Strict defense against low-value administrative creep\n\n` +
      `Thank you for joining our private 100-member beta cohort.\nYour concierge onboarding link will arrive shortly.`
    ], { type: 'text/markdown' });
    element.href = URL.createObjectURL(file);
    element.download = "AiLifeAdmin_Free_Executive_Organization_Guide.md";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const toggleTask = (id) => {
    setCompletedTasks(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const keyBenefits = [
    {
      title: "Eliminate 15+ Hours of Weekly Mental Friction",
      highlight: "Zero cognitive backlog.",
      desc: "Dump stream-of-consciousness thoughts, messy voice notes, or rapid messages. The AI instantly organizes them into clear execution paths without manual sorting.",
      icon: ClockIcon
    },
    {
      title: "Autonomous Calendar Defense & Smart Time-Blocking",
      highlight: "Dynamic energy matching.",
      desc: "Never juggle overlapping appointments again. Ai Life Admin orchestrates high-priority tasks into your calendar while strictly defending personal buffers.",
      icon: SparklesIcon
    },
    {
      title: "Strict Confidentiality & Private Chief-of-Staff Intelligence",
      highlight: "Bank-grade privacy.",
      desc: "Your personal life, family commitments, and private documents are protected by isolated encryption. Built exclusively for discerning professionals who value discretion.",
      icon: LockIcon
    },
    {
      title: "Instant Free Organization Guide Included",
      highlight: "Executive Life Operating System.",
      desc: "Upon reservation, immediately receive our complete blueprint for turning chronic task overload into effortless daily clarity.",
      icon: BookOpenIcon
    }
  ];

  const faqs = [
    {
      q: "Why are there only 100 beta spots available?",
      a: "To maintain an uncompromising standard of service, each beta cohort receives personalized AI parameter tuning, direct feedback channels with our engineering team, and white-glove onboarding."
    },
    {
      q: "What is included in the Free Organization Guide?",
      a: "The guide is our battle-tested Executive Life Operating System, featuring our 3-step cognitive unloading framework, energy-based calendar templates, and proven protocols used by founders to eliminate administrative drag."
    },
    {
      q: "How does Ai Life Admin handle calendar integrations and privacy?",
      a: "Ai Life Admin links with Google Calendar, Apple Calendar, and Outlook with zero data-reselling. Your data is encrypted at rest and in transit, functioning as an isolated personal assistant."
    },
    {
      q: "When will the 100 beta members receive their access invitations?",
      a: "Cohort 01 invites roll out sequentially starting next week. Spots are granted strictly on a first-come, first-reserved basis."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#060608] text-[#b4b4c7] font-sans flex flex-col justify-between overflow-x-hidden selection:bg-[#d4af37] selection:text-[#060608]">
      
      {/* Subtle Ambient Gold Glow at Top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] sm:w-[1000px] h-[400px] bg-[#d4af37]/[0.05] blur-[140px] rounded-full pointer-events-none -z-10"></div>

      {/* ========================================================================= */}
      {/* NAVIGATION BAR: Minimalist & Luxury                                       */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#060608]/85 border-b border-[#171720]/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Monogram & Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#171720] to-[#0b0b0f] border border-[#d4af37]/35 flex items-center justify-center text-[#dfbf76] shadow-sm group-hover:border-[#d4af37]/70 transition-colors">
              <span className="font-serif font-bold text-lg tracking-wider text-[#d4af37]">A</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white text-base tracking-tight font-sans">Ai Life Admin</span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20">Private Beta</span>
              </div>
              <span className="text-[11px] text-[#83839c] block tracking-wide">Personal AI Chief of Staff</span>
            </div>
          </a>

          {/* Status Pill & Jump Anchor */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b0b0f] border border-[#1e1e29] text-xs text-[#b4b4c7]">
              <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse"></span>
              <span><strong className="text-white font-medium">{spotsRemaining} spots</strong> remaining in Cohort 01</span>
            </div>

            <a 
              href="#waitlist-form"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-white bg-[#111116] hover:bg-[#171720] border border-[#272736] hover:border-[#d4af37]/50 transition-all shadow-sm"
            >
              <span>Join Waitlist</span>
              <ArrowRightIcon className="w-3.5 h-3.5 text-[#d4af37]" />
            </a>
          </div>

        </div>
      </header>


      {/* ========================================================================= */}
      {/* HERO SECTION: Headline + Subheadline + Form + REAL MOBILE APP MOCKUP      */}
      {/* ========================================================================= */}
      <main className="flex-1">
        <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* 2-Column Hero on Desktop: Left text/form, Right phone mockup */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column: Headlines & High-Conversion CTA */}
              <div className="lg:col-span-7 text-center lg:text-left">
                
                {/* Exclusivity Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0b0b0f] border border-[#d4af37]/30 shadow-sm mb-6">
                  <CrownIcon className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span className="text-xs font-semibold tracking-wider uppercase text-[#ebd9a9]">
                    Exclusive Beta Cohort · Limited Allocation
                  </span>
                </div>

                {/* Main Headline (Bold, clear, requested verbatim) */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.12]">
                  Stop Drowning in Tasks. <br />
                  <span className="bg-gradient-to-r from-white via-[#f7e7be] to-[#d4af37] bg-clip-text text-transparent font-black">
                    Let AI Admin Your Life.
                  </span>
                </h1>

                {/* Subheadline (Requested verbatim) */}
                <p className="text-lg sm:text-xl text-[#b4b4c7] font-normal max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                  Join the exclusive waitlist to get early access. <strong className="text-[#ebd9a9] font-semibold">Only 100 beta spots available.</strong>
                </p>

                {/* Waitlist Form Card */}
                <div id="waitlist-form" className="max-w-xl mx-auto lg:mx-0">
                  {!isSubmitted ? (
                    <div className="p-2 sm:p-2.5 rounded-2xl bg-[#0b0b0f]/95 border border-[#1e1e29] shadow-2xl backdrop-blur-xl">
                      <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-2">
                        <div className="relative flex-1">
                          <input
                            type="email"
                            required
                            disabled={isLoading}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address..."
                            className="w-full px-4 py-3.5 sm:py-4 rounded-xl bg-[#060608] border border-[#1e1e29] text-white placeholder-[#56566e] text-sm sm:text-base focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/50 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="px-5 py-3.5 sm:py-4 rounded-xl text-[#060608] font-bold text-sm tracking-tight flex items-center justify-center gap-2 whitespace-nowrap bg-gradient-to-r from-[#e4c465] via-[#d4af37] to-[#b89228] hover:from-[#f0d57d] hover:to-[#c49d30] disabled:opacity-75 disabled:cursor-not-allowed shadow-md transition-all active:scale-[0.99]"
                        >
                          {isLoading ? (
                            <>
                              <SpinnerIcon className="w-4 h-4 text-[#060608]" />
                              <span>Securing spot...</span>
                            </>
                          ) : (
                            <>
                              <span>Get Early Access & Free Organization Guide</span>
                              <ArrowRightIcon className="w-4 h-4 text-[#060608] shrink-0" />
                            </>
                          )}
                        </button>
                      </form>
                      {errorMessage && (
                        <p className="text-xs text-red-400 mt-2 px-3 text-left font-mono">{errorMessage}</p>
                      )}
                    </div>
                  ) : (
                    /* Success State: Clean, uncluttered, with exact requested copy */
                    <div className="p-6 sm:p-7 rounded-2xl bg-[#0b0b0f]/95 border border-[#d4af37]/40 shadow-xl backdrop-blur-xl text-left">
                      
                      {/* Top Success Header */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-start gap-3.5">
                          <div className="w-10 h-10 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0 mt-0.5">
                            <CheckCircleIcon className="w-5 h-5 text-[#d4af37]" />
                          </div>
                          <div>
                            <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                              🎉 You're on the list! Keep an eye on your inbox.
                            </h3>
                            <p className="text-xs text-[#83839c] mt-1">
                              Spot reserved for <span className="text-[#ebd9a9] font-semibold">{email}</span>. Exclusive beta invitations roll out shortly.
                            </p>
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-2xl font-serif font-bold text-[#d4af37]">#{reservedSpot}</span>
                          <span className="text-[10px] text-[#83839c] block uppercase tracking-wider">of 100 spots</span>
                        </div>
                      </div>

                      {/* Guide Download Button Linking to Dummy PDF URL */}
                      <div className="p-4 rounded-xl bg-[#060608] border border-[#171720] flex flex-col sm:flex-row items-center justify-between gap-4 mt-5">
                        <div className="flex items-center gap-3 text-left">
                          <div className="w-9 h-9 rounded-lg bg-[#111116] flex items-center justify-center text-[#dfbf76] shrink-0">
                            <BookOpenIcon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-sm font-bold text-white block">Executive Life Operating System</span>
                            <span className="text-xs text-[#83839c]">Complimentary Guide & Daily Framework</span>
                          </div>
                        </div>
                        <a
                          href={GUIDE_PDF_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#d4af37] hover:bg-[#e4c465] text-[#060608] text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-sm whitespace-nowrap active:scale-95"
                        >
                          <DownloadIcon className="w-4 h-4 text-[#060608]" />
                          <span>Download Free Guide</span>
                        </a>
                      </div>

                      {/* Referral VIP Link Share Bar */}
                      <div className="mt-4 pt-3 border-t border-[#171720] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#83839c]">
                        <span>Share VIP link to prioritize onboarding:</span>
                        <button
                          onClick={copyReferralLink}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111116] hover:bg-[#171720] border border-[#272736] text-white font-medium transition-colors"
                        >
                          <CopyIcon className="w-3.5 h-3.5 text-[#d4af37]" />
                          <span>{copied ? 'Copied to Clipboard!' : 'Copy VIP Link'}</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Spot Tracker & Exclusivity Metric */}
                  <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-3 px-1 text-xs text-[#83839c]">
                    <div className="flex items-center gap-2">
                      <div className="w-28 h-1.5 rounded-full bg-[#171720] overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#be9627] to-[#dfbf76] rounded-full transition-all duration-500"
                          style={{ width: `${(claimedCount / totalSpots) * 100}%` }}
                        ></div>
                      </div>
                      <span className="font-medium text-[#b4b4c7]">
                        <strong className="text-white">{claimedCount}</strong> of 100 spots claimed
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-[#83839c]">
                      <span>✦ Direct founder access</span>
                      <span>✦ End-to-end encrypted</span>
                    </div>
                  </div>
                </div>

              </div>


              {/* ================================================================= */}
              {/* Right Column: HERO VISUAL — LUXURY MOBILE APP PHONE MOCKUP         */}
              {/* ================================================================= */}
              <div className="lg:col-span-5 flex justify-center relative">
                
                {/* Glowing background halo */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#d4af37]/10 via-[#d4af37]/5 to-transparent rounded-full blur-2xl pointer-events-none"></div>

                {/* Floating Phone Hardware Shell */}
                <div className="relative w-[310px] sm:w-[340px] rounded-[48px] p-3 bg-gradient-to-b from-[#2a2a36] via-[#15151e] to-[#0b0b0f] border border-[#272736] shadow-2xl">
                  
                  {/* Subtle metallic bezel rim */}
                  <div className="rounded-[40px] p-[2px] bg-gradient-to-tr from-[#d4af37]/25 via-[#272736]/40 to-white/10">
                    
                    {/* Phone Screen Container (Dark App Theme) */}
                    <div className="rounded-[38px] bg-[#060608] overflow-hidden border border-[#111116] relative text-left">
                      
                      {/* Dynamic Island / Speaker Notch & Status Bar */}
                      <div className="pt-3 px-6 pb-2 flex items-center justify-between text-[11px] font-mono text-[#83839c] bg-[#060608] border-b border-[#0b0b0f] relative z-20">
                        <span>9:41</span>
                        <div className="w-20 h-4 bg-black rounded-full border border-[#171720] flex items-center justify-center">
                          <span className="w-2 h-2 rounded-full bg-[#171720]"></span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px]">5G</span>
                          <div className="w-5 h-2.5 rounded-sm border border-[#83839c] flex items-center p-0.5">
                            <div className="w-3 h-full bg-[#d4af37] rounded-2xs"></div>
                          </div>
                        </div>
                      </div>

                      {/* In-App Header */}
                      <div className="px-5 pt-3 pb-2 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d4af37] to-[#be9627] flex items-center justify-center text-[#060608] font-bold text-xs shadow-sm">
                            <span>AL</span>
                          </div>
                          <div>
                            <span className="text-xs font-bold text-white block">Good morning, Alex</span>
                            <span className="text-[10px] text-[#83839c]">Chief of Staff Online</span>
                          </div>
                        </div>
                        <div className="px-2 py-0.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[10px] font-bold text-[#dfbf76]">
                          PRO ACTIVE
                        </div>
                      </div>

                      {/* In-App Daily Briefing Card */}
                      <div className="mx-4 mt-2 p-3 rounded-2xl bg-[#0b0b0f] border border-[#171720] shadow-inner">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#d4af37] font-semibold flex items-center gap-1">
                            <SparklesIcon className="w-3 h-3 text-[#d4af37]" />
                            Today's Executive Focus
                          </span>
                          <span className="text-[10px] text-emerald-400 font-medium">3 Blocks Locked</span>
                        </div>
                        <p className="text-xs text-white font-medium leading-snug">
                          4 hours of protected deep work scheduled around your investor call.
                        </p>
                      </div>

                      {/* IN-APP VOICE RECORDING CUE (Interactive simulation preview) */}
                      <div className="mx-4 mt-3 p-3.5 rounded-2xl bg-gradient-to-r from-[#0b0b0f] via-[#111116] to-[#0b0b0f] border border-[#d4af37]/30 shadow-sm relative overflow-hidden">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#d4af37] animate-ping"></div>
                            <span className="text-[11px] font-bold text-white tracking-tight flex items-center gap-1">
                              Voice Brain Dump
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-[#d4af37] bg-[#d4af37]/10 px-1.5 py-0.5 rounded border border-[#d4af37]/20">
                            00:14 / Live
                          </span>
                        </div>

                        {/* Soundwave bars */}
                        <div className="h-8 flex items-center justify-center gap-1 my-1 px-2 bg-[#060608] rounded-xl border border-[#171720]">
                          <div className="w-1 h-3 bg-[#d4af37] rounded-full animate-pulse"></div>
                          <div className="w-1 h-6 bg-[#f7e7be] rounded-full animate-pulse"></div>
                          <div className="w-1 h-4 bg-[#d4af37] rounded-full animate-pulse"></div>
                          <div className="w-1 h-7 bg-[#f7e7be] rounded-full animate-pulse"></div>
                          <div className="w-1 h-5 bg-[#d4af37] rounded-full animate-pulse"></div>
                          <div className="w-1 h-3 bg-[#f7e7be] rounded-full animate-pulse"></div>
                        </div>

                        <p className="text-[10px] text-[#b4b4c7] italic truncate mt-1">
                          "Reschedule dentist to Tue 2pm and block focus time tomorrow morning..."
                        </p>
                      </div>

                      {/* In-App Today's Schedule Time-Blocks */}
                      <div className="mx-4 mt-3 mb-4 space-y-2">
                        <div className="flex items-center justify-between text-[11px] font-bold text-[#83839c] uppercase tracking-wider px-1">
                          <span>Auto-Arranged Day</span>
                          <span className="text-[#d4af37]">Oct 11</span>
                        </div>

                        {/* Schedule Item 1: Deep Work */}
                        <div className="p-2.5 rounded-xl bg-[#0b0b0f] border border-[#171720] flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <div className="w-1.5 h-8 bg-[#d4af37] rounded-full"></div>
                            <div>
                              <span className="text-xs font-semibold text-white block">Deep Focus: Product Roadmap</span>
                              <span className="text-[10px] text-[#83839c]">09:00 - 11:30 AM • No Distractions</span>
                            </div>
                          </div>
                          <span className="text-[10px] text-[#dfbf76] bg-[#d4af37]/10 px-2 py-0.5 rounded border border-[#d4af37]/20 font-mono">
                            2.5h
                          </span>
                        </div>

                        {/* Schedule Item 2: Dentist */}
                        <div className="p-2.5 rounded-xl bg-[#0b0b0f] border border-[#171720] flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <div className="w-1.5 h-8 bg-blue-400 rounded-full"></div>
                            <div>
                              <span className="text-xs font-semibold text-white block">Dr. Bennett Dental Cleaning</span>
                              <span className="text-[10px] text-[#83839c]">02:00 PM • 20m Commute Buffer</span>
                            </div>
                          </div>
                          <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded font-mono">
                            Synced
                          </span>
                        </div>
                      </div>

                      {/* Mobile Bottom Navigation Bar */}
                      <div className="bg-[#060608] border-t border-[#111116] px-5 py-2.5 flex items-center justify-between text-[#56566e]">
                        <div className="flex flex-col items-center text-[#d4af37]">
                          <CalendarIcon className="w-4 h-4" />
                          <span className="text-[9px] font-semibold mt-0.5">Today</span>
                        </div>
                        <div className="flex flex-col items-center hover:text-white transition-colors">
                          <ClockIcon className="w-4 h-4" />
                          <span className="text-[9px] mt-0.5">Calendar</span>
                        </div>
                        {/* Prominent Center Voice Action Button */}
                        <div className="-mt-4 w-10 h-10 rounded-full bg-gradient-to-tr from-[#be9627] to-[#dfbf76] text-[#060608] flex items-center justify-center shadow-lg border-2 border-[#060608]">
                          <MicIcon className="w-5 h-5 text-[#060608]" />
                        </div>
                        <div className="flex flex-col items-center hover:text-white transition-colors">
                          <CheckCircleIcon className="w-4 h-4" />
                          <span className="text-[9px] mt-0.5">Tasks</span>
                        </div>
                        <div className="flex flex-col items-center hover:text-white transition-colors">
                          <BotIcon className="w-4 h-4" />
                          <span className="text-[9px] mt-0.5">Assistant</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* FEATURE VISUALS: "SHOW THE MAGIC" SIDE-BY-SIDE COMPARISON                 */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 border-t border-[#171720] bg-[#0b0b0f]/40 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20 text-xs font-semibold uppercase tracking-wider mb-3">
                <ZapIcon className="w-3.5 h-3.5" />
                <span>How the Intelligence Works</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                From Mental Chaos to <span className="bg-gradient-to-r from-white via-[#f7e7be] to-[#d4af37] bg-clip-text text-transparent">Absolute Order</span>
              </h2>
              <p className="text-[#b4b4c7] text-base sm:text-lg">
                Speak or type your messy stream of consciousness. Ai Life Admin extracts deadlines, resolves calendar conflicts, and prioritizes your day in seconds.
              </p>
            </div>

            {/* Side-by-Side Magic Visualizer */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              
              {/* Left Box: The Messy "Brain Dump" (Unstructured Input) */}
              <div className="lg:col-span-5 rounded-2xl bg-[#0b0b0f]/90 border border-[#171720] p-6 flex flex-col justify-between shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/[0.03] rounded-full blur-2xl pointer-events-none"></div>

                <div>
                  {/* Header with Live Voice Indicator */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#171720] mb-5">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400 animate-pulse"></span>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#83839c] font-semibold">
                        01. Raw Brain Dump
                      </span>
                    </div>
                    <span className="text-xs text-[#56566e] font-mono">Audio & Text Input</span>
                  </div>

                  {/* Interactive Microphone Bar */}
                  <div className="p-3 rounded-xl bg-[#060608] border border-[#171720] flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => setIsRecording(!isRecording)}
                        className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                          isRecording 
                            ? 'bg-[#d4af37] text-[#060608] shadow-md animate-pulse' 
                            : 'bg-[#171720] text-[#83839c] hover:text-white'
                        }`}
                        title="Click to toggle simulation"
                      >
                        <MicIcon className="w-4 h-4" />
                      </button>
                      <div>
                        <span className="text-xs font-semibold text-white block">
                          {isRecording ? 'Listening (Voice Stream Active)' : 'Voice Input Paused'}
                        </span>
                        <span className="text-[11px] text-[#83839c]">
                          {isRecording ? 'Capturing natural cadence...' : 'Tap mic to test live capture'}
                        </span>
                      </div>
                    </div>

                    {/* Animated sound wave bars */}
                    {isRecording && (
                      <div className="flex items-center gap-1 h-6 px-2">
                        <div className="w-1 h-2 bg-[#d4af37] rounded-full animate-pulse"></div>
                        <div className="w-1 h-5 bg-[#f7e7be] rounded-full animate-pulse"></div>
                        <div className="w-1 h-3 bg-[#d4af37] rounded-full animate-pulse"></div>
                        <div className="w-1 h-6 bg-[#f7e7be] rounded-full animate-pulse"></div>
                        <div className="w-1 h-4 bg-[#d4af37] rounded-full animate-pulse"></div>
                      </div>
                    )}
                  </div>

                  {/* Messy Dictation Transcript Box */}
                  <div className="p-4 rounded-xl bg-[#060608]/70 border border-[#111116] font-sans text-sm text-[#dedee8] leading-relaxed italic relative">
                    <span className="text-[10px] font-mono not-italic text-[#56566e] block mb-2 uppercase tracking-wider">
                      Unfiltered Thought Stream:
                    </span>
                    "Hey AiLA, need to follow up with Sarah about the Series A deck tomorrow at 10am, book annual dentist for Thursday afternoon around 2, pick up dry cleaning before 6pm tonight, and carve out 3 uninterrupted hours for deep writing before lunch."
                  </div>
                </div>

                {/* Metadata tags */}
                <div className="mt-6 pt-4 border-t border-[#111116] flex flex-wrap items-center gap-2 text-[11px] text-[#83839c]">
                  <span className="px-2.5 py-1 rounded-md bg-[#111116] border border-[#171720] font-mono">4 Commitments</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#111116] border border-[#171720] font-mono">2 Potential Overlaps</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#111116] border border-[#171720] font-mono">Energy: High Focus</span>
                </div>

              </div>


              {/* Middle: AI Transformation Conduit */}
              <div className="lg:col-span-2 flex flex-col items-center justify-center py-4 lg:py-0">
                <div className="w-14 h-14 rounded-2xl bg-[#111116] border border-[#d4af37]/40 shadow-md flex items-center justify-center text-[#d4af37] relative">
                  <SparklesIcon className="w-7 h-7" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#d4af37] rounded-full animate-ping"></div>
                </div>
                <span className="text-xs font-mono font-bold text-[#dfbf76] mt-3 uppercase tracking-wider text-center">
                  AI Life Engine
                </span>
                <span className="text-[10px] text-[#56566e] font-mono text-center mt-0.5">
                  Conflict-Free Scheduling
                </span>
              </div>


              {/* Right Box: The Organized Tasks and Calendar UI (Output) */}
              <div className="lg:col-span-5 rounded-2xl bg-[#0b0b0f]/90 border border-[#d4af37]/30 p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#d4af37]/[0.04] rounded-full blur-3xl pointer-events-none"></div>

                <div>
                  {/* Header with Category Filter */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#171720] mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#dfbf76] font-semibold">
                        02. Autonomous Resolution
                      </span>
                    </div>
                    <div className="flex items-center gap-1 bg-[#060608] p-1 rounded-lg border border-[#171720] text-[10px]">
                      <button 
                        onClick={() => setActiveDemoTab('all')}
                        className={`px-2 py-0.5 rounded font-medium transition-all ${activeDemoTab === 'all' ? 'bg-[#d4af37] text-[#060608] font-bold' : 'text-[#83839c] hover:text-white'}`}
                      >
                        All
                      </button>
                      <button 
                        onClick={() => setActiveDemoTab('calendar')}
                        className={`px-2 py-0.5 rounded font-medium transition-all ${activeDemoTab === 'calendar' ? 'bg-[#d4af37] text-[#060608] font-bold' : 'text-[#83839c] hover:text-white'}`}
                      >
                        Calendar
                      </button>
                      <button 
                        onClick={() => setActiveDemoTab('tasks')}
                        className={`px-2 py-0.5 rounded font-medium transition-all ${activeDemoTab === 'tasks' ? 'bg-[#d4af37] text-[#060608] font-bold' : 'text-[#83839c] hover:text-white'}`}
                      >
                        Tasks
                      </button>
                    </div>
                  </div>

                  {/* Organized Items List */}
                  <div className="space-y-2.5">
                    
                    {/* Event 1: Deep Writing Block */}
                    {(activeDemoTab === 'all' || activeDemoTab === 'calendar') && (
                      <div className="p-3 rounded-xl bg-[#060608] border border-[#171720] hover:border-[#d4af37]/40 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
                            <span className="text-xs font-bold text-white">Deep Writing Block (3 hrs)</span>
                          </div>
                          <span className="text-[10px] font-mono text-[#dfbf76] bg-[#d4af37]/10 px-2 py-0.5 rounded">
                            08:30 - 11:30 AM
                          </span>
                        </div>
                        <p className="text-[11px] text-[#83839c] mt-1 pl-4">
                          Auto-defended before lunch. Notifications muted across devices.
                        </p>
                      </div>
                    )}

                    {/* Event 2: Sarah Call */}
                    {(activeDemoTab === 'all' || activeDemoTab === 'calendar') && (
                      <div className="p-3 rounded-xl bg-[#060608] border border-[#171720] hover:border-[#d4af37]/40 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                            <span className="text-xs font-bold text-white">Sarah: Series A Deck Follow-up</span>
                          </div>
                          <span className="text-[10px] font-mono text-[#b4b4c7] bg-[#111116] px-2 py-0.5 rounded">
                            Tomorrow 10:00 AM
                          </span>
                        </div>
                        <p className="text-[11px] text-[#83839c] mt-1 pl-4">
                          Calendar invite linked with attached pitch deck draft.
                        </p>
                      </div>
                    )}

                    {/* Event 3: Dentist */}
                    {(activeDemoTab === 'all' || activeDemoTab === 'calendar') && (
                      <div className="p-3 rounded-xl bg-[#060608] border border-[#171720] hover:border-[#d4af37]/40 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                            <span className="text-xs font-bold text-white">Annual Dental Examination</span>
                          </div>
                          <span className="text-[10px] font-mono text-[#b4b4c7] bg-[#111116] px-2 py-0.5 rounded">
                            Thu 02:00 PM
                          </span>
                        </div>
                        <p className="text-[11px] text-[#83839c] mt-1 pl-4">
                          Slot confirmed. 25-minute transit buffer added beforehand.
                        </p>
                      </div>
                    )}

                    {/* Task: Dry Cleaning */}
                    {(activeDemoTab === 'all' || activeDemoTab === 'tasks') && (
                      <div 
                        onClick={() => toggleTask(1)}
                        className="p-3 rounded-xl bg-[#060608] border border-[#171720] flex items-center justify-between cursor-pointer hover:border-emerald-500/40 transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                            completedTasks[1] ? 'bg-emerald-500 border-emerald-500 text-[#060608]' : 'border-[#3a3a4e] bg-[#0b0b0f]'
                          }`}>
                            {completedTasks[1] && <CheckCircleIcon className="w-3.5 h-3.5 text-[#060608]" />}
                          </div>
                          <span className={`text-xs font-medium ${completedTasks[1] ? 'line-through text-[#56566e]' : 'text-white'}`}>
                            Pick up dry cleaning before 6:00 PM
                          </span>
                        </div>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20 font-mono">
                          Urgent Today
                        </span>
                      </div>
                    )}

                  </div>
                </div>

                {/* Outcome Badge */}
                <div className="mt-5 pt-3 border-t border-[#171720] flex items-center justify-between text-xs">
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <CheckCircleIcon className="w-3.5 h-3.5 text-emerald-400" />
                    0 Calendar Collisions • 2.5h Saved
                  </span>
                  <span className="text-[#d4af37] font-mono text-[11px]">Synced to Calendar</span>
                </div>

              </div>

            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* KEY BENEFITS SECTION: Clean, uncluttered, bolded benefits                 */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 border-t border-[#171720]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
                Engineered for <span className="bg-gradient-to-r from-white via-[#f7e7be] to-[#d4af37] bg-clip-text text-transparent">Executive Clarity</span>
              </h2>
              <p className="text-sm sm:text-base text-[#83839c]">
                A discreet, proactive intelligence layer that liberates your mental bandwidth.
              </p>
            </div>

            {/* 4 Clean Benefit Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {keyBenefits.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div 
                    key={idx} 
                    className="p-6 sm:p-7 rounded-2xl bg-[#0b0b0f]/80 border border-[#171720] hover:border-[#d4af37]/40 transition-all duration-300 group text-left relative overflow-hidden"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#111116] border border-[#1e1e29] flex items-center justify-center text-[#d4af37] mb-5 group-hover:border-[#d4af37]/50 transition-all">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#dfbf76] uppercase tracking-wider mb-2">
                      {item.highlight}
                    </p>
                    <p className="text-sm text-[#b4b4c7] leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* FREE BONUS CALLOUT: Clean Luxury Inset                                     */}
        {/* ========================================================================= */}
        <section className="py-16 border-t border-[#171720] bg-[#0b0b0f]/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-[#0b0b0f] to-[#060608] border border-[#d4af37]/35 shadow-sm text-center relative overflow-hidden">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 text-[#dfbf76] border border-[#d4af37]/20 text-xs font-semibold uppercase tracking-wider mb-4">
                <span>✦ Waitlist Bonus Unlocked On Sign Up</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Receive the <strong className="bg-gradient-to-r from-white via-[#f7e7be] to-[#d4af37] bg-clip-text text-transparent font-black">Executive Life Operating System</strong> Guide
              </h3>
              <p className="text-sm sm:text-base text-[#b4b4c7] max-w-xl mx-auto mb-8 leading-relaxed">
                Instantly receive our framework for <strong className="text-white font-bold">cognitive unloading</strong>, <strong className="text-white font-bold">energy-aligned scheduling</strong>, and <strong className="text-white font-bold">life triage</strong> when you reserve your spot today.
              </p>
              <a
                href="#waitlist-form"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[#060608] font-bold text-sm tracking-tight bg-gradient-to-r from-[#e4c465] via-[#d4af37] to-[#b89228] hover:from-[#f0d57d] hover:to-[#c49d30] shadow-md transition-all"
              >
                <span>Reserve Your Spot & Claim Guide</span>
                <ArrowRightIcon className="w-4 h-4 text-[#060608]" />
              </a>
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* FAQ SECTION: Minimalist Accordion                                         */}
        {/* ========================================================================= */}
        <section className="py-16 border-t border-[#171720]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-8">
              Frequently Asked Questions
            </h3>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx}
                  className="rounded-xl bg-[#0b0b0f]/60 border border-[#171720] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 text-sm font-semibold text-white hover:text-[#ebd9a9] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDownIcon className={`w-4 h-4 text-[#83839c] transition-transform ${openFaq === idx ? 'rotate-180 text-[#d4af37]' : ''}`} />
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#b4b4c7] leading-relaxed border-t border-[#171720]">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>


      {/* ========================================================================= */}
      {/* FOOTER: Ultra-Minimal Luxury                                              */}
      {/* ========================================================================= */}
      <footer className="border-t border-[#171720] py-10 text-xs text-[#56566e] bg-[#060608]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-[#d4af37] text-sm">AiLA</span>
            <span className="text-[#83839c]">© {new Date().getFullYear()} Ai Life Admin. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4 text-[#83839c]">
            <span>Private Beta Cohort 01</span>
            <span>•</span>
            <span>Encrypted & Confidential</span>
            <span>•</span>
            <a href="#waitlist-form" className="hover:text-[#dfbf76] transition-colors">Early Access</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
