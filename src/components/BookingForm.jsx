"use client";

import {DayPicker} from "react-day-picker";
import Button from "./Button";
import Input from "./Input";
import {useRef, useState, useReducer} from "react";
import {useRouter} from "next/navigation";
import {isDateRange, DateRange} from "react-day-picker";
import {addDays} from "date-fns";
import {isBefore, isAfter} from "date-fns";

const today = new Date();
const initDisabled = [
  {before: today},
  {from: addDays(today, 3), to: addDays(today, 5)},
];

/**
 * @typedef BookingFormState
 * @property {DateRange} selected
 * @property {Matcher[]} disabled
 *
 * @type {BookingFormState | undefined}
 */
const initState = {
  selected: undefined,
  disabled: initDisabled,
};

/**
 * @typedef Action
 * @property {string} type
 * @property {DateRange} payload
 *
 * @param {BookingFormState} state
 * @param {Action} action
 * @returns {BookingFormState}
 */
function reducer(state, action) {
  if (action.type)
    return {
      ...state,
      selected: action.payload,
      disabled: !action.payload
        ? initDisabled
        : [
            ...initDisabled,
            ...disableDatesForInvalidRange(initDisabled, action.payload.from),
          ],
    };

  return undefined;
}

/**
 * @typedef BookingFormProps
 * @property {React.FormHTMLAttributes} props
 *
 * @param {BookingFormProps} props
 */
export default function BookingForm(props) {
  console.log("Render Booking Form");

  const router = useRouter();

  const [state, dispatch] = useReducer(reducer, initState);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  function handleSelect(range) {
    dispatch({type: "SELECT", payload: range});
  }

  function handleCancel() {
    router.back();
  }

  return (
    <form
      onSubmit={(evt) => evt.preventDefault()}
      {...props}
      autoComplete="off"
    >
      <Input
        type="email"
        placeholder="user@sample.com"
        autoComplete="off"
        autoFocus="true"
      ></Input>
      <br />
      <Input
        type="password"
        autoComplete="off"
        placeholder="enter your password"
      ></Input>
      <br />
      <DayPicker
        mode="range"
        selected={state.selected}
        onSelect={handleSelect}
        showOutsideDays
        disabled={state.disabled}
      ></DayPicker>
      <br />

      <div className="float-right">
        <Button>
          <span>Continue</span>
        </Button>
        <Button onClick={handleCancel}>
          <span>Cancel</span>
        </Button>
      </div>
    </form>
  );
}

/**
 * Creates a list of dates that are invalid 'to'/'from' of selected range.
 * Valid selected range only contains dates that are not disabled.
 *
 * @param {Matcher[]} disabled
 * @param {Date} from
 * @returns {Matcher[]}
 */
function disableDatesForInvalidRange(disabled, from) {
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
