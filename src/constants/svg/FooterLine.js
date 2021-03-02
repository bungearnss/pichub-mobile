import * as React from "react"
import Svg, { Defs, ClipPath, Path, G, Circle } from "react-native-svg"

function FooterLine(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={330}
      height={42}
      viewBox="0 140 326 41"
      {...props}
    >
      <Defs>
        <ClipPath id="prefix__a">
          <Path d="M0 0h326v326H0z" />
        </ClipPath>
      </Defs>
      <G data-name="Artboard \u2013 1" clipPath="url(#prefix__a)">
        <G data-name="Group 20" stroke="#8ccdc1">
          <Path
            data-name="Line 10"
            fill="none"
            strokeLinecap="round"
            strokeWidth={4}
            d="M1 163.5h150"
          />
          <G
            data-name="Ellipse 17"
            transform="translate(158.5 159)"
            fill="#8ccdc1"
          >
            <Circle cx={4.5} cy={4.5} r={4.5} stroke="none" />
            <Circle cx={4.5} cy={4.5} r={4} fill="none" />
          </G>
          <Path
            data-name="Line 11"
            fill="none"
            strokeLinecap="round"
            strokeWidth={4}
            d="M175 163.5h150"
          />
        </G>
      </G>
    </Svg>
  )
}

export default FooterLine