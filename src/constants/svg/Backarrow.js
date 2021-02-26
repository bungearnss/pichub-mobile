import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Backarrow(props) {
  var color = props.mode == true ? "black": "white";
  return (
    <Svg
      width={30}
      height={30}
      fill="none"
      strokeWidth={1.5}
      stroke={color}
      viewBox="0 0 24 24"
      {...props}
    >
      <Path d="M19 12H5M12 19l-7-7 7-7" />
    </Svg>
  )
}

export default Backarrow;
