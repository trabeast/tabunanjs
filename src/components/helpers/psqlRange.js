/** Parse a postgresql range into a javascript object */

const _dateRe =
  "(\\d{4}-(?:(?:(?:0[13578]|1[02])-(?:0[1-9]|[12][0-9]|[3][01]))|(?:(?:0[469]|11)-(?:0[1-9]|[12][0-9]|30))|(?:02-(?:0[1-9]|[12][0-9]|30))))";
const _lowerBoundRe = "^(\\(|\\[)";
const _upperBoundRe = "(\\)|\\])$";

/**
 * @typedef {Object} PsqlDateRange
 * @property {string} dateRange
 * @property {Date} from
 * @property {Date} to
 * @property {"inclusive" | "exclusive" | undefined} lowerBound
 * @property {"inclusive" | "exclusive" | undefined} upperBound
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
    const [dateRange, lowerBoundSym, fromStr, toStr, upperBoundSym] =
      Array.from(...range.matchAll(regexp));

    const bounds = (sym) => {
      switch (sym) {
        case "[":
        case "]":
          return "inclusive";
        case "(":
        case ")":
          return "exclusive";
        default:
          return undefined;
      }
    };

    return {
      dateRange,
      from: new Date(...fromStr.split("-")),
      to: new Date(...toStr.split("-")),
      lowerBound: bounds(lowerBoundSym),
      upperBound: bounds(upperBoundSym),
    };
  } catch {
    throw new Error(`Invalid date range or date: ${range}`);
  }
}
