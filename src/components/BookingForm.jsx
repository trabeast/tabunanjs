import {DayPicker} from "react-day-picker";
import Button from "./Button";
import Input from "./Input";
import {useRef, useState} from "react";

/**
 * @typedef BookingFormProps
 * @property {React.ReactNode} children
 * @property {React.FormHTMLAttributes} props
 */

/**
 * @param {BookingFormProps} props
 */
export default function BookingForm({children, ...props}) {
  const [selected, setSelected] = useState(undefined);
  const disabledDays = [{before: new Date()}];

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
        selected={selected}
        onSelect={setSelected}
        showOutsideDays
        disabled={disabledDays}
      ></DayPicker>
      <br />
      <div>{children}</div>
    </form>
  );
}
