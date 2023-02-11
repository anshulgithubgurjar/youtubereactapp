import React from "react";
import "./SideBar.css";
import SideBarRow from "./SideBarRow";
import HomeIcon from "@mui/icons-material/Home";
// import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import BrushIcon from "@mui/icons-material/Brush";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Link } from "react-router-dom";
export default function SideBar() {
  return (
    <div id="SideBar">
      <Link to={""}>
        <SideBarRow Icon={HomeIcon} title={"Home"} />
      </Link>
      <SideBarRow Icon={WhatshotIcon} title={"Short"} />
      <Link to={"Subscripations"}><SideBarRow Icon={SubscriptionsIcon} title={"Subscripation"} /></Link>
      <hr />
      <SideBarRow Icon={VideoLibraryIcon} title={"Libary"} />
      <SideBarRow Icon={HistoryIcon} title={"History"} />
      <hr />
      <h3>Explore</h3>
      <SideBarRow Icon={WhatshotIcon} title={"Trending"} />
      <SideBarRow Icon={MusicNoteIcon} title={"Music"} />
      <SideBarRow Icon={MovieCreationIcon} title={"Movies"} />
      <SideBarRow Icon={LiveTvIcon} title={"Live"} />
      <SideBarRow Icon={SportsEsportsIcon} title={"Gaming"} />
      <SideBarRow Icon={NewspaperIcon} title={"News"} />
      <SideBarRow Icon={EmojiEventsIcon} title={"Sports"} />
      <SideBarRow Icon={TipsAndUpdatesIcon} title={"Learning"} />
      <SideBarRow Icon={BrushIcon} title={"Fashion & Beauty"} />
      <hr />
      <SideBarRow Icon={AddCircleOutlineIcon} title={"Browser Channels"} />
    </div>
  );
}
