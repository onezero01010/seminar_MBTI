# 담임 수녀님 동반 유형 테스트

살레시오 수녀님 세미나용 심리테스트입니다. 수녀님이 한 학급의 담임으로 발령받아 겪는 12가지 교실 속 상황에 답하면, 16가지 동반 유형 중 하나가 나옵니다. (KSYD_MBTI와 같은 포맷)

- `src/data/questions.ts`: 질문 12개 (3단계 × 4문항, 축별 3문항 다수결)
- `src/data/results.ts`: 16가지 동반 유형 결과
- `src/components/nunConfigs.ts`: 유형별 수녀님 일러스트 설정 (색, 표정, 소품, 장식)

```bash
npm install
npm run dev     # 로컬 실행
npm test        # 채점 테스트
npm run build   # 배포용 빌드 (main 푸시 시 GitHub Pages /seminar_MBTI/ 로 자동 배포)
```
