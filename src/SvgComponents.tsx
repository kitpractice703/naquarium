// ✅ 올바른 예시
import React from "react";

// 1. 파일을 변수처럼 import 해옵니다. (경로는 실제 파일 위치에 맞게!)
import introImg from "./assets/intro.svg";
import ticketImg from "./assets/ticket.svg";
import tearingImg from "./assets/tearing.svg";
import mainImg from "./assets/main.svg";

export const ScreenIntroSvg = () => {
  // 2. src 안에 문자열 대신 변수를 넣습니다.
  return (
    <img src={introImg} alt="Intro" style={{ width: "100%", height: "100%" }} />
  );
};

export const ScreenTicketSvg = () => {
  return (
    <img
      src={ticketImg}
      alt="Ticket"
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export const ScreenTearingSvg = () => {
  return (
    <img
      src={tearingImg}
      alt="Tearing"
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export const ScreenMainSvg = () => {
  return (
    <img src={mainImg} alt="Main" style={{ width: "100%", height: "100%" }} />
  );
};
