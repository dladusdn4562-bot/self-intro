// 자기소개 내용 (가상 인물) — 이 파일만 고치면 페이지 내용이 바뀝니다.
const profile = {
  name: '김하루',
  greeting: '안녕하세요, 김하루예요 👋',
  tagline: '흩어진 것을 차곡차곡 정리하고, 그 위에 귀여움 한 스푼을 얹는 주니어 웹 디자이너입니다.',
  email: 'hello@example.com',

  quickFacts: [
    { emoji: '☕', text: '하루는 바닐라 라테 한 잔과 그날의 체크리스트로 시작해요.' },
    { emoji: '🗂️', text: '바탕화면 폴더에 번호를 붙여 두지 않으면 잠이 안 와요.' },
    { emoji: '🐹', text: '햄스터 ‘콩떡’과 함께 살고 있어요. 제 최고의 동료예요.' },
    { emoji: '📸', text: '산책하다 만난 동네 고양이 사진이 앨범에 800장쯤 있어요.' },
    { emoji: '💌', text: '고마운 사람에게는 꼭 손편지를 써요. 스티커도 같이요.' },
  ],

  now: [
    { label: '요즘 하는 것', emoji: '🛠️', text: 'React로 첫 개인 홈페이지 만들기', tone: 'butter', wide: true },
    { label: '읽는 것', emoji: '📚', text: '『디자인의 디자인』', tone: 'mint' },
    { label: '듣는 것', emoji: '🎧', text: '비 오는 날의 재즈 피아노', tone: 'paper' },
    { label: '배우는 것', emoji: '🌱', text: '디자인 시스템과 접근성', tone: 'paper' },
    { label: '있는 곳', emoji: '📍', text: '서울 망원동, 햇살 드는 창가 작업실', tone: 'mint', wide: true },
  ],

  about: [
    '시각디자인을 공부하고 작은 브랜드 스튜디오에서 2년간 웹 화면을 만들어 왔어요. 색과 간격이 딱 맞아떨어지는 순간을 가장 좋아합니다.',
    '정리된 문서와 일정표가 있어야 마음이 놓이는 꼼꼼한 성격이지만, 회의실에서는 먼저 농담을 건네는 편이에요. 함께 일하는 사람이 편안해야 좋은 결과물이 나온다고 믿어요.',
  ],
  skills: ['UI 디자인', 'Figma', 'React', '디자인 시스템', '일정 관리', '문서 정리', '일러스트'],

  links: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'Instagram', href: 'https://instagram.com/' },
  ],
}

export default profile
