/**
 * ThulirLogo – reusable brand components.
 *
 * <ThulirBabyIcon /> – the circular baby-face SVG icon.
 * <ThulirLogoFull />  – icon + "thulir" wordmark side-by-side.
 * <ThulirWatermark /> – large, faint, fixed background watermark.
 */

import React from "react";

/* ─────────────────────────────────────────────
   Baby-face SVG icon  (matches provided logo)
   currentColor = the icon colour prop passed
   in (usually text-primary = pastel rose).
───────────────────────────────────────────── */
interface ThulirBabyIconProps {
  /** Diameter in pixels. Default: 40 */
  size?: number;
  className?: string;
}

export function ThulirBabyIcon({ size = 40, className = "" }: ThulirBabyIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Thulir baby face logo"
      role="img"
    >
      {/* Pink circular disc */}
      <circle cx="50" cy="50" r="50" fill="currentColor" />

      {/* White face */}
      <ellipse cx="50" cy="56" rx="27" ry="26" fill="white" fillOpacity="0.95" />

      {/* Hair curl */}
      <path
        d="M50 27 C50 27, 42 20, 37 25 C33 30, 36 37, 43 36"
        stroke="white"
        strokeWidth="4.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Left eye — pink dot on white face */}
      <circle cx="41.5" cy="52" r="2.8" fill="currentColor" />

      {/* Right eye */}
      <circle cx="58.5" cy="52" r="2.8" fill="currentColor" />

      {/* Smile */}
      <path
        d="M42 63 Q50 70 58 63"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Full logo: icon + "thulir" wordmark
───────────────────────────────────────────── */
interface ThulirLogoFullProps {
  /** Icon diameter. Default: 40 */
  iconSize?: number;
  /** Extra classes on the wrapper div */
  className?: string;
  /** Tailwind text-color class for "thulir". Default: "text-foreground" */
  textClass?: string;
  /** Tailwind text-color class for the icon. Default: "text-primary" */
  iconClass?: string;
}

export function ThulirLogoFull({
  iconSize = 40,
  className = "",
  textClass = "text-foreground",
  iconClass = "text-primary",
}: ThulirLogoFullProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <ThulirBabyIcon size={iconSize} className={iconClass} />
      <span
        className={`font-bold tracking-tight leading-none ${textClass}`}
        style={{
          fontFamily: "'Quicksand', 'Nunito', sans-serif",
          fontSize: iconSize * 0.6,
        }}
      >
        thulir
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Faint fixed watermark in page background.
   Replicates the brand stamp from the logo:
     outer ring → circular THULIR text →
     central baby icon → "thulir" wordmark
───────────────────────────────────────────── */

/** Approximate hex for the pastel-rose primary colour */
const BRAND_COLOR = "#d4827a";

export function ThulirWatermark() {
  return (
    <div
      className="fixed inset-0 pointer-events-none flex items-center justify-center -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[min(98vw,700px)] h-[min(98vw,700px)] opacity-[0.045]"
        style={{ filter: "blur(0.5px)" }}
      >
        {/* Outer border ring */}
        <circle cx="200" cy="200" r="193" stroke={BRAND_COLOR} strokeWidth="2.5" />

        {/* Repeating circular text path */}
        <defs>
          <path
            id="wm-text-circle"
            d="M200,200 m-168,0 a168,168 0 1,1 336,0 a168,168 0 1,1 -336,0"
          />
        </defs>
        <text
          fontFamily="'Quicksand', 'Nunito', sans-serif"
          fontSize="19"
          fontWeight="700"
          letterSpacing="9"
          fill={BRAND_COLOR}
        >
          <textPath href="#wm-text-circle" startOffset="0%">
            THULIR • THULIR • THULIR • THULIR • THULIR • THULIR •
          </textPath>
        </text>

        {/* ── Central baby icon ── */}
        {/* Pink disc */}
        <circle cx="200" cy="183" r="66" fill={BRAND_COLOR} />
        {/* White face */}
        <ellipse cx="200" cy="197" rx="45" ry="44" fill="white" fillOpacity="0.93" />
        {/* Hair curl */}
        <path
          d="M200 150 C200 150, 186 140, 178 148 C171 155, 174 166, 184 164"
          stroke="white"
          strokeWidth="6.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Eyes */}
        <circle cx="188" cy="191" r="4.5" fill={BRAND_COLOR} />
        <circle cx="212" cy="191" r="4.5" fill={BRAND_COLOR} />
        {/* Smile */}
        <path
          d="M187 206 Q200 217 213 206"
          stroke={BRAND_COLOR}
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />

        {/* ── "thulir" wordmark ── */}
        <text
          x="200"
          y="293"
          textAnchor="middle"
          fontFamily="'Quicksand', 'Nunito', sans-serif"
          fontSize="37"
          fontWeight="700"
          fill={BRAND_COLOR}
        >
          thulir
        </text>
      </svg>
    </div>
  );
}
