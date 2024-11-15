// SvgIcon.tsx
import React from "react";
import { Svg, Path } from "react-native-svg";

type SvgIconProps = {
  pathName: "icon1" | "icon2" | "icon3"; // Выберите подходящие названия
  width?: number;
  height?: number;
  fill?: string;
};

const svgPaths = {
  icon1:
    "M28.5,31H3.5A3.5,3.5,0,0,1,0,27.5v-1A3.5,3.5,0,0,1,3.5,23h25A3.5,3.5,0,0,1,32,26.5v1A3.5,3.5,0,0,1,28.5,31Zm-25-6A1.5,1.5,0,0,0,2,26.5v1A1.5,1.5,0,0,0,3.5,29h25A1.5,1.5,0,0,0,30,27.5v-1A1.5,1.5,0,0,0,28.5,25Z",
  icon2:
    "M28.5,20H3.5A3.5,3.5,0,0,1,0,16.5v-1A3.5,3.5,0,0,1,3.5,12h25A3.5,3.5,0,0,1,32,15.5v1A3.5,3.5,0,0,1,28.5,20Zm-25-6A1.5,1.5,0,0,0,2,15.5v1A1.5,1.5,0,0,0,3.5,18h25A1.5,1.5,0,0,0,30,16.5v-1A1.5,1.5,0,0,0,28.5,14Z",
  icon3:
    "M28.5,9H3.5A3.5,3.5,0,0,1,0,5.5v-1A3.5,3.5,0,0,1,3.5,1h25A3.5,3.5,0,0,1,32,4.5v1A3.5,3.5,0,0,1,28.5,9ZM3.5,3A1.5,1.5,0,0,0,2,4.5v1A1.5,1.5,0,0,0,3.5,7h25A1.5,1.5,0,0,0,30,5.5v-1A1.5,1.5,0,0,0,28.5,3Z",
  // Добавьте другие пути при необходимости
};

const SvgIcon: React.FC<SvgIconProps> = ({
  pathName,
  width = 100,
  height = 100,
  fill = "blue",
}) => {
  const pathData = svgPaths[pathName];

  return (
    <Svg width={width} height={height} viewBox="0 0 100 100">
      <Path d={pathData} fill={fill} />
    </Svg>
  );
};

export default SvgIcon;
