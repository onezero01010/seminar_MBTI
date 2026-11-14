import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { NunIllustration } from "../components/NunIllustration";

export function SituationPage() {
  return (
    <section className="flex flex-1 flex-col justify-center gap-6 py-1 sm:gap-8 sm:py-3">
      <div className="text-center">
        <p className="text-sm font-bold text-berry">두근두근, 새 학기가 시작됩니다</p>
        <h1 className="mt-2 font-display text-3xl leading-tight sm:text-5xl">
          수녀님 앞으로
          <br />
          발령장이 도착했어요 ✉️
        </h1>
      </div>

      <div className="relative mx-auto w-full max-w-md animate-pop-in pt-10">
        <div className="absolute -top-2 left-1/2 z-10 w-24 -translate-x-1/2 animate-bob sm:w-28">
          <NunIllustration code="WELCOME" className="w-full drop-shadow-[3px_3px_0_#2b2d42]" />
        </div>
        <div className="relative rounded-3xl border-[2.5px] border-ink bg-white px-5 pb-6 pt-16 shadow-pop sm:px-8">
          <div className="rounded-2xl border-2 border-dashed border-ink/25 p-4 text-center sm:p-5">
            <p className="font-display text-2xl tracking-widest text-ink sm:text-3xl">발 령 장</p>
            <dl className="mt-4 space-y-2 text-left text-sm sm:text-base">
              <div className="flex gap-3">
                <dt className="w-14 shrink-0 font-bold text-ink/50">성 명</dt>
                <dd className="font-bold">사랑하는 수녀님</dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-14 shrink-0 font-bold text-ink/50">발령지</dt>
                <dd className="font-bold">살레시오 행복학교 2학년 3반</dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-14 shrink-0 font-bold text-ink/50">직 책</dt>
                <dd className="font-bold">
                  <span className="rounded bg-sunny/70 px-1">담임 선생님</span>
                </dd>
              </div>
            </dl>
            <p className="mt-4 text-sm leading-6 text-ink/70">
              위 수녀님을 한 학년 동안 2학년 3반 아이들의
              <br />
              담임으로 임명합니다.
            </p>
          </div>
          <div className="absolute -bottom-4 -right-3 flex h-20 w-20 rotate-12 items-center justify-center rounded-full border-[3px] border-berry bg-white/90 font-display text-lg leading-tight text-berry sm:h-24 sm:w-24 sm:text-xl">
            환영
            <br />
            합니다
          </div>
        </div>
      </div>

      <p className="text-center text-sm font-semibold leading-6 text-ink/65">
        정답은 없어요. 수녀님 마음이 먼저 가는 쪽을 골라 주세요. 🙌
      </p>

      <Link
        to="/q/1"
        className="btn-pop inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-mint px-5 py-3 font-display text-xl text-ink sm:min-h-14 sm:text-2xl"
      >
        교실 문 열기
        <ChevronRight aria-hidden="true" size={22} />
      </Link>
    </section>
  );
}
