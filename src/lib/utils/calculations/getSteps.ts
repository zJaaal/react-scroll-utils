import linearValue from "./linearValue";
import slope from "./slope";

const getSteps = (
  startColor: number[],
  endColor: number[],
  element: HTMLElement
): number[] => {
  let steps: number[] = [];

  //need to make this smarter
  startColor.forEach((color, i) => {
    if (color == endColor[i]) return steps.push(0);

    const slopeValue = slope(
      [0, element.clientHeight],
      [startColor[i], endColor[i]]
    );
    // console.log(slopeValue);

    const colorLinearValue = linearValue(
      slopeValue,
      startColor[i],
      element.clientHeight
    );

    steps.push((endColor[i] - colorLinearValue) / 2);
  });

  return steps;
};

export default getSteps;
