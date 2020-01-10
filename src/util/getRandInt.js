//Get Random Integer

export const getRandInt = (min, max) => Math.floor( Math.random() * (max-min) ) + min;

export default getRandInt;