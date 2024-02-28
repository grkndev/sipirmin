import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CopyIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="m14.33 2.22 7 7a.74.74 0 0 1 .17.53v5.36a4.74 4.74 0 0 1-4.67 4.74 4.39 4.39 0 0 1-4 2.74H7.38A4.38 4.38 0 0 1 3 18.22V9.14a4.39 4.39 0 0 1 4.38-4.38h.43A4.74 4.74 0 0 1 12.09 2h1.71c.199 0 .39.08.53.22Zm4.63 6.71-4.27-4.27v3.1a1.18 1.18 0 0 0 1.17 1.17h3.1Zm-6.13 12.16H7.38a2.88 2.88 0 0 1-2.88-2.87V9.14a2.88 2.88 0 0 1 2.88-2.88v8.85a4.75 4.75 0 0 0 4.75 4.75h3.1a2.88 2.88 0 0 1-2.4 1.23Zm-.74-2.73h4.7a3.25 3.25 0 0 0 3.25-3.25v-4.53h-4.23a2.83 2.83 0 0 1-2.82-2.82V3.5h-.9a3.26 3.26 0 0 0-3.25 3.28v8.33a3.26 3.26 0 0 0 3.25 3.25Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default CopyIcon;
