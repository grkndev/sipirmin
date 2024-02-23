import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ShareIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    className="w-6 h-6"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="#fff"
      d="M16.238 15.594a2.53 2.53 0 0 0-2.46-.12l-3-3a2.52 2.52 0 0 0 .14-1.61 2 2 0 0 0-.08-.22l2.94-2.94a2.48 2.48 0 1 0-1.06-1l-2.77 2.73a2.5 2.5 0 1 0-.83 4.46c.234-.068.456-.17.66-.3l3 3a2.49 2.49 0 1 0 3.5-1h-.04Z"
    />
  </Svg>
);
export default ShareIcon;
