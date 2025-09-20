export function backgroundGen({
    dotSize = 2,      // radius in px
    gapX = 20,        // horizontal gap (edge-to-edge) in px
    gapY = 20,        // vertical gap (edge-to-edge) in px
    dotColor = 'rgba(0,0,0,0.08)',
    opacity = 1,
  }: {
    dotSize?: number;
    gapX?: number;
    gapY?: number;
    dotColor?: string;
    opacity?: number;
  } = {}) {
    const dotDiameter = dotSize * 2;
    const tileWidth = dotDiameter + gapX;
    const tileHeight = dotDiameter + gapY;
  
    // Build a minimal SVG string. Keep it small and deterministic.
    const svg = `
      <svg xmlns='http://www.w3.org/2000/svg' width='${tileWidth}' height='${tileHeight}' viewBox='0 0 ${tileWidth} ${tileHeight}'>
        <circle cx='${dotSize}' cy='${dotSize}' r='${dotSize}' fill='${dotColor}' fill-opacity='${opacity}' />
      </svg>`;
  
    // encodeURIComponent keeps it safe to put into a data URI
    const dataUri = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  
    // return a CSS-ready background-image value
    return `url("${dataUri}")`;
  }
