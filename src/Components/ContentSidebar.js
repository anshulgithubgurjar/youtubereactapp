import React from "react";
import "./ContentSidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { Link } from "react-router-dom";
import Subscripations from './Subscripations/Subscripations'
export default function ContentSidebar() {
  return (
    <div id="ContentSidebar">
        <Link to={""}>
      <div id="hovet">
         
          <HomeIcon id="ContentSidebarIcon" />
          <p>Home</p>
      </div>
        </Link>
      <div id="hovet">
        <WhatshotIcon id="ContentSidebarIcon" />
        <p>Short</p>
      </div>
      <Link to={"Subscripations"}>
      <div id="hovet">
        <SubscriptionsIcon id="ContentSidebarIcon" />
        <br />
        <span id="Subscripations">Subscripations</span>
      </div>
      </Link>
      <div id="hovet">
        <VideoLibraryIcon id="ContentSidebarIcon" />
        <p>Libary</p>
      </div>
    </div>
  );
}
