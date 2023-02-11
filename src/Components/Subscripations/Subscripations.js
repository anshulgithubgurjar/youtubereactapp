import React from "react";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import './Subscripations.css'
import ContentSidebar from "../ContentSidebar";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export default function Subscripations() {
  return (
    <div id="subS">
      <div id="Sub">
        {/* <ContentSidebar/> */}
        <SubscriptionsIcon id="SubIcon" />
        <h4>Don’t miss new videos</h4>
        <p>Sign in to see updates from your favorite YouTube channels</p>
       
      </div>
      <div>
      <span id="AccountCircleIcon"><AccountCircleIcon/>Sign In</span>
      </div>
    </div>
  );
}
