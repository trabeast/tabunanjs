"use client";

import {DayPicker} from "react-day-picker";
import Button from "./Button";
import {useReducer} from "react";
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
    {from: addDays(getToday(), 20), to: addDays(getToday(), 25)},
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
const BookingForm = (props) => {
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <form
      onSubmit={(evt) => evt.preventDefault()}
      {...props}
      autoComplete="off"
    >
      <DayPicker
        mode="range"
        selected={state.selected}
        onSelect={(selected) => dispatch({type: "SELECT", payload: selected})}
        disabled={state.disabled}
      ></DayPicker>
      <br />
      <div className="float-left">
        <Button type="submit">
          <span>Continue</span>
        </Button>
        <Button onClick={() => router.back()}>
          <span>Cancel</span>
        </Button>
      </div>
    </form>
  );
};

export default BookingForm;
