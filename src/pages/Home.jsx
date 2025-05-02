// 📁 src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Home.css';

import Calendar from '../components/Calendar';
import Profile from '../components/Profile';
import Button from '../components/Button';
import Walking from '../components/walking';
import TodaySchedule from "../components/TodaySchedule";

import scheduleIcon from "../assets/images/schedule.png";
import exerciserecordIcon from "../assets/images/exerciserecord.png";
import cbtIcon from "../assets/images/cbt.png";


const Home = ({ schedules, checkedStates, setCheckedStates }) => {
  const nav = useNavigate();

  // ✅ 체크 상태 변경 핸들러
  const handleCheckboxChange = (scheduleId, itemIndex) => {
    setCheckedStates((prev) => {
      const prevChecked = prev[scheduleId] || [];
      const updated = [...prevChecked];
      updated[itemIndex] = !updated[itemIndex];
      return { ...prev, [scheduleId]: updated };
    });
  };

  return (
    <div className="container">
      <div className="logout">
        <Button 
          text={"로그아웃"}
          type={"profile"}
          onClick={() => nav(`/`)}
        />
      </div>

      <div className="info">
        <Profile />
      </div>

      <div className="top">
        <div className="schedule">
          <TodaySchedule
            schedules={schedules}
            checkedStates={checkedStates}
            onCheckboxChange={handleCheckboxChange}
          />
        </div>

        <div className="steps">
          <Walking />
        </div>
      </div>

      <div className="community">
        <div className="match_com">
          <img
            className="com_img"
            src={"src/assets/images/match_com.png"}
            alt="간병인 커뮤니티"
          />
          <Button 
            text={"간병인 매칭 게시판"}
            type={"community"}
            onClick={() => nav(`/`)}
          />
        </div>

        <div className="user_com">
          <img
            className="com_img"
            src={"src/assets/images/user_com.png"}
            alt="유저 커뮤니티"
          />
          <Button 
            text={"유저 커뮤니티 게시판"}
            type={"community"}
            onClick={() => nav(`/`)}
          />
        </div>
      </div>

      <div className="quick-links">
        <Button 
          text={"스케줄 관리"}
          type={"basic"}
          icon={scheduleIcon}
          onClick={() => nav(`/schedule`)}
        />
        <Button 
          text={"재활운동기록"}
          type={"basic"}
          icon={exerciserecordIcon}
          onClick={() => nav(`/exercise`)}
        />
        <Button 
          text={"인지행동치료"}
          type={"basic"}
          icon={cbtIcon}
          onClick={() => nav(`/exercise`)}
        />
      </div>

      <div className="calendar">
        <Calendar />
      </div>
    </div>
  );
};

export default Home;
