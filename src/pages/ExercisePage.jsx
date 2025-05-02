import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../assets/css/ExercisePage.css';
import Button from "../components/Button";
import Header from "../components/Header";
import ExerciseCalendar from "../components/ExerciseCalendar";

const ExercisePage = ({ exercises }) => {
  const nav = useNavigate();

  // ✅ mock: 날짜별 기록된 운동 수
  const mockExerciseDates = ["2025-04-08", "2025-04-09", "2025-04-10", "2025-04-19"];
  const [recentExerciseLogs, setRecentExerciseLogs] = useState([]);
  const totalRounds = mockExerciseDates.length; // ✅ 누적 회차

  // ✅ 최근 운동 리스트 mock 예시
  useEffect(() => {
    const recent = [
      { id: 1, date: "2025-04-19", name: "데드버그 - 코어 운동" },
      { id: 2, date: "2025-04-10", name: "요방형근 스트레칭" },
      { id: 3, date: "2025-04-09", name: "힙 브릿지" },
    ];
    setRecentExerciseLogs(recent);
  }, []);

  return (
    <div className="ExercisePage">
      {/* ✅ 상단 헤더 */}
      <Header 
        title={"재활운동기록"}
        leftChild={
          <Button
            type={"back"}
            text={"<"}
            onClick={() => nav(`/`)}
          />
        }
      />

      {/* ✅ 누적 회차 표시 */}
      <div className="exercise-summary">
        지금까지 총 <strong>{totalRounds}회차</strong>의 재활운동이 기록되었어요!
      </div>



      {/* ✅ 최근 운동 리스트
      <div className="recent-exercise">
        <h4>최근 운동 기록</h4>
        <ul>
          {recentExerciseLogs.map((log) => (
            <li key={log.id}>
              <span>{log.date}</span> - {log.name}
            </li>
          ))}
        </ul>
      </div> */}
      
      {/* ✅ 캘린더 표시 */}
      <ExerciseCalendar className="exercise-calendar" />


      {/* ✅ 운동 템플릿 관리 페이지 이동 */}
      <div className="exercise-add-btn">
        <Button
          type={"exercise-make"}
          text="운동 추가하기"
          onClick={() => nav(`./exercisetem`)}
        />
      </div>
    </div>
  );
};

export default ExercisePage;

