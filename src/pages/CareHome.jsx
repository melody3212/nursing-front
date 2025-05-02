import React from 'react';
import '../assets/css/CareHome.css';
import { useNavigate } from 'react-router-dom';
import Calendar from '../components/Calendar';

import Profile from '../components/Profile';
import Button from '../components/Button';
import Walking from '../components/walking';
import TodaySchedule from "../components/TodaySchedule";



const CareHome = () => {
    const nav = useNavigate();


    return (
    <div className="container">
    
    <div className="logout">
        <Button 
            text={"로그아웃"}
            type={"profile"}
            onClick={() => nav(`/`)}/>
        </div>
        

        <div className="info">
            <Profile/>
        </div>

        
        
        <div className="community">
        <div className="match_com">
            <img className="com_img"
            src={"src/assets/images/match_com.png"}/>
            <Button 
                text={"환자 매칭 게시판"}
                type={"community"}
                onClick={() => nav(`/`)} />
        </div>

        <div className="user_com">
            <img className="com_img" 
            src={"src/assets/images/user_com.png"}/>
            <Button 
            text={"환자등록"}
            type={"community"}
            onClick={() => nav(`/`)}/>
        </div>
        </div>

        <div className="quick-links">
        <Button 
            text={"스케줄 관리"}
            type={"basic"}
            onClick={() => nav(`/schedule`)}/>

        <Button 
            text={"재활운동기록"}
            type={"basic"}
            onClick={() => nav(`/exercise`)}/>
            
        <Button 
            text={"인지행동치료"}
            type={"basic"}
            onClick={() => nav(`/exercise`)}/>

        </div>
        <div className = "calendar">
        <Calendar />
        </div>
    </div>
    );
};


export default CareHome;