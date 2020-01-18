import React from "react";
import { ReactComponent as Loading } from "./loading.svg";
import { ReactComponent as Up } from "./up.svg";
import { ReactComponent as Down } from "./down.svg";
import { ReactComponent as Left } from "./left.svg";
import { ReactComponent as Right } from "./right.svg";

export interface IconList {
  [propName: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const SVG: IconList = {
  "loading": Loading,
  "up": Up,
  "down": Down,
  "left": Left,
  "right": Right,
};

export default SVG;
