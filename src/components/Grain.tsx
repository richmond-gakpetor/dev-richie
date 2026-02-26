/**
 * Grain — a fixed SVG-filter noise overlay that adds analogue texture
 * to the dark background. Pure server component; zero JS weight.
 */
export default function Grain() {
  return (
    <>
      {/* Hidden SVG carrying the fractal-noise filter definition */}
      <svg
        aria-hidden="true"
        className="absolute w-0 h-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="grain-filter" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.68 0.72"
              numOctaves="4"
              stitchTiles="stitch"
              result="noise"
            />
            <feColorMatrix
              type="saturate"
              values="0"
              in="noise"
              result="grey-noise"
            />
            <feBlend in="SourceGraphic" in2="grey-noise" mode="overlay" />
          </filter>
        </defs>
      </svg>

      {/* The overlay div that the filter is applied to */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none select-none z-[9990] w-full h-full"
        style={{
          filter: "url(#grain-filter)",
          opacity: 0.045,
        }}
      />
    </>
  );
}
