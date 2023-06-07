import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  function newsArticle(heading, subtitle) {
    return (
      <div className="widgets__article">
        <div className="widgets__articleLeft">
          <FiberManualRecordIcon />
        </div>
        <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Pioti Hack is full in effect", "Top News - 9099 readers")}
      {newsArticle("Gender war - escalating", "Top News - 7099 readers")}
      {newsArticle("Angela merkel ist schwanger", "Top News - 6099 readers")}
      {newsArticle("Elon Musk schwere vorwürfe", "Top News - 5099 readers")}
      {newsArticle(
        "Olaf Scholz von Rakete getroffen",
        "Top News - 4099 readers"
      )}
      {newsArticle(
        "Bushido wird Bundeskanzler/in von Dubai",
        "Top News - 3099 readers"
      )}
      {newsArticle(
        "Deine Eltern haben bei diner geburt gekifft",
        "Top News - 2099 readers"
      )}
      {newsArticle("Pioti wird Web Developer", "Top News - 1 reader")}
    </div>
  );
}

export default Widgets;
