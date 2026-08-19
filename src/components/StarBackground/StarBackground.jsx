import { useMemo } from "react";
import "./StarBackground.css";

function StarBackground({ sectionIndex = 0, count = 28 }) {

  const stars = useMemo(() => {
    const starColors = [
      "rgba(255, 101, 163, 0.88)", // soft pink
      "rgba(252, 161, 199, 0.92)", // light pink
      "rgba(168, 85, 247, 0.88)",  // purple
      "rgba(226, 198, 255, 0.92)", // lavender
      "rgba(255, 255, 255, 0.90)", // white glow
    ];

    const starGlowColors = [
      "rgba(255, 101, 163, 0.55)",
      "rgba(252, 161, 199, 0.55)",
      "rgba(168, 85, 247, 0.55)",
      "rgba(226, 198, 255, 0.55)",
      "rgba(255, 255, 255, 0.65)",
    ];

    return Array.from({ length: count }, (_, i) => {
      const globalIndex = sectionIndex * 37 + i;
      const colorIndex = globalIndex % starColors.length;
      const size = 1.2 + (globalIndex % 4) * 0.6; // 1.2px to 3.0px

      const top = `${(globalIndex * 19 + 7) % 94 + 3}%`;
      const left = `${(globalIndex * 29 + 13) % 94 + 3}%`;

      const duration = `${7 + (globalIndex % 6) * 1.5}s`;
      const delay = `${(globalIndex % 5) * 0.7}s`;
      const driftX = `${(globalIndex % 2 === 0 ? 1 : -1) * (8 + (globalIndex % 4) * 5)}px`;
      const driftY = `${(globalIndex % 3 === 0 ? -1 : 1) * (10 + (globalIndex % 5) * 4)}px`;
      const minOpacity = (0.15 + (globalIndex % 3) * 0.1).toFixed(2);
      const maxOpacity = (0.70 + (globalIndex % 4) * 0.08).toFixed(2);

      return {
        id: globalIndex,
        top,
        left,
        size: `${size}px`,
        rawSize: size,
        color: starColors[colorIndex],
        glowColor: starGlowColors[colorIndex],
        duration,
        delay,
        driftX,
        driftY,
        minOpacity,
        maxOpacity,
      };
    });
  }, [sectionIndex, count]);

  return (
    <div className="star-background-container" aria-hidden="true">
      {stars.map((star) => (
        <span
          key={star.id}
          className="star-particle"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            backgroundColor: star.color,
            boxShadow: `0 0 ${star.rawSize * 3}px ${star.glowColor}, 0 0 ${star.rawSize * 6}px ${star.glowColor}`,
            animationDuration: star.duration,
            animationDelay: star.delay,
            "--drift-x": star.driftX,
            "--drift-y": star.driftY,
            "--min-op": star.minOpacity,
            "--max-op": star.maxOpacity,
          }}
        />
      ))}
    </div>
  );
}

export default StarBackground;
