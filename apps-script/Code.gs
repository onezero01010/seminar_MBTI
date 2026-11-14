/**
 * 담임 수녀님 동반 유형 테스트 — 결과 아카이브용 Apps Script
 * 설치 방법은 apps-script/README.md 참고.
 */
const SHEET_NAME = "results";
const QUESTION_COUNT = 12;
const POLES = ["E", "I", "S", "N", "T", "F", "J", "P"];
const HEADERS = ["timestamp", "session", "anonId", "type"]
  .concat(POLES)
  .concat(Array.from({ length: QUESTION_COUNT }, (_, i) => "q" + (i + 1)));

function doPost(e) {
  let data;
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    return respond({ ok: false, error: "invalid json" });
  }

  // 최소한의 형식 검증 (잘못된/장난 데이터 차단)
  const validType = /^[EI][SN][TF][JP]$/.test(data.type);
  const validAnswers =
    Array.isArray(data.answers) &&
    data.answers.length === QUESTION_COUNT &&
    data.answers.every((a) => a === "A" || a === "B");
  if (!validType || !validAnswers) {
    return respond({ ok: false, error: "invalid payload" });
  }

  const counts = data.counts || {};
  const row = [
    new Date(),
    String(data.session || "").slice(0, 40),
    String(data.anonId || "").slice(0, 40),
    data.type,
  ]
    .concat(POLES.map((p) => Number(counts[p]) || 0))
    .concat(data.answers);

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = getSheet();
    sheet.appendRow(row);
  } finally {
    lock.releaseLock();
  }
  return respond({ ok: true });
}

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function respond(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
