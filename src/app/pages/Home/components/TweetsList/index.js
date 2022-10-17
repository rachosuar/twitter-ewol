import React from "react";
import TweetItem from "../TweetItem";
import TweetsLoader from "../TweetsLoader";
import "./styles.css";

const TweetsList = ({ list = [], loading, error }) => {
  if (loading) {
    return <TweetsLoader />;
  }

  if (error) {
    return <span>Error :(</span>;
  }

  return (
    <div className="tweets-list-container">
      {list.length
        ? list.map((item, index) => <TweetItem key={index} {...item} />)
        : "No hay ningun tweet, Se el primero en publicar!"}
    </div>
  );
};

export default TweetsList;
