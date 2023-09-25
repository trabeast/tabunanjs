/** Parse a postgresql range into a javascript object */

const _dateRe = "(\\d{4}-(?:0|[012])[0-9]-(?:0|[0123])[0-9])"; // TODO: fix this to accept
// correct number of days in
// each month.
const _lowerBoundRe = "^(\\(|\\[)";
const _upperBoundRe = "(\\)|\\])$";

/**
 * @typedef {Object} PsqlDateRange
 * @property {string} dateRange
 * @property {"inclusive" | "exclusive"} lowerBound
 * @property {"inclusive" | "exclusive"} upperBound
 * @property {Date} from
 * @property {Date} to
 *
 * @param {string} range
 * @returns {PsqlDateRange}
 */
export function parseDateRange(range) {
  const regexp = new RegExp(`${_lowerBoundRe}${_dateRe}${_upperBoundRe}`, "g");

  const [dateRange, lowerBoundSym, from, upperBoundSym] = Array.from(
    ...range.matchAll(regexp),
  );
  // TODO: parse 'to';
  return {
    dateRange,
    lowerBound: lowerBoundSym === "[" ? "inclusive" : "exclusive",
    from,
    upperBound: upperBoundSym === "]" ? "inclusive" : "exclusive",
  };
}
