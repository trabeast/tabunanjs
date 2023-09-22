"use client";

import {forwardRef} from "react";
import BookingForm from "./BookingForm";
import useBookingContext from "@/contexts/BookingContext";
import Button from "./Button";

/**
 * @typedef BookingDialogProps
 * @property {React.DialogHTMLAttributes} props
 */

/**
 * @param {BookingDialogProps} props
 */
const BookingDialog = forwardRef(function BookingDialog(props, ref) {
  const {name, description} = useBookingContext();

  function handleCancel() {
    ref.current?.close();
  }

  return (
    <dialog ref={ref} className="rounded" {...props}>
      <article className="p-2">
        <h1>{name}</h1>
        <p>{description}</p>
        <BookingForm>
          <div className="float-right">
            <Button>
              <span className="italic">Continue</span>
            </Button>
            <Button onClick={handleCancel}>
              <span className="italic">Cancel</span>
            </Button>
          </div>
        </BookingForm>
      </article>
    </dialog>
  );
});

export default BookingDialog;
