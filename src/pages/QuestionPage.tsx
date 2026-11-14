import { ArrowLeft, ChevronRight } from "lucide-react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { questions } from "../data/questions";
import { TOTAL_QUESTIONS } from "../lib/scoring";
import { useQuiz } from "../state/useQuiz";
import type { AnswerChoice } from "../types";

const phaseColors = {
  1: "bg-sky",
  2: "bg-sunny",
  3: "bg-berry text-white",
} as const;

export function QuestionPage() {
  const navigate = useNavigate();
  const { answers, answerQuestion } = useQuiz();
  const { questionNumber } = useParams();
  const currentIndex = Number(questionNumber) - 1;
  const question = questions[currentIndex];

  if (!question || Number.isNaN(currentIndex)) {
    return <Navigate to="/" replace />;
  }

  const progress = ((currentIndex + 1) / TOTAL_QUESTIONS) * 100;
  const selected = answers[question.id];
  const isLastQuestion = question.id === TOTAL_QUESTIONS;

  const selectAnswer = (choice: AnswerChoice) => {
    answerQuestion(question.id, choice);

    if (isLastQuestion) {
      return;
    }

    window.setTimeout(() => {
      navigate(`/q/${question.id + 1}`);
    }, 220);
  };

  return (
    <section className="flex flex-1 flex-col gap-4 sm:gap-8 sm:py-3">
      <div className="space-y-2 sm:space-y-3">
        <div className="flex items-center gap-3">
          <div className="h-4 flex-1 overflow-hidden rounded-full border-2 border-ink bg-white">
            <div
              className="h-full rounded-full bg-mint transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="font-display text-base">
            {question.id}
            <span className="text-ink/40"> / {TOTAL_QUESTIONS}</span>
          </span>
        </div>
        <p
          className={`inline-flex w-fit rounded-full border-2 border-ink px-3 py-0.5 text-xs font-bold sm:text-sm ${phaseColors[question.phase]}`}
        >
          {question.phaseTitle}
        </p>
      </div>

      <div key={question.id} className="animate-pop-in space-y-4 sm:space-y-6">
        <div className="flex min-h-28 items-start gap-3 sm:min-h-36">
          <span
            className="mt-1 flex h-12 w-12 shrink-0 animate-wiggle items-center justify-center rounded-2xl border-2 border-ink bg-white text-2xl shadow-pop-sm sm:h-16 sm:w-16 sm:text-4xl"
            aria-hidden="true"
          >
            {question.sticker}
          </span>
          <h1 className="text-lg font-extrabold leading-7 sm:text-2xl sm:leading-snug">
            {question.prompt}
          </h1>
        </div>

        <div className="grid gap-3 sm:gap-4">
          {[question.optionA, question.optionB].map((option) => {
            const isSelected = selected === option.label;
            return (
              <button
                key={option.label}
                type="button"
                onClick={() => selectAnswer(option.label)}
                className={`btn-pop flex min-h-24 items-center gap-3 rounded-2xl p-4 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-sky/50 sm:min-h-32 sm:gap-4 sm:p-5 ${
                  isSelected ? "bg-berry text-white" : "bg-white hover:bg-sunny/25"
                }`}
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-ink font-display text-lg ${
                    isSelected ? "bg-white text-berry" : option.label === "A" ? "bg-sky/60" : "bg-sunny"
                  }`}
                >
                  {option.label}
                </span>
                <span className="block text-[15px] font-bold leading-6 sm:text-lg sm:leading-relaxed">
                  {option.text}
                </span>
              </button>
            );
          })}
        </div>

        {isLastQuestion && selected ? (
          <Link
            to="/loading"
            className="btn-pop inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-mint px-5 py-3 font-display text-xl text-ink sm:min-h-14"
          >
            나의 동반 유형 보기 ✨
            <ChevronRight aria-hidden="true" size={20} />
          </Link>
        ) : null}
      </div>

      <div className="mt-auto">
        <Link
          to={question.id > 1 ? `/q/${question.id - 1}` : "/situation"}
          className="inline-flex min-h-10 items-center gap-1.5 text-sm font-bold text-ink/60 hover:text-berry"
        >
          <ArrowLeft aria-hidden="true" size={18} />
          {question.id > 1 ? "이전 질문" : "발령장으로 돌아가기"}
        </Link>
      </div>
    </section>
  );
}
