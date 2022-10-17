import React from "react";
import ContentLoader from "react-content-loader";

const loaderWidth = window.innerWidth > 650 ? 600 : window.innerWidth * 0.8;
const titleWidth = loaderWidth * 0.65;
const subTitleWidth = loaderWidth * 0.4;

const TweetCardLoader = () => (
  <ContentLoader
    height={900}
    width={loaderWidth}
    speed={3}
    backgroundColor="#DDD"
    foregroundColor="#BBB"
  >
    <rect
      x="0"
      y="0"
      rx="0"
      ry="0"
      width={loaderWidth.toString()}
      height="200"
    />
    <rect
      x="0"
      y="220"
      rx="0"
      ry="0"
      width={titleWidth.toString()}
      height="20"
    />
    <rect
      x="0"
      y="250"
      rx="0"
      ry="0"
      width={subTitleWidth.toString()}
      height="20"
    />

    <rect
      x="0"
      y="300"
      rx="0"
      ry="0"
      width={loaderWidth.toString()}
      height="200"
    />
    <rect
      x="0"
      y="520"
      rx="0"
      ry="0"
      width={titleWidth.toString()}
      height="20"
    />
    <rect
      x="0"
      y="550"
      rx="0"
      ry="0"
      width={subTitleWidth.toString()}
      height="20"
    />

    <rect
      x="0"
      y="600"
      rx="0"
      ry="0"
      width={loaderWidth.toString()}
      height="200"
    />
    <rect
      x="0"
      y="820"
      rx="0"
      ry="0"
      width={titleWidth.toString()}
      height="20"
    />
    <rect
      x="0"
      y="850"
      rx="0"
      ry="0"
      width={subTitleWidth.toString()}
      height="20"
    />
  </ContentLoader>
);

export default TweetCardLoader;
