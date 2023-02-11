import React, { useState, useEffect } from "react";
import "./VideoPlayer.css";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ReplyIcon from "@mui/icons-material/Reply";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function VideoPlayer({ VideoData }) {
  let [Comments, SetComments] = useState([]);
  useEffect(() => {
    // fetch(
    //   ` https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyBE24lPSvzaJ-HYyDXqvn-To_FEjrsv590&textFormat=plainText&part=snippet&videoId=${VideoData.id.videoId}&maxResults=100`
    // )
    fetch(
      ` https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyDDE2thMx3nbsAmxnr1fueEHEj7QNjOM_s&textFormat=plainText&part=snippet&videoId=${VideoData.id.videoId}&maxResults=100`
    )
      .then((res) => {
        return res.json();
      })
      .then((Data) => {
        console.log(Data);
        SetComments(Data.items);
      });
  }, []);

  return (
    <>
      <div>
        <center>
          <iframe
            id="Videoiframe"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${VideoData.id.videoId}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </center>
        <div id="IconInVideo">
          <ThumbUpOffAltIcon id="ThumbUpOffAltIcon" />
          <ThumbDownOffAltIcon id="ThumbDownOffAltIcon" />

          <button id="ReplyIcon">
            Share
            <ReplyIcon />
          </button>
          <button id="ArrowDownwardIconD">
            <ArrowDownwardIcon />
            Download
          </button>

          <button id="Subcribe">Subcribe</button>
        </div>
      </div>
      <hr />

      <div class="dropdown">
        <button class="dropbtn">
          Comments
          <KeyboardArrowDownIcon />
        </button>
        <div class="dropdown-content">
          {Comments.map((C) => (
            <p>
              {C.snippet.topLevelComment.snippet.textOriginal} <br />
              <br/>
              <ThumbUpOffAltIcon id="CommentIcons" />
              <ThumbDownOffAltIcon id="CommentIcons2" /> <h9>Replay</h9> <hr />
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
