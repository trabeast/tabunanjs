import {useLayoutEffect, useRef} from "react";
import BookingForm from "./BookingForm";
import useBookingContext from "@/contexts/BookingContext";

/**
 * @typedef BookingDialogProps
 * @property {React.DialogHTMLAttributes} props
 */

/**
 * @param {BookingDialogProps} props
 */
export default function BookingDialog({...props}) {
  const dialog = useRef();

  const {name, description} = useBookingContext();

  useLayoutEffect(() => dialog.current.showModal(), [dialog]);

  return (
    <dialog className="rounded" {...props} ref={dialog}>
      <article className="p-2">
        <h1>{name}</h1>
        <p>{description}</p>
        <BookingForm></BookingForm>
      </article>
    </dialog>
  );
}
