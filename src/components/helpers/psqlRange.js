/** Parse a postgresql range into a javascript object */

const _dateRe = "(\\d{4}-(?:0|[012])[0-9]-(?:0|[0123])[0-9])"; // TODO: fix this to accept
// correct number of days in
// each month.
const _lowerBoundRe = "^(\\(|\\[)";
const _upperBoundRe = "(\\)|\\])$";

/**
 * @typedef {Object} PsqlDateRange
 * @property {string} dateRange
 * @property {Date} from
 * @property {Date} to
 * @property {"inclusive" | "exclusive"} lowerBound
 * @property {"inclusive" | "exclusive"} upperBound
 *
 * @param {string} range - should be a postgresql range format
 * e.g. [2019-01-01,2019-01-31)
 * @returns {PsqlDateRange}
 */
export function parseDateRange(range) {
  const regexp = new RegExp(
    `${_lowerBoundRe}${_dateRe},${_dateRe}${_upperBoundRe}`,
    "g",
  );

  try {
    const [dateRange, lowerBoundSym, from, to, upperBoundSym] = Array.from(
      ...range.matchAll(regexp),
    );
    return {
      dateRange,
      from,
      to,
      lowerBound: lowerBoundSym === "[" ? "inclusive" : "exclusive",
      upperBound: upperBoundSym === "]" ? "inclusive" : "exclusive",
    };
  } catch {
    throw new Error(`Invalid date range: ${range}`);
  }
}
