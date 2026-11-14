import { toPng } from "html-to-image";
import { Download, RotateCcw, Share2 } from "lucide-react";
import { useRef } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { NunIllustration } from "../components/NunIllustration";
import { nunConfigs } from "../components/nunConfigs";
import { getPartnerCode, resultMap } from "../data/results";
import { getResultSlug, getTypeFromResultSlug } from "../lib/resultSlugs";
import { isComplete } from "../lib/scoring";
import { useQuiz } from "../state/useQuiz";
import type { TypeCode } from "../types";

export function ResultPage() {
  const cardRef = useRef<HTMLDivElement>(null);
  const { typeCode: resultParam } = useParams();
  const { answers, reset } = useQuiz();
  const resolvedType = resultParam
    ? getTypeFromResultSlug(resultParam) ?? (resultParam as TypeCode)
    : undefined;
  const shouldHideLegacyCode =
    resolvedType && resultParam === resolvedType ? getResultSlug(resolvedType) : null;
  const result = resolvedType ? resultMap[resolvedType] : undefined;

  if (!result) {
    return <Navigate to="/" replace />;
  }

  if (shouldHideLegacyCode) {
    return <Navigate to={`/result/${shouldHideLegacyCode}`} replace />;
  }

  if (!isComplete(answers)) {
    return <Navigate to="/" replace />;
  }

  const theme = nunConfigs[result.code];
  const partner = resultMap[getPartnerCode(result.code)];

  const saveImage = async () => {
    if (!cardRef.current) {
      return;
    }
    const options = { pixelRatio: 2, backgroundColor: "#fff8ec" };
    let dataUrl: string;
    try {
      dataUrl = await toPng(cardRef.current, options);
    } catch {
      // Cross-origin web font CSS can block embedding; fall back to system fonts.
      dataUrl = await toPng(cardRef.current, { ...options, skipFonts: true });
    }
    const link = document.createElement("a");
    link.download = `sister-companion-${getResultSlug(result.code)}.png`;
    link.href = dataUrl;
    link.click();
  };

  const shareResult = async () => {
    const shareUrl = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: `나는 ${result.name}`,
          text: result.summary,
          url: shareUrl,
        });
      } catch {
        // user cancelled share sheet
      }
      return;
    }
    await navigator.clipboard.writeText(shareUrl);
    window.alert("결과 링크를 복사했어요.");
  };

  return (
    <section className="flex flex-1 flex-col gap-5 py-1 sm:py-3">
      <div ref={cardRef} className="rounded-3xl bg-paper p-1.5">
        <div className="overflow-hidden rounded-3xl border-[2.5px] border-ink bg-white shadow-pop">
          <div
            className="relative flex flex-col items-center px-5 pb-5 pt-6 text-center"
            style={{ backgroundColor: theme.bg }}
          >
            <p className="rounded-full border-2 border-ink bg-white px-3 py-0.5 text-xs font-bold">
              우리 반 담임 수녀님의 동반 유형은
            </p>
            <div className="mt-4 w-44 animate-pop-in sm:w-52">
              <NunIllustration
                code={result.code}
                title={`${result.name} 일러스트`}
                className="w-full drop-shadow-[4px_4px_0_#2b2d42]"
              />
            </div>
            <p
              className="mt-4 rounded-full px-3 py-0.5 text-sm font-bold text-white"
              style={{ backgroundColor: theme.accent }}
            >
              {result.emoji} {result.topKeyword}
            </p>
            <h1 className="mt-2 font-display text-3xl sm:text-4xl">{result.name}</h1>
            <p className="mt-2 text-base font-bold leading-7 sm:text-lg">{result.summary}</p>
          </div>

          <div className="space-y-5 p-5 sm:p-7">
            <div className="space-y-2 text-[15px] leading-7 text-ink/80 sm:text-base sm:leading-8">
              {result.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {result.interpretation.map((item, i) => (
                <div
                  key={item.title}
                  className="rounded-2xl border-2 border-ink/80 p-4"
                  style={{ backgroundColor: i === 3 ? "#fff8ec" : `${theme.bg}66` }}
                >
                  <p className="font-display text-lg" style={{ color: i === 3 ? "#2b2d42" : theme.accent }}>
                    {i === 3 ? "💡 " : ""}
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-ink/80">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="relative rounded-2xl border-2 border-ink bg-sunny/40 px-4 py-3 text-center">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border-2 border-ink bg-white px-2 text-xs font-bold">
                수녀님의 한마디
              </span>
              <p className="mt-1 font-display text-lg leading-7 sm:text-xl">“{result.oneLine}”</p>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border-2 border-dashed border-ink/30 p-3">
              <NunIllustration code={partner.code} className="w-14 shrink-0 sm:w-16" />
              <div>
                <p className="text-xs font-bold text-ink/55">서로 채워 주는 동반 짝꿍</p>
                <p className="font-display text-lg">{partner.name}</p>
                <p className="text-xs leading-5 text-ink/65">{partner.summary}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-ink/60 sm:text-sm">
        모바일에서는 저장한 이미지를 꾹 눌러 보관할 수 있어요.
      </p>

      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={saveImage}
          className="btn-pop inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-berry px-4 font-bold text-white"
        >
          <Download aria-hidden="true" size={18} />
          결과 저장
        </button>
        <button
          type="button"
          onClick={shareResult}
          className="btn-pop inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-white px-4 font-bold"
        >
          <Share2 aria-hidden="true" size={18} />
          공유하기
        </button>
        <Link
          to="/situation"
          onClick={reset}
          className="btn-pop inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-white px-4 font-bold"
        >
          <RotateCcw aria-hidden="true" size={18} />
          다시하기
        </Link>
        <Link
          to="/types"
          className="btn-pop inline-flex min-h-12 items-center justify-center rounded-2xl bg-sunny px-4 font-bold"
        >
          모든 유형 보기
        </Link>
      </div>
    </section>
  );
}
