export const MAX_COL_SIZE = 5;

export function getHeightCol(heightDevider:number, colDevider:number){
  const rowHeight = window.innerHeight/heightDevider
  const colSize = window.innerWidth/colDevider > MAX_COL_SIZE? MAX_COL_SIZE: window.innerWidth/colDevider;
  return [rowHeight, colSize];
}
