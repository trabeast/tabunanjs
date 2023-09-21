import {useLayoutEffect, useRef} from "react";
import BookingForm from "./BookingForm";

/**
 * @type {{props: React.DialogHTMLAttributes}} BookingDialogProps
 * @param {BookingDialogProps} props
 */
export default function BookingDialog({...props}) {
  const dialog = useRef();

  useLayoutEffect(() => dialog.current.showModal(), [dialog]);

  return (
    <dialog {...props} ref={dialog}>
      <article>
        <h1>Dialog!</h1>
        <BookingForm></BookingForm>
      </article>
    </dialog>
  );
}
