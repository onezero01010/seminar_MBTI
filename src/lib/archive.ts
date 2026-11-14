import { questions } from "../data/questions";
import type { Answers, TypeCode } from "../types";
import { countPoles } from "./scoring";

const ARCHIVE_URL = import.meta.env.VITE_ARCHIVE_URL;
const SESSION_KEY = "archive-session";
const ANON_ID_KEY = "archive-anon-id";

// 첫 진입 URL의 ?s=회차 값은 페이지 이동 후 사라지므로 앱 시작 시점에 잡아 둔다.
const initialSession = (() => {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get("s");
    if (fromUrl) {
      sessionStorage.setItem(SESSION_KEY, fromUrl);
      return fromUrl;
    }
    return sessionStorage.getItem(SESSION_KEY) ?? "";
  } catch {
    return "";
  }
})();

function getAnonId() {
  try {
    let id = localStorage.getItem(ANON_ID_KEY);
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem(ANON_ID_KEY, id);
    }
    return id;
  } catch {
    return "";
  }
}

/** 결과를 구글 시트로 전송한다. 실패해도 사용자 흐름에는 영향을 주지 않는다. */
export function archiveResult(answers: Answers, type: TypeCode) {
  if (!ARCHIVE_URL) return;

  const payload = {
    session: initialSession.slice(0, 40),
    anonId: getAnonId(),
    type,
    counts: countPoles(answers),
    answers: questions.map((question) => answers[question.id] ?? ""),
  };

  // text/plain + no-cors: Apps Script는 CORS preflight를 처리하지 못하므로 단순 요청으로 보낸다.
  fetch(ARCHIVE_URL, {
    method: "POST",
    mode: "no-cors",
    keepalive: true,
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
  }).catch(() => {});
}
