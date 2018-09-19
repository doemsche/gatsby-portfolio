const breakpoints = [[250, 640], [641, 978]];

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp[0]}px) and (max-width: ${bp[1]}px)`
);

export default mq;
