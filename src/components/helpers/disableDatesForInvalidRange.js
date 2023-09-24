import {Matcher, isDateRange} from "react-day-picker";
import {isAfter, isBefore} from "date-fns";

/**
 * Creates a list of dates that are invalid 'to'/'from' of selected range.
 * Valid selected range only contains dates that are not disabled.
 *
 * @param {Matcher[]} disabled
 * @param {Date} from
 * @returns {Matcher[]}
 */
export default function disableDatesForInvalidRange(disabled, from) {
  const otherDays = [];
  let earliest = undefined;
  let latest = undefined;

  disabled.filter(isDateRange).forEach((range) => {
    if (
      range.from &&
      range.from < from &&
      (!latest || isAfter(range.from, latest))
    )
      latest = range.from;

    if (
      range.to &&
      range.to > from &&
      (!earliest || isBefore(range.to, earliest))
    )
      earliest = range.to;
  });

  if (latest) otherDays.push({before: latest});
  if (earliest) otherDays.push({after: earliest});

  return otherDays;
}
