import React from "react";

// 공통 스타일: 화면 꽉 차게 설정
const fullScreenStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover", // 비율 유지하면서 꽉 채우기
  display: "block",
};

// 1번: 최초 화면
export const ScreenIntroSvg = () => (
  <img src="/svgs/intro.svg" alt="Intro Screen" style={fullScreenStyle} />
);

// 2번: 수족관/게임 화면
export const ScreenTicketSvg = () => (
  <img src="/svgs/ticket.svg" alt="Ticket Screen" style={fullScreenStyle} />
);

// 3번: 찢어진 티켓 화면 (파일명을 tearing.svg로 가정)
export const ScreenTearingSvg = () => (
  <img src="/svgs/tearing.svg" alt="Tearing Screen" style={fullScreenStyle} />
);

// 4번: 결과 화면 (파일명을 result.svg로 가정)
export const ScreenMainSvg = () => (
  <img src="/svgs/result.svg" alt="Result Screen" style={fullScreenStyle} />
);
