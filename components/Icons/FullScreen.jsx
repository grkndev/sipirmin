import * as React from "react"
import Svg, { Path } from "react-native-svg"
const FullScreen = (props) => (
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
      d="M10 2h4.24a8 8 0 0 1 8 8v4.24a8 8 0 0 1-8 8H10a8 8 0 0 1-8-8V10a8 8 0 0 1 8-8Zm6.37 9.87a.75.75 0 0 0 .75-.75l.01-3.25a.75.75 0 0 0-.75-.75h-3.26a.78.78 0 1 0 0 1.56h1.39l-5.89 5.88v-1.44a.75.75 0 0 0-1.5 0v3.22a.72.72 0 0 0 0 .29.78.78 0 0 0 .45.49.92.92 0 0 0 .28 0h3.27a.75.75 0 0 0 0-1.5h-1.5l6-6v1.5c0 .414.336.75.75.75Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default FullScreen
