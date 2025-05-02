import React from "react";
import "../assets/css/Profile.css"; // 스타일 파일 따로 관리
import Button from "./Button";
import TodayDate from "./TodayDate";


// 프로젝트에 활용할 임시 일기 데이터
const mockData = [
    {
      id: 1,
      name: "스칼렛",
      treatmentArea: "허리",
      imageSrc: "src/assets/images/profile_sample.jpeg",
    },
  ];


const Profile = () => {
    const { name, treatmentArea, imageSrc } = mockData[0]; 
    // mockData에서 첫 번째 데이터 추출
  return (
    <div className="Profile">
        
        <div className="info_profile">
            <p>{name}님</p>
            <p>치료 부위: {treatmentArea}</p>
           
            <Button 
              text={"내 정보 수정"}
              type={"profile"}
              onClick={() => nav(`/`)}/>
        </div>
        
        <img src={imageSrc} alt="Profile" className="profile-image" />
        <TodayDate />
    </div>
    
  );
};



export default Profile;
