
const numWays = (steps, currStep = 0) => {
  if (steps < 1) return 0;

  let result = 0;
  const canMakeOneStep = steps - (currStep + 1) >= 0;
  const canMakeTwoStep = steps - (currStep + 2) >= 0;

  if (canMakeOneStep) {
    result += numWays(steps, currStep + 1);
  } else {
    return 1;
  }

  if (canMakeTwoStep) {
    result += numWays(steps, currStep + 2);
  } else {
    return 1;
  }

  return result;
};
