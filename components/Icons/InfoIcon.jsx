import * as React from "react";
import Svg, { Path } from "react-native-svg";
const InfoIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M11.79 8.04a.76.76 0 0 0 0 1.51.74.74 0 0 0 .75-.76.76.76 0 0 0-.75-.75ZM11.79 10.92a.74.74 0 0 0-.75.75v3.12a.75.75 0 0 0 1.5 0v-3.1a.75.75 0 0 0-.75-.77Z"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M11.79 2C6.385 2.006 2.006 6.385 2 11.79c0 5.407 4.383 9.79 9.79 9.79 5.407 0 9.79-4.383 9.79-9.79-.005-5.405-4.385-9.784-9.79-9.79Zm0 18.08a8.29 8.29 0 1 1 8.29-8.29 8.3 8.3 0 0 1-8.29 8.29Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default InfoIcon;
