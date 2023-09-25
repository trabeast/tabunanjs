/** Parse a postgresql range into a javascript object */

const _dateRe = "(\\d{4}-(?:0|[012])[0-9]-(?:0|[0123])[0-9])"; // TODO: fix this to accept correct number of days in each month.
const _lowerBoundRe = "^(\\(|\\[)";
const _upperBoundRe = "(\\)|\\])$";

/** @param {string} range*/
export function parseDateRange(range) {
  const regexp = new RegExp(`${_lowerBoundRe}${_dateRe}${_upperBoundRe}`, "g");
  // TODO: return a javascript object;
  console.log(...range.matchAll(regexp));
}
