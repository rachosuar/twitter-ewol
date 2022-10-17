import React, { useContext, useEffect, useState } from "react";
import TweetsList from "../TweetsList";
import TweetItem from "../TweetItem";
import AppContext from "../../../../context/AppContext";
import {
  getTweetsList,
  postTweet,
  subscribeToTweetsList,
} from "../../../../../api/tweets";
import TweetCardLoader from "../TweetsLoader";
import "./styles.css";

const HomeLayout = () => {
  const { data: appData, setData: setAppData } = useContext(AppContext);
  const [tweets, setTweets] = useState([]);
  const [errorManager, setErrorManager] = useState("");
  const [errorManagerPost, setErrorManagerPost] = useState("");
  const [postLoading, setPostLoading] = useState(false);

  try {
    let getTweets = async () => {
      let response = await getTweetsList();
      let posts = response.map((doc) => {
        return { ...doc };
      });
      setTweets(posts);
    };
    getTweets();
  } catch (err) {
    setErrorManager(err.message);
  }
  useEffect(() => {
    subscribeToTweetsList(setTweets);
  }, [postLoading]);

  let handlePublish = ({ body, user }) => {
    try {
      if (!body) {
        throw new Error("Escribe algo antes de publicar!");
      }
      if (body) {
        postTweet(body, user);
        setPostLoading(true);
      }
    } catch (err) {
      setErrorManagerPost(err.message);
      setPostLoading(false);
    }
  };

  return (
    <div className="tweets-list-container">
      <TweetItem
        createMode={true}
        user={appData}
        onPublish={(data) => handlePublish(data)}
        error={errorManagerPost}
        loading={postLoading}
      />
      {tweets.length ? (
        <TweetsList error={errorManager} list={tweets} />
      ) : (
        <TweetCardLoader />
      )}
    </div>
  );
};

export default HomeLayout;
