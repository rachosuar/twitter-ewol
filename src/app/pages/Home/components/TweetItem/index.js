import React, { useState, useEffect } from "react";
import moment from "moment";
import "moment/locale/es";
import "./styles.css";
import Button from "../../../../components/Button";

const RELATIVE_TIME_UPDATE = 1000 * 60;

const TweetItem = ({
  body,
  createMode,
  created_at,
  user,
  error,
  onPublish,
  loading,
}) => {
  const [bodyValue, setBodyValue] = useState("");
  moment.locale("es");
  const [relativeTime, setRelativeTime] = useState(
    moment(created_at).fromNow()
  );
  const intervalId = setInterval(
    () => setRelativeTime(moment(created_at).fromNow()),
    RELATIVE_TIME_UPDATE
  );
  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  if (!user) return;

  return (
    <div className="tweet-container">
      <div className="tweet-header">
        <img
          src={user.photo?.base64 ?? user.photo}
          alt={`${user.name}-profile`}
        />
        <span>{user.name}</span>
      </div>
      {createMode ? (
        <>
          <textarea
            className="tweet-body"
            placeholder="Escribe algo..."
            onChange={(e) => setBodyValue(e.target.value)}
          ></textarea>
          {error ? <span className="error-message">{error}</span> : null}
        </>
      ) : (
        <div className="tweet-body">
          <span>{body}</span>
        </div>
      )}
      <div className="tweet-footer">
        {createMode ? (
          <Button
            onClick={async () => {
              const success = await onPublish?.({ body: bodyValue, user });
              if (success) setBodyValue("");
            }}
          >
            {loading ? "Publicando" : "Publicar"}
          </Button>
        ) : (
          <span>{relativeTime}</span>
        )}
      </div>
    </div>
  );
};

export default TweetItem;
