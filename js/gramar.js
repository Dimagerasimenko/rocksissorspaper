
export const resultText = (Score) => {
  let uT = String(Score);
  let val = uT[uT.length-1];
  switch (val) {
    case `1`:
      return `очко`;
      break;
    case `2`:
    case `3`:
    case `4`:
      return `очка`;
      break;
    default:
      return `очков`;
  }
}
