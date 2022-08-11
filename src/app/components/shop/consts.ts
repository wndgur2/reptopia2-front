export const MAX_COL_SIZE = 5;

export function getHeightCol(heightPercent:number, widthPercent:number){ //each percentage
  const heightPx = window.innerHeight * heightPercent/100;
  const colSize = 100/widthPercent;

  return [heightPx, colSize];
}
