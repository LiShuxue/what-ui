export interface IconList {
  [propName: string]: string;
}

const svgs = require.context("./", false, /\.svg$/);

const SVG: IconList = {};

svgs.keys().forEach(key => {
  SVG[key.replace(/(\.\/|\.svg)/g, "")] = svgs(key);
});

export default SVG;
