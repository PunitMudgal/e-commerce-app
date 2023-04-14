import React from "react";
import "./notification.css";
import { IoClose } from "react-icons/io5";
import { AuthUser } from "../../context/AuthContext";
import styled from "styled-components";

export default function Notification() {
  const { notificationAlert } = AuthUser();
  console.log(notificationAlert.msg);

  const Fulldiv = styled.div`
    position: absolute;
    display: ${notificationAlert.msg ===''? "none": "flex"};
    justify-content: space-between;
    align-items: center;
    font-family: var(--font-para3);
    background-color: #f1c40f;
    color: white;
    padding: 5px;
    left: 1vw;
    top: 21vh;
    width: 25%;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  `;

  const NotificationContent = styled.div``;
  const NotificationType = styled.h5`
    font-size: 25px;
    color: green;
  `;
  const NotificationMsg = styled.p`
    font-size: 20px;
    color: white;
  `;

  return (
    <>
      <Fulldiv>
        <NotificationContent>
          <NotificationType>{notificationAlert.type}</NotificationType>
          <NotificationMsg>{notificationAlert.msg}</NotificationMsg>
        </NotificationContent>
        <IoClose size={35} color="black" />
        <div class="progressbar"></div>
      </Fulldiv>
    </>
  );
}

// <div
//   className="notification-full"
// >
//   <div className="notification-content">
//     <h5>{notificationAlert.type}</h5>
//     <p>{notificationAlert.msg}</p>
//   </div>
//   <IoClose size={35} color="black" />
//   <div class="progressbar">
//     {/* wht is founf kon ajfe jkalar sklarht fsht */}
//   </div>
// </div>
