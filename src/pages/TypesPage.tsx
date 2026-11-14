import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { NunIllustration } from "../components/NunIllustration";
import { nunConfigs } from "../components/nunConfigs";
import { results } from "../data/results";

export function TypesPage() {
  return (
    <section className="flex flex-1 flex-col gap-4 py-1 sm:gap-6 sm:py-3">
      <div className="space-y-2 sm:space-y-3">
        <Link
          to="/"
          className="inline-flex min-h-10 items-center gap-2 text-sm font-bold text-ink/60 hover:text-berry"
        >
          <ArrowLeft aria-hidden="true" size={18} />
          처음으로
        </Link>
        <h1 className="font-display text-3xl sm:text-4xl">16가지 담임 수녀님 동반 유형</h1>
        <p className="text-sm text-ink/65">어떤 수녀님이든, 아이들에게는 꼭 필요한 선물이에요. 🎁</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
        {results.map((result) => (
          <article
            key={result.code}
            className="flex items-center gap-3 rounded-2xl border-[2.5px] border-ink bg-white p-3 shadow-pop-sm sm:p-4"
          >
            <NunIllustration code={result.code} className="w-20 shrink-0" />
            <div className="min-w-0">
              <p className="text-xs font-bold" style={{ color: nunConfigs[result.code].accent }}>
                {result.emoji} {result.topKeyword}
              </p>
              <h2 className="font-display text-xl">{result.name}</h2>
              <p className="mt-0.5 text-sm leading-5 text-ink/70">{result.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
