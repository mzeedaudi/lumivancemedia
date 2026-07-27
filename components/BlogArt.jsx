// Per-post cover art: each blog post gets a small SVG scene illustrating its
// actual topic (retention curve, store listing, funnel, dashboard…), tinted
// with the post category's accent gradient. Scenes are mapped by slug, with a
// category fallback for future posts. Pure SVG, renders on the server.

import { categoryAccent } from "@/lib/blog";

const W = "rgba(255,255,255,0.78)"; // primary line
const Wd = "rgba(255,255,255,0.34)"; // dim line
const SPARK = "#F4C77B";
const AQUA = "#2DD4BF";

/* ---------------------------------- scenes --------------------------------- */
/* Each scene draws inside a 400x225 canvas; keep key content in x70-330 /
   y45-180 so card crops (16:9 sliced to shorter banners) stay readable. */

const chartDown = (g) => (
  <>
    <path d="M70 175H330" stroke={Wd} />
    {[34, 46, 60, 76, 92, 104].map((h, i) => (
      <rect key={i} x={90 + i * 42} y={175 - h} width="26" height={h} rx="4" fill={g} fillOpacity="0.4" stroke="none" />
    ))}
    <path d="M85 72 140 88 195 96 250 118 314 136" stroke={g} strokeWidth="3" />
    <path d="M304 128l12 9-14 4" stroke={g} strokeWidth="3" />
  </>
);

const paybackClock = (g) => (
  <>
    <circle cx="115" cy="110" r="38" stroke={W} />
    <path d="M115 78v6M147 110h-6M115 142v-6M83 110h6" stroke={Wd} />
    <path d="M115 110V86M115 110l18 10" stroke={g} strokeWidth="2.5" />
    <path d="M185 160H330" stroke={Wd} />
    {[20, 34, 48, 62, 76, 90].map((h, i) => (
      <rect key={i} x={193 + i * 24} y={160 - h} width="14" height={h} rx="3" fill={g} fillOpacity="0.4" stroke="none" />
    ))}
    <path d="M185 100H330" stroke={Wd} strokeDasharray="4 4" />
    <circle cx="272" cy="100" r="5" fill={SPARK} stroke="none" />
  </>
);

const star = (cx, cy, s, key) => (
  <path
    key={key}
    d={`M${cx} ${cy - s} l${s * 0.32} ${s * 0.62} ${s * 0.68} ${s * 0.1} -${s * 0.5} ${s * 0.5} ${s * 0.12} ${s * 0.68} -${s * 0.62} -${s * 0.34} -${s * 0.62} ${s * 0.34} ${s * 0.12} -${s * 0.68} -${s * 0.5} -${s * 0.5} ${s * 0.68} -${s * 0.1} Z`}
    fill={SPARK}
    stroke="none"
  />
);

const storePhone = (g) => (
  <>
    <rect x="150" y="38" width="100" height="150" rx="16" stroke={W} />
    <path d="M180 50h40" stroke={Wd} />
    <rect x="162" y="60" width="76" height="14" rx="7" stroke={Wd} />
    <circle cx="172" cy="67" r="3.5" stroke={Wd} />
    <path d="M175 70l3 3" stroke={Wd} />
    {[88, 112, 136].map((y) => (
      <g key={y}>
        <rect x="162" y={y} width="16" height="16" rx="4" stroke={W} />
        <path d={`M184 ${y + 5}H234M184 ${y + 11}H222`} stroke={Wd} />
      </g>
    ))}
    {[0, 1, 2, 3, 4].map((i) => star(172 + i * 14, 168, 6, i))}
    <path d="M285 150V84" stroke={g} strokeWidth="3" />
    <path d="M277 94l8 -12 8 12" stroke={g} strokeWidth="3" />
    <path d="M272 150h26M276 128h18" stroke={Wd} />
  </>
);

const funnel = (g) => (
  <>
    {[150, 172, 194, 228, 250].map((x, i) => (
      <circle key={i} cx={x} cy="40" r="3" fill={W} fillOpacity="0.6" stroke="none" />
    ))}
    <path d="M110 55H290L262 95H138Z" stroke={W} fill={g} fillOpacity="0.12" />
    <path d="M138 105H262L238 145H162Z" stroke={W} fill={g} fillOpacity="0.22" />
    <path d="M162 155H238L221 185H179Z" stroke={W} fill={g} fillOpacity="0.34" />
  </>
);

const inflatedBar = (g) => (
  <>
    <path d="M80 170H320" stroke={Wd} />
    {[95, 185, 275].map((x, i) => (
      <g key={i}>
        <rect x={x} y="75" width="30" height="95" rx="4" stroke={g} strokeDasharray="5 4" />
        <rect x={x} y="115" width="30" height="55" rx="4" fill={g} fillOpacity="0.45" stroke="none" />
      </g>
    ))}
    <circle cx="300" cy="72" r="16" stroke={W} />
    <path d="M311 83l14 14" stroke={W} strokeWidth="2.5" />
  </>
);

const adGrid = (g) => (
  <>
    {[
      [105, 60], [171, 60], [237, 60],
      [105, 125], [171, 125], [237, 125],
    ].map(([x, y], i) => {
      const win = i === 1;
      return (
        <g key={i}>
          <rect x={x} y={y} width="56" height="52" rx="8" stroke={win ? g : Wd} strokeWidth={win ? 2.5 : 1.6} fill={win ? g : "none"} fillOpacity={win ? 0.14 : 0} />
          <circle cx={x + 14} cy={y + 15} r="5" stroke={win ? W : Wd} />
          <path d={`M${x + 8} ${y + 34}l9 -9 7 6 9 -11 12 14`} stroke={win ? W : Wd} />
          <path d={`M${x + 8} ${y + 44}H${x + 40}`} stroke={Wd} />
        </g>
      );
    })}
    {star(199, 48, 8, "w")}
  </>
);

const searchResult = (g) => (
  <>
    <rect x="90" y="52" width="220" height="22" rx="11" stroke={W} />
    <circle cx="104" cy="62" r="4" stroke={Wd} />
    <path d="M107 65l4 4" stroke={Wd} />
    <rect x="90" y="90" width="220" height="36" rx="8" stroke={g} strokeWidth="2" fill={g} fillOpacity="0.12" />
    <rect x="99" y="99" width="22" height="14" rx="4" stroke={W} />
    <text x="110" y="110" textAnchor="middle" fontSize="9" fontWeight="700" fill={W} stroke="none">Ad</text>
    <path d="M130 102h120M130 114h86" stroke={Wd} />
    {star(292, 108, 7, "s")}
    <path d="M90 146H310M90 166H250" stroke={Wd} />
  </>
);

const fork = (g) => (
  <>
    <path d="M85 115h80" stroke={W} strokeWidth="2.5" />
    <path d="M165 115c38 0 32 -42 70 -42h56" stroke={g} strokeWidth="2.5" />
    <path d="M282 65l14 8 -14 8" stroke={g} strokeWidth="2.5" />
    <path d="M165 115c38 0 32 42 70 42h56" stroke={W} strokeWidth="2.5" />
    <path d="M282 149l14 8 -14 8" stroke={W} strokeWidth="2.5" />
    <rect x="316" y="56" width="30" height="30" rx="6" stroke={g} strokeWidth="2" />
    <path d="M316 66h30M326 56v30" stroke={g} />
    <circle cx="331" cy="157" r="15" stroke={W} />
    <text x="331" y="162" textAnchor="middle" fontSize="13" fontWeight="700" fill={W} stroke="none">$</text>
  </>
);

const loopFunnel = (g) => (
  <>
    <path d="M95 60H245L219 98H121Z" stroke={W} fill={g} fillOpacity="0.14" />
    <path d="M121 108H219L199 146H141Z" stroke={W} fill={g} fillOpacity="0.24" />
    <path d="M141 156H199L186 184H154Z" stroke={W} fill={g} fillOpacity="0.36" />
    <path d="M195 178c92 6 116 -96 -8 -114" stroke={g} strokeWidth="2.5" strokeDasharray="1 7" />
    <path d="M201 56l-16 6 12 12" stroke={g} strokeWidth="2.5" />
  </>
);

const retentionCurve = (g) => (
  <>
    <path d="M80 58V170H330" stroke={Wd} />
    <path d="M86 72c60 76 140 94 238 96" stroke={Wd} strokeDasharray="4 4" />
    <path d="M86 72c62 62 126 68 238 70" stroke={g} strokeWidth="3" />
    <circle cx="300" cy="141" r="5" fill={SPARK} stroke="none" />
  </>
);

const ugcPhone = (g, note = false) => (
  <>
    <rect x="165" y="40" width="88" height="150" rx="14" stroke={W} />
    <circle cx="209" cy="105" r="21" stroke={g} strokeWidth="2.5" />
    <path d="M203 95l18 10 -18 10Z" fill={g} fillOpacity="0.55" stroke="none" />
    <path d="M282 74c-4 -7 -14 -5 -14 3 0 7 14 15 14 15s14 -8 14 -15c0 -8 -10 -10 -14 -3Z" stroke={W} />
    <rect x="272" y="112" width="28" height="20" rx="7" stroke={Wd} />
    <path d="M280 122h12" stroke={Wd} />
    {note && (
      <>
        <path d="M128 78v34" stroke={W} strokeWidth="2" />
        <circle cx="122" cy="114" r="7" stroke={W} strokeWidth="2" />
        <path d="M128 78c6 4 12 4 14 10" stroke={W} strokeWidth="2" />
      </>
    )}
    <path d="M152 152c-6 -6 -6 -14 0 -20M143 158c-10 -10 -10 -22 0 -32" stroke={Wd} />
  </>
);

const calculator = (g) => (
  <>
    <rect x="150" y="50" width="100" height="126" rx="12" stroke={W} />
    <rect x="162" y="62" width="76" height="22" rx="5" stroke={Wd} />
    <text x="200" y="78" textAnchor="middle" fontSize="12" fontWeight="700" fill={W} stroke="none">LTV</text>
    {[0, 1, 2].map((r) =>
      [0, 1, 2].map((c) => (
        <circle key={`${r}${c}`} cx={172 + c * 28} cy={104 + r * 24} r="6.5" stroke={Wd} />
      ))
    )}
    <circle cx="290" cy="150" r="13" stroke={g} strokeWidth="2" />
    <circle cx="303" cy="136" r="13" stroke={g} strokeWidth="2" fill={g} fillOpacity="0.15" />
    <text x="303" y="141" textAnchor="middle" fontSize="12" fontWeight="700" fill={W} stroke="none">$</text>
  </>
);

const serverRelay = (g) => (
  <>
    <rect x="72" y="72" width="82" height="60" rx="8" stroke={Wd} />
    <path d="M72 86h82" stroke={Wd} />
    {[82, 92, 102].map((x) => (
      <circle key={x} cx={x} cy="79" r="2" fill={Wd} stroke="none" />
    ))}
    <rect x="102" y="98" width="14" height="14" stroke={Wd} />
    <path d="M100 96l18 18M118 96l-18 18" stroke={g} strokeWidth="2" />
    <path d="M158 102h24" stroke={W} strokeWidth="2" />
    <path d="M176 96l10 6 -10 6" stroke={W} strokeWidth="2" />
    {[76, 96, 116].map((y) => (
      <g key={y}>
        <rect x="192" y={y} width="60" height="16" rx="4" stroke={W} />
        <circle cx="242" cy={y + 8} r="2" fill={W} stroke="none" />
      </g>
    ))}
    {[[306, 70], [318, 104], [306, 138]].map(([x, y], i) => (
      <g key={i}>
        <circle cx={x} cy={y} r="12" stroke={W} />
        <path d={`M256 104 ${x - 14} ${y}`} stroke={g} strokeWidth="2" />
      </g>
    ))}
  </>
);

const abSplit = (g) => (
  <>
    <path d="M200 48V182" stroke={Wd} strokeDasharray="5 5" />
    <text x="120" y="72" textAnchor="middle" fontSize="15" fontWeight="700" fill={Wd} stroke="none">A</text>
    <text x="282" y="72" textAnchor="middle" fontSize="15" fontWeight="700" fill={W} stroke="none">B</text>
    {[30, 33, 31].map((h, i) => (
      <rect key={i} x={90 + i * 30} y={165 - h} width="18" height={h} rx="3" fill={W} fillOpacity="0.22" stroke="none" />
    ))}
    {[36, 52, 70].map((h, i) => (
      <rect key={i} x={232 + i * 30} y={165 - h} width="18" height={h} rx="3" fill={g} fillOpacity="0.5" stroke="none" />
    ))}
    <path d="M240 132l70 -46" stroke={g} strokeWidth="2.5" />
    <path d="M296 84l14 2 -6 13" stroke={g} strokeWidth="2.5" />
  </>
);

const calendarSteps = (g) => (
  <>
    {[
      [95, 120, "30"], [180, 95, "60"], [265, 70, "90"],
    ].map(([x, y, label], i) => (
      <g key={i}>
        <rect x={x} y={y} width="70" height="58" rx="10" stroke={i === 2 ? g : W} strokeWidth={i === 2 ? 2.2 : 1.6} fill={i === 2 ? g : "none"} fillOpacity={i === 2 ? 0.12 : 0} />
        <path d={`M${x} ${Number(y) + 16}h70`} stroke={Wd} />
        <text x={Number(x) + 35} y={Number(y) + 45} textAnchor="middle" fontSize="17" fontWeight="700" fill={W} stroke="none">{label}</text>
      </g>
    ))}
    <path d="M112 112l-8 -4 2 9" stroke={SPARK} strokeWidth="2" />
  </>
);

const assetMachine = (g) => (
  <>
    {[[78, 58], [78, 94], [78, 130]].map(([x, y], i) => (
      <rect key={i} x={x} y={y} width="36" height="27" rx="6" stroke={Wd} />
    ))}
    <circle cx="89" cy="67" r="3.5" stroke={Wd} />
    <path d="M82 80l8 -7 5 4 7 -8" stroke={Wd} />
    <path d="M92 100l12 7 -12 7Z" fill={Wd} stroke="none" />
    <path d="M84 138h24M84 146h16" stroke={Wd} />
    {[71, 107, 143].map((y) => (
      <path key={y} d={`M118 ${y}h48`} stroke={Wd} strokeDasharray="3 4" />
    ))}
    <rect x="172" y="72" width="72" height="66" rx="12" stroke={W} />
    <circle cx="208" cy="105" r="14" stroke={g} strokeWidth="2" />
    {[0, 60, 120, 180, 240, 300].map((a) => {
      const r = (a * Math.PI) / 180;
      return (
        <path
          key={a}
          d={`M${208 + 14 * Math.cos(r)} ${105 + 14 * Math.sin(r)}L${208 + 19 * Math.cos(r)} ${105 + 19 * Math.sin(r)}`}
          stroke={g}
          strokeWidth="2"
        />
      );
    })}
    <path d="M248 105h26" stroke={W} strokeWidth="2" />
    <path d="M268 99l10 6 -10 6" stroke={W} strokeWidth="2" />
    <rect x="284" y="78" width="56" height="54" rx="8" stroke={g} strokeWidth="2" fill={g} fillOpacity="0.12" />
    <path d="M306 96l14 9 -14 9Z" fill={g} fillOpacity="0.55" stroke="none" />
  </>
);

const stepsSpark = (g) => (
  <>
    <path d="M85 175h65v-30h65v-30h65v-30h50" stroke={W} strokeWidth="2" />
    <circle cx="118" cy="167" r="6" fill={g} stroke="none" />
    <circle cx="183" cy="137" r="6" fill={g} fillOpacity="0.6" stroke="none" />
    <circle cx="248" cy="107" r="6" fill={g} fillOpacity="0.35" stroke="none" />
    <circle cx="305" cy="62" r="16" fill={SPARK} fillOpacity="0.22" stroke="none" />
    <path d="M305 48l4 10 10 4 -10 4 -4 10 -4 -10 -10 -4 10 -4Z" fill={SPARK} stroke="none" />
  </>
);

const mixModel = (g) => (
  <>
    <path d="M75 178v-28c75 -15 175 0 250 -20v48Z" fill={g} fillOpacity="0.45" stroke="none" />
    <path d="M75 150c75 -15 175 0 250 -20v-35c-75 20 -175 5 -250 32Z" fill={g} fillOpacity="0.28" stroke="none" />
    <path d="M75 127c75 -27 175 -12 250 -32v-25c-75 15 -175 0 -250 27Z" fill={g} fillOpacity="0.15" stroke="none" />
    <path d="M262 52v126" stroke={Wd} strokeDasharray="4 4" />
    <circle cx="262" cy="52" r="4" fill={SPARK} stroke="none" />
  </>
);

const gauge = (g) => (
  <>
    <path d="M112 152a88 88 0 0 1 176 0" stroke="rgba(255,255,255,0.14)" strokeWidth="12" />
    <path d="M112 152a88 88 0 0 1 133 -76" stroke={g} strokeWidth="12" />
    <path d="M200 152l50 -54" stroke={W} strokeWidth="2.5" />
    <circle cx="200" cy="152" r="7" fill={W} stroke="none" />
    <text x="200" y="182" textAnchor="middle" fontSize="13" fontWeight="700" fill={W} stroke="none">$</text>
  </>
);

const testFlask = (g) => (
  <>
    <path d="M186 58v40l-34 64c-6 16 2 16 -22 16h96c18 0 24 0 18 -16l-34 -64V58" stroke="none" />
    <path d="M186 58v42l-33 62c-7 13 1 16 12 16h70c11 0 19 -3 12 -16l-33 -62V58" stroke={W} />
    <path d="M176 58h48" stroke={W} />
    <path d="M164 148h72l9 17c4 8 0 13 -10 13h-70c-10 0 -14 -5 -10 -13Z" fill={g} fillOpacity="0.4" stroke="none" />
    <circle cx="190" cy="132" r="4" stroke={g} />
    <circle cx="210" cy="118" r="3" stroke={g} />
    <circle cx="200" cy="100" r="2.5" stroke={g} />
    <rect x="278" y="78" width="46" height="42" rx="6" stroke={Wd} />
    <path d="M295 90l12 8 -12 8Z" fill={Wd} stroke="none" />
  </>
);

const pageGrid = (g) => (
  <>
    <rect x="88" y="55" width="64" height="78" rx="8" stroke={g} strokeWidth="2" fill={g} fillOpacity="0.12" />
    <path d="M98 70h44M98 82h44M98 94h30M98 106h38" stroke={Wd} />
    {[[185, 55], [255, 55], [185, 122], [255, 122]].map(([x, y], i) => (
      <g key={i}>
        <rect x={x} y={y} width="56" height="56" rx="8" stroke={Wd} />
        <path d={`M${x + 9} ${y + 15}h38M${x + 9} ${y + 27}h38M${x + 9} ${y + 39}h24`} stroke={Wd} />
        <path d={`M156 ${y === 55 ? 80 : 138}h24`} stroke={Wd} strokeDasharray="3 4" />
      </g>
    ))}
    <circle cx="302" cy="152" r="15" stroke={W} strokeWidth="2" />
    <path d="M313 163l13 13" stroke={W} strokeWidth="2.5" />
  </>
);

const pushBell = (g) => (
  <>
    <path d="M160 68c-20 0 -27 16 -27 32 0 24 -11 30 -11 37h76c0 -7 -11 -13 -11 -37 0 -16 -7 -32 -27 -32Z" stroke={W} />
    <path d="M152 145c1 6 4 9 8 9s7 -3 8 -9" stroke={W} />
    <path d="M160 68v-8" stroke={W} />
    <rect x="232" y="72" width="84" height="28" rx="9" stroke={g} strokeWidth="2" fill={g} fillOpacity="0.12" />
    <circle cx="246" cy="86" r="4" fill={g} stroke="none" />
    <path d="M258 82h48M258 92h32" stroke={Wd} />
    <rect x="232" y="116" width="84" height="28" rx="9" stroke={Wd} />
    <circle cx="246" cy="130" r="4" fill={Wd} stroke="none" />
    <path d="M258 126h48M258 136h32" stroke={Wd} />
  </>
);

const cpiRoas = (g) => (
  <>
    <path d="M118 88v40" stroke={W} strokeWidth="2.5" />
    <path d="M106 118l12 13 12 -13" stroke={W} strokeWidth="2.5" />
    <path d="M96 142h44" stroke={W} strokeWidth="2.5" />
    <path d="M158 112c40 0 42 -22 82 -22" stroke={g} strokeWidth="3" strokeDasharray="1 8" />
    <path d="M266 60v96h64" stroke={Wd} />
    <path d="M272 140l20 -22 12 8 22 -34" stroke={g} strokeWidth="2.5" />
    <text x="322" y="72" textAnchor="middle" fontSize="13" fontWeight="700" fill={SPARK} stroke="none">$</text>
  </>
);

const scaleSteps = (g) => (
  <>
    <path d="M80 178H330" stroke={Wd} />
    {[42, 62, 82, 102, 122].map((h, i) => (
      <rect key={i} x={92 + i * 44} y={178 - h} width="28" height={h} rx="4" fill={g} fillOpacity="0.42" stroke="none" />
    ))}
    <path d="M85 66H302" stroke={AQUA} strokeWidth="2" strokeDasharray="6 5" />
    <circle cx="318" cy="66" r="10" stroke={AQUA} strokeWidth="2" />
    <path d="M313 66l4 4 7 -8" stroke={AQUA} strokeWidth="2" />
  </>
);

const dashboard = (g) => (
  <>
    <rect x="85" y="50" width="230" height="130" rx="12" stroke={W} />
    <path d="M85 72h230" stroke={Wd} />
    {[99, 111, 123].map((x) => (
      <circle key={x} cx={x} cy="61" r="2.5" fill={W} fillOpacity="0.5" stroke="none" />
    ))}
    <rect x="97" y="82" width="104" height="42" rx="6" stroke={Wd} />
    <path d="M104 114l12 -11 12 6 12 -14 12 5 12 -9 12 5 12 -8" stroke={g} strokeWidth="2" />
    <circle cx="248" cy="103" r="16" stroke="rgba(255,255,255,0.18)" strokeWidth="6" />
    <path d="M248 87a16 16 0 0 1 15 21" stroke={g} strokeWidth="6" />
    <rect x="97" y="132" width="104" height="40" rx="6" stroke={Wd} />
    {[14, 22, 18, 28, 24].map((h, i) => (
      <rect key={i} x={106 + i * 18} y={166 - h} width="10" height={h} rx="2" fill={g} fillOpacity="0.5" stroke="none" />
    ))}
    <path d="M216 140h88M216 152h64M216 164h76" stroke={Wd} />
  </>
);

const cohortCurves = (g) => (
  <>
    <path d="M80 55V172H330" stroke={Wd} />
    <path d="M86 68c56 82 138 100 238 102" stroke={Wd} strokeWidth="2" />
    <path d="M86 68c58 66 130 82 238 84" stroke="rgba(255,255,255,0.55)" strokeWidth="2" />
    <path d="M86 68c62 50 130 62 238 64" stroke={g} strokeWidth="3" />
    <path d="M304 162v-38" stroke={SPARK} strokeWidth="2" />
    <path d="M297 132l7 -10 7 10" stroke={SPARK} strokeWidth="2" />
  </>
);

const channels = (g) => (
  <>
    {[
      [112, 62, 15, false], [288, 62, 15, false],
      [92, 142, 12, true], [308, 142, 12, true],
      [148, 186, 10, true], [252, 186, 10, true],
    ].map(([x, y, r, isNew], i) => (
      <g key={i}>
        <path d={`M200 115 ${x} ${y}`} stroke={isNew ? g : Wd} strokeWidth={isNew ? 2 : 1.6} />
        <circle cx={x} cy={y} r={r} stroke={isNew ? g : Wd} strokeWidth={isNew ? 2 : 1.6} fill={isNew ? g : "none"} fillOpacity={isNew ? 0.12 : 0} />
      </g>
    ))}
    <circle cx="200" cy="115" r="21" stroke={W} fill="rgba(255,255,255,0.08)" />
  </>
);

const flywheel = (g) => (
  <>
    <path d="M200 60a55 55 0 0 1 53 70" stroke={g} strokeWidth="3" />
    <path d="M245 118l8 14 9 -13" stroke={g} strokeWidth="3" />
    <path d="M200 170a55 55 0 0 1 -53 -70" stroke={g} strokeWidth="3" />
    <path d="M155 112l-8 -14 -9 13" stroke={g} strokeWidth="3" />
    <circle cx="200" cy="115" r="19" stroke={W} />
    <text x="200" y="121" textAnchor="middle" fontSize="15" fontWeight="700" fill={W} stroke="none">$</text>
    <circle cx="200" cy="60" r="3.5" fill={SPARK} stroke="none" />
  </>
);

/* ------------------------------- slug mapping ------------------------------ */

const SCENES = {
  "lower-cost-per-install-without-killing-volume": chartDown,
  "cac-payback-period-metric-that-matters": paybackClock,
  "founders-guide-to-aso": storePhone,
  "meta-ads-for-saas-full-funnel-playbook": funnel,
  "why-your-roas-is-lying-to-you": inflatedBar,
  "performance-creative-ship-winning-ads-weekly": adGrid,
  "beginners-guide-to-apple-search-ads": searchResult,
  "plg-vs-paid-acquisition": fork,
  "build-a-user-acquisition-funnel-that-compounds": loopFunnel,
  "retention-is-the-new-acquisition": retentionCurve,
  "ugc-ads-that-convert": (g) => ugcPhone(g, false),
  "calculate-ltv-for-subscription-app": calculator,
  "tiktok-ads-for-app-installs": (g) => ugcPhone(g, true),
  "server-side-tracking-death-of-the-pixel": serverRelay,
  "incrementality-testing-explained": abSplit,
  "90-day-growth-plan-for-startups": calendarSteps,
  "google-ads-for-mobile-apps": assetMachine,
  "app-store-listings-that-rank-and-convert": storePhone,
  "onboarding-optimization-activate-users": stepsSpark,
  "marketing-mix-modeling-for-startups": mixModel,
  "how-much-to-spend-on-user-acquisition": gauge,
  "creative-testing-framework": testFlask,
  "seo-for-saas-programmatic-strategy": pageGrid,
  "push-notifications-that-dont-get-uninstalled": pushBell,
  "from-cpi-to-roas-aligning-acquisition-with-revenue": cpiRoas,
  "scaling-paid-spend-without-tanking-efficiency": scaleSteps,
  "metrics-dashboard-every-growth-team-should-build": dashboard,
  "cohort-analysis-101-for-app-marketers": cohortCurves,
  "how-to-diversify-beyond-meta-and-google": channels,
  "profitable-acquisition-engine-before-series-b": flywheel,
};

const CATEGORY_FALLBACK = {
  "Paid Media": funnel,
  ASO: storePhone,
  SEO: pageGrid,
  Creative: adGrid,
  Retention: retentionCurve,
  Analytics: dashboard,
  Strategy: flywheel,
};

// Names usable from article `fig` blocks in lib/blog.js — lets any post embed
// any scene as an inline figure, independent of its own cover art.
const NAMED = {
  "chart-down": chartDown,
  "payback-clock": paybackClock,
  "store-phone": storePhone,
  funnel,
  "inflated-bar": inflatedBar,
  "ad-grid": adGrid,
  "search-result": searchResult,
  fork,
  "loop-funnel": loopFunnel,
  "retention-curve": retentionCurve,
  "ugc-phone": (g) => ugcPhone(g, false),
  "video-phone": (g) => ugcPhone(g, true),
  calculator,
  "server-relay": serverRelay,
  "ab-split": abSplit,
  "calendar-steps": calendarSteps,
  "asset-machine": assetMachine,
  "steps-spark": stepsSpark,
  "mix-model": mixModel,
  gauge,
  "test-flask": testFlask,
  "page-grid": pageGrid,
  "push-bell": pushBell,
  "cpi-roas": cpiRoas,
  "scale-steps": scaleSteps,
  dashboard,
  "cohort-curves": cohortCurves,
  channels,
  flywheel,
};

/* -------------------------------- component -------------------------------- */

export default function BlogArt({ post, scene, uid = "a", className = "" }) {
  const accent = categoryAccent[post.category] || { from: "#8B5CF6", to: "#D946EF" };
  const sceneFn =
    (scene && NAMED[scene]) || SCENES[post.slug] || CATEGORY_FALLBACK[post.category] || flywheel;
  const id = `ba-${post.slug}-${uid}`;
  const g = `url(#${id}-g)`;

  return (
    <svg
      viewBox="0 0 400 225"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="400" y2="225" gradientUnits="userSpaceOnUse">
          <stop stopColor={accent.from} />
          <stop offset="1" stopColor={accent.to} />
        </linearGradient>
        <radialGradient id={`${id}-r1`} cx="0.5" cy="0.5" r="0.5">
          <stop stopColor={accent.from} stopOpacity="0.5" />
          <stop offset="1" stopColor={accent.from} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${id}-r2`} cx="0.5" cy="0.5" r="0.5">
          <stop stopColor={accent.to} stopOpacity="0.4" />
          <stop offset="1" stopColor={accent.to} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* backdrop */}
      <rect width="400" height="225" fill="#1A0F3E" />
      <circle cx="330" cy="30" r="150" fill={`url(#${id}-r1)`} />
      <circle cx="60" cy="205" r="130" fill={`url(#${id}-r2)`} />
      {[40, 80, 120, 160, 200, 240, 280, 320, 360].map((x) => (
        <path key={`v${x}`} d={`M${x} 0V225`} stroke="rgba(255,255,255,0.045)" />
      ))}
      {[45, 90, 135, 180].map((y) => (
        <path key={`h${y}`} d={`M0 ${y}H400`} stroke="rgba(255,255,255,0.045)" />
      ))}

      {/* scene */}
      <g fill="none" stroke={W} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {sceneFn(g)}
      </g>
    </svg>
  );
}
