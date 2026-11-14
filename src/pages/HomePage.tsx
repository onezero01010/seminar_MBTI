import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { NunIllustration } from "../components/NunIllustration";
import { results } from "../data/results";
import { useQuiz } from "../state/useQuiz";

const tilts = ["-rotate-6", "rotate-3", "-rotate-2", "rotate-6"];

export function HomePage() {
  const { reset } = useQuiz();

  return (
    <section className="flex flex-1 flex-col justify-center gap-6 sm:gap-8">
      <div className="space-y-4 sm:space-y-5">
        <p className="inline-flex w-fit -rotate-1 items-center gap-1.5 rounded-full border-2 border-ink bg-sunny px-3 py-1 text-xs font-bold sm:text-sm">
          ✝️ 살레시오 수녀님 세미나 · 동반 유형 테스트
        </p>
        <div className="space-y-3 sm:space-y-4">
          <h1 className="font-display text-[2.1rem] leading-[1.15] sm:text-6xl">
            수녀님,
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">담임 발령</span>
              <span className="absolute inset-x-0 bottom-1 z-0 h-3 rounded-full bg-berry/40 sm:h-4" />
            </span>{" "}
            나셨어요! 📢
          </h1>
          <p className="max-w-xl text-base leading-7 text-ink/75 sm:text-lg sm:leading-relaxed">
            새 학교, 새 교실, 서른 명의 아이들. 하루하루 터지는 사건사고 속에서
            수녀님은 아이들 곁에 어떻게 머무실까요? 12가지 교실 이야기로 나의
            동반 유형을 찾아봐요.
          </p>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-xs grid-cols-4 gap-2 sm:max-w-sm sm:gap-3">
        {results.map((result, index) => (
          <div
            key={result.code}
            className={`${tilts[index % 4]} animate-bob`}
            style={{ animationDelay: `${(index % 4) * 0.18 + Math.floor(index / 4) * 0.1}s` }}
          >
            <NunIllustration code={result.code} className="w-full" />
          </div>
        ))}
      </div>

      <Link
        to="/situation"
        onClick={reset}
        className="btn-pop inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-berry px-5 py-3 font-display text-xl text-white sm:min-h-14 sm:text-2xl"
      >
        발령장 받으러 가기
        <ChevronRight aria-hidden="true" size={22} />
      </Link>
    </section>
  );
}
