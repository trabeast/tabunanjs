"use client";

import {DayPicker} from "react-day-picker";
import Button from "./Button";
import Input from "./Input";
import {useRef, useReducer} from "react";
import {useRouter} from "next/navigation";
import {DateRange} from "react-day-picker";
import {addDays} from "date-fns";
import disableDatesForInvalidRange from "./helpers/disableDatesForInvalidRange";

/** @returns {Date} */
function getToday() {
  return new Date();
}

/** @returns {Matcher[]} */
function getInitDisabled() {
  return [
    {before: getToday()},
    {from: addDays(getToday(), 3), to: addDays(getToday(), 5)},
  ];
}

/**
 * @typedef BookingFormState
 * @property {DateRange} selected
 * @property {Matcher[]} disabled
 *
 * @type {BookingFormState | undefined}
 */
const initState = {
  selected: undefined,
  disabled: getInitDisabled(),
};

/**
 * @typedef ActionType
 * @property {"SELECT"} type
 *
 * @typedef Action
 * @property {ActionType} type
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
        ? getInitDisabled()
        : [
            ...getInitDisabled(),
            ...disableDatesForInvalidRange(
              getInitDisabled(),
              action.payload.from,
            ),
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
        onSelect={(selected) => dispatch({type: "SELECT", payload: selected})}
        disabled={state.disabled}
      ></DayPicker>
      <br />

      <div className="float-right">
        <Button>
          <span>Continue</span>
        </Button>
        <Button onClick={() => router.back()}>
          <span>Cancel</span>
        </Button>
      </div>
    </form>
  );
}
