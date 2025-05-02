import React, { useState } from "react";
import Button from "./Button";
import "../assets/css/ExerciseTemItem.css"; // ✅ 기존 CSS 그대로 사용
import "../assets/css/ExerciseItem.css"

const ExerciseItem = ({ exercise, setTodayExercises }) => {
  // ✅ 복습 체크박스 상태: 세트 수만큼 false로 초기화
  const [reviewChecks, setReviewChecks] = useState(
    Array(exercise.sets).fill(false)
  );

  // ✅ 삭제 버튼 클릭 시 현재 운동 제거
  const handleDelete = () => {
    const confirm = window.confirm("정말 삭제할까요?");
    if (!confirm) return;

    setTodayExercises((prev) =>
      prev.filter((ex) => ex.id !== exercise.id)
    );
  };

  // ✅ 체크박스(도트) 클릭 시 상태 토글
  const toggleReview = (index) => {
    setReviewChecks((prev) =>
      prev.map((val, i) => (i === index ? !val : val))
    );
  };

  return (
    <div className="template-item">
      {/* ✅ 운동 이름 + 삭제 버튼 (수정 버튼 제외) */}
      <div className="title-bar">
        <div className="title-center">
          <span>{exercise.name}</span>
        </div>
        <div className="title-right">
          <Button type="delete" text="X" onClick={handleDelete} />
        </div>
      </div>

      {/* ✅ 횟수/세트 구분 */}
      <div className="set-info">
        <span>횟수: {exercise.reps}회</span>
        <span>세트: {exercise.sets}세트</span>
      </div>

      
      {/* ✅ 복습 체크 영역 (세트 수 만큼 도트 표시) */}
      <div className="review-section">
        복습
        <div className="review-dots">
          {reviewChecks.map((checked, i) => (
            <div
              key={i}
              className={`dot ${checked ? "checked" : ""}`}
              onClick={() => toggleReview(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExerciseItem;
