// 이 파일의 함수들은 입력값 단위가 모두 '만원'이라고 가정한다.
// (db.json 과 타입의 amount 가 만원 단위이기 때문. 1만원 = 10,000원, 1억원 = 10,000만원)

// 매장 단위 금액 표시 (예: 3200 -> '3,200만원')
// toLocaleString('ko-KR') 이 천 단위 구분 쉼표를 자동으로 넣어 준다.
export function formatManwon(manwon) {
  return `${manwon.toLocaleString('ko-KR')}만원`
}

// 큰 합계를 억원으로 환산해 표시 (예: 124000 -> '12.4억원')
// 1억원 = 10,000만원 이므로, 만원 값을 10000 으로 나누면 억원 단위가 된다.
// maximumFractionDigits: 1 -> 소수점 첫째 자리까지만 표기 (12.4억원 처럼).
export function formatEok(manwon) {
  const eok = manwon / 10000
  return `${eok.toLocaleString('ko-KR', { maximumFractionDigits: 1 })}억원`
}

// 차트 축 라벨처럼 아주 짧게 표기.
// 입력이 10,000만원(= 1억) 이상이면 '억' 단위로 반올림해 축약하고(예: 124000 -> '12억'),
// 그 미만이면 쉼표만 넣은 만원 숫자를 단위 글자 없이 그대로 보여 준다.
export function compactWon(manwon) {
  if (manwon >= 10000) return `${Math.round(manwon / 10000)}억`
  return manwon.toLocaleString('ko-KR')
}
