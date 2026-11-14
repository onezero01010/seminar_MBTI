import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { NunIllustration } from "../components/NunIllustration";
import { archiveResult } from "../lib/archive";
import { getResultSlug } from "../lib/resultSlugs";
import { isComplete, scoreAnswers } from "../lib/scoring";
import { useQuiz } from "../state/useQuiz";

export function LoadingPage() {
  const navigate = useNavigate();
  const { answers } = useQuiz();

  useEffect(() => {
    if (!isComplete(answers)) {
      return;
    }
    const timer = window.setTimeout(() => {
      const type = scoreAnswers(answers);
      archiveResult(answers, type);
      navigate(`/result/${getResultSlug(type)}`, { replace: true });
    }, 1600);
    return () => window.clearTimeout(timer);
  }, [answers, navigate]);

  if (!isComplete(answers)) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-5 text-center sm:gap-6">
      <div className="w-32 animate-bob sm:w-40">
        <NunIllustration code="WELCOME" className="w-full drop-shadow-[3px_3px_0_#2b2d42]" />
      </div>
      <div className="flex gap-2" aria-hidden="true">
        {["bg-berry", "bg-sunny", "bg-mint"].map((color, i) => (
          <span
            key={color}
            className={`h-3 w-3 animate-bounce rounded-full border-2 border-ink ${color}`}
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
      <div className="space-y-2">
        <h1 className="font-display text-3xl sm:text-4xl">학급 일지 정리 중...</h1>
        <p className="text-sm text-ink/70 sm:text-base">
          한 해 동안의 선택을 모아 수녀님의 동반 유형을 찾고 있어요.
        </p>
      </div>
    </section>
  );
}
