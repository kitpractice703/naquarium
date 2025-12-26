import React, { useState, useEffect } from "react";
import "./App.css";
import {
  ScreenIntroSvg,
  ScreenTicketSvg,
  ScreenTearingSvg,
  ScreenMainSvg,
} from "./SvgComponents"; // 위에서 만든 컴포넌트들

type Stage = "splash" | "ticket" | "tearing" | "main";

const App: React.FC = () => {
  const [stage, setStage] = useState<Stage>("splash");

  // 1단계(스플래시) -> 2단계(티켓) 자동 전환
  useEffect(() => {
    if (stage === "splash") {
      const timer = setTimeout(() => {
        setStage("ticket");
      }, 10000); // 2초 후 전환
      return () => clearTimeout(timer);
    }
  }, [stage]);

  // 3단계(찢어짐) -> 4단계(메인) 자동 전환
  useEffect(() => {
    if (stage === "tearing") {
      // 0.8초 동안 찢어진 장면(3번 SVG)을 보여주고 메인으로 전환
      const timer = setTimeout(() => {
        setStage("main");
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  // 화면 클릭 핸들러
  const handleScreenClick = () => {
    if (stage === "splash") {
      setStage("ticket");
    } else if (stage === "ticket") {
      setStage("tearing"); // 티켓 클릭 시 찢어지는 단계로
    }
  };

  // "이전 페이지" 버튼 핸들러 (메인 -> 티켓)
  const handleBackClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 배경 클릭 이벤트 전파 방지
    setStage("ticket");
  };

  return (
    <div className="app-container" onClick={handleScreenClick}>
      {/* 1단계: Intro */}
      {stage === "splash" && (
        <div className="screen fade-in">
          <ScreenIntroSvg />
        </div>
      )}

      {/* 2단계: Ticket (클릭 가능) */}
      {stage === "ticket" && (
        <div className="screen fade-in clickable">
          <ScreenTicketSvg />
          {/* 클릭 유도 힌트 (선택 사항) */}
          <div className="click-hint-text">Ticket을 클릭하세요</div>
        </div>
      )}

      {/* 3단계: Tearing (찢어진 장면) */}
      {stage === "tearing" && (
        <div className="screen tear-animation">
          <ScreenTearingSvg />
        </div>
      )}

      {/* 4단계: Main */}
      {stage === "main" && (
        <div className="screen fade-in-slow">
          <ScreenMainSvg />

          {/* "이전 페이지" 투명 버튼 영역 */}
          {/* 디자인상 좌측 하단 "< 이전 페이지" 텍스트 위치에 맞게 배치 */}
          <button className="back-button-area" onClick={handleBackClick}>
            {/* 실제 버튼은 투명하게 처리하여 디자인을 해치지 않음 */}
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
