const breakpointsConfig = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

let up = {};
let down = {};

Object.keys(breakpointsConfig).forEach((bpKey) => {
  up[bpKey] = `only screen and (min-width: ${breakpointsConfig[bpKey]}px)`;
  down[bpKey] = `only screen and (max-width: ${breakpointsConfig[bpKey]}px)`;
});

let breakpoints = {
  down,
  up,
};

export default breakpoints;
