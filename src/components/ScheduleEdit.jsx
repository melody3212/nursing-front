import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";
import "../assets/css/ScheduleModal.css"; // 스타일 재사용
import Button from "./Button";

// 🔧 수정 모달 컴포넌트
const ScheduleEdit = ({ schedule, setSchedules, closeModal, schedules }) => {
  // ✅ 전달받은 schedule 객체 구조 분해
  if (!schedule) return null; // 🛑 schedule이 없으면 렌더링 X
  
  const { id, title, items: originalItems } = schedule;

  // ✅ 문자열 형식 날짜(title)를 Date 객체로 변환
  const parseDateFromTitle = (titleStr) => {
    try {
      const match = titleStr.match(/(\d+)년 (\d+)월 (\d+)일/);
      if (!match) return new Date();
  
      const [, year, month, day] = match.map(Number);
      return new Date(year, month - 1, day); // ✅ 월은 0부터 시작
    } catch (e) {
      return new Date(); // fallback
    }
  };
  

  // ✅ 상태 정의: 날짜(Date), 일정 항목(string)
  const [editedDate, setEditedDate] = useState(parseDateFromTitle(title));
  const [editedItems, setEditedItems] = useState(originalItems.join("\n"));

  // ✅ Date → 문자열 ("2025년 4월 5일 (토)")
  const formatDate = (date) => {
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    });
  };

  // ✅ 저장 버튼 클릭 시 실행
  const handleEdit = () => {
    if (!editedItems.trim()) {
      alert("수정할 내용을 입력해주세요!");
      return;
    }

    const updatedTitle = formatDate(editedDate);
    const year = editedDate.getFullYear();
    const month = editedDate.getMonth() + 1;
    const day = editedDate.getDate();

    // ✅ 같은 날짜 제목이 이미 있는지 확인 (자기 자신은 제외)
    const isDuplicate = schedules.some(
      (s) => s.title === updatedTitle && s.id !== id
    );

    if (isDuplicate) {
      alert("이미 해당 날짜에 일정이 있습니다!");
      return;
    }

    // ✅ 해당 id의 스케줄만 업데이트
    
  setSchedules((prev) =>
    prev.map((s) =>
      s.id === id
        ? {
            ...s,
            title: updatedTitle,
            year,
            month,
            day,
            items: editedItems.split("\n"),
          }
        : s
    )
  );

    closeModal(); // 모달 닫기
  };

  return (
    <div className="ScheduleModal">
      <div className="ScheduleModal-content">
        <h3>일정 수정</h3>

        {/* 📅 날짜 선택기 */}
        <DatePicker
          selected={editedDate}
          onChange={setEditedDate}
          dateFormat="yyyy년 MM월 dd일 EEEE"
          locale={ko}
          className="date-picker"
        />

        {/* ✏️ 일정 항목 입력 */}
        <textarea
          value={editedItems}
          onChange={(e) => setEditedItems(e.target.value)}
        />

        {/* 💾 저장 / ❌ 취소 버튼 */}
        <div className="ScheduleModal-button">
          <Button
            text="수정" 
            type="add"
            onClick={handleEdit}
          />
          <Button 
            text="취소"
            type="esc"
            onClick={closeModal}/>
        </div>
      </div>
    </div>
  );
};

export default ScheduleEdit;
