// ===================== 콘텐츠 설정 (JSON) =====================
const CONTENT = {
  header: {
    productName: "Alumy Memo Holder",
    cta: "구매하기",
    href: "#price",
  },
  hero: {
    superTitle: "Alumy Memo Holder",
    title: (
      <>
        메탈의 감각.
        <br />
        공간의 질서.
      </>
    ),
    desc: (
      <>
        <strong className="font-semibold"><em>작게, 더 강하게. 어디서든 돋보이다. </em></strong>
        탁상 위에 정보가 설 자리를 만드는 가장 간결한 방법.<br />
        <span className="font-bold">'Alumy Memo Holder'</span>는 이름표부터 예약표, 가격표, 안내문구까지 어떤 메시지든 또렷하게 세워줍니다.
      </>
    ),
    heroImg: "Alumy Memo Holder-1.png",
  },
  keySpecs: {
    title: "가볍고 견고하게. 일상에 빛나는 디테일.",
    specs: [
      { icon: "🛡️", title: "강화 알루미늄", desc: "스크래치와 부식에 강한 외장 마감." },
      { icon: "🎨", title: "4가지 컬러", desc: "공간에 어울리는 세련된 색상." },
      { icon: "📐", title: "안정적 거치", desc: "미니멀한 삼각 구조로 흔들림 최소화." },
      { icon: "♻️", title: "지속가능성", desc: "리사이클링 반납 시 페이백 적용." },
    ],
  },
  features: [
    {
      theme: 'light',
      title: "미니멀리즘이 만든 존재감",
      desc: (
        <>
          <strong className="font-semibold"><em>상·하단 라운드 플랜지로 인서트를 깔끔하게 고정하고, 어느 각도에서 보아도 단정한 실루엣을</em></strong><br />
          유지합니다. 군더더기를 덜어낸 면과 선, 그리고 브러시드 텍스처가 어떤 공간에도 어울립니다.
        </>
      ),
      images: [
        { src: "Utilized_Products-1.png", alt: "제품 디테일 01", label: "Alumy Memo Holder" },
        { src: "Utilized_Products-2.png", alt: "제품 디테일 02", label: "Alumy Memo Holder" },
        { src: "Utilized_Products-3.png", alt: "제품 디테일 03", label: "Alumy Memo Holder" },
      ],
    },
    {
      theme: 'dark',
      title: "고급 컬러와 마감",
      desc: (
        <>
          정교하게 가공된 메탈 소재와 다양한 컬러 마감으로 어느 공간과도 조화롭습니다.
        </>
      ),
      images: [
        { src: "Silver.jpg", alt: "어두운 배경 컬러 샷 01", label: "Alumy Memo Holder" },
        { src: "Red.png", alt: "어두운 배경 컬러 샷 02", label: "Alumy Memo Holder" },
        { src: "Green.png", alt: "어두운 배경 컬러 샷 02", label: "Alumy Memo Holder" },
        { src: "Yellow.png", alt: "어두운 배경 컬러 샷 02", label: "Alumy Memo Holder" },

      ],
    },
  ],
  colors: {
    title: "당신의 공간을 빛낼 컬러",
    data: [
      { name: "Silver", hex: "#EAEAEA" },
      { name: "Red", hex: "#ff0844" },
      { name: "Green", hex: "#0fd850" },
      { name: "Yellow", hex: "#f9d423" },
    ],
    note: "실제 색상은 디스플레이/촬영 환경에 따라 다를 수 있습니다.",
  },
  size: {
    title: "한눈에 보는 치수",
    image: "blueprint.png",
    alt: "제품 치수 개요 이미지",
    specs: [
      { label: "권장 메모 크기", value: "75x50mm ~ 90x90mm" },
      { label: "재질", value: "프리미엄 알루미늄" },
    ],
    note: "표기 치수는 참고용입니다. 옵션에 따라 세부 사양이 달라질 수 있습니다.",
  },
  price: {
    title: "가격",
    headers: ["사이즈", "Silver", "Red", "Green", "Yellow", "묶음 배송 할인량"],
    rows: [
      { size: "75 x 50", prices: ["금액", "금액", "금액", "금액"], bundle: "160개" },
      { size: "80 x 60", prices: ["금액", "금액", "금액", "금액"], bundle: "120개" },
      { size: "90 x 60", prices: ["금액", "금액", "금액", "금액"], bundle: "100개" },
      { size: "90 x 70", prices: ["금액", "금액", "금액", "금액"], bundle: "90개" },
      { size: "90 x 90", prices: ["금액", "금액", "금액", "금액"], bundle: "80개" },
    ],
    note: "기본 배송비 3,000원이 부과됩니다. 묶음 배송 할인량 초과 시 추가 배송비가 발생할 수 있습니다.",
  },
  contact: {
    tel: "1234-5678",
    title: "궁금한 점이 있으신가요?",
    desc: "필요 수량, 색상, 사이즈를 알려주시면 확인 후 신속히 연락드리겠습니다.",
    cta: "구매/도매 문의하기",
  },
};

export default CONTENT;
