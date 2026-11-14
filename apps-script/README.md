# 결과 아카이브 (Google Sheets) 설치

1. 구글 드라이브에서 새 스프레드시트를 만든다.
2. 메뉴 **확장 프로그램 → Apps Script** → 기본 코드를 지우고 `Code.gs` 내용을 붙여넣고 저장.
3. 오른쪽 위 **배포 → 새 배포** → 유형 **웹 앱**
   - 실행 사용자: **나**
   - 액세스 권한: **모든 사용자**
   → 배포 후 권한 승인, **웹 앱 URL** (`https://script.google.com/macros/s/.../exec`) 복사.
4. GitHub 저장소 **Settings → Secrets and variables → Actions → Variables** 탭에서
   `ARCHIVE_URL` 변수를 만들고 위 URL을 넣는다.
5. Actions에서 "Deploy to GitHub Pages"를 다시 실행 (또는 main에 푸시).

로컬 테스트: 프로젝트 루트에 `.env.local` 파일을 만들고 `VITE_ARCHIVE_URL=<URL>` 입력 후 `npm run dev`.

## 메모
- 시트 `results` 탭에 한 줄씩 쌓인다 (첫 요청 때 헤더 자동 생성).
- 회차 구분: 링크를 `https://onezero01010.github.io/seminar_MBTI/?s=2026-11` 처럼 공유하면 `session` 열에 기록된다.
- `Code.gs`를 수정했다면 **배포 → 배포 관리 → 수정 → 새 버전**으로 다시 배포해야 반영된다 (URL 유지).
- 이름·이메일 등 개인정보는 수집하지 않는다. `anonId`는 같은 기기에서 여러 번 응답했는지 구분하는 랜덤 값.
