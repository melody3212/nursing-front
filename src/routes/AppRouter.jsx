import React from "react";
import { Routes, Route } from "react-router-dom";
import SignupPage from "../pages/SignupPage";
import Home from "../pages/Home";
import SchedulePage from "../pages/SchedulePage";
import ExercisePage from "../pages/ExercisePage";
import WalkingPage from "../pages/WalkingPage";
import CareHome from "../pages/CareHome";
import ExerciseTemPage from "../pages/ExerciseTemPage";
// ✅ 추가로 만들 상세 페이지 임시 import (추후 생성 예정)
import ExerciseDetailPage from "../pages/ExerciseDetailPage"; 



const AppRouter = ({
  goal,
  setGoal,
  steps,
  setSteps,
  schedules,
  setSchedules,
  checkedStates,
  setCheckedStates,
  exercises,
  setExercises
}) => {
  return (
    <Routes>
      <Route path="/signup" element={<SignupPage />} />
      <Route
        path="/"
        element={
          <Home
            schedules={schedules}
            checkedStates={checkedStates}
            setCheckedStates={setCheckedStates}
          />
        }
      />
      <Route path="/care" element={<CareHome />} />
      <Route
        path="/schedule"
        element={
          <SchedulePage
            schedules={schedules}
            setSchedules={setSchedules}
            checkedStates={checkedStates}
            setCheckedStates={setCheckedStates}
          />
        }
      />
      <Route
        path="/exercise"
        element={
          <ExercisePage
            exercises={exercises}
            setExercises={setExercises}
          />
        }
      />
      <Route
        path="/walkingpage"
        element={
          <WalkingPage
            goal={goal}
            setGoal={setGoal}
            steps={steps}
            setSteps={setSteps}
          />
        }
      />
      <Route
        path="exercise/exercisetem"
        element={
          <ExerciseTemPage
            exercises={exercises}              // ✅ 추가
            setExercises={setExercises}        // ✅ 추가
          />
        }
      />
      
       {/* ✅ 날짜별 운동 기록 페이지 */}
      <Route
        path="/exercise/:dateId"
        element={<ExerciseDetailPage exercises={exercises} />} // 📌 아직 없지만 구조 미리 세팅
      />
    </Routes>
   
  );
};

export default AppRouter;
