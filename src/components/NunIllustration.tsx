import { useId, type ReactNode } from "react";
import type { TypeCode } from "../types";
import {
  CHEEK,
  HABIT,
  HABIT_DARK,
  INK,
  SKIN,
  VEIL,
  nunConfigs,
  type DecoKind,
  type Eyes,
  type Mouth,
  type NunConfig,
  type Point,
  type Prop,
} from "./nunConfigs";

const stroke = { stroke: INK, strokeWidth: 2.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

function Eyes({ kind }: { kind: Eyes }) {
  const xs = [88, 112];
  const y = 101;
  switch (kind) {
    case "happy":
      return (
        <g fill="none" {...stroke}>
          {xs.map((x) => (
            <path key={x} d={`M${x - 4.5} ${y + 1.5} Q${x} ${y - 4.5} ${x + 4.5} ${y + 1.5}`} />
          ))}
        </g>
      );
    case "closed":
      return (
        <g fill="none" {...stroke}>
          {xs.map((x) => (
            <path key={x} d={`M${x - 4.5} ${y - 1} Q${x} ${y + 3.5} ${x + 4.5} ${y - 1}`} />
          ))}
        </g>
      );
    case "wink":
      return (
        <g>
          <circle cx={xs[0]} cy={y} r={3.6} fill={INK} />
          <path d={`M${xs[1] - 4.5} ${y + 1.5} Q${xs[1]} ${y - 4.5} ${xs[1] + 4.5} ${y + 1.5}`} fill="none" {...stroke} />
        </g>
      );
    case "sparkle":
      return (
        <g>
          {xs.map((x) => (
            <g key={x}>
              <circle cx={x} cy={y} r={4.4} fill={INK} />
              <circle cx={x + 1.5} cy={y - 1.6} r={1.5} fill="#fff" />
            </g>
          ))}
        </g>
      );
    case "side":
      return (
        <g fill={INK}>
          {xs.map((x) => (
            <circle key={x} cx={x + 2.2} cy={y - 1.5} r={3.4} />
          ))}
        </g>
      );
    default:
      return (
        <g fill={INK}>
          {xs.map((x) => (
            <circle key={x} cx={x} cy={y} r={3.6} />
          ))}
        </g>
      );
  }
}

function Mouth({ kind }: { kind: Mouth }) {
  switch (kind) {
    case "open":
      return <path d="M92 112 Q100 124 108 112 Z" fill="#e8556d" {...stroke} strokeWidth={2.2} />;
    case "grin":
      return (
        <g>
          <path d="M89 111 Q100 127 111 111 Z" fill="#e8556d" {...stroke} strokeWidth={2.2} />
          <path d="M92 112 L108 112" stroke="#fff" strokeWidth={2.4} strokeLinecap="round" />
        </g>
      );
    case "small":
      return <ellipse cx={100} cy={115} rx={2.8} ry={3.2} fill="#e8556d" stroke={INK} strokeWidth={2} />;
    case "calm":
      return <path d="M95 114 Q100 117.5 105 114" fill="none" {...stroke} />;
    case "smirk":
      return <path d="M93 115 Q102 119 108 111" fill="none" {...stroke} />;
    default:
      return <path d="M93 112 Q100 120 107 112" fill="none" {...stroke} />;
  }
}

function PropShape({ kind, accent }: { kind: Prop; accent: string }) {
  const s = { stroke: INK, strokeWidth: 2.2, strokeLinejoin: "round" as const, strokeLinecap: "round" as const };
  switch (kind) {
    case "whistle":
      return (
        <g>
          <path d="M-10 6 Q-22 20 -30 22" fill="none" stroke={accent} strokeWidth={2.5} />
          <rect x={-12} y={-9} width={22} height={16} rx={8} fill="#ffd166" {...s} />
          <rect x={6} y={-8} width={13} height={8} rx={2} fill="#ffd166" {...s} />
          <circle cx={-2} cy={-1} r={3} fill={INK} />
        </g>
      );
    case "wrench":
      return (
        <g>
          <rect x={-3.5} y={-30} width={7} height={34} rx={3.5} fill="#c3ccd8" {...s} />
          <path d="M-10 -34 A10 10 0 1 0 10 -34 L5 -34 L5 -42 L-5 -42 L-5 -34 Z" fill="#c3ccd8" {...s} />
        </g>
      );
    case "tambourine":
      return (
        <g>
          <circle r={17} fill={accent} {...s} strokeWidth={2.6} />
          <circle r={11.5} fill="#fff6e0" {...s} strokeWidth={1.6} />
          {[0, 90, 180, 270].map((deg) => (
            <circle
              key={deg}
              cx={14.2 * Math.cos((deg * Math.PI) / 180)}
              cy={14.2 * Math.sin((deg * Math.PI) / 180)}
              r={3.2}
              fill="#ffd166"
              stroke={INK}
              strokeWidth={1.4}
            />
          ))}
        </g>
      );
    case "mug":
      return (
        <g>
          <path d="M-6 -20 Q-10 -26 -6 -32 M2 -20 Q-2 -26 2 -32 M10 -20 Q6 -26 10 -32" fill="none" stroke="#fff" strokeWidth={2.5} strokeLinecap="round" opacity={0.9} />
          <path d="M14 -8 Q24 -8 22 2 Q20 9 13 7" fill="none" {...s} strokeWidth={3} />
          <rect x={-14} y={-16} width={28} height={26} rx={5} fill={accent} {...s} />
          <path d="M0 -1 C-6 -7 -10 -1 0 5 C10 -1 6 -7 0 -1 Z" fill="#fff" />
        </g>
      );
    case "balloon":
      return (
        <g>
          <path d="M0 0 Q-6 -16 2 -30 Q8 -42 0 -50" fill="none" stroke={INK} strokeWidth={1.6} />
          <ellipse cx={0} cy={-72} rx={18} ry={22} fill={accent} {...s} />
          <path d="M-4 -49 L4 -49 L0 -54 Z" fill={accent} {...s} strokeWidth={1.6} />
          <ellipse cx={-7} cy={-80} rx={4} ry={7} fill="#fff" opacity={0.55} />
        </g>
      );
    case "letter":
      return (
        <g>
          <rect x={-22} y={-15} width={44} height={30} rx={4} fill="#fff" {...s} />
          <path d="M-22 -13 L0 3 L22 -13" fill="none" {...s} />
          <path d="M0 4 C-7 -3 -12 4 0 12 C12 4 7 -3 0 4 Z" fill={accent} stroke={INK} strokeWidth={1.6} />
        </g>
      );
    case "bulb":
      return (
        <g>
          {[-90, -40, -140, 0, 180].map((deg) => (
            <line
              key={deg}
              x1={22 * Math.cos((deg * Math.PI) / 180)}
              y1={-18 + 22 * Math.sin((deg * Math.PI) / 180)}
              x2={30 * Math.cos((deg * Math.PI) / 180)}
              y2={-18 + 30 * Math.sin((deg * Math.PI) / 180)}
              stroke={accent}
              strokeWidth={3}
              strokeLinecap="round"
            />
          ))}
          <circle cy={-18} r={15} fill="#ffe066" {...s} />
          <rect x={-7} y={-5} width={14} height={9} rx={2} fill="#c3ccd8" {...s} />
          <path d="M-4 -18 L0 -12 L4 -18" fill="none" stroke={accent} strokeWidth={2} strokeLinecap="round" />
        </g>
      );
    case "magnifier":
      return (
        <g>
          <rect x={-3.5} y={-14} width={7} height={18} rx={3} fill="#8b5e3c" {...s} />
          <circle cy={-28} r={14} fill="#e9fbff" opacity={0.85} {...s} strokeWidth={3.2} />
          <path d="M-6 -34 Q-2 -38 3 -36" fill="none" stroke="#fff" strokeWidth={2.5} strokeLinecap="round" />
        </g>
      );
    case "clipboard":
      return (
        <g>
          <rect x={-17} y={-24} width={34} height={44} rx={4} fill="#c68b59" {...s} />
          <rect x={-12} y={-17} width={24} height={32} rx={2} fill="#fff" stroke={INK} strokeWidth={1.4} />
          <rect x={-7} y={-28} width={14} height={8} rx={2} fill="#c3ccd8" {...s} strokeWidth={1.6} />
          {[-10, -2, 6].map((y) => (
            <g key={y}>
              <path d={`M-9 ${y} l2.5 2.5 l4 -5`} fill="none" stroke={accent} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              <line x1={-1} y1={y} x2={9} y2={y} stroke="#b7bfcc" strokeWidth={1.8} strokeLinecap="round" />
            </g>
          ))}
        </g>
      );
    case "book":
      return (
        <g>
          <rect x={-22} y={-15} width={44} height={28} rx={3} fill={accent} {...s} />
          <rect x={-19} y={10} width={38} height={5} rx={1} fill="#fff" {...s} strokeWidth={1.4} />
          <line x1={0} y1={-15} x2={0} y2={13} stroke={INK} strokeWidth={2} />
          <path d="M8 -15 L8 -2 L11 -5 L14 -2 L14 -15" fill="#ffd166" stroke={INK} strokeWidth={1.4} />
        </g>
      );
    case "basket":
      return (
        <g>
          <path d="M-20 -6 Q0 -40 20 -6" fill="none" stroke="#a0703f" strokeWidth={3.5} strokeLinecap="round" />
          <circle cx={-8} cy={-8} r={6} fill="#ef476f" {...s} strokeWidth={1.6} />
          <circle cx={4} cy={-10} r={6} fill="#ffd166" {...s} strokeWidth={1.6} />
          <circle cx={13} cy={-6} r={5} fill="#06d6a0" {...s} strokeWidth={1.6} />
          <path d="M-22 -5 L22 -5 L17 16 L-17 16 Z" fill="#d4a373" {...s} />
          <path d="M-20 3 L20 3 M-12 -5 L-10 16 M0 -5 L0 16 M12 -5 L10 16" stroke="#a0703f" strokeWidth={1.6} />
        </g>
      );
    case "wateringCan":
      return (
        <g>
          <path d="M14 -6 L32 -20" stroke={INK} strokeWidth={6} strokeLinecap="round" />
          <path d="M14 -6 L32 -20" stroke={accent} strokeWidth={3.2} strokeLinecap="round" />
          <path d="M-10 -12 Q-22 -12 -20 0 Q-18 8 -12 6" fill="none" {...s} strokeWidth={3} />
          <rect x={-12} y={-16} width={28} height={24} rx={6} fill={accent} {...s} />
          {[
            [36, -12],
            [40, -4],
            [34, 0],
          ].map(([x, y]) => (
            <path key={`${x}${y}`} d={`M${x} ${y} q2 4 0 5 q-2 -1 0 -5 z`} fill="#4cc9f0" stroke="#4cc9f0" strokeWidth={1.4} />
          ))}
        </g>
      );
    case "megaphone":
      return (
        <g>
          <rect x={-4} y={-4} width={8} height={14} rx={3} fill="#c3ccd8" {...s} />
          <path d="M-8 -6 L-8 -16 L22 -34 L22 12 Z" fill={accent} {...s} />
          <ellipse cx={22} cy={-11} rx={5} ry={23} fill="#fff" {...s} />
          <path d="M34 -24 L40 -28 M36 -11 L44 -11 M34 2 L40 6" stroke={accent} strokeWidth={3} strokeLinecap="round" />
        </g>
      );
    case "candle":
      return (
        <g>
          <circle cy={-36} r={20} fill="#ffe066" opacity={0.35} />
          <path d="M0 -50 C8 -40 6 -30 0 -28 C-6 -30 -8 -40 0 -50 Z" fill="#ffb703" {...s} strokeWidth={1.8} />
          <path d="M0 -42 C3 -37 3 -33 0 -31 C-3 -33 -3 -37 0 -42 Z" fill="#fff3b0" />
          <rect x={-7} y={-26} width={14} height={30} rx={3} fill="#fff" {...s} />
          <ellipse cx={0} cy={4} rx={16} ry={5} fill={accent} {...s} />
        </g>
      );
    case "flag":
      return (
        <g>
          <line x1={0} y1={14} x2={0} y2={-62} stroke="#8b5e3c" strokeWidth={4} strokeLinecap="round" />
          <path d="M2 -60 Q16 -66 30 -58 Q22 -50 32 -40 Q16 -46 2 -40 Z" fill={accent} {...s} />
          <circle cy={-64} r={3.5} fill="#ffd166" stroke={INK} strokeWidth={1.4} />
        </g>
      );
    case "map":
      return (
        <g>
          <rect x={-24} y={-15} width={48} height={30} rx={2} fill="#fff1c1" {...s} />
          <rect x={-28} y={-17} width={7} height={34} rx={3.5} fill="#e9c46a" {...s} />
          <rect x={21} y={-17} width={7} height={34} rx={3.5} fill="#e9c46a" {...s} />
          <path d="M-16 8 Q-8 -8 0 2 Q6 8 12 -6" fill="none" stroke={accent} strokeWidth={2} strokeDasharray="3 3" strokeLinecap="round" />
          <path d="M10 -10 l5 5 m0 -5 l-5 5" stroke="#e63946" strokeWidth={2.4} strokeLinecap="round" />
        </g>
      );
    default:
      return null;
  }
}

function Deco({ kind, x, y, s = 1, accent }: { kind: DecoKind; x: number; y: number; s?: number; accent: string }) {
  let shape: ReactNode = null;
  switch (kind) {
    case "sparkle":
      shape = <path d="M0 -11 Q2 -2 11 0 Q2 2 0 11 Q-2 2 -11 0 Q-2 -2 0 -11 Z" fill={accent} />;
      break;
    case "heart":
      shape = <path d="M0 -3 C-6 -12 -16 -4 0 9 C16 -4 6 -12 0 -3 Z" fill={accent} />;
      break;
    case "note":
      shape = (
        <g fill={accent} stroke={accent} strokeWidth={2.4} strokeLinecap="round">
          <ellipse cx={-6} cy={6} rx={5} ry={4} />
          <line x1={-1.5} y1={5} x2={-1.5} y2={-12} />
          <path d="M-1.5 -12 Q6 -10 7 -3" fill="none" />
        </g>
      );
      break;
    case "star":
      shape = (
        <path
          d="M0 -11 L3.2 -3.6 L11 -3.4 L5 1.8 L7 9.6 L0 5.2 L-7 9.6 L-5 1.8 L-11 -3.4 L-3.2 -3.6 Z"
          fill={accent}
          strokeLinejoin="round"
        />
      );
      break;
    case "motion":
      shape = (
        <g stroke={accent} strokeWidth={3} strokeLinecap="round">
          <line x1={-6} y1={-12} x2={8} y2={-12} />
          <line x1={-2} y1={0} x2={10} y2={0} />
          <line x1={-6} y1={12} x2={8} y2={12} />
        </g>
      );
      break;
    case "question":
      shape = (
        <text x={0} y={9} textAnchor="middle" fontSize={28} fontWeight={900} fill={accent} fontFamily="Jua, sans-serif">
          ?
        </text>
      );
      break;
    case "check":
      shape = (
        <g>
          <circle r={11} fill={accent} />
          <path d="M-5 0 L-1 4 L6 -4" fill="none" stroke="#fff" strokeWidth={2.8} strokeLinecap="round" strokeLinejoin="round" />
        </g>
      );
      break;
    case "clock":
      shape = (
        <g>
          <circle r={11} fill="#fff" stroke={accent} strokeWidth={3} />
          <path d="M0 -6 L0 0 L4 3" fill="none" stroke={INK} strokeWidth={2} strokeLinecap="round" />
        </g>
      );
      break;
    case "bolt":
      shape = <path d="M3 -14 L-8 2 L-1 2 L-4 14 L8 -3 L1 -3 Z" fill={accent} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />;
      break;
    case "sprout":
      shape = (
        <g>
          <path d="M0 0 L0 -16" stroke="#2d9c5a" strokeWidth={3} strokeLinecap="round" />
          <path d="M0 -12 Q-12 -20 -14 -10 Q-6 -6 0 -12 Z" fill="#57cc99" stroke="#2d9c5a" strokeWidth={1.4} />
          <path d="M0 -14 Q10 -24 14 -14 Q6 -8 0 -14 Z" fill="#57cc99" stroke="#2d9c5a" strokeWidth={1.4} />
        </g>
      );
      break;
  }
  return <g transform={`translate(${x} ${y}) scale(${s})`}>{shape}</g>;
}

function Arm({ from, to }: { from: Point; to: Point }) {
  const mid = { x: (from.x + to.x) / 2 + (to.x < 100 ? -6 : 6), y: (from.y + to.y) / 2 + 6 };
  return (
    <g>
      <path d={`M${from.x} ${from.y} Q${mid.x} ${mid.y} ${to.x} ${to.y}`} fill="none" stroke={INK} strokeWidth={17} strokeLinecap="round" />
      <path d={`M${from.x} ${from.y} Q${mid.x} ${mid.y} ${to.x} ${to.y}`} fill="none" stroke={HABIT_DARK} strokeWidth={12.5} strokeLinecap="round" />
    </g>
  );
}

/** Inner drawing in a 0 0 200 200 coordinate space. */
export function NunFigure({ config, clipId }: { config: NunConfig; clipId: string }) {
  const { bg, accent } = config;
  const heldInFront = config.propAt.y > 140 && Math.abs(config.propAt.x - 100) < 20;

  const prop =
    config.prop === "none" ? null : (
      <g transform={`translate(${config.propAt.x} ${config.propAt.y}) rotate(${config.propRotate ?? 0})`}>
        <PropShape kind={config.prop} accent={accent} />
      </g>
    );

  return (
    <g>
      <defs>
        <clipPath id={clipId}>
          <circle cx={100} cy={100} r={96} />
        </clipPath>
      </defs>
      <circle cx={100} cy={100} r={96} fill={bg} />
      <g clipPath={`url(#${clipId})`}>
        <circle cx={100} cy={100} r={70} fill="#fff" opacity={0.35} />
        {config.deco.map((d, i) => (
          <Deco key={i} {...d} accent={accent} />
        ))}

        {/* veil drape */}
        <path
          d="M54 98 C50 58 74 42 100 42 C126 42 150 58 146 98 L156 162 C132 152 68 152 44 162 Z"
          fill={VEIL}
          stroke={INK}
          strokeWidth={2.5}
          strokeLinejoin="round"
        />
        {/* habit body */}
        <path
          d="M46 162 C58 144 80 138 100 138 C120 138 142 144 154 162 L170 214 L30 214 Z"
          fill={HABIT}
          stroke={INK}
          strokeWidth={2.5}
          strokeLinejoin="round"
        />
        {/* white collar */}
        <path d="M76 134 Q100 152 124 134 L120 148 Q100 160 80 148 Z" fill="#fff" stroke={INK} strokeWidth={2.2} strokeLinejoin="round" />
        {/* cross on cord */}
        <path d="M88 150 L100 166 L112 150" fill="none" stroke={INK} strokeWidth={1.4} />
        <g transform="translate(100 174)">
          <rect x={-2.6} y={-9} width={5.2} height={20} rx={1.4} fill="#f2b632" stroke={INK} strokeWidth={1.4} />
          <rect x={-8} y={-4} width={16} height={5.2} rx={1.4} fill="#f2b632" stroke={INK} strokeWidth={1.4} />
        </g>

        {/* head */}
        <circle cx={100} cy={102} r={38} fill="#fff" stroke={INK} strokeWidth={2.5} />
        <circle cx={100} cy={104} r={31} fill={SKIN} />
        <path
          d="M60 100 C58 62 80 50 100 50 C120 50 142 62 140 100 C134 80 120 68 100 68 C80 68 66 80 60 100 Z"
          fill={VEIL}
          stroke={INK}
          strokeWidth={2.5}
          strokeLinejoin="round"
        />
        <path d="M62 96 C68 78 82 68 100 68 C118 68 132 78 138 96" fill="none" stroke="#fff" strokeWidth={5} strokeLinecap="round" />
        <circle cx={80} cy={112} r={5.5} fill={CHEEK} opacity={0.65} />
        <circle cx={120} cy={112} r={5.5} fill={CHEEK} opacity={0.65} />
        {config.brows ? (
          <g stroke={INK} strokeWidth={2.4} strokeLinecap="round">
            <line x1={82} y1={91} x2={93} y2={93} />
            <line x1={118} y1={91} x2={107} y2={93} />
          </g>
        ) : null}
        <Eyes kind={config.eyes} />
        {config.glasses ? (
          <g fill="none" stroke={INK} strokeWidth={2}>
            <circle cx={88} cy={101} r={8.5} fill="#fff" fillOpacity={0.25} />
            <circle cx={112} cy={101} r={8.5} fill="#fff" fillOpacity={0.25} />
            <path d="M96.5 100 Q100 97 103.5 100" />
          </g>
        ) : null}
        <Mouth kind={config.mouth} />

        {heldInFront ? null : prop}
        {/* arms & hands */}
        <Arm from={{ x: 64, y: 154 }} to={config.left} />
        <Arm from={{ x: 136, y: 154 }} to={config.right} />
        {heldInFront ? prop : null}
        <circle cx={config.left.x} cy={config.left.y} r={8} fill={SKIN} stroke={INK} strokeWidth={2.2} />
        <circle cx={config.right.x} cy={config.right.y} r={8} fill={SKIN} stroke={INK} strokeWidth={2.2} />
      </g>
      <circle cx={100} cy={100} r={96} fill="none" stroke={INK} strokeWidth={3} />
    </g>
  );
}

export function NunIllustration({
  code,
  className,
  title,
}: {
  code: TypeCode | "WELCOME";
  className?: string;
  title?: string;
}) {
  const clipId = `nun-clip-${useId().replace(/:/g, "")}`;
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <NunFigure config={nunConfigs[code]} clipId={clipId} />
    </svg>
  );
}
